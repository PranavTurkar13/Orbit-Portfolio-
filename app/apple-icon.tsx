import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "40px",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          fontSize: 64,
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          whiteSpace: "nowrap",
          letterSpacing: "-2px",
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
