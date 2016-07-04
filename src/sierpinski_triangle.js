function sierpinski_triangle (height) {
  var canvas = document.getElementById('triangle')
  var context = canvas.getContext('2d')

  let bottom = Math.round(height * 1.732 / 3 * 2)

  context.beginPath()
  // draw triangle
  let top = [bottom / 2, 0]
  let left = [0, height]
  let right = [bottom, height]

  context.moveTo(...top)
  context.lineTo(...left)
  context.lineTo(...right)
  context.lineTo(...top)
  context.stroke()

  function draw_upside_down_triangle (top, height, edge) {
    let [top_x, top_y] = top

    let next_top = [top_x, top_y + height]
    let next_left = [top_x - edge / 4, top_y + height / 2]
    let next_right = [top_x + edge / 4, top_y + height / 2]
    console.log(left)
    context.moveTo(...next_top)
    context.lineTo(...next_left)
    context.lineTo(...next_right)
    context.lineTo(...next_top)
    context.stroke()
  }

  setTimeout(() => {
    draw_upside_down_triangle(top, height, bottom)
  }, 1000)

  setTimeout(() => {
    draw_upside_down_triangle(top, height / 2, bottom / 2)
  }, 2000)

  setTimeout(() => {
    draw_upside_down_triangle([top[0] - bottom / 4, top[1] + height / 2], height / 2, bottom / 2)
  }, 2000)

  setTimeout(() => {
    draw_upside_down_triangle([top[0] + bottom / 4, top[1] + height / 2], height / 2, bottom / 2)
  }, 2000)
}

window.onload = function () {
  sierpinski_triangle(300)
}
