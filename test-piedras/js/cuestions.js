const bar = ["/img/bar/0001.png", "/img/bar/0002.png", "/img/bar/0003.png", "/img/bar/0004.png", "/img/bar/0005.png", "/img/bar/0006.png", 
    "/img/bar/0007.png","/img/bar/0008.png", "/img/bar/0009.png", "/img/bar/0010.png", "/img/bar/0011.png", "/img/bar/0012.png", "/img/bar/0013.png", 
    "/img/bar/0014.png", "/img/bar/0015.png", "/img/bar/0016.png", "/img/bar/0017.png", "/img/bar/0018.png", "/img/bar/0019.png", "/img/bar/0020.png", 
    "/img/bar/0021.png","/img/bar/0022.png", "/img/bar/0023.png", "/img/bar/0024.png", "/img/bar/0025.png", "/img/bar/0026.png", "/img/bar/0027.png", 
    "/img/bar/0028.png","/img/bar/0029.png", "/img/bar/0030.png", "/img/bar/0031.png", "/img/bar/0032.png", "/img/bar/0033.png"
];


const QUESTION_TYPES = ["¿Cómo te enfrentas a los problemas?","¿Qué te caracteriza más?","¿Cómo prefieres organizar tu tiempo?","¿Cómo te llevas con las responsabilidades?",
    "¿Cómo reaccionas cuando te enfrentas a un desafío inesperado?","¿Cómo te describirías en una palabra?","¿Qué te gusta hacer en tu tiempo libre?", "¿Qué actitud tienes hacia el cambio?",
    "¿Cómo manejas el estrés?","¿Qué valoras más en la vida?","¿Cómo actúas en un grupo?","¿Qué es lo que más te motiva?","¿Cómo prefieres resolver los conflictos?",
    "¿Cómo te describen tus amigos?","¿Cómo te enfrentas a las decisiones difíciles?","¿Qué te hace sentir más satisfecho?","¿Qué prefieres en tu entorno de trabajo?",
    "¿Qué te resulta más fácil?","¿Qué tipo de persona prefieres tener cerca?","¿Qué es lo más importante para ti?","¿Qué te hace sentir más seguro?","¿Qué tipo de retos disfrutas?",
    "¿Qué te hace sentir más incómodo?","¿Cómo reaccionas ante el fracaso?","¿Qué tipo de decisiones te resultan más fáciles?","¿Qué te hace sentir más realizado?",
    "¿Qué prefieres en una conversación?","¿Cómo prefieres pasar un fin de semana?","¿Qué te impulsa a seguir adelante en momentos difíciles?","30. ¿Cómo prefieres tomar decisiones?",
    "¿Cómo te sientes ante nuevas oportunidades?","¿Cómo te enfrentas a tus miedos?","¿Cómo describes tu enfoque en la vida?"
]


const QUESTIONS_ANSWERS = {
    "¿Cómo te enfrentas a los problemas?": ["Busco soluciones creativas y trato de mantener la calma.", "Analizo la situación antes de tomar una decisión.", "Actúo rápidamente sin dudar."],
    "¿Qué te caracteriza más?": ["Soy tranquilo y disfruto de la paz.", "Soy reflexivo y a veces indeciso.", "Soy enérgico y directo."],
    "¿Cómo prefieres organizar tu tiempo?": ["Me gusta seguir una rutina diaria.", "Mantengo un equilibrio entre organización y espontaneidad.", "Prefiero no tener horarios fijos y ser flexible."],
    "¿Cómo te llevas con las responsabilidades?": ["Me esfuerzo por cumplir con lo necesario, sin agobiarme.", "Tomo las responsabilidades con seriedad, aunque a veces me estresan.", "Asumo todas las responsabilidades sin problemas, me gusta estar al mando."],
    "¿Cómo reaccionas cuando te enfrentas a un desafío inesperado?": ["Trato de adaptarme poco a poco.", "Lo enfrento con calma, aunque me tome tiempo.", "Lo afronto de inmediato con energía."],
    "¿Cómo te describirías en una palabra?": ["Tranquilo.", "Racional.", "Determinado."],
    "¿Qué te gusta hacer en tu tiempo libre?": ["Leer o hacer actividades relajantes.", "Hacer ejercicio o actividades al aire libre.", "Probar algo nuevo o emocionante."],
    "¿Qué actitud tienes hacia el cambio?": ["Me cuesta adaptarme a los cambios.", "Acepto los cambios, pero me tomo mi tiempo.", "Me encanta cambiar y evolucionar constantemente."],
    "¿Cómo manejas el estrés?": ["Prefiero alejarme y tomarme un respiro.", "Me tomo mi tiempo para analizar la situación.", "Sigo adelante sin dejar que me afecte."],
    "¿Qué valoras más en la vida?": ["La tranquilidad y el equilibrio.", "El crecimiento personal.", "El éxito y la ambición."],
    "¿Cómo actúas en un grupo?": ["Prefiero escuchar más que hablar.", "Aporto ideas y colaboro activamente.", "Asumo el liderazgo naturalmente."],
    "¿Qué es lo que más te motiva?": ["La paz interior.", "Mejorar y crecer constantemente.", "Lograr grandes metas y desafíos."],
    "¿Cómo prefieres resolver los conflictos?": ["Evito los conflictos cuando es posible.", "Trato de hablar y resolverlo con calma.", "Enfrento los conflictos de manera directa."],
    "¿Cómo te describen tus amigos?": ["Amable y pacífico.", "Confiable y reflexivo.", "Energético y determinado."],
    "¿Cómo te enfrentas a las decisiones difíciles?": ["Prefiero tomármelo con calma y pensar bien las cosas.", "Analizo las opciones y consulto a otros si es necesario.", "Decido rápidamente siguiendo mi intuición."],
    "¿Qué te hace sentir más satisfecho?": ["La paz y el bienestar.", "Superar retos personales.", "Lograr un gran éxito."],
    "¿Qué prefieres en tu entorno de trabajo?": ["Un ambiente tranquilo y relajado.", "Un lugar donde pueda colaborar con otros.", "Un entorno dinámico y desafiante."],
    "¿Qué te resulta más fácil?": ["Mantener la calma en situaciones difíciles.", "Tomar decisiones después de analizarlas.", "Liderar y tomar la iniciativa."],
    "¿Qué tipo de persona prefieres tener cerca?": ["Alguien que me brinde paz y estabilidad.", "Alguien que me motive a ser mejor.", "Alguien que me desafíe constantemente."],
    "¿Qué es lo más importante para ti?": ["Tener tranquilidad y felicidad.", "Crecer y aprender constantemente.", "Lograr éxito y reconocimiento."],
    "¿Qué te hace sentir más seguro?": ["Tener una vida ordenada y estable.", "Saber que puedo adaptarme a los cambios.", "Tener el control de cada situación."],
    "¿Qué tipo de retos disfrutas?": ["Pequeños desafíos que me permitan mejorar.", "Retos moderados que me hagan pensar.", "Grandes desafíos que pongan a prueba todo mi potencial."],
    "¿Qué te hace sentir más incómodo?": ["Los cambios inesperados.", "La falta de control sobre las situaciones.", "No tener metas ambiciosas por alcanzar."],
    "¿Cómo reaccionas ante el fracaso?": ["Me siento mal, pero lo acepto con el tiempo.", "Reflexiono sobre lo que puedo aprender.", "Lo uso como motivación para seguir adelante."],
    "¿Qué tipo de decisiones te resultan más fáciles?": ["Las decisiones que afectan solo a mi entorno cercano.", "Las decisiones que implican cambios moderados.", "Las decisiones grandes y ambiciosas."],
    "¿Qué te hace sentir más realizado?": ["Tener un día tranquilo y productivo.", "Lograr mejorar en lo que me propongo.", "Alcanzar grandes éxitos y reconocimiento."],
    "¿Qué prefieres en una conversación?": ["Escuchar y entender a la otra persona.", "Aportar ideas y debatir en equilibrio.", "Guiar la conversación y tomar el control."],
    "¿Cómo prefieres pasar un fin de semana?": ["Relajándome en casa o haciendo algo tranquilo.", "Disfrutando de actividades al aire libre.", "Probando algo nuevo o emocionante."],
    "¿Qué te impulsa a seguir adelante en momentos difíciles?": ["Mi capacidad de mantener la calma.", "Mi deseo de aprender de la experiencia.", "Mi determinación por alcanzar el éxito."],
    "¿Cómo prefieres tomar decisiones?": ["Reflexionando con calma.", "Analizando las opciones de manera lógica.", "Siguiendo mi intuición y actuando rápidamente."],
    "¿Cómo te sientes ante nuevas oportunidades?": ["Un poco cauteloso, pero dispuesto a intentarlo.", "Entusiasmado, pero me tomo mi tiempo para decidir.", "Totalmente emocionado y listo para actuar."],
    "¿Cómo te enfrentas a tus miedos?": ["Con paciencia y tranquilidad.", "Con esfuerzo y dedicación para superarlos.", "Los enfrento directamente y sin dudar."],
    "¿Cómo describes tu enfoque en la vida?": ["Vivo un día a la vez, buscando paz.", "Busco un equilibrio entre calma y crecimiento.", "Estoy enfocado en alcanzar grandes metas."],
    "¿Qué tipo de persona prefieres trabajar?": ["Alguien que me ama y me apoya.", "Alguien que me entiende y me ayuda.", "Alguien que me mantiene en contacto."]
}



let answered = 0;
let points = 0;
let keys = Object.keys(QUESTIONS_ANSWERS);

function loadQuestion(questionNumber) {
    document.getElementById("pregunta").innerHTML = `<p>${keys[questionNumber]}</p>`;
    document.getElementById("respuesta1").innerHTML = `<p>${QUESTIONS_ANSWERS[keys[questionNumber]][0]}</p>`;
    document.getElementById("respuesta2").innerHTML = `<p>${QUESTIONS_ANSWERS[keys[questionNumber]][1]}</p>`;
    document.getElementById("respuesta3").innerHTML = `<p>${QUESTIONS_ANSWERS[keys[questionNumber]][2]}</p>`;
}

function showResult() {
    if (answered >= 33) {
        localStorage.setItem('resultado', points);
        window.location.href = "/html/resultado.html";
    }
}

function answer(element) {
    answered++; 

    let selectedAnswer = element.id;
    if (selectedAnswer === "respuesta1") {
        points += 2;
    } else if (selectedAnswer === "respuesta2") {
        points += 4;
    } else if (selectedAnswer === "respuesta3") {
        points += 6;
    }

    console.log("Evento disparado: ", element.id);
    console.log("ID de la respuesta seleccionada: ", selectedAnswer);
    console.log(`Puntos acumulados: ${points}`);

    loadQuestion(answered);

    document.getElementById("cpreguntas").innerHTML = `<p>${answered}</p><img src="${bar[answered - 1]}"><p>${33 - answered}</p>`;

    showResult();
}

loadQuestion(0);


