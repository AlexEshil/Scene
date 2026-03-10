from __future__ import annotations

import math
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
PORTRAITS = ASSETS / "portraits"
PROJECTS = ASSETS / "projects"


def ensure_dirs() -> None:
    for path in (ASSETS, PORTRAITS, PROJECTS):
        path.mkdir(parents=True, exist_ok=True)


def write(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")


def logo_svg() -> str:
    return """<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="18" fill="url(#g)"/>
  <path d="M15 49L28.2 14H36.8L50 49H42.4L39.2 40H24.8L21.6 49H15ZM27.2 33.6H36.8L32 20.4L27.2 33.6Z" fill="#F6F7FB"/>
  <path d="M37 20L45 20L30 49L22 49L37 20Z" fill="#FF9B3A" fill-opacity=".92"/>
  <defs>
    <linearGradient id="g" x1="6" y1="7" x2="58" y2="58" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0D66F1"/>
      <stop offset="1" stop-color="#08111A"/>
    </linearGradient>
  </defs>
</svg>
"""


def project_svg(title: str, palette: tuple[str, str, str], accent: str, skyline: list[tuple[int, int, int, int]]) -> str:
    blocks = "\n".join(
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{accent}" fill-opacity="{opacity}"/>'
        for x, y, w, h, opacity in skyline
    )
    return f"""<svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="110" y1="70" x2="1020" y2="820" gradientUnits="userSpaceOnUse">
      <stop stop-color="{palette[0]}"/>
      <stop offset=".55" stop-color="{palette[1]}"/>
      <stop offset="1" stop-color="{palette[2]}"/>
    </linearGradient>
    <linearGradient id="glass" x1="280" y1="160" x2="900" y2="730" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF" stop-opacity=".24"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity=".03"/>
    </linearGradient>
    <filter id="blur">
      <feGaussianBlur stdDeviation="40"/>
    </filter>
  </defs>
  <rect width="1200" height="900" rx="44" fill="url(#bg)"/>
  <circle cx="1060" cy="120" r="180" fill="{accent}" fill-opacity=".22" filter="url(#blur)"/>
  <circle cx="220" cy="720" r="220" fill="#0D66F1" fill-opacity=".20" filter="url(#blur)"/>
  <g opacity=".15">
    <path d="M0 620H1200" stroke="white"/>
    <path d="M0 540H1200" stroke="white"/>
    <path d="M180 0V900" stroke="white"/>
    <path d="M620 0V900" stroke="white"/>
    <path d="M980 0V900" stroke="white"/>
  </g>
  <rect x="120" y="162" width="960" height="570" rx="30" fill="#07111A" fill-opacity=".36" stroke="rgba(255,255,255,.12)"/>
  <rect x="168" y="208" width="864" height="478" rx="22" fill="url(#glass)" stroke="rgba(255,255,255,.14)"/>
  <rect x="190" y="610" width="820" height="38" rx="19" fill="{accent}" fill-opacity=".18"/>
  {blocks}
  <text x="190" y="310" fill="white" font-size="56" font-family="Oswald, Arial, sans-serif" letter-spacing="4">{title}</text>
  <text x="190" y="360" fill="rgba(255,255,255,.72)" font-size="22" font-family="Manrope, Arial, sans-serif">Архитектура объекта и медиа созданы специально для этой концепции.</text>
</svg>
"""


def portrait_svg(name: str, palette: dict[str, str], tilt: float, offset: int) -> str:
    shoulder_left = 215 + offset
    shoulder_right = 585 + offset
    helmet_x = 242 + offset
    face_x = 400 + offset
    return f"""<svg width="900" height="1125" viewBox="0 0 900 1125" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="90" y1="120" x2="760" y2="1000" gradientUnits="userSpaceOnUse">
      <stop stop-color="{palette['bg_top']}"/>
      <stop offset=".58" stop-color="{palette['bg_mid']}"/>
      <stop offset="1" stop-color="{palette['bg_bottom']}"/>
    </linearGradient>
    <radialGradient id="skin" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate({face_x} 395) rotate(90) scale(290 240)">
      <stop stop-color="{palette['skin_light']}"/>
      <stop offset="1" stop-color="{palette['skin_dark']}"/>
    </radialGradient>
    <linearGradient id="vest" x1="{shoulder_left}" y1="580" x2="{shoulder_right}" y2="990" gradientUnits="userSpaceOnUse">
      <stop stop-color="{palette['vest_light']}"/>
      <stop offset="1" stop-color="{palette['vest_dark']}"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0 .045"/>
      </feComponentTransfer>
    </filter>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="22" stdDeviation="34" flood-color="#000000" flood-opacity=".28"/>
    </filter>
  </defs>
  <rect width="900" height="1125" rx="48" fill="url(#bg)"/>
  <g opacity=".14">
    <path d="M0 310H900" stroke="white"/>
    <path d="M0 785H900" stroke="white"/>
    <path d="M180 0V1125" stroke="white"/>
    <path d="M660 0V1125" stroke="white"/>
  </g>
  <circle cx="720" cy="188" r="176" fill="{palette['glow']}" fill-opacity=".24"/>
  <g transform="rotate({tilt} 450 550)" filter="url(#shadow)">
    <path d="M{shoulder_left} 905C{shoulder_left} 765 304 650 450 650C596 650 685 765 685 905V1030H{shoulder_left}V905Z" fill="#051019"/>
    <path d="M{shoulder_left} 905C{shoulder_left} 785 314 690 450 690C586 690 685 785 685 905V1038H{shoulder_left}V905Z" fill="url(#vest)"/>
    <path d="M332 675H568V1038H332V675Z" fill="rgba(255,255,255,.18)"/>
    <path d="M375 216C433 188 519 194 568 235C615 274 638 335 626 404C612 484 562 558 492 596C430 630 344 618 292 566C234 507 213 413 232 329C245 275 283 240 375 216Z" fill="url(#skin)"/>
    <path d="M278 354C297 271 371 223 450 223C535 223 604 275 622 360C619 327 627 298 604 267C568 219 515 188 450 188C384 188 314 214 277 276C259 307 259 343 278 354Z" fill="{palette['helmet_shade']}"/>
    <path d="M242 242H558C613 242 658 287 658 342V370H242V242Z" fill="{palette['helmet']}"/>
    <rect x="{helmet_x}" y="348" width="416" height="56" rx="28" fill="{palette['helmet_brim']}"/>
    <path d="M344 372H556V462C556 522 507 571 447 571H453C393 571 344 522 344 462V372Z" fill="url(#skin)"/>
    <path d="M341 402C332 451 340 514 368 548" stroke="#5D3C31" stroke-opacity=".26" stroke-width="12" stroke-linecap="round"/>
    <ellipse cx="{face_x}" cy="425" rx="58" ry="30" fill="#FFFFFF" fill-opacity=".08"/>
    <ellipse cx="362" cy="425" rx="11" ry="8" fill="{palette['eye']}"/>
    <ellipse cx="522" cy="425" rx="11" ry="8" fill="{palette['eye']}"/>
    <path d="M385 486C421 512 477 512 513 486" stroke="{palette['lip']}" stroke-width="10" stroke-linecap="round"/>
    <path d="M336 610C374 646 524 648 564 610V690H336V610Z" fill="{palette['collar']}"/>
    <path d="M243 874L309 760H351L279 1038H215L243 874Z" fill="{palette['reflective']}"/>
    <path d="M657 874L591 760H549L621 1038H685L657 874Z" fill="{palette['reflective']}"/>
  </g>
  <rect width="900" height="1125" rx="48" filter="url(#grain)"/>
  <text x="64" y="1048" fill="white" font-size="26" font-family="Manrope, Arial, sans-serif" font-weight="700" letter-spacing="2">{name}</text>
</svg>
"""


def generate_video() -> None:
    mp4 = ASSETS / "hero-loop.mp4"
    poster = ASSETS / "hero-poster.jpg"
    filtergraph = (
        "drawgrid=w=320:h=180:t=1:c=white@0.07,"
        "drawgrid=w=80:h=80:t=1:c=0x0d66f2@0.08,"
        "drawbox=x='mod(t*140,1280)-260':y=0:w=220:h=720:color=0x0d66f2@0.10:t=fill,"
        "drawbox=x='1280-mod(t*110,1280)':y=0:w=180:h=720:color=0xff8a1d@0.10:t=fill,"
        "drawbox=x=120:y='430+sin(t*0.75)*24':w=360:h=120:color=0xffffff@0.04:t=fill,"
        "drawbox=x='720+sin(t*0.4)*44':y=120:w=320:h=180:color=0xffffff@0.03:t=fill,"
        "drawbox=x='420+sin(t*0.7)*90':y=270:w=520:h=3:color=0xffffff@0.11:t=fill,"
        "drawbox=x=0:y='240+sin(t*1.1)*46':w=1280:h=2:color=0xffffff@0.08:t=fill,"
        "drawbox=x='mod(t*180,1280)':y=0:w=2:h=720:color=0xffffff@0.15:t=fill,"
        "drawbox=x='mod(t*90+420,1280)':y=0:w=2:h=720:color=0xff8a1d@0.15:t=fill,"
        "noise=alls=10:allf=t+u,"
        "gblur=sigma=0.4"
    )
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-f",
            "lavfi",
            "-i",
            "color=c=#07131C:s=1280x720:d=12:r=24",
            "-vf",
            filtergraph,
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            "-profile:v",
            "main",
            "-movflags",
            "+faststart",
            str(mp4),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-i",
            str(mp4),
            "-frames:v",
            "1",
            str(poster),
        ],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


def main() -> None:
    ensure_dirs()
    write(ASSETS / "logo-mark.svg", logo_svg())

    write(
        PROJECTS / "project-1.svg",
        project_svg(
            "ЦОД «СЕВЕР-1»",
            ("#0B1620", "#15314A", "#08111A"),
            "#FF8A1D",
            [(210, 520, 180, 90, 0.22), (420, 412, 210, 198, 0.18), (662, 360, 210, 250, 0.12)],
        ),
    )
    write(
        PROJECTS / "project-2.svg",
        project_svg(
            "ПАРК «ВОЛНА»",
            ("#0D1820", "#113C59", "#071219"),
            "#0D66F1",
            [(210, 522, 260, 88, 0.22), (494, 470, 210, 140, 0.18), (734, 514, 160, 96, 0.14)],
        ),
    )
    write(
        PROJECTS / "project-3.svg",
        project_svg(
            "КЛИНИЧЕСКИЙ КОРПУС",
            ("#101723", "#25384F", "#08111A"),
            "#FF8A1D",
            [(224, 422, 154, 188, 0.18), (404, 352, 184, 258, 0.16), (622, 398, 220, 212, 0.14)],
        ),
    )

    palettes = [
        {
            "bg_top": "#16212C",
            "bg_mid": "#0C1620",
            "bg_bottom": "#08111A",
            "skin_light": "#E5C2A2",
            "skin_dark": "#B67D62",
            "vest_light": "#F9932C",
            "vest_dark": "#B7590C",
            "helmet": "#F1F4F8",
            "helmet_brim": "#D9E2EC",
            "helmet_shade": "#31363F",
            "eye": "#201611",
            "lip": "#8F5B49",
            "collar": "#212B38",
            "reflective": "#BFD7F8",
            "glow": "#0D66F1",
        },
        {
            "bg_top": "#0E2131",
            "bg_mid": "#122230",
            "bg_bottom": "#08111A",
            "skin_light": "#F1D3BE",
            "skin_dark": "#B87862",
            "vest_light": "#2E8CFF",
            "vest_dark": "#0E55B7",
            "helmet": "#FFF4DF",
            "helmet_brim": "#F8DCAA",
            "helmet_shade": "#4A3A2A",
            "eye": "#251812",
            "lip": "#9D675B",
            "collar": "#17202A",
            "reflective": "#E7F3FF",
            "glow": "#FF8A1D",
        },
        {
            "bg_top": "#15212B",
            "bg_mid": "#142434",
            "bg_bottom": "#08111A",
            "skin_light": "#D2A98B",
            "skin_dark": "#94624B",
            "vest_light": "#FFD24D",
            "vest_dark": "#C27A00",
            "helmet": "#E7EDF5",
            "helmet_brim": "#D1DCEB",
            "helmet_shade": "#2F3339",
            "eye": "#1E1512",
            "lip": "#7F4F41",
            "collar": "#1A2430",
            "reflective": "#E8EEF8",
            "glow": "#FF8A1D",
        },
        {
            "bg_top": "#142335",
            "bg_mid": "#10202E",
            "bg_bottom": "#08111A",
            "skin_light": "#EBC4AE",
            "skin_dark": "#A76F58",
            "vest_light": "#FFB348",
            "vest_dark": "#B36414",
            "helmet": "#EDF2F8",
            "helmet_brim": "#D1D7E0",
            "helmet_shade": "#3D424A",
            "eye": "#231A15",
            "lip": "#935E4E",
            "collar": "#1A2432",
            "reflective": "#D9EEFF",
            "glow": "#0D66F1",
        },
    ]

    names = ["Илья Дёмин", "Светлана Ермакова", "Артур Насыров", "Марина Соколова"]
    tilts = [-1.5, 1.2, -0.8, 1.4]
    offsets = [-12, 8, -20, 12]
    for index, (name, palette, tilt, offset) in enumerate(zip(names, palettes, tilts, offsets), start=1):
        write(PORTRAITS / f"worker-{index}.svg", portrait_svg(name, palette, tilt, offset))

    generate_video()


if __name__ == "__main__":
    main()
