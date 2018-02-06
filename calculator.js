
$(document).ready(function(){

  let preset = true
  let input = ''
  let scr = $('.screen')

  function show(num) {
    input += num;
    $(".screen").html(input)  
    if(input.length>19){
      scr.html('that\'s what she said')
      }
    }

  //input numbers
  $('.num').click(function(){
    if(preset){
      let input = $.trim($(this).text())
      show(input)
      }
  })

  $('.del').click(function(){
  input = input.slice(0, -1)
  scr.html(input)
  })

  //reset data
  $('.reset').click(function(){
    input = ''
    scr.html(input);
  })

  //operator
  $('.opr').click(function(){
    if(input != ''){
      let data = $.trim($(this).text())
      input += data
      scr.html(input);
    }
  })

  $('.equal').click(function(){
    input = eval(input)
    if(input % 1 != 0){
      scr.html(input.toFixed(10))
    } else if((input.toString()).length > 14){
      scr.html('that\'s what she said')
    } else {
      scr.html(input)
    }
    input = ''
  })
  console.log(typeof input)
})



