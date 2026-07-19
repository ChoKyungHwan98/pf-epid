from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parent
CURRENT = ROOT / "current-home-20260720.png"
FABRIC = ROOT / "source-fabric.jpg"
CONCRETE = ROOT / "Concrete035_2K" / "Concrete035_2K-JPG_Color.jpg"

CANVAS = (1280, 720)
MAIN_BOX = (240, 60, 1280, 720)
MAIN_SIZE = (1040, 660)

FONT_KR = Path("C:/Windows/Fonts/NotoSansKR-VF.ttf")


def font(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    result = ImageFont.truetype(str(FONT_KR), size)
    result.set_variation_by_name(weight)
    return result


def cover(image: Image.Image, size: tuple[int, int], center=(0.5, 0.5)) -> Image.Image:
    return ImageOps.fit(image.convert("RGB"), size, Image.Resampling.LANCZOS, centering=center)


def multiply_overlay(image: Image.Image, alpha: int) -> Image.Image:
    shade = Image.new("RGBA", image.size, (4, 7, 11, alpha))
    return Image.alpha_composite(image.convert("RGBA"), shade)


def add_text_readability_gradient(image: Image.Image) -> Image.Image:
    width, height = image.size
    gradient = Image.new("RGBA", image.size)
    pixels = gradient.load()
    for x in range(width):
        # The copy sits left of centre; the texture remains more visible on the right.
        alpha = int(max(38, 158 - (x / width) * 122))
        for y in range(height):
            vertical = int(22 * abs((y / height) - 0.47))
            pixels[x, y] = (3, 6, 10, min(190, alpha + vertical))
    return Image.alpha_composite(image.convert("RGBA"), gradient)


def add_concrete_light(image: Image.Image) -> Image.Image:
    width, height = image.size
    light = Image.new("RGBA", image.size, (0, 0, 0, 0))
    pixels = light.load()
    cx, cy = width * 0.82, height * 0.22
    rx, ry = width * 0.72, height * 0.80
    for x in range(width):
        for y in range(height):
            distance = ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2
            strength = max(0.0, 1.0 - distance)
            alpha = int(62 * strength * strength)
            pixels[x, y] = (168, 178, 190, alpha)
    return Image.alpha_composite(image.convert("RGBA"), light)


def rounded_button(draw: ImageDraw.ImageDraw, xy, label: str, primary: bool) -> None:
    x, y, width, height = xy
    radius = 8
    if primary:
        draw.rounded_rectangle((x, y, x + width, y + height), radius, fill=(247, 247, 245, 255))
        color = (15, 18, 23, 255)
    else:
        draw.rounded_rectangle(
            (x, y, x + width, y + height),
            radius,
            fill=(15, 18, 23, 125),
            outline=(205, 209, 216, 95),
            width=1,
        )
        color = (241, 242, 241, 255)
    button_font = font(14, "Bold")
    bounds = draw.textbbox((0, 0), label, font=button_font)
    tw = bounds[2] - bounds[0]
    th = bounds[3] - bounds[1]
    draw.text((x + (width - tw) / 2, y + (height - th) / 2 - 2), label, font=button_font, fill=color)


def compose(background: Image.Image, output: Path) -> None:
    shell = Image.open(CURRENT).convert("RGBA")
    shell.paste(background.convert("RGBA"), (MAIN_BOX[0], MAIN_BOX[1]))

    draw = ImageDraw.Draw(shell, "RGBA")
    title_font = font(70, "Bold")
    subtitle_font = font(20, "Regular")

    x = 474
    y = 188
    title_color = (248, 248, 247, 255)
    draw.text((x, y), "−를 0으로,", font=title_font, fill=title_color, stroke_width=1, stroke_fill=(248, 248, 247, 255))
    draw.text((x, y + 88), "0을 +로.", font=title_font, fill=title_color, stroke_width=1, stroke_fill=(248, 248, 247, 255))

    subtitle = "누군가의 하루에 즐거움을 더하는 게임 기획자가 되고 싶습니다."
    draw.text((x + 2, y + 208), subtitle, font=subtitle_font, fill=(235, 237, 238, 242))

    rounded_button(draw, (x + 2, y + 264, 98, 44), "이력서 보기", True)
    rounded_button(draw, (x + 112, y + 264, 98, 44), "포트폴리오", False)

    shell.convert("RGB").save(output, quality=94, optimize=True)


def render_fabric() -> None:
    image = cover(Image.open(FABRIC), MAIN_SIZE, center=(0.53, 0.50))
    image = ImageEnhance.Contrast(image).enhance(1.16)
    image = ImageEnhance.Brightness(image).enhance(0.82)
    image = add_text_readability_gradient(image)
    compose(image, ROOT / "home-mockup-a-fabric.jpg")


def render_concrete() -> None:
    image = cover(Image.open(CONCRETE), MAIN_SIZE, center=(0.5, 0.5)).convert("L")
    image = ImageOps.colorize(image, black=(7, 10, 14), white=(69, 73, 79)).convert("RGBA")
    image = multiply_overlay(image, 78)
    image = add_text_readability_gradient(image)
    image = add_concrete_light(image)
    compose(image, ROOT / "home-mockup-b-concrete.jpg")


if __name__ == "__main__":
    render_fabric()
    render_concrete()
