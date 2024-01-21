 // Создаем распознаватель
 var recognizer = new webkitSpeechRecognition();

 // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
//  recognizer.interimResults = true;

 // Какой язык будем распознавать?
 recognizer.lang = 'en-En';

 // Используем колбек для обработки результатов
 recognizer.onresult = function (event) 
 {
   var result = event.results[event.resultIndex];
   if (result.isFinal) {
    console.log(result[0].transcript)
     alert('you said: ' + result[0].transcript);
   } 
  //  else 
  //  {
  //    console.log('Промежуточный результат: ', result[0].transcript);
  //  }
 };

 function speech () {
   // Начинаем слушать микрофон и распознавать голос
   recognizer.start();
 }

//  var synth = window.speechSynthesis;
//  var utterance = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');

//  function talk () {
//    synth.speak (utterance);
//  }

 function stop () {
  recognizer.stop() ;
 }
