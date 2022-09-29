  //Add variables for added inputs for color & range
  let colorChoice = document.querySelector('#color')
  let rangeInput = document.querySelector('#range')

  let canvas = document.querySelector('#canvas')
  let context = canvas.getContext('2d')
  
  // Keep track of whether the mouse button has been pressed down or not.
  // Think of this as whether the user is drawing or not, is their brush on the canvas?
  let mousedown = false 

  canvas.addEventListener('mousedown', function(event) {
    mousedown = true
    let x = event.offsetX
    let y = event.offsetY
    // Circle instead of square
    context.beginPath()
    context.arc(x-5, y-5, 4, 0, 6.3)  // 0 - 6.3 draws full circle
    // use the color choice from the color input
    context.strokeStyle = colorChoice
    context.lineWidth = 4

    context.stroke()
  })

  canvas.addEventListener('mouseup', function() {
    mousedown = false 
  })

  // If mouse leaves the canvas then stop drawing
  canvas.addEventListener('mouseout', function() {
    mousedown = false
  })

  canvas.addEventListener('mousemove', function(event) {

    // If the mouse button is not pressed down, do not draw.
    if (!mousedown) { return }

    // event is a built-in variable, contains the event that triggered this function
    // get the x, y location of the event
    let x = event.offsetX
    let y = event.offsetY   //offsetX, offsetY, may not work in older browsers

    // Draw a cricle instead of a square
    context.beginPath()
    context.arc(x-5, y-5, 4, 0, 6.3) // 0 - 6.3 draws full circle
    context.strokeStyle = colorChoice
    context.lineWidth = 4
    context.stroke()

  })

  document.getElementById("submit").addEventListener("click", function(event) {
    let x = event.offsetX
    let y = event.offsetY 

    context.beginPath()
    context.arc(x-5, y-5, rangeInput, 0, 6.3)
    context.strokeStyle = colorChoice
    context.lineWidth = 4
    context.stroke()
  })


  // add event listener to button to clear the canvas
  document.getElementById("clear").addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height)
  })
