import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#ffffff",
          borderRadius: "7px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          fontSize: 12,
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          whiteSpace: "nowrap",
          letterSpacing: "-0.5px",
        }}
      >
        &lt;P/&gt;
      </div>
    ),
    {
      ...size,
    }
  );
}
