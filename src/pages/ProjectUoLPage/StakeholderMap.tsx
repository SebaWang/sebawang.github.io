import React, { ReactElement, useLayoutEffect, useRef, useState } from "react";

// Half-circle stakeholder map. The four slices are the four service
// workstreams, left to right. Each stakeholder is a filled band across the
// slices it is involved in, so groups shared by several services read as one
// continuous band. The closer to the centre, the closer to decision-making.
//
// Follows Seb's sketch.

const services = [
  "Recruitment Process",
  "Recruitment System",
  "Training Signpost",
  "Career Advisory Service",
];

interface Segment {
  slice: number; // 0-based workstream, left to right
  inner: number;
  outer: number;
}

interface Stakeholder {
  lines: string[]; // name, one or two lines
  segments: Segment[]; // one per slice, so a band can step in or out
  labelR: number; // radius the name sits on
  fill: string;
}

// A band across several slices at the same radii
const band = (slices: number[], inner: number, outer: number): Segment[] =>
  slices.map((slice) => ({ slice, inner, outer }));

// Outer area (285–420) is split into three 45px rings; groups step in where
// a ring would otherwise be empty, so there is no white gap
const stakeholders: Stakeholder[] = [
  {
    lines: ["Dean", "Vice-Chancellor"],
    segments: band([0, 1, 2, 3], 0, 115),
    labelR: 0,
    fill: "#E39A74",
  },
  {
    lines: ["Central HR", "Recruitment Team"],
    segments: band([0, 1], 115, 210),
    labelR: 162,
    fill: "#F0BC9F",
  },
  {
    lines: ["Central HR", "Staff Service Team"],
    segments: band([2, 3], 115, 210),
    labelR: 162,
    fill: "#F0BC9F",
  },
  {
    lines: ["Departmental HR (college and school level)"],
    segments: band([0, 1, 2, 3], 210, 285),
    labelR: 247,
    fill: "#F7D8C6",
  },
  {
    lines: ["IT"],
    segments: band([1, 2], 285, 330),
    labelR: 307,
    fill: "#F9E0D1",
  },
  {
    lines: ["Doctoral College"],
    segments: [
      { slice: 2, inner: 330, outer: 375 },
      { slice: 3, inner: 285, outer: 375 },
    ],
    labelR: 352,
    fill: "#FBE9DE",
  },
  {
    lines: ["Applicants & Hiring Managers"],
    segments: [
      { slice: 0, inner: 285, outer: 420 },
      { slice: 1, inner: 330, outer: 420 },
    ],
    labelR: 375,
    fill: "#FDF2EB",
  },
  {
    lines: ["Research Staff"],
    segments: band([2, 3], 375, 420),
    labelR: 397,
    fill: "#FDF2EB",
  },
];

const W = 1240;
const H = 494;
const CX = W / 2;
const CY = 480; // centre of the half circle, on the flat base
const R = 420;
const ORANGE = "#EA5514";
const INK = "#404040";

// Slice s covers angles from 180 - 45s down to 135 - 45s
const sliceStart = (s: number) => 180 - 45 * s;
const sliceEnd = (s: number) => 135 - 45 * s;

function point(r: number, deg: number): [number, number] {
  const a = (deg * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY - r * Math.sin(a)];
}

// Arc from a larger angle to a smaller one, over the top (clockwise on screen)
function arcPath(r: number, from: number, to: number): string {
  const [x0, y0] = point(r, from);
  const [x1, y1] = point(r, to);
  return `M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`;
}

// Filled band between two radii across an angle range
function bandPath(inner: number, outer: number, from: number, to: number): string {
  const [ox0, oy0] = point(outer, from);
  const [ox1, oy1] = point(outer, to);
  if (inner === 0) {
    return `M ${CX} ${CY} L ${ox0} ${oy0} A ${outer} ${outer} 0 0 1 ${ox1} ${oy1} Z`;
  }
  const [ix1, iy1] = point(inner, to);
  const [ix0, iy0] = point(inner, from);
  return `M ${ox0} ${oy0} A ${outer} ${outer} 0 0 1 ${ox1} ${oy1} L ${ix1} ${iy1} A ${inner} ${inner} 0 0 0 ${ix0} ${iy0} Z`;
}

function slicePath(s: number): string {
  return bandPath(0, R, sliceStart(s), sliceEnd(s));
}

const slicesOf = (p: Stakeholder) => p.segments.map((g) => g.slice);
const spanOf = (p: Stakeholder): [number, number] => [
  sliceStart(Math.min(...slicesOf(p))),
  sliceEnd(Math.max(...slicesOf(p))),
];

export default function StakeholderMap(): ReactElement {
  const [service, setService] = useState<number | null>(null);

  // Measured widths of the workstream names, for their underlines
  const nameRefs = useRef<(SVGTSpanElement | null)[]>([]);
  const [nameWidths, setNameWidths] = useState<number[]>([]);
  useLayoutEffect(() => {
    setNameWidths(
      nameRefs.current.map((el) => (el ? el.getComputedTextLength() : 0))
    );
  }, []);

  const personActive = (i: number) =>
    service === null || slicesOf(stakeholders[i]).includes(service);
  const serviceActive = (s: number) => service === s;

  // Anywhere on the half circle: pick the workstream by the pointer's angle
  // from the centre, and show only that workstream's stakeholders
  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    // Over a workstream label (outside the circle): use that workstream
    const label = (e.target as Element).closest("[data-ws]");
    if (label) {
      setService(Number(label.getAttribute("data-ws")));
      return;
    }
    const svg = e.currentTarget;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const { x, y } = pt.matrixTransform(ctm.inverse());
    const dx = x - CX;
    const dy = CY - y;
    if (dy < 0 || Math.hypot(dx, dy) > R) {
      setService(null);
      return;
    }
    const deg = (Math.atan2(dy, dx) * 180) / Math.PI; // 180 left … 0 right
    setService(Math.min(3, Math.floor((180 - deg) / 45)));
  };

  return (
    <div className="mt-10">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full select-none"
        role="img"
        aria-label="Stakeholder map of the four service workstreams"
        onMouseMove={handleMove}
        onMouseLeave={() => setService(null)}
      >
        {/* Outline of the whole half circle */}
        <path
          d={bandPath(0, R, 180, 0)}
          fill="#FFFFFF"
          stroke="#D0D0D0"
          strokeWidth={1.2}
        />

        {/* Slice tint for the hovered workstream */}
        {services.map((_, s) => (
          <path
            key={s}
            d={slicePath(s)}
            fill={serviceActive(s) ? "rgba(234,85,20,0.10)" : "transparent"}
            className="transition-colors duration-300"
          />
        ))}

        {/* Paths the names follow: one arc per line of the name */}
        <defs>
          {stakeholders.map((p, i) => {
            const [from, to] = spanOf(p);
            return p.lines.map((_, l) => {
              const offset = p.lines.length === 1 ? 0 : l === 0 ? 14 : -16;
              return (
                <path
                  key={`${i}-${l}`}
                  id={`sh-${i}-${l}`}
                  d={arcPath(p.labelR + offset, from - 1, to + 1)}
                />
              );
            });
          })}
        </defs>

        {/* Stakeholder bands */}
        {stakeholders.map((p, i) => (
          <g
            key={i}
            opacity={personActive(i) ? 1 : 0.25}
            className="transition-opacity duration-300"
          >
            {p.segments.map((g) => (
              <path
                key={g.slice}
                d={bandPath(g.inner, g.outer, sliceStart(g.slice), sliceEnd(g.slice))}
                fill={p.fill}
                // Hairline in the same colour hides seams between segments
                stroke={p.fill}
                strokeWidth={1}
              />
            ))}
            {p.labelR === 0
              ? p.lines.map((line, l) => (
                  <text
                    key={line}
                    x={CX}
                    y={CY - 58 + l * 26}
                    textAnchor="middle"
                    fontSize={l === 0 ? 18 : 17}
                    fontWeight={700}
                    fill={INK}
                  >
                    {line}
                  </text>
                ))
              : p.lines.map((line, l) => (
                  <text
                    key={l}
                    fontSize={l === 0 ? 18 : 15}
                    fontWeight={l === 0 ? 700 : 400}
                    fill={INK}
                    dy={6}
                  >
                    <textPath
                      href={`#sh-${i}-${l}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {line}
                    </textPath>
                  </text>
                ))}
          </g>
        ))}

        {/* Slice dividers on top, faint and dashed, so shared bands still
            read as one */}
        {[135, 90, 45].map((deg) => {
          const [x, y] = point(R, deg);
          return (
            <line
              key={deg}
              x1={CX}
              y1={CY}
              x2={x}
              y2={y}
              stroke="#BDBDBD"
              strokeWidth={1}
              strokeDasharray="4 5"
              pointerEvents="none"
            />
          );
        })}

        {/* Flat base */}
        <line
          x1={CX - R}
          y1={CY}
          x2={CX + R}
          y2={CY}
          stroke="#BDBDBD"
          strokeWidth={1.5}
          pointerEvents="none"
        />

        {/* Workstream labels outside the arc, each with an underline that
            sweeps in from left to right when that workstream is active */}
        {services.map((name, s) => {
          const mid = sliceStart(s) - 22.5;
          const [x, y] = point(R + 22, mid);
          const anchor = mid > 100 ? "end" : mid < 80 ? "start" : "middle";
          const w = nameWidths[s] ?? 0;
          const left = anchor === "end" ? x - w : anchor === "middle" ? x - w / 2 : x;
          return (
            <g key={name} data-ws={s}>
              <text
                x={x}
                y={y}
                textAnchor={anchor}
                fontSize={17}
                fontWeight={700}
                fill={serviceActive(s) ? ORANGE : INK}
                className="transition-colors duration-300"
              >
                <tspan x={x} dy={-8} fontSize={12} letterSpacing={2} fill={ORANGE}>
                  {`WORKSTREAM ${s + 1}`}
                </tspan>
                <tspan
                  x={x}
                  dy={20}
                  ref={(el) => {
                    nameRefs.current[s] = el;
                  }}
                >
                  {name}
                </tspan>
              </text>
              <rect
                x={left}
                y={y + 20}
                width={w}
                height={3}
                fill={ORANGE}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "left",
                  transform: serviceActive(s) ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 300ms ease-out",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Caption: orange triangle marker, text left-aligned under the map */}
      <div className="flex items-start gap-4 max-w-[860px] mx-auto mt-3 mb-8">
        <span
          className="w-0 h-0 mt-[6px] shrink-0 border-l-[9px] border-r-[9px] border-b-[14px] border-l-transparent border-r-transparent border-b-[#E06A3A]"
          aria-hidden="true"
        ></span>
        <p className="text-content font-light">
          I involved stakeholders across departments and workstreams
          in shaping the evaluation framework, ensuring it was understandable
          to colleagues from different backgrounds and reflected their
          perspectives and needs.
        </p>
      </div>
    </div>
  );
}
