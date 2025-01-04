
class Stone {
    constructor(imageUrl, description, stoneName) {
        this.imageUrl = imageUrl;
        this.description = description;
        this.stoneName = stoneName;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getDescription() {
        return this.description;
    }

    getStoneName() {
        return this.stoneName;
    }

    toString() {
        return `Stone [imageUrl=${this.imageUrl}, description=${this.description}, stoneName=${this.stoneName}]`;
    }
};

const points = localStorage.getItem('resultado');
let stone = null;

const STONES = [
    new Stone("../img/bismuto.png", "Eres una persona creativa y enérgica, que busca siempre formas de mejorar el entorno a través de ideas innovadoras. El bismuto es conocido por ayudar en la transformación, especialmente en momentos de cambio. Facilita la cohesión en grupos y la adaptación a nuevas situaciones. Este metal es raro en la naturaleza, y sus formaciones en colores iridiscentes lo hacen valioso tanto en el ámbito industrial como decorativo.", "Bismuto"),
    new Stone("../img/amatista.png", "Eres tranquila, reflexiva y buscas siempre un equilibrio emocional. Tienes una gran intuición y capacidad de meditación. La amatista está asociada con la paz mental, la claridad y la sabiduría. Se cree que protege contra las energías negativas y promueve la espiritualidad. Este cuarzo púrpura es muy apreciado por su belleza y propiedades calmantes, siendo una de las piedras más valoradas en la joyería y la meditación.", "Amatista"),
    new Stone("../img/obsidiana.jpg", "Eres una persona fuerte, protectora y en ocasiones misteriosa. Tiendes a analizar profundamente a los demás y a ti mismo. La obsidiana es un poderoso escudo protector que bloquea las energías negativas. Facilita la introspección y el autoconocimiento. Formada por lava volcánica enfriada rápidamente, la obsidiana tiene un aspecto vidrioso y es utilizada tanto en herramientas como en adornos.", "Obsidiana"),
    new Stone("../img/rosadeldesierto.png", "Eres delicado y sensible, con una conexión especial con la naturaleza y el equilibrio emocional. Esta piedra fomenta la claridad mental y la comprensión profunda. Se asocia con la calma y la meditación. Formada en áreas desérticas, es una formación de cristales de yeso que recuerda a una flor, apreciada por su belleza y simbolismo.", "Rosa del Desierto"),
    new Stone("../img/agata.png", "Eres una persona estable y centrada, con un enfoque práctico en la vida. Buscas armonía en tus relaciones y entorno. El ágata es una piedra de equilibrio y protección. Refuerza la autoestima y ayuda a resolver tensiones internas. Su estructura bandeada y colorida la convierte en una de las gemas más populares en joyería y decoración.", "Ágata"),
    new Stone("../img/aragonito.png", "Eres una persona estructurada, que valora el orden y la estabilidad. Tienes una fuerte conexión con la Tierra. El aragonito ayuda a centrar las energías y reducir el estrés. Es ideal para quienes necesitan enraizarse y encontrar equilibrio. Este mineral es una forma cristalina del carbonato de calcio, usado a menudo en trabajos de curación y decoración.", "Aragonito"),
    new Stone("../img/calcopirita.png", "Eres energético y transformador, con una gran capacidad para encontrar oportunidades donde otros no ven nada. Facilita la conexión espiritual y la prosperidad. Ayuda a eliminar bloqueos energéticos. Conocida como “oro de los tontos” por su color dorado, es apreciada tanto en joyería como en minería.", "Calcopirita"),
    new Stone("../img/pirita.png", "Eres valiente, decidida y persistes hasta conseguir tus objetivos. La prosperidad y el éxito están en tu horizonte. Se cree que atrae la abundancia y protege contra las energías negativas. Muy valorada por su brillo metálico y su composición de hierro y azufre, es un mineral común en la naturaleza.", "Pirita"),
    new Stone("../img/jade.png", "Tienes un alma tranquila y eres sabio, con una fuerte inclinación hacia la armonía y la paz interior. El jade promueve la tranquilidad y la pureza. Es una piedra de buena fortuna y longevidad. Utilizado en muchas culturas antiguas, es una piedra preciosa muy apreciada por su dureza y belleza.", "Jade"),
    new Stone("../img/jaspe.png", "Eres una persona confiable, práctica y de gran fuerza de voluntad. La perseverancia es tu mayor virtud. El jaspe es conocido como el 'protector supremo'. Aporta estabilidad y valor durante los tiempos difíciles. Es una piedra semipreciosa utilizada desde tiempos antiguos en joyería y arte.", "Jaspe"),
    new Stone("../img/jaspeleopardo.png", "Eres adaptable y versátil, con una capacidad innata para mezclarse en cualquier situación o entorno. Favorece la autodefensa y la fuerza interior. Ayuda a encontrar equilibrio en los desafíos. Sus patrones únicos recuerdan a las manchas de un leopardo, haciéndolo especialmente apreciado por coleccionistas.", "Jaspe Leopardo"),
    new Stone("../img/malaquita.png", "Eres una persona profundamente conectada con tus emociones, lo que te permite sanar a los demás. Fomenta la transformación y la sanación emocional. Se utiliza para proteger y absorber energías negativas. Su color verde brillante y sus propiedades curativas la hacen muy apreciada en la joyería y el arte.", "Malaquita"),
    new Stone("../img/hematite.jpg", "Eres muy decidido, con una gran capacidad para mantenerte firme en tus creencias y acciones. Esta piedra enraiza y fortalece, proporcionando estabilidad mental y emocional. Es muy valorada por su brillo metálico y sus propiedades magnéticas.", "Hematite"),
    new Stone("../img/unakita.png", "Eres equilibrado, con una fuerte conexión entre tu mente y cuerpo. Te inclinas hacia la sanación y el bienestar. La unakita ayuda en la recuperación emocional y física, fomentando el crecimiento personal. Su mezcla de colores verde y rosa la hace popular en joyería curativa.", "Unakita"),
    new Stone("../img/cuarzorosa.png", "Eres cariñoso y compasivo, siempre buscando conectar con los demás a nivel emocional. Es la piedra del amor incondicional, promoviendo el amor propio y la armonía en las relaciones. Este cuarzo es uno de los más valorados por sus propiedades amorosas y su delicado color rosado.", "Cuarzo Rosa"),
    new Stone("../img/cuarzofantasma.png", "Eres una persona introspectiva y mística, que busca comprender lo oculto y profundo. Facilita la conexión con el pasado y la comprensión de ciclos de vida. Ayuda en la meditación profunda. Sus inclusiones internas que parecen 'fantasmas' lo hacen un cuarzo raro y especial.", "Cuarzo Fantasma"),
    new Stone("../img/cuarzoblanco.png", "Eres una persona pura y abierta, con una mentalidad clara y positiva. Buscas siempre la verdad y la claridad en la vida. El cuarzo blanco, o cristal de roca, es conocido por amplificar las energías y ser un poderoso limpiador. Ayuda a clarificar pensamientos y equilibrar las energías. Es uno de los minerales más comunes y versátiles, muy apreciado en la meditación y en la fabricación de joyas y artefactos energéticos.", "Cuarzo Blanco"),
    new Stone("../img/cuarzotumarlinado.png", "Eres una persona con una gran capacidad para integrar lo opuesto. Puedes manejar bien las dualidades en la vida, como el bien y el mal, lo negativo y lo positivo. Combina las energías de protección del cuarzo y la turmalina negra, ayudando a equilibrar las energías y a proteger de influencias negativas. Este cuarzo contiene inclusiones de turmalina negra, lo que le otorga un aspecto único y especial, siendo buscado tanto por su apariencia como por sus propiedades.", "Cuarzo Turmalinado"),
    new Stone("../img/ojodetigre.png", "Eres valiente, confiado y enfocado en tus objetivos. Tienes una gran fuerza de voluntad y capacidad para superar los obstáculos. El ojo de tigre es conocido por equilibrar el yin y el yang, proporcionando protección y claridad mental. También se dice que fomenta el coraje y la confianza. Es una piedra semipreciosa con bandas doradas y marrones, muy apreciada en la joyería por su brillo sedoso y su capacidad para reflejar la luz.", "Ojo de Tigre"),
    new Stone("../img/ojodebuey.png", "Eres una persona centrada y fuerte, con una gran capacidad para mantener la calma bajo presión. Eres resistente y confiable. Este mineral ayuda a estabilizar las emociones y proporciona una sensación de seguridad y enraizamiento. Es excelente para aumentar la fuerza física y mental. Similar al ojo de tigre pero con tonos rojizos profundos, es muy apreciado por su rareza y su uso en joyería.", "Ojo de Buey"),
    new Stone("../img/onix.png", "Eres una persona fuerte y determinada, con una gran capacidad para manejar situaciones difíciles. Tienes un aire de misterio y profundidad. El ónix es una piedra de protección y enraizamiento. Ayuda a liberar el estrés y las energías negativas, fortaleciendo la resistencia emocional y física. Es un mineral popular en joyería por su elegante color negro y su capacidad para ser pulido a un brillo intenso.", "Ónix"),
    new Stone("../img/lapislazuli.png", "Eres sabio, comunicativo y tienes una profunda conexión con lo espiritual. Buscas siempre la verdad y la iluminación. El lapislázuli es conocido por activar la mente y aumentar la capacidad intelectual. Ayuda en la comunicación, la autoexpresión y la percepción espiritual. Esta piedra azul profundo con inclusiones de pirita es extremadamente valiosa y ha sido usada desde la antigüedad en joyería y ornamentos.", "Lapislázuli"),
    new Stone("../img/diamante.png", "Eres una persona brillante y decidida, con una gran fortaleza interior. Tienes una capacidad innata para liderar y superar cualquier desafío. El diamante simboliza pureza y perfección. Ayuda a despejar la mente y amplificar la energía, proporcionando claridad y enfoque. Es la gema más dura conocida, apreciada por su brillo y su uso en joyería de alta gama.", "Diamante"),
    new Stone("../img/oro.png", "Eres una persona ambiciosa y decidida, con un fuerte deseo de alcanzar el éxito en todos los aspectos de tu vida. El oro representa la abundancia, el éxito y el poder personal. Se cree que tiene propiedades para atraer la prosperidad y la energía positiva. Este metal precioso ha sido venerado por su belleza y valor a lo largo de la historia.", "Oro"),
    new Stone("../img/plata.png", "Eres una persona elegante, introspectiva y con un sentido innato de la justicia. La plata es conocida por su capacidad para reflejar la verdad y la luz interior. Ayuda a canalizar energías y equilibrar las emociones. Es un metal precioso muy apreciado en la joyería y en la creación de artefactos sagrados debido a su brillo y maleabilidad.", "Plata"),
    new Stone("../img/cobre.png", "Eres una persona dinámica, con una gran habilidad para adaptarte a diferentes situaciones. El cobre es un conductor natural de energía, facilitando la conexión entre las personas y el entorno. Se asocia con la vitalidad y la comunicación. Es un metal muy valorado en la industria y la creación de objetos artísticos por su capacidad para conducir electricidad y calor.", "Cobre"),
    new Stone("../img/esmeralda.png", "Eres una persona inspiradora, con un profundo sentido de la belleza y el amor. La esmeralda es conocida por su capacidad para estimular la compasión y la armonía. Se cree que esta gema fomenta la verdad y la comprensión emocional. Con su característico color verde, es una de las piedras más preciosas y deseadas en la joyería.", "Esmeralda"),
    new Stone("../img/zafiro.png", "Eres una persona sabia, con una gran habilidad para ver más allá de lo evidente. El zafiro está relacionado con la sabiduría, la intuición y la protección espiritual. Promueve la meditación y la claridad mental. Este precioso cristal azul es altamente valorado en la joyería por su belleza y sus poderosas propiedades.", "Zafiro"),
    new Stone("../img/rubi.png", "Eres una persona apasionada y valiente, con una gran capacidad para liderar y enfrentar desafíos. El rubí es una piedra de poder y vitalidad, asociada con el amor intenso y la energía. Su brillante color rojo lo convierte en una de las piedras más deseadas y valiosas, muy apreciada en la alta joyería por su rareza y simbolismo.", "Rubí")
]


if (points >= 66 && points < 72) {
    stone = STONES[0];
} else if (points >= 72 && points < 84) {
    stone = STONES[1];
} else if (points >= 84 && points < 88) {
    stone = STONES[2];
} else if (points >= 88 && points < 100) {
    stone = STONES[3];
} else if (points >= 100 && points < 104) {
    stone = STONES[4];
} else if (points >= 104 && points < 108) {
    stone = STONES[5];
} else if (points >= 108 && points < 110) {
    stone = STONES[6];
} else if (points >= 110 && points < 116) {
    stone = STONES[7];
} else if (points >= 116 && points < 120) {
    stone = STONES[8];
} else if (points >= 120 && points < 122) {
    stone = STONES[9];
} else if (points >= 122 && points < 126) {
    stone = STONES[10];
} else if (points >= 126 && points < 128) {
    stone = STONES[11];
} else if (points >= 128 && points < 132) {
    stone = STONES[12];
} else if (points >= 132 && points < 140) {
    stone = STONES[13];
} else if (points >= 140 && points < 144) {
    stone = STONES[14];
} else if (points >= 144 && points < 150) {
    stone = STONES[15];
} else if (points >= 150 && points < 160) {
    stone = STONES[16];
} else if (points >= 160 && points < 168) {  
    stone = STONES[17];
} else if (points >= 168 && points < 170) {
    stone = STONES[18];
} else if (points >= 170 && points < 172) {
    stone = STONES[19];
} else if (points >= 172 && points < 174) {
    stone = STONES[20];
} else if (points >= 174 && points < 178) {
    stone = STONES[21];
} else if (points >= 178 && points < 180) {
    stone = STONES[22];
} else if (points >= 180 && points < 190) {
    stone = STONES[23];
} else if (points >= 190 && points < 198) {
    stone = STONES[24];
} else if (points >= 198) {
    stone = STONES[25];
}

console.log(points);
console.log(stone);

document.getElementById("piedra").innerHTML = stone.getStoneName();
document.getElementById("descripcion").innerHTML = stone.getDescription();
document.getElementById("imagenpiedra").src = stone.getImageUrl();
document.getElementById("imagenpiedra").alt = stone.getStoneName();





