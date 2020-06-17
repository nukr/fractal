function sierpinski_triangle(height) {
  var canvas = document.getElementById('triangle');
  var context = canvas.getContext('2d');

  let edge = Math.round(((height * Math.sqrt(3)) / 3) * 2);

  context.beginPath();
  // draw triangle
  let top = [edge / 2, 0];
  let left = [0, height];
  let right = [edge, height];

  context.moveTo(...top);
  context.lineTo(...left);
  context.lineTo(...right);
  context.lineTo(...top);
  context.stroke();

  function draw_reverse_triangle(top, height, edge, depth) {
    let [top_x, top_y] = top;

    let next_top = [top_x, top_y + height];
    let next_left = [top_x - edge / 4, top_y + height / 2];
    let next_right = [top_x + edge / 4, top_y + height / 2];
    context.moveTo(...next_top);
    context.lineTo(...next_left);
    context.lineTo(...next_right);
    context.lineTo(...next_top);
    context.stroke();

    if (depth !== 0) {
      setTimeout(() => {
        draw_reverse_triangle(top, height / 2, edge / 2, depth - 1);
      }, 1000);
    }
    if (depth !== 0) {
      setTimeout(() => {
        draw_reverse_triangle(next_left, height / 2, edge / 2, depth - 1);
      }, 1000);
    }
    if (depth !== 0) {
      setTimeout(() => {
        draw_reverse_triangle(next_right, height / 2, edge / 2, depth - 1);
      }, 1000);
    }
  }

  draw_reverse_triangle(top, height, edge, 6);
}

window.onload = function () {
  sierpinski_triangle(400);
};
