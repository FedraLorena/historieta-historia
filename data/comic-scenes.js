// Información visual independiente. Los relatos y sus fechas originales permanecen en chapters.js.
import {scenes as chapterOne} from './chapter-one-scenes.js';
const s=(date,place,alt,beat,cue,dialogue)=>({date,place,alt,beat,cue,...(dialogue?{dialogue,voice:'Pregunta del narrador'}:{})});
const sets={
1:chapterOne,
2:[
 s('1922','Roma · Italia','Civiles preocupados en una calle italiana y el poder político al fondo, bajo la presión fascista.','La violencia llega al gobierno.','El nombramiento por el rey abrió una puerta; la dictadura se consolidó mediante decisiones posteriores.','¿Quién le abrió la puerta al poder?'),
 s('1933','Berlín · Alemania','Un periodista ante una oficina de prensa cerrada por la policía.','Eliminar los controles, uno por uno.','El acceso al gobierno fue seguido por la destrucción de libertades y controles democráticos.'),
 s('DÉCADA DE 1930','Unión Soviética · campo e industria','Campesinos y un funcionario con registros, con instalaciones industriales al fondo.','Producir bajo coerción.','La planificación soviética y la ideología fascista no eran iguales, aunque ambos regímenes usaron represión.'),
 s('1931–1937','Manchuria y China · Asia oriental','Un tren militar japonés llega a una estación continental mientras civiles observan con inquietud.','La expansión ya está en marcha.','La guerra en Asia precedió al estallido europeo de 1939.','¿Qué recursos busca un imperio?'),
 s('AÑOS TREINTA','Vida cotidiana · distintos regímenes','Una familia escucha una radio mientras afuera se instala propaganda sin texto legible.','El poder también habla por la radio.','Propaganda, censura y represión moldeaban información y conductas mediante mecanismos distintos.','¿Qué voces faltan en esta radio?'),
 s('1922–1939','Europa y Asia · mirada comparada','Un escritorio de investigación reúne documentos de regímenes diferentes.','Comparar requiere distinguir.','Compartir mecanismos represivos no significa tener idénticas ideologías, objetivos o víctimas.')
],
3:[
 s('1938–MARZO 1939','Austria y Checoslovaquia · Europa central','Una columna militar alemana atraviesa una calle checa y la población presencia la ocupación.','Cada concesión deja una pregunta.','La ocupación de las tierras checas mostró que Múnich no había frenado la expansión.'),
 s('23 AGO 1939','Moscú · Unión Soviética','Diplomáticos alemanes y soviéticos firman documentos en una mesa formal.','Enemigos ideológicos, acuerdo estratégico.','El pacto respondía a intereses de ambos gobiernos; no borraba sus diferencias.','¿Un pacto convierte a dos gobiernos en iguales?'),
 s('AGOSTO 1939','Europa oriental · un acuerdo secreto','Manos de funcionarios trazan zonas sobre un esquema territorial en una reunión privada.','El mapa que se decidió a escondidas.','El protocolo secreto delimitaba esferas de influencia sin consultar a las poblaciones afectadas.','¿Quién decidió por quienes vivían allí?'),
 s('1–17 SEP 1939','Polonia · desde el oeste y el este','Familias con equipaje al costado de una ruta, con fuerzas militares distantes.','Polonia queda entre dos invasores.','Alemania invadió el 1 de septiembre y la URSS el 17; Reino Unido y Francia declararon la guerra el 3.'),
 s('1939–1941','Europa · coaliciones en formación','Funcionarios británicos siguen noticias y movimientos en un mapa de Europa.','Los bandos tienen historia.','Italia, la URSS y Estados Unidos cambiaron su participación en fechas distintas.','Antes de ubicar un bando: ¿en qué fecha?'),
 s('1939–1941','Del exilio europeo a otros frentes','Combatientes exiliados y civiles en una estación, junto a suministros destinados a la guerra.','Perder territorio no cierra la historia.','Gobiernos en el exilio, fuerzas que continuaron luchando y nuevos aliados ampliaron la guerra.')
],
4:[
 s('1939–1940','Frentes europeos · coordinación militar','Una columna de tanques, infantería y un operador de radio, con aviones a distancia.','La velocidad necesita coordinación.','El avance dependía también de combustible, comunicaciones, terreno y decisiones.','¿Qué necesita un tanque para seguir avanzando?'),
 s('ABRIL–MAYO 1940','Noruega y Europa occidental','Transportes navales y tropas cerca de un fiordo noruego.','Los ataques cambian de dirección.','Las campañas del norte y del oeste tenían objetivos estratégicos y experiencias locales diferentes.'),
 s('MAYO 1940','Las Ardenas y el río Mosa','Vehículos militares recorren una ruta estrecha dentro de un bosque denso.','Una ruta difícil, una apuesta decisiva.','La maniobra hacia el canal aisló fuerzas aliadas que habían avanzado al norte.'),
 s('MAYO–JUNIO 1940','Dunkerque y Francia','Soldados esperan en una playa mientras pequeñas embarcaciones se acercan.','Salvar soldados no revierte una derrota.','La evacuación permitió continuar la lucha, pero no impidió el armisticio francés.'),
 s('VERANO–OTOÑO 1940','Sur de Inglaterra · canal de la Mancha','Personal de la RAF junto a un avión de hélice, con radar y mar a distancia.','El mar cambia las reglas.','Para invadir Reino Unido, Alemania debía superar defensas aéreas y navales.','¿Cómo cruzar un canal que no controlás?'),
 s('1940','Reino Unido · defensa y vida civil','Civiles y equipos de auxilio ayudan en una calle dañada por bombardeos, sin víctimas explícitas.','La guerra rápida encuentra un límite.','La resistencia británica y la geografía mostraron que los éxitos anteriores no garantizaban nuevas victorias.')
],
5:[
 s('1939–1945','Europa ocupada · calles y hogares','Una fila de racionamiento y un puesto de control alteran la vida de una ciudad ocupada.','La ocupación entra en lo cotidiano.','Alimentos, trabajo, circulación e información quedaron bajo control de las autoridades ocupantes.'),
 s('1940–1944','Europa ocupada · una imprenta clandestina','Personas imprimen y distribuyen periódicos clandestinos en un sótano.','Una noticia puede romper el silencio.','La información clandestina enfrentaba la censura; sus fuentes también deben analizarse críticamente.','¿Cómo hacer circular lo que está prohibido?'),
 s('1939–1945','Redes locales · ciudades y campo','Una red civil estudia documentos y planes; una mensajera se prepara para salir en bicicleta.','No toda resistencia lleva un arma.','Sabotaje, inteligencia, huelgas, documentos y refugios eran formas distintas de resistir.'),
 s('1939–1945','Europa ocupada · un refugio doméstico','Una familia protege a una persona perseguida detrás de una puerta interior.','Ayudar bajo el peso del miedo.','Los riesgos eran reales; las represalias eran responsabilidad de quienes las ordenaban y ejecutaban.','¿Qué opciones dejaba el miedo?'),
 s('1940–1944','Francia y otras sociedades ocupadas','Un funcionario local entrega archivos a una autoridad de ocupación mientras un empleado observa.','Investigar conductas, no etiquetar países.','Colaborar activamente en crímenes no era lo mismo que intentar sobrevivir bajo ocupación.'),
 s('1940–1943','Gueto de Varsovia · archivo Oneg Shabbat','Archivistas judíos preservan diarios y documentos en un recipiente metálico.','Dejar una voz para el futuro.','Documentar fue una forma de resistencia y permite recuperar experiencias que no aparecen en partes militares.')
],
6:[
 s('22 JUN 1941','Frontera occidental de la URSS','Una columna invasora avanza en la distancia, junto a la representación de un pacto roto.','El pacto se rompe.','Barbarroja convirtió a la URSS en parte de la lucha aliada contra Alemania.','¿Qué cambia al romper el pacto?'),
 s('1941','Interior soviético · rutas y ferrocarriles','Camiones en caminos embarrados y un tren que evacua maquinaria industrial.','Cada kilómetro exige suministros.','El avance alemán alargaba sus rutas; la URSS trasladaba fábricas y movilizaba recursos.','¿Quién lleva el combustible hasta el frente?'),
 s('OTOÑO–INVIERNO 1941','Moscú y el frente oriental','Soldados soviéticos preparan defensas con mapas y vehículos en un paisaje invernal.','El frío no explica todo.','Resistencia, desgaste, logística y decisiones ya condicionaban la ofensiva alemana.'),
 s('1942','Stalingrado · río Volga','La ciudad industrial dañada junto al Volga, con una embarcación de suministro y combatientes resguardados.','Industria, transporte y prestigio.','La ciudad tenía valor material y simbólico dentro de la ofensiva hacia el sur soviético.'),
 s('NOV 1942–FEB 1943','Stalingrado · el cerco','Mandos soviéticos estudian una maniobra de cerco en un puesto de campaña.','El cerco cambia de dirección.','Los ataques soviéticos a los flancos aislaron al Sexto Ejército; el abastecimiento aéreo fue insuficiente.'),
 s('1943','URSS · fábricas y frente oriental','Trabajadoras y trabajadores fabrican equipos mientras continúan los transportes hacia el frente.','Un giro que hay que sostener.','Stalingrado cambió la iniciativa; la guerra siguió hasta 1945 con producción, ayuda aliada y nuevas campañas.')
],
7:[
 s('1931–1937','Manchuria y China','Civiles chinos con pertenencias en una estación, con fuerzas de resistencia a distancia.','Asia ya estaba en guerra.','Pearl Harbor no fue el comienzo de la expansión japonesa ni de la resistencia de las poblaciones asiáticas.'),
 s('1941','Japón · rutas del petróleo','Dirigentes japoneses estudian suministros y rutas de navegación junto a barriles.','Los recursos condicionan las opciones.','El embargo influyó en el contexto; atacar fue una decisión política y militar.','¿Cómo sostener una flota sin petróleo?'),
 s('7 DIC 1941','Pearl Harbor · Hawái','Vista distante del puerto, buques con humo y aviones de hélice, sin víctimas explícitas.','Un ataque cambia la escala.','El golpe buscaba ganar tiempo, pero no eliminaba la capacidad industrial estadounidense.'),
 s('MARZO–DICIEMBRE 1941','Washington · Estados Unidos','El presidente estadounidense y sus asesores revisan documentos de guerra.','De abastecer a combatir.','Préstamo y Arriendo precedió a Pearl Harbor; la entrada formal llegó en diciembre.'),
 s('1941–1945','Estados Unidos · industria y sociedad','Mujeres y hombres trabajan entre grúas y estructuras de un astillero.','La guerra también se fabrica.','La movilización industrial sostuvo frentes, mientras persistieron desigualdades y vulneraciones de derechos.'),
 s('1942–1945','Océano Pacífico · rutas e islas','Un portaaviones y su tripulación operan en un océano amplio junto a islas distantes.','Un océano obliga a pensar en conjunto.','Buques, aviación, desembarcos y suministros conectaron las campañas.','¿Cómo abastecer un frente a miles de kilómetros?')
],
8:[
 s('ANTES DE 1933','Comunidades judías · Europa','Una familia judía comparte lecturas y tareas cotidianas en su hogar.','Vidas, vínculos y proyectos.','Las personas perseguidas tenían identidades diversas; la cifra no reemplaza sus vidas.'),
 s('1933–1938','Alemania · exclusión estatal','Una familia ante una oficina cerrada y documentos restrictivos, sin humillación explícita.','La discriminación se convierte en política.','Leyes, propaganda y violencia organizada radicalizaron una persecución basada en el antisemitismo.'),
 s('1939–1945','Territorios ocupados · Europa oriental','Familias con equipaje se aproximan a una barrera de confinamiento en una calle.','Aislamiento y traslado forzado.','Los guetos no eran barrios elegidos; las deportaciones implicaban coerción e instituciones responsables.'),
 s('DESDE 1941','Europa bajo dominio nazi','Una plataforma ferroviaria vacía y equipajes, como representación de las deportaciones.','Un crimen sistemático, en muchos lugares.','El genocidio incluyó fusilamientos masivos y centros de exterminio; no ocurrió solamente dentro de campos.'),
 s('1939–1945','Guetos y comunidades perseguidas','Enseñanza clandestina y ayuda mutua en una habitación modesta.','Resistir en condiciones extremas.','La acción de las víctimas no reduce la desigualdad de fuerzas ni traslada la responsabilidad del crimen.'),
 s('1945 Y DESPUÉS','Archivos y memoria · Europa y el mundo','Una mujer sobreviviente comparte su testimonio con un investigador entre documentos de archivo.','Escuchar, investigar, recordar.','Testimonios, documentos y restos materiales forman un conjunto de pruebas que permite reconstruir el genocidio.')
],
9:[
 s('JULIO–SEPTIEMBRE 1943','Italia · gobierno y ocupación','Funcionarios en un palacio italiano y una silla vacía evocan la destitución de Mussolini.','Cae un gobierno; la guerra continúa.','La destitución y el armisticio no terminaron de inmediato la lucha en Italia.','¿Cayó un gobierno o terminó la guerra?'),
 s('1943–ABRIL 1945','Italia · norte y sur','Un enlace partisano se desplaza en bicicleta por una zona con presencia militar distante.','Un país dividido por varios frentes.','La República Social dependía de Alemania; hubo resistencia y conflicto civil. Mussolini fue ejecutado en abril de 1945.'),
 s('6 JUN 1944','Normandía · costa francesa','Soldados aliados desembarcan equipos desde una lancha en la costa, sin violencia explícita.','Una playa es apenas el comienzo.','El desembarco requería asegurar posiciones y sostener una logística enorme.','¿Cómo abastecer todo lo que desembarca?'),
 s('1944','Europa occidental y frente oriental','Dos vistas separadas de mandos occidentales y soviéticos planificando sus avances.','Presión desde dos direcciones.','Los frentes tenían mandos distintos, pero sus efectos sobre los recursos alemanes estaban conectados.'),
 s('ABRIL 1945','Berlín · Alemania','Civiles con equipaje atraviesan una ciudad devastada, con tropas soviéticas a distancia.','El régimen cae entre ruinas.','La caída de Berlín y el suicidio de Hitler no borraron los crímenes ni detuvieron todas sus consecuencias.'),
 s('8 MAYO 1945','Europa · rendición alemana','Personas leen noticias de rendición mientras equipos de ayuda distribuyen alimentos.','La rendición deja tareas abiertas.','La guerra en Asia continuaba y la reconstrucción de vidas apenas comenzaba.')
],
10:[
 s('1945','Asia y Pacífico · Okinawa y otros frentes','Familias con pertenencias cruzan un paisaje de guerra con buques distantes.','Una guerra que todavía no termina.','Bloqueo, bombardeos, combates y debates internos formaban el contexto de las decisiones finales.'),
 s('JULIO 1945','Estados Unidos · Proyecto Manhattan','Científicos y funcionarios estudian documentos técnicos, sin mostrar una explosión nuclear.','La tecnología no decide sola.','Desarrollar un arma y autorizar su uso son decisiones diferentes.'),
 s('6 AGO 1945','Hiroshima · Japón','Ruinas urbanas vistas a distancia y una familia sobreviviente que se dirige a un lugar de ayuda, sin heridas explícitas.','Consecuencias que duran más que un día.','Las muertes, heridas, radiación y secuelas forman parte de la explicación histórica.'),
 s('8–9 AGO 1945','Manchuria y Nagasaki','Composición separada del avance soviético en Manchuria y el paisaje portuario dañado de Nagasaki.','Acontecimientos casi simultáneos.','La entrada soviética, las bombas, el bloqueo y los debates japoneses deben considerarse en conjunto.'),
 s('15 AGO–2 SEP 1945','Japón · anuncio y firma formal','Representantes japoneses firman documentos en una mesa a bordo de un buque.','Anunciar no es lo mismo que firmar.','El anuncio fue el 15 de agosto; la firma formal, el 2 de septiembre.'),
 s('1945 Y DESPUÉS','Archivos y memoria · debate histórico','Una persona sobreviviente mayor y un estudiante estudian documentos con atención.','Preguntas que necesitan pruebas.','Los historiadores debaten factores y alternativas; no pueden conocer con certeza lo que habría ocurrido en escenarios no realizados.')
],
11:[
 s('1945 Y POSGUERRA','Europa y otras regiones afectadas','Familias desplazadas con equipaje se registran en un puesto de ayuda junto a edificios dañados.','Volver no siempre era posible.','La reconstrucción incluía hogares, seguridad, vínculos y duelos, además de edificios.'),
 s('26 JUN–24 OCT 1945','San Francisco y Naciones Unidas','Delegaciones de distintos países firman la Carta en una sala de asamblea.','Firmar un compromiso para el futuro.','La Carta se firmó en junio y entró en vigor en octubre; la ONU no es un gobierno mundial.'),
 s('DESDE 1945','Estados Unidos, URSS y el mundo','Diplomáticos estadounidenses y soviéticos aparecen en espacios separados, con el globo como referencia.','Una alianza no garantiza una misma paz.','Las diferencias de seguridad, política y economía contribuyeron a la formación de bloques.'),
 s('1945 · 1949 · 1961','Alemania y Berlín','Civiles observan una barrera que se construye en una calle berlinesa en 1961.','Tres fechas, tres etapas.','La ilustración representa 1961: no muestra un muro en 1945. Las zonas de ocupación y los dos Estados fueron etapas anteriores.'),
 s('1947 Y DÉCADAS POSTERIORES','Asia, África y sociedades de posguerra','Personas organizan movimientos de independencia y una trabajadora participa en la vida de su comunidad.','Las transformaciones también se disputan.','La independencia y las demandas de igualdad tuvieron actores propios, conflictos y ritmos distintos.','¿Quién decide cómo será el futuro?'),
 s('DESDE 1948–1949','Un mundo de derechos y amenaza nuclear','Jóvenes y adultos estudian documentos y un esquema nuclear junto a un globo.','El futuro sigue abierto.','La Declaración de Derechos Humanos y la carrera nuclear muestran tensiones del nuevo orden mundial.','¿Cómo convivir con un poder capaz de destruirlo todo?')
]
};
export const sceneSets=Object.fromEntries(Object.entries(sets).map(([id,scenes])=>[id,scenes.map((scene,image)=>({...scene,image,chapter:Number(id)}))]));
export const chapterBridges={
1:'¿Cómo se transforma una promesa de orden en una dictadura? Esa puerta se abre en el capítulo 2.',
2:'El control interno se proyecta hacia afuera. Las amenazas pronto van a convertirse en invasiones.',
3:'En el oeste, la espera está por romperse. Los planes defensivos van a enfrentar un movimiento inesperado.',
4:'Después del avance militar queda una población bajo ocupación. La próxima escena entra en sus hogares y sus calles.',
5:'Mientras las redes clandestinas intentan sostenerse, el pacto germano-soviético se acerca a su ruptura.',
6:'Las decisiones del frente oriental ya se cruzan con otras tomadas a miles de kilómetros, sobre el Pacífico.',
7:'El mapa mundial se ensancha. Para comprender lo que ocurre en Europa, ahora hace falta detenerse en la persecución y el genocidio.',
8:'La liberación se aproxima sin reparar las vidas destruidas. Con ella llegará también una larga tarea de testimonio, búsqueda y memoria.',
9:'El final europeo deja abierto otro frente. La historia continúa en Asia y el Pacífico.',
10:'El silencio de las armas deja una pregunta abierta: ¿qué mundo se construirá después de tanta destrucción?',
11:'Las fechas ya tienen un recorrido. Ahora podés reunir los hilos de toda la historia en la Gran Misión.'
};
// Escena de referencia para cada actividad, según el asunto de su consigna original.
export const exerciseSceneIndices={
2:[1,0,2,4,3,4,5,3,0,4],3:[2,1,3,3,4,1,0,4,3,2],
4:[0,2,3,4,4,2,3,0,1,0],5:[2,1,3,2,5,4,2,5,5,2],
6:[0,1,2,3,4,5,1,4,4,1],7:[2,1,3,3,4,4,0,5,0,5],
8:[0,1,2,3,4,2,3,4,1,5],9:[0,1,2,2,3,4,5,1,2,4],
10:[0,2,3,4,5,3,1,3,4,5],11:[1,2,3,3,4,4,1,5,3,5]
};
