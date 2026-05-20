export function drawSprite(
  canvas: HTMLCanvasElement,
  sprite: string[],
  palette: Record<string, string>,
  scale: number,
): void {
  if (!canvas || !sprite.length) return
  const rows = sprite.length
  const cols = sprite[0].length
  canvas.width  = cols * scale
  canvas.height = rows * scale
  const ctx = canvas.getContext('2d')!
  ctx.imageSmoothingEnabled = false
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let y = 0; y < rows; y++) {
    const row = sprite[y]
    for (let x = 0; x < row.length; x++) {
      const ch = row[x]
      if (ch === '.' || ch === ' ') continue
      const color = palette[ch]
      if (!color) continue
      ctx.fillStyle = color
      ctx.fillRect(x * scale, y * scale, scale, scale)
    }
  }
}
