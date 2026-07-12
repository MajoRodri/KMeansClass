// ── LANGUAGE ──────────────────────────────────────────────────────────────
let currentLang = 'es';

const LANG = {
  es: {
    'game-subtitle':'La Cueva de los Centroides',
    'game-tagline':'🏔️ Un desafío de K-Means Clustering',
    'btn-start':'▶ &nbsp; COMENZAR',
    'name-greeting':'👋 ¡Hola, Entrenador!',
    'name-desc':'Antes de entrar a la cueva, necesito saber tu nombre.',
    'name-placeholder':'Escribe tu nombre...',
    'name-btn':'Entrar a la Cueva &nbsp;→',
    'story-title':'La Cueva de los Centroides',
    'story-p1':'Eres un Entrenador Pokémon atrapado en la Cueva de los Centroides.',
    'story-p2':'Para escapar debes superar <strong style="color:var(--yellow)">6 salas</strong> demostrando que dominas K-Means Clustering.',
    'rule-1':'⚡ Una pregunta por sala',
    'rule-2':'🎯 Una sola oportunidad de respuesta',
    'rule-3':'📋 El Maestro Pokémon registra cada decisión',
    'story-btn':'Empezar la aventura &nbsp;→',
    'prog-1':'SALA 1 de 6','prog-2':'SALA 2 de 6','prog-3':'SALA 3 de 6',
    'prog-4':'SALA 4 de 6','prog-5':'SALA 5 de 6','prog-6':'SALA 6 de 6',
    'badge-1':'SALA 1','badge-2':'SALA 2','badge-3':'SALA 3',
    'badge-4':'SALA 4','badge-5':'SALA 5','badge-6':'SALA 6',
    's1-title':'👾 El Legendario Outlier',
    's1-sc1':'Tu equipo de Pokémon forma un <strong>cluster bien compacto</strong> en el mapa de batalla. El algoritmo K-Means ha calculado su <strong>centroide</strong> justo en el centro.',
    's1-sc2':'De repente aparece un <strong>Pokémon Legendario</strong> a kilómetros de distancia del grupo. ¡Está moviendo tu bandera de equipo!',
    's1-centroid':'Centroide','s1-team':'🔵 Tu Equipo (Cluster)','s1-distance':'↔ kilómetros de distancia',
    's1-q':'❓ ¿Qué le está pasando al CENTROIDE de tu cluster?',
    's1-a':'El centroide se desplaza hacia el legendario, alejándose del grupo real',
    's1-b':'El centroide permanece fijo — K-Means es robusto a los outliers',
    's1-c':'K-Means detecta y elimina el outlier automáticamente antes de calcular',
    's1-d':'El centroide se divide en dos para cubrir el grupo y el legendario',
    's1-next':'Siguiente Sala &nbsp;→',
    's2-title':'📐 El Método del Codo',
    's2-sc1':'El Profesor Kukui te planta un dilema: debes decidir <strong>cuántos equipos (K) formar</strong> en la región antes de aplicar K-Means.',
    's2-sc2':'Te ha dado la <strong>tabla de Inercia (SSE)</strong> para K del 1 al 7. Analiza el gráfico y encuentra el <strong>"codo"</strong>.',
    's2-q':'❓ ¿En qué valor de K se encuentra el CODO de la curva?',
    's2-a':'K = 5 &nbsp;— menor inercia siempre significa mejor modelo',
    's2-b':'K = 1 &nbsp;— la curva cambia demasiado, señal de inestabilidad',
    's2-c':'K = 3 &nbsp;— la inercia cae brutalmente de 2100 → 620, luego se aplana',
    's2-d':'K = 7 &nbsp;— usamos el K con la inercia más baja posible',
    's2-next':'Siguiente Sala &nbsp;→',
    'chart-inercia':'Inercia (SSE)','chart-codo':'Codo óptimo',
    'chart-x':'Número de Clusters (K)','chart-y':'Inercia (SSE)',
    's3-title':'📏 La Distancia del Duelo',
    's3-sc1':'Pikachu y Raichu se enfrentan en el <strong>espacio de features</strong>. K-Means necesita calcular su <strong>similitud</strong> para decidir a qué cluster pertenece cada uno.',
    's3-sc2':'Stats medidos: <strong>Ataque</strong> y <strong>Defensa</strong>.',
    's3-attack':'Ataque ⚔️','s3-defense':'Defensa 🛡️',
    's3-q':'❓ ¿Qué métrica usa internamente K-Means para medir la similitud entre estos dos Pokémon?',
    's3-a':'Correlación de Pearson: mide relación lineal entre variables, no distancia',
    's3-b':'Similitud Coseno: mide el ángulo entre vectores, no la proximidad espacial',
    's3-c':'Distancia Manhattan: &nbsp;<code style="font-size:12px">|90−55| + |55−40|</code> &nbsp;— camino en cuadrícula',
    's3-d':'Distancia Euclídea: &nbsp;<code style="font-size:12px">√((90−55)² + (55−40)²)</code> &nbsp;— línea recta entre puntos',
    's3-next':'Siguiente Sala &nbsp;→',
    's4-title':'🔄 La Convergencia',
    's4-sc1':'K-Means lleva ya <strong>6 iteraciones</strong> recalculando centroides. En la última iteración los centroides se han movido apenas <strong>Δ = 0.0001 unidades</strong>.',
    's4-sc2':'El diagrama muestra cómo el centroide de un cluster se acerca progresivamente a su posición final — cada iteración el movimiento es menor.',
    's4-iter1':'Iteración 1','s4-iter2':'Iteración 2','s4-iter3':'Iteración 3+',
    's4-converged':'✓ CONVERGIDO','s4-realcluster':'🔵 Cluster real',
    's4-q':'❓ Δ = 0.0001 — ¿Qué hace K-Means ante este movimiento mínimo de los centroides?',
    's4-a':'Continúa hasta completar max_iter=300 — siempre ejecuta todas las iteraciones',
    's4-b':'Se detiene — los centroides han convergido (cambio menor que la tolerancia)',
    's4-c':'Divide los clusters más grandes para mejorar la inercia final',
    's4-d':'Reinicia con nuevos centroides — la convergencia rápida indica un mínimo local',
    's4-next':'Siguiente Sala &nbsp;→',
    's5-title':'⚖️ El StandardScaler',
    's5-sc1':'Tienes un dataset con Pokémon descrito por dos features: <strong>Peso</strong> (rango: 8–120 kg) y <strong>Velocidad</strong> (rango: 0.0–1.0). Aplicas K-Means <strong>sin escalar</strong> primero.',
    's5-sc2':'El diagrama compara cómo cada variable contribuye a la distancia Euclídea antes y después del escalado.',
    's5-snorlax':'Snorlax — Peso: 460 kg','s5-jolteon':'Jolteon — Velocidad: 1.30',
    's5-noscaler':'❌ Sin StandardScaler','s5-withscaler':'✅ Con StandardScaler',
    's5-weight-kg':'Peso (kg)','s5-speed':'Velocidad','s5-weight-std':'Peso (std)','s5-speed-std':'Vel. (std)',
    's5-ignored':' 1.0 ← ignorada',
    's5-eq1':'En d²: Peso aporta (112)² = 12 544','s5-eq2':'Velocidad aporta (1.0)² = 1','s5-eq3':'→ Peso pesa 12 500× más',
    's5-both':'Ambas features entre -2 y +2','s5-equal':'K-Means las trata por igual','s5-correct':'→ Clustering correcto ✓',
    's5-q':'❓ ¿Qué variable influirá casi exclusivamente en las distancias si NO escalas?',
    's5-a':'El Peso — su rango de 112 unidades aplasta a Velocidad (rango 1.0) en el cálculo de d²',
    's5-b':'La Velocidad — las variables pequeñas son más precisas y K-Means las prioriza',
    's5-c':'Ambas por igual — K-Means normaliza internamente las features antes de calcular',
    's5-d':'Depende del random_state — sin escalar el resultado es completamente aleatorio',
    's5-next':'Siguiente Sala &nbsp;→',
    's6-title':'🌀 Las Formas Imposibles',
    's6-sc1':'El Profesor Oak detecta dos grupos en el radar: un <strong>anillo interior</strong> (amarillo) y un <strong>anillo exterior</strong> (morado). Aplicas K-Means con K=2.',
    's6-sc2':'La línea roja muestra cómo K-Means intenta dividir los datos. Los centroides (✕) quedan en lugares inesperados.',
    's6-inner':'Anillo interior (grupo real 1)','s6-outer':'Anillo exterior (grupo real 2)',
    's6-k1':'Cluster K1 (mitad izq.)','s6-k2':'Cluster K2 (mitad der.)',
    's6-err':'❌ K-Means mezcla puntos de ambos anillos en cada cluster',
    's6-q':'❓ ¿Por qué K-Means falla con los anillos concéntricos y qué alternativa usarías?',
    's6-a':'K-Means detecta los anillos perfectamente — el diagrama mostrado es incorrecto',
    's6-b':'El problema es el StandardScaler — sin escalar K-Means detecta los anillos correctamente',
    's6-c':'K-Means asume clusters esféricos/convexos — para formas no convexas usar DBSCAN o Clustering Espectral',
    's6-d':'Subir K a 4 o más clusters resuelve el problema de los anillos con K-Means',
    's6-finish':'Ver mi Resultado &nbsp;🏆',
    'btn-report':'📋 &nbsp; Ver Reporte del Profesor',
    'btn-restart':'🔄 &nbsp; Volver a empezar',
    'report-title':'📋 Reporte del Profesor',
    'report-subtitle':'Escape Room: La Cueva de los Centroides',
    'btn-print':'🖨️ &nbsp; Imprimir Reporte',
    'btn-back':'← &nbsp; Volver',
    'final-levels':['¡Sigue entrenando! Repasa los fundamentos.','Buen intento — algunos conceptos a reforzar.','¡Muy bien! Casi un Maestro K-Means.','¡Maestro K-Means! La cueva es tuya.'],
    'meta-student':'Alumno','meta-date':'Fecha','meta-time':'Hora','meta-duration':'Duración','meta-score':'Puntuación',
    'room-label':'SALA',
    'field-concept':'Concepto evaluado','field-chosen':'Respuesta elegida','field-correct':'Respuesta correcta','field-diagnosis':'Diagnóstico',
    'tag-correct':'✅ CORRECTO','tag-wrong':'❌ INCORRECTO',
    'diag-title':'Diagnóstico Global',
    'tag-understood':'✅ Comprendido','tag-reinforce':'❌ Requiere refuerzo',
    'score-total':'Puntuación total',
    'concepts':['Outliers y centroide (media aritmética)','Método del Codo (K óptimo)','Métrica de distancia (Euclídea)','Criterio de parada (convergencia)','Escalado de features (StandardScaler)','Formas de clusters (no-convexos)'],
    opcionTextos:{
      1:['El centroide se desplaza hacia el legendario, alejándose del grupo real','El centroide permanece fijo — K-Means es robusto a los outliers','K-Means detecta y elimina el outlier automáticamente antes de calcular','El centroide se divide en dos para cubrir el grupo y el legendario'],
      2:['K = 5 — menor inercia siempre significa mejor modelo','K = 1 — la curva cambia demasiado, señal de inestabilidad','K = 3 — la inercia cae brutalmente de 2100 → 620, luego se aplana','K = 7 — usamos el K con la inercia más baja posible'],
      3:['Correlación de Pearson','Similitud Coseno','Distancia Manhattan: |90−55| + |55−40|','Distancia Euclídea: √((90−55)² + (55−40)²)'],
      4:['Continúa hasta completar max_iter=300 — siempre ejecuta todas las iteraciones','Se detiene — los centroides han convergido (cambio menor que la tolerancia)','Divide los clusters más grandes para mejorar la inercia final','Reinicia con nuevos centroides — la convergencia rápida indica un mínimo local'],
      5:['El Peso — su rango de 112 unidades aplasta a Velocidad (rango 1.0) en el cálculo de d²','La Velocidad — las variables pequeñas son más precisas y K-Means las prioriza','Ambas por igual — K-Means normaliza internamente las features antes de calcular','Depende del random_state — sin escalar el resultado es completamente aleatorio'],
      6:['K-Means detecta los anillos perfectamente — el diagrama mostrado es incorrecto','El problema es el StandardScaler — sin escalar K-Means detecta los anillos correctamente','K-Means asume clusters esféricos/convexos — para formas no convexas usar DBSCAN o Clustering Espectral','Subir K a 4 o más clusters resuelve el problema de los anillos con K-Means'],
    },
    salas:{
      1:{nombre:'El Legendario Outlier',concepto:'Sensibilidad de K-Means a outliers (centroide = media aritmética)',feedbackOk:{title:'✅ ¡CORRECTO! La puerta se abre...',text:'El centroide es la MEDIA ARITMÉTICA de todos los puntos del cluster. Un outlier muy alejado desplaza esa media significativamente, alejando el centroide del grupo real. K-Means no tiene mecanismo de defensa ante outliers — es su gran debilidad. Soluciones: eliminar outliers antes, o usar K-Medoids (más robusto).'},feedbackErr:{title:'❌ Incorrecto. El suelo tiembla...',text:'La respuesta correcta es A. El centroide ES la media aritmética de todos los puntos del cluster. Un Pokémon Legendario muy alejado "tira" de esa media fuera del grupo real. K-Means NO elimina ni ignora outliers — esa es su principal vulnerabilidad. Algoritmos como DBSCAN son más robustos a esto.'},diagnosticoOk:'Comprende que el centroide es una media sensible a valores extremos.',diagnosticoErr:'Cree que K-Means es robusto a outliers. Reforzar: centroide = media aritmética.'},
      2:{nombre:'El Método del Codo',concepto:'Método del Codo — identificar K óptimo en la curva Inercia vs K',feedbackOk:{title:'✅ ¡CORRECTO! El Codo brilla en K=3...',text:'El "codo" es el punto donde añadir más clusters deja de reducir la inercia de forma significativa. De K=1 a K=3 la inercia cae 4180 puntos (4800→620). De K=3 a K=7 solo cae 90 puntos más. Añadir más clusters no justifica la complejidad adicional.'},feedbackErr:{title:'❌ Incorrecto. La curva no miente...',text:'La respuesta correcta es C (K=3). El error más común es elegir el K con la inercia más baja (K=7). Con K=N la inercia sería 0, pero eso no agrupa nada. El codo es el punto de cambio brusco: K=2→3 baja 1480 puntos, K=3→4 solo baja 40. Ahí está el K óptimo.'},diagnosticoOk:'Identifica correctamente el punto de inflexión en la curva Inercia vs K.',diagnosticoErr:'Confunde "inercia mínima = mejor K". Reforzar concepto de codo y complejidad.'},
      3:{nombre:'La Distancia del Duelo',concepto:'Métrica de distancia en K-Means — Distancia Euclídea',feedbackOk:{title:'✅ ¡CORRECTO! ¡Eres libre!',text:'K-Means usa Distancia Euclídea por defecto. Cálculo: √((90−55)² + (55−40)²) = √(1225 + 225) = √1450 ≈ 38.08 unidades. La opción C (Manhattan = 50) es una trampa frecuente: es una distancia válida, pero K-Means estándar usa Euclídea. Pearson y Coseno miden ángulos, no proximidad espacial.'},feedbackErr:{title:'❌ Incorrecto. La cueva permanece sellada...',text:'Respuesta correcta: D — Distancia Euclídea. K-Means minimiza la suma de distancias Euclídeas al cuadrado: d = √((90−55)² + (55−40)²) = √1450 ≈ 38.08. La Manhattan (C) es una trampa: válida, pero no es la que usa sklearn.KMeans. Pearson y Coseno miden correlación/ángulo, no distancia espacial.'},diagnosticoOk:'Sabe que K-Means usa Distancia Euclídea internamente.',diagnosticoErr:'Confunde Manhattan con Euclídea o mezcla métricas de similitud con distancia.'},
      4:{nombre:'La Convergencia',concepto:'Criterio de parada de K-Means — convergencia de centroides',feedbackOk:{title:'✅ ¡CORRECTO! El algoritmo descansa...',text:'K-Means para cuando el movimiento de centroides entre iteraciones cae bajo una tolerancia (tol=1e-4 por defecto en sklearn). Esto se llama convergencia. El parámetro max_iter=300 es el límite de seguridad, no el objetivo — el algoritmo para ANTES si converge, ahorrando tiempo de cómputo. El atributo n_iter_ te dice cuántas iteraciones realmente usó.'},feedbackErr:{title:'❌ Incorrecto. Los centroides se detienen solos...',text:'Respuesta correcta: B. K-Means detecta automáticamente la convergencia cuando el desplazamiento de los centroides es menor que tol (1e-4 en sklearn). NO espera a max_iter. El parámetro max_iter=300 es el límite máximo de seguridad, no el número de iteraciones garantizadas.'},diagnosticoOk:'Comprende el criterio de parada: K-Means converge cuando Δ centroides < tol.',diagnosticoErr:'Confunde convergencia con max_iter. Reforzar: K-Means para antes si los centroides no se mueven.'},
      5:{nombre:'El StandardScaler',concepto:'Importancia del escalado previo a K-Means — sesgo de escala en distancias',feedbackOk:{title:'✅ ¡CORRECTO! El Peso aplasta todo...',text:'Sin escalar, K-Means usa distancias Euclídeas en unidades originales. El término (Δpeso)² puede alcanzar 112² = 12 544 mientras (Δvelocidad)² llega a solo 1. La Velocidad contribuye menos del 0.01% a la distancia — prácticamente ignorada. StandardScaler transforma cada feature a media=0 y std=1, poniendo todas en pie de igualdad.'},feedbackErr:{title:'❌ Incorrecto. El tamaño sí importa...',text:'Respuesta correcta: A. En d² = (Δpeso)² + (Δvelocidad)², si Δpeso puede ser 112 y Δvelocidad máximo 1.0, el Peso domina con 12 544 vs 1. K-Means ignora efectivamente la Velocidad. StandardScaler elimina este sesgo poniendo todas las features en la misma escala.'},diagnosticoOk:'Comprende cómo las diferencias de escala sesgan las distancias Euclídeas en K-Means.',diagnosticoErr:'Cree que K-Means normaliza internamente o que la escala no afecta. Reforzar importancia de StandardScaler.'},
      6:{nombre:'Las Formas Imposibles',concepto:'Limitaciones de K-Means — asume clusters esféricos y convexos',feedbackOk:{title:'✅ ¡CORRECTO! K-Means no ve anillos...',text:'K-Means asume clusters esféricos/convexos porque minimiza la distancia al centroide. Con anillos concéntricos el centroide de cada anillo cae en el mismo punto (el centro), así que K-Means acaba dividiendo los datos izquierda/derecha en lugar de por anillo. Para formas no convexas: DBSCAN (basado en densidad) o Clustering Espectral (basado en grafos).'},feedbackErr:{title:'❌ Incorrecto. Los anillos lo engañan...',text:'Respuesta correcta: C. K-Means no puede detectar anillos concéntricos porque el centroide de ambos grupos estaría en el mismo punto (el centro). El algoritmo divide por proximidad al centroide, resultando en cortes verticales. Alternativas: DBSCAN detecta clusters de densidad arbitraria; Clustering Espectral transforma el espacio antes de agrupar.'},diagnosticoOk:'Comprende que K-Means asume esfericidad y falla con formas no lineales (anillos, medias lunas).',diagnosticoErr:'Cree que K-Means adapta su forma a los datos. Reforzar: centroides = medias, asumen convexidad.'},
    },
  },
  en: {
    'game-subtitle':'The Cave of Centroids',
    'game-tagline':'🏔️ A K-Means Clustering challenge',
    'btn-start':'▶ &nbsp; START',
    'name-greeting':'👋 Hello, Trainer!',
    'name-desc':'Before entering the cave, I need to know your name.',
    'name-placeholder':'Write your name...',
    'name-btn':'Enter the Cave &nbsp;→',
    'story-title':'The Cave of Centroids',
    'story-p1':'You are a Pokémon Trainer trapped in the Cave of Centroids.',
    'story-p2':'To escape you must pass <strong style="color:var(--yellow)">6 rooms</strong> proving you master K-Means Clustering.',
    'rule-1':'⚡ One question per room',
    'rule-2':'🎯 One chance to answer',
    'rule-3':'📋 The Pokémon Master records every decision',
    'story-btn':'Start the adventure &nbsp;→',
    'prog-1':'ROOM 1 of 6','prog-2':'ROOM 2 of 6','prog-3':'ROOM 3 of 6',
    'prog-4':'ROOM 4 of 6','prog-5':'ROOM 5 of 6','prog-6':'ROOM 6 of 6',
    'badge-1':'ROOM 1','badge-2':'ROOM 2','badge-3':'ROOM 3',
    'badge-4':'ROOM 4','badge-5':'ROOM 5','badge-6':'ROOM 6',
    's1-title':'👾 The Legendary Outlier',
    's1-sc1':'Your Pokémon team forms a <strong>compact cluster</strong> on the battle map. The K-Means algorithm has calculated its <strong>centroid</strong> right at the center.',
    's1-sc2':'Suddenly a <strong>Legendary Pokémon</strong> appears kilometers away from the group. It\'s moving your team flag!',
    's1-centroid':'Centroid','s1-team':'🔵 Your Team (Cluster)','s1-distance':'↔ kilometers away',
    's1-q':'❓ What is happening to your cluster\'s CENTROID?',
    's1-a':'The centroid shifts toward the legendary, moving away from the real group',
    's1-b':'The centroid stays fixed — K-Means is robust to outliers',
    's1-c':'K-Means automatically detects and removes the outlier before calculating',
    's1-d':'The centroid splits in two to cover the group and the legendary',
    's1-next':'Next Room &nbsp;→',
    's2-title':'📐 The Elbow Method',
    's2-sc1':'Professor Kukui presents you with a dilemma: you must decide <strong>how many teams (K) to form</strong> in the region before applying K-Means.',
    's2-sc2':'He has given you the <strong>Inertia (SSE) table</strong> for K from 1 to 7. Analyze the graph and find the <strong>"elbow"</strong>.',
    's2-q':'❓ At what value of K is the ELBOW of the curve?',
    's2-a':'K = 5 &nbsp;— lower inertia always means a better model',
    's2-b':'K = 1 &nbsp;— the curve changes too much, sign of instability',
    's2-c':'K = 3 &nbsp;— inertia drops sharply from 2100 → 620, then flattens',
    's2-d':'K = 7 &nbsp;— we use the K with the lowest possible inertia',
    's2-next':'Next Room &nbsp;→',
    'chart-inercia':'Inertia (SSE)','chart-codo':'Optimal elbow',
    'chart-x':'Number of Clusters (K)','chart-y':'Inertia (SSE)',
    's3-title':'📏 The Duel Distance',
    's3-sc1':'Pikachu and Raichu face off in <strong>feature space</strong>. K-Means needs to calculate their <strong>similarity</strong> to decide which cluster each belongs to.',
    's3-sc2':'Measured stats: <strong>Attack</strong> and <strong>Defense</strong>.',
    's3-attack':'Attack ⚔️','s3-defense':'Defense 🛡️',
    's3-q':'❓ What metric does K-Means use internally to measure similarity between these two Pokémon?',
    's3-a':'Pearson Correlation: measures linear relationship between variables, not distance',
    's3-b':'Cosine Similarity: measures the angle between vectors, not spatial proximity',
    's3-c':'Manhattan Distance: &nbsp;<code style="font-size:12px">|90−55| + |55−40|</code> &nbsp;— grid path',
    's3-d':'Euclidean Distance: &nbsp;<code style="font-size:12px">√((90−55)² + (55−40)²)</code> &nbsp;— straight line between points',
    's3-next':'Next Room &nbsp;→',
    's4-title':'🔄 Convergence',
    's4-sc1':'K-Means has already run <strong>6 iterations</strong> recalculating centroids. In the last iteration the centroids moved only <strong>Δ = 0.0001 units</strong>.',
    's4-sc2':'The diagram shows how a cluster\'s centroid progressively approaches its final position — each iteration the movement is smaller.',
    's4-iter1':'Iteration 1','s4-iter2':'Iteration 2','s4-iter3':'Iteration 3+',
    's4-converged':'✓ CONVERGED','s4-realcluster':'🔵 Real cluster',
    's4-q':'❓ Δ = 0.0001 — What does K-Means do with this minimal centroid movement?',
    's4-a':'Continues until max_iter=300 — always runs all iterations',
    's4-b':'It stops — the centroids have converged (change below tolerance)',
    's4-c':'Splits the largest clusters to improve final inertia',
    's4-d':'Restarts with new centroids — fast convergence indicates a local minimum',
    's4-next':'Next Room &nbsp;→',
    's5-title':'⚖️ StandardScaler',
    's5-sc1':'You have a Pokémon dataset described by two features: <strong>Weight</strong> (range: 8–120 kg) and <strong>Speed</strong> (range: 0.0–1.0). You apply K-Means <strong>without scaling</strong> first.',
    's5-sc2':'The diagram compares how each variable contributes to Euclidean distance before and after scaling.',
    's5-snorlax':'Snorlax — Weight: 460 kg','s5-jolteon':'Jolteon — Speed: 1.30',
    's5-noscaler':'❌ Without StandardScaler','s5-withscaler':'✅ With StandardScaler',
    's5-weight-kg':'Weight (kg)','s5-speed':'Speed','s5-weight-std':'Weight (std)','s5-speed-std':'Spd. (std)',
    's5-ignored':' 1.0 ← ignored',
    's5-eq1':'In d²: Weight contributes (112)² = 12 544','s5-eq2':'Speed contributes (1.0)² = 1','s5-eq3':'→ Weight is 12 500× larger',
    's5-both':'Both features between -2 and +2','s5-equal':'K-Means treats them equally','s5-correct':'→ Correct clustering ✓',
    's5-q':'❓ Which variable will almost exclusively influence distances if you do NOT scale?',
    's5-a':'Weight — its 112-unit range crushes Speed (range 1.0) in the d² calculation',
    's5-b':'Speed — smaller variables are more precise and K-Means prioritizes them',
    's5-c':'Both equally — K-Means normalizes features internally before calculating',
    's5-d':'Depends on random_state — without scaling the result is completely random',
    's5-next':'Next Room &nbsp;→',
    's6-title':'🌀 Impossible Shapes',
    's6-sc1':'Professor Oak detects two groups on the radar: an <strong>inner ring</strong> (yellow) and an <strong>outer ring</strong> (purple). You apply K-Means with K=2.',
    's6-sc2':'The red line shows how K-Means tries to split the data. The centroids (✕) end up in unexpected places.',
    's6-inner':'Inner ring (real group 1)','s6-outer':'Outer ring (real group 2)',
    's6-k1':'Cluster K1 (left half)','s6-k2':'Cluster K2 (right half)',
    's6-err':'❌ K-Means mixes points from both rings in each cluster',
    's6-q':'❓ Why does K-Means fail with concentric rings and what alternative would you use?',
    's6-a':'K-Means detects the rings perfectly — the diagram shown is incorrect',
    's6-b':'The problem is StandardScaler — without scaling K-Means detects the rings correctly',
    's6-c':'K-Means assumes spherical/convex clusters — for non-convex shapes use DBSCAN or Spectral Clustering',
    's6-d':'Raising K to 4+ clusters fixes the concentric rings problem with K-Means',
    's6-finish':'See my Result &nbsp;🏆',
    'btn-report':'📋 &nbsp; View Teacher Report',
    'btn-restart':'🔄 &nbsp; Start Over',
    'report-title':'📋 Teacher Report',
    'report-subtitle':'Escape Room: The Cave of Centroids',
    'btn-print':'🖨️ &nbsp; Print Report',
    'btn-back':'← &nbsp; Back',
    'final-levels':['Keep training! Review the fundamentals.','Good try — some concepts to reinforce.','Very good! Almost a K-Means Master.','K-Means Master! The cave is yours.'],
    'meta-student':'Student','meta-date':'Date','meta-time':'Time','meta-duration':'Duration','meta-score':'Score',
    'room-label':'ROOM',
    'field-concept':'Concept evaluated','field-chosen':'Selected answer','field-correct':'Correct answer','field-diagnosis':'Diagnosis',
    'tag-correct':'✅ CORRECT','tag-wrong':'❌ INCORRECT',
    'diag-title':'Global Diagnosis',
    'tag-understood':'✅ Understood','tag-reinforce':'❌ Needs reinforcement',
    'score-total':'Total Score',
    'concepts':['Outliers and centroid (arithmetic mean)','Elbow Method (optimal K)','Distance metric (Euclidean)','Stopping criterion (convergence)','Feature scaling (StandardScaler)','Cluster shapes (non-convex)'],
    opcionTextos:{
      1:['The centroid shifts toward the legendary, moving away from the real group','The centroid stays fixed — K-Means is robust to outliers','K-Means automatically detects and removes the outlier before calculating','The centroid splits in two to cover the group and the legendary'],
      2:['K = 5 — lower inertia always means a better model','K = 1 — the curve changes too much, sign of instability','K = 3 — inertia drops sharply from 2100 → 620, then flattens','K = 7 — we use the K with the lowest possible inertia'],
      3:['Pearson Correlation','Cosine Similarity','Manhattan Distance: |90−55| + |55−40|','Euclidean Distance: √((90−55)² + (55−40)²)'],
      4:['Continues until max_iter=300 — always runs all iterations','It stops — the centroids have converged (change below tolerance)','Splits the largest clusters to improve final inertia','Restarts with new centroids — fast convergence indicates a local minimum'],
      5:['Weight — its 112-unit range crushes Speed (range 1.0) in the d² calculation','Speed — smaller variables are more precise and K-Means prioritizes them','Both equally — K-Means normalizes features internally before calculating','Depends on random_state — without scaling the result is completely random'],
      6:['K-Means detects the rings perfectly — the diagram shown is incorrect','The problem is StandardScaler — without scaling K-Means detects the rings correctly','K-Means assumes spherical/convex clusters — for non-convex shapes use DBSCAN or Spectral Clustering','Raising K to 4+ clusters fixes the concentric rings problem with K-Means'],
    },
    salas:{
      1:{nombre:'The Legendary Outlier',concepto:'K-Means sensitivity to outliers (centroid = arithmetic mean)',feedbackOk:{title:'✅ CORRECT! The door opens...',text:'The centroid is the ARITHMETIC MEAN of all cluster points. A very distant outlier significantly shifts that mean, pulling the centroid away from the real group. K-Means has no defense against outliers — it\'s its main weakness. Solutions: remove outliers beforehand, or use K-Medoids (more robust).'},feedbackErr:{title:'❌ Incorrect. The ground shakes...',text:'The correct answer is A. The centroid IS the arithmetic mean of all cluster points. A very distant Legendary Pokémon "pulls" that mean away from the real group. K-Means does NOT remove or ignore outliers — that\'s its main vulnerability. Algorithms like DBSCAN are more robust to this.'},diagnosticoOk:'Understands that the centroid is a mean sensitive to extreme values.',diagnosticoErr:'Believes K-Means is robust to outliers. Reinforce: centroid = arithmetic mean.'},
      2:{nombre:'The Elbow Method',concepto:'Elbow Method — identifying optimal K in the Inertia vs K curve',feedbackOk:{title:'✅ CORRECT! The Elbow shines at K=3...',text:'The "elbow" is the point where adding more clusters stops reducing inertia significantly. From K=1 to K=3 inertia drops 4180 points (4800→620). From K=3 to K=7 it only drops 90 more. Adding more clusters doesn\'t justify the additional complexity.'},feedbackErr:{title:'❌ Incorrect. The curve doesn\'t lie...',text:'The correct answer is C (K=3). The most common error is choosing the K with the lowest inertia (K=7). With K=N inertia would be 0, but that doesn\'t cluster anything. The elbow is the sharp change point: K=2→3 drops 1480 points, K=3→4 only drops 40. That\'s the optimal K.'},diagnosticoOk:'Correctly identifies the inflection point in the Inertia vs K curve.',diagnosticoErr:'Confuses "minimum inertia = best K". Reinforce the elbow concept and complexity trade-off.'},
      3:{nombre:'The Duel Distance',concepto:'Distance metric in K-Means — Euclidean Distance',feedbackOk:{title:'✅ CORRECT! You are free!',text:'K-Means uses Euclidean Distance by default. Calculation: √((90−55)² + (55−40)²) = √(1225 + 225) = √1450 ≈ 38.08 units. Option C (Manhattan = 50) is a common trap: it\'s a valid distance, but standard K-Means uses Euclidean. Pearson and Cosine measure angles, not spatial proximity.'},feedbackErr:{title:'❌ Incorrect. The cave stays sealed...',text:'Correct answer: D — Euclidean Distance. K-Means minimizes the sum of squared Euclidean distances: d = √((90−55)² + (55−40)²) = √1450 ≈ 38.08. Manhattan (C) is a trap: valid, but not what sklearn.KMeans uses. Pearson and Cosine measure correlation/angle, not spatial distance.'},diagnosticoOk:'Knows that K-Means uses Euclidean Distance internally.',diagnosticoErr:'Confuses Manhattan with Euclidean, or mixes similarity metrics with distance metrics.'},
      4:{nombre:'Convergence',concepto:'K-Means stopping criterion — centroid convergence',feedbackOk:{title:'✅ CORRECT! The algorithm rests...',text:'K-Means stops when centroid movement between iterations falls below a tolerance (tol=1e-4 by default in sklearn). This is called convergence. The max_iter=300 parameter is the safety limit, not the goal — the algorithm stops BEFORE that if it converges, saving computation time. The n_iter_ attribute tells you how many iterations it actually used.'},feedbackErr:{title:'❌ Incorrect. The centroids stop on their own...',text:'Correct answer: B. K-Means automatically detects convergence when centroid displacement is less than tol (1e-4 in sklearn). It does NOT wait for max_iter. The max_iter=300 parameter is the maximum safety limit, not the guaranteed number of iterations.'},diagnosticoOk:'Understands the stopping criterion: K-Means converges when Δ centroids < tol.',diagnosticoErr:'Confuses convergence with max_iter. Reinforce: K-Means stops early when centroids don\'t move.'},
      5:{nombre:'StandardScaler',concepto:'Importance of scaling before K-Means — scale bias in distances',feedbackOk:{title:'✅ CORRECT! Weight crushes everything...',text:'Without scaling, K-Means uses Euclidean distances in original units. The term (Δweight)² can reach 112² = 12,544 while (Δspeed)² reaches only 1. Speed contributes less than 0.01% to the distance — practically ignored. StandardScaler transforms each feature to mean=0 and std=1, putting all features on equal footing.'},feedbackErr:{title:'❌ Incorrect. Size does matter...',text:'Correct answer: A. In d² = (Δweight)² + (Δspeed)², if Δweight can be 112 and Δspeed at most 1.0, Weight dominates with 12,544 vs 1. K-Means effectively ignores Speed. StandardScaler eliminates this bias by putting all features on the same scale.'},diagnosticoOk:'Understands how scale differences bias Euclidean distances in K-Means.',diagnosticoErr:'Believes K-Means normalizes internally or that scale doesn\'t matter. Reinforce the importance of StandardScaler.'},
      6:{nombre:'Impossible Shapes',concepto:'K-Means limitations — assumes spherical and convex clusters',feedbackOk:{title:'✅ CORRECT! K-Means can\'t see rings...',text:'K-Means assumes spherical/convex clusters because it minimizes distance to the centroid. With concentric rings, the centroid of each ring falls at the same point (the center), so K-Means ends up splitting data left/right instead of by ring. For non-convex shapes: DBSCAN (density-based) or Spectral Clustering (graph-based).'},feedbackErr:{title:'❌ Incorrect. The rings fool it...',text:'Correct answer: C. K-Means cannot detect concentric rings because the centroid of both groups would be at the same point (the center). The algorithm divides by proximity to centroid, resulting in vertical cuts. Alternatives: DBSCAN detects clusters of arbitrary density; Spectral Clustering transforms the space before grouping.'},diagnosticoOk:'Understands that K-Means assumes sphericity and fails with non-linear shapes (rings, crescents).',diagnosticoErr:'Believes K-Means adapts its shape to the data. Reinforce: centroids = means, assume convexity.'},
    },
  },
};

function setLang(l) {
  currentLang = l;
  const T = LANG[l];
  document.documentElement.lang = l;
  // Static text/HTML elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (T[k] !== undefined) el.innerHTML = T[k];
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.dataset.i18nPlaceholder;
    if (T[k] !== undefined) el.placeholder = T[k];
  });
  // Toggle button label
  document.getElementById('lang-toggle').textContent = l === 'es' ? '🌐 EN' : '🌐 ES';
  // Update chart if alive
  if (elbowChart) {
    elbowChart.data.datasets[0].label = T['chart-inercia'];
    elbowChart.data.datasets[1].label = T['chart-codo'];
    elbowChart.options.scales.x.title.text = T['chart-x'];
    elbowChart.options.scales.y.title.text = T['chart-y'];
    elbowChart.update();
  }
}

function toggleLang() {
  setLang(currentLang === 'es' ? 'en' : 'es');
}

// ── GAME DATA ─────────────────────────────────────────────────────────────
const SALAS = {
  1: {
    nombre:   'El Legendario Outlier',
    concepto: 'Sensibilidad de K-Means a outliers (centroide = media aritmética)',
    correcta: 0,
    feedbackOk: {
      title: '✅ ¡CORRECTO! La puerta se abre...',
      text:  'El centroide es la MEDIA ARITMÉTICA de todos los puntos del cluster. Un outlier muy alejado desplaza esa media significativamente, alejando el centroide del grupo real. K-Means no tiene mecanismo de defensa ante outliers — es su gran debilidad. Soluciones: eliminar outliers antes, o usar K-Medoids (más robusto).',
    },
    feedbackErr: {
      title: '❌ Incorrecto. El suelo tiembla...',
      text:  'La respuesta correcta es A. El centroide ES la media aritmética de todos los puntos del cluster. Un Pokémon Legendario muy alejado "tira" de esa media fuera del grupo real. K-Means NO elimina ni ignora outliers — esa es su principal vulnerabilidad. Algoritmos como DBSCAN son más robustos a esto.',
    },
    diagnosticoOk:  'Comprende que el centroide es una media sensible a valores extremos.',
    diagnosticoErr: 'Cree que K-Means es robusto a outliers. Reforzar: centroide = media aritmética.',
  },
  2: {
    nombre:   'El Método del Codo',
    concepto: 'Método del Codo — identificar K óptimo en la curva Inercia vs K',
    correcta: 2,
    feedbackOk: {
      title: '✅ ¡CORRECTO! El Codo brilla en K=3...',
      text:  'El "codo" es el punto donde añadir más clusters deja de reducir la inercia de forma significativa. De K=1 a K=3 la inercia cae 4180 puntos (4800→620). De K=3 a K=7 solo cae 90 puntos más. Añadir más clusters no justifica la complejidad adicional.',
    },
    feedbackErr: {
      title: '❌ Incorrecto. La curva no miente...',
      text:  'La respuesta correcta es C (K=3). El error más común es elegir el K con la inercia más baja (K=7). Con K=N la inercia sería 0, pero eso no agrupa nada. El codo es el punto de cambio brusco: K=2→3 baja 1480 puntos, K=3→4 solo baja 40. Ahí está el K óptimo.',
    },
    diagnosticoOk:  'Identifica correctamente el punto de inflexión en la curva Inercia vs K.',
    diagnosticoErr: 'Confunde "inercia mínima = mejor K". Reforzar concepto de codo y complejidad.',
  },
  3: {
    nombre:   'La Distancia del Duelo',
    concepto: 'Métrica de distancia en K-Means — Distancia Euclídea',
    correcta: 3,
    feedbackOk: {
      title: '✅ ¡CORRECTO! ¡Eres libre!',
      text:  'K-Means usa Distancia Euclídea por defecto. Cálculo: √((90−55)² + (55−40)²) = √(1225 + 225) = √1450 ≈ 38.08 unidades. La opción C (Manhattan = 50) es una trampa frecuente: es una distancia válida, pero K-Means estándar usa Euclídea. Pearson y Coseno miden ángulos, no proximidad espacial.',
    },
    feedbackErr: {
      title: '❌ Incorrecto. La cueva permanece sellada...',
      text:  'Respuesta correcta: D — Distancia Euclídea. K-Means minimiza la suma de distancias Euclídeas al cuadrado: d = √((90−55)² + (55−40)²) = √1450 ≈ 38.08. La Manhattan (C) es una trampa: válida, pero no es la que usa sklearn.KMeans. Pearson y Coseno miden correlación/ángulo, no distancia espacial.',
    },
    diagnosticoOk:  'Sabe que K-Means usa Distancia Euclídea internamente.',
    diagnosticoErr: 'Confunde Manhattan con Euclídea o mezcla métricas de similitud con distancia.',
  },
  4: {
    nombre:   'La Convergencia',
    concepto: 'Criterio de parada de K-Means — convergencia de centroides',
    correcta: 1,
    feedbackOk: {
      title: '✅ ¡CORRECTO! El algoritmo descansa...',
      text:  'K-Means para cuando el movimiento de centroides entre iteraciones cae bajo una tolerancia (tol=1e-4 por defecto en sklearn). Esto se llama convergencia. El parámetro max_iter=300 es el límite de seguridad, no el objetivo — el algoritmo para ANTES si converge, ahorrando tiempo de cómputo. El atributo n_iter_ te dice cuántas iteraciones realmente usó.',
    },
    feedbackErr: {
      title: '❌ Incorrecto. Los centroides se detienen solos...',
      text:  'Respuesta correcta: B. K-Means detecta automáticamente la convergencia cuando el desplazamiento de los centroides es menor que tol (1e-4 en sklearn). NO espera a max_iter. El parámetro max_iter=300 es el límite máximo de seguridad, no el número de iteraciones garantizadas.',
    },
    diagnosticoOk:  'Comprende el criterio de parada: K-Means converge cuando Δ centroides < tol.',
    diagnosticoErr: 'Confunde convergencia con max_iter. Reforzar: K-Means para antes si los centroides no se mueven.',
  },
  5: {
    nombre:   'El StandardScaler',
    concepto: 'Importancia del escalado previo a K-Means — sesgo de escala en distancias',
    correcta: 0,
    feedbackOk: {
      title: '✅ ¡CORRECTO! El Peso aplasta todo...',
      text:  'Sin escalar, K-Means usa distancias Euclídeas en unidades originales. El término (Δpeso)² puede alcanzar 112² = 12 544 mientras (Δvelocidad)² llega a solo 1. La Velocidad contribuye menos del 0.01% a la distancia — prácticamente ignorada. StandardScaler transforma cada feature a media=0 y std=1, poniendo todas en pie de igualdad.',
    },
    feedbackErr: {
      title: '❌ Incorrecto. El tamaño sí importa...',
      text:  'Respuesta correcta: A. En d² = (Δpeso)² + (Δvelocidad)², si Δpeso puede ser 112 y Δvelocidad máximo 1.0, el Peso domina con 12 544 vs 1. K-Means ignora efectivamente la Velocidad. StandardScaler elimina este sesgo poniendo todas las features en la misma escala.',
    },
    diagnosticoOk:  'Comprende cómo las diferencias de escala sesgan las distancias Euclídeas en K-Means.',
    diagnosticoErr: 'Cree que K-Means normaliza internamente o que la escala no afecta. Reforzar importancia de StandardScaler.',
  },
  6: {
    nombre:   'Las Formas Imposibles',
    concepto: 'Limitaciones de K-Means — asume clusters esféricos y convexos',
    correcta: 2,
    feedbackOk: {
      title: '✅ ¡CORRECTO! K-Means no ve anillos...',
      text:  'K-Means asume clusters esféricos/convexos porque minimiza la distancia al centroide. Con anillos concéntricos el centroide de cada anillo cae en el mismo punto (el centro), así que K-Means acaba dividiendo los datos izquierda/derecha en lugar de por anillo. Para formas no convexas: DBSCAN (basado en densidad) o Clustering Espectral (basado en grafos).',
    },
    feedbackErr: {
      title: '❌ Incorrecto. Los anillos lo engañan...',
      text:  'Respuesta correcta: C. K-Means no puede detectar anillos concéntricos porque el centroide de ambos grupos estaría en el mismo punto (el centro). El algoritmo divide por proximidad al centroide, resultando en cortes verticales. Alternativas: DBSCAN detecta clusters de densidad arbitraria; Clustering Espectral transforma el espacio antes de agrupar.',
    },
    diagnosticoOk:  'Comprende que K-Means asume esfericidad y falla con formas no lineales (anillos, medias lunas).',
    diagnosticoErr: 'Cree que K-Means adapta su forma a los datos. Reforzar: centroides = medias, asumen convexidad.',
  },
};

// ── GAME STATE ──────────────────────────────────────────────────────────────
const state = {
  nombre:    '',
  startTime: null,
  endTime:   null,
  answers:   {},  // { 1: { elegida, acierto }, ... }
};

let elbowChart = null;

// ── NAVIGATION ──────────────────────────────────────────────────────────────
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
  window.scrollTo(0, 0);

  if (id === 's-sala2') setTimeout(initElbowChart, 80);
}

// ── START ───────────────────────────────────────────────────────────────────
function startGame() {
  const input = document.getElementById('player-name');
  const nombre = input.value.trim();
  if (!nombre) { input.focus(); return; }
  state.nombre    = nombre;
  state.startTime = new Date();
  goTo('s-story');
}

// ── OPTION SELECTION ─────────────────────────────────────────────────────────
function selectOption(sala, elegida, el) {
  const datos    = SALAS[sala];
  const correcta = datos.correcta;
  const acierto  = elegida === correcta;

  // Record
  state.answers[sala] = { elegida, acierto };

  // Disable all options
  const grid = document.getElementById(`opts-sala${sala}`);
  grid.querySelectorAll('.opt').forEach(o => {
    o.classList.add('disabled');
    o.onclick = null;
  });

  // Mark selected
  const opts = grid.querySelectorAll('.opt');
  if (acierto) {
    el.classList.add('correct');
    el.querySelector('.opt-letter').textContent = '✓';
  } else {
    el.classList.add('wrong');
    el.querySelector('.opt-letter').textContent = '✗';
    // Reveal correct
    opts[correcta].classList.add('reveal-correct');
    opts[correcta].querySelector('.opt-letter').textContent = '✓';
  }

  // Feedback
  const panel = document.getElementById(`fb-sala${sala}`);
  const box   = document.getElementById(`fb-sala${sala}-box`);
  const title = document.getElementById(`fb-sala${sala}-title`);
  const text  = document.getElementById(`fb-sala${sala}-text`);

  const langSala = LANG[currentLang].salas[sala];
  const fb = acierto ? langSala.feedbackOk : langSala.feedbackErr;
  box.className   = `feedback-box ${acierto ? 'ok' : 'err'}`;
  title.textContent = fb.title;
  text.textContent  = fb.text;
  panel.classList.add('show');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── FINISH ───────────────────────────────────────────────────────────────────
function finishGame() {
  state.endTime = new Date();
  const aciertos = Object.values(state.answers).filter(a => a.acierto).length;

  const level  = aciertos <= 1 ? 0 : aciertos <= 3 ? 1 : aciertos <= 5 ? 2 : 3;
  const medals  = ['💀', '🔴', '🥈', '🏆'];
  const labels  = LANG[currentLang]['final-levels'];
  const pokemons = [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png', // Magikarp
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',  // Psyduck
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',  // Pikachu
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',   // Charizard
  ];
  const pokeNames = ['Magikarp', 'Psyduck', 'Pikachu', 'Charizard'];
  const dotsStr = '✅'.repeat(aciertos) + '❌'.repeat(6 - aciertos);

  document.getElementById('final-medal').textContent   = medals[level];
  document.getElementById('final-score').textContent   = `${aciertos}/6`;
  document.getElementById('final-dots').textContent    = dotsStr;
  document.getElementById('final-label').textContent   = labels[level];
  document.getElementById('final-name').textContent    = `— ${state.nombre}`;
  const pokeEl = document.getElementById('final-pokemon');
  pokeEl.src = pokemons[level];
  pokeEl.alt = pokeNames[level];

  goTo('s-final');
}

// ── RESET ────────────────────────────────────────────────────────────────────
function resetGame() {
  state.answers   = {};
  state.startTime = null;
  state.endTime   = null;

  [1,2,3,4,5,6].forEach(sala => {
    const grid = document.getElementById(`opts-sala${sala}`);
    const panel = document.getElementById(`fb-sala${sala}`);
    const letters = ['A','B','C','D'];

    grid.querySelectorAll('.opt').forEach((o, i) => {
      o.className = 'opt';
      o.querySelector('.opt-letter').textContent = letters[i];
      o.onclick = new Function(`selectOption(${sala}, ${i}, this)`);
    });
    // re-bind (simpler approach via setAttribute not needed since HTML inline)
    panel.classList.remove('show');
  });

  // Re-attach onclick since we nullified them
  document.querySelectorAll('.opt').forEach(opt => {
    if (!opt.onclick) {
      const grid = opt.closest('.options-grid');
      const sala = parseInt(grid.id.replace('opts-sala',''));
      const idx  = Array.from(grid.children).indexOf(opt);
      opt.onclick = function(){ selectOption(sala, idx, this); };
    }
  });
}

// ── REPORT ───────────────────────────────────────────────────────────────────
function buildReport() {
  const T        = LANG[currentLang];
  const aciertos = Object.values(state.answers).filter(a => a.acierto).length;
  const elapsed  = Math.floor((state.endTime - state.startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const segs = elapsed % 60;
  const letras = ['A','B','C','D'];
  const locale  = currentLang === 'es' ? 'es-ES' : 'en-US';

  // Meta
  document.getElementById('report-meta').innerHTML = `
    <span><strong>${T['meta-student']}:</strong> ${state.nombre}</span>
    <span><strong>${T['meta-date']}:</strong> ${state.startTime.toLocaleDateString(locale)}</span>
    <span><strong>${T['meta-time']}:</strong> ${state.startTime.toLocaleTimeString(locale, {hour:'2-digit',minute:'2-digit'})}</span>
    <span><strong>${T['meta-duration']}:</strong> ${mins}m ${segs}s</span>
    <span><strong>${T['meta-score']}:</strong> ${aciertos}/6</span>
  `;

  // Salas
  let salasHTML = '';
  [1,2,3,4,5,6].forEach(sala => {
    const datos    = T.salas[sala];
    const ans      = state.answers[sala];
    const acierto  = ans ? ans.acierto : false;
    const elegida  = ans ? ans.elegida : null;
    const corrIdx  = SALAS[sala].correcta;
    const tagClass = acierto ? 'ok' : 'err';
    const tagIcon  = acierto ? T['tag-correct'] : T['tag-wrong'];
    const opTextos = T.opcionTextos[sala];

    const elegidaRow = elegida !== null ? `
      <div class="report-field">
        <span class="label">${T['field-chosen']}</span>
        <span class="value">${letras[elegida]}) ${opTextos[elegida]}</span>
      </div>
    ` : '';

    const correctaRow = (!acierto && elegida !== null) ? `
      <div class="report-field">
        <span class="label">${T['field-correct']}</span>
        <span class="value">${letras[corrIdx]}) ${opTextos[corrIdx]}</span>
      </div>
    ` : '';

    const diag = acierto ? datos.diagnosticoOk : datos.diagnosticoErr;

    salasHTML += `
      <div class="report-sala">
        <div class="report-sala-title">
          <span class="sala-num">${T['room-label']} ${sala}</span>
          <span>${datos.nombre}</span>
          <span class="tag ${tagClass}" style="margin-left:auto;">${tagIcon}</span>
        </div>
        <div class="report-field">
          <span class="label">${T['field-concept']}</span>
          <span class="value">${datos.concepto}</span>
        </div>
        ${elegidaRow}
        ${correctaRow}
        <div class="report-field">
          <span class="label">${T['field-diagnosis']}</span>
          <span class="value" style="color:${acierto ? 'var(--ok)' : 'var(--err)'}">${diag}</span>
        </div>
      </div>
    `;
  });
  document.getElementById('report-salas').innerHTML = salasHTML;

  // Summary
  let summaryHTML = `<h3>${T['diag-title']}</h3>`;
  T['concepts'].forEach((label, i) => {
    const ok  = state.answers[i+1]?.acierto;
    const tag = ok
      ? `<span class="tag ok">${T['tag-understood']}</span>`
      : `<span class="tag err">${T['tag-reinforce']}</span>`;
    summaryHTML += `
      <div class="summary-row">
        <span>${label}</span>
        ${tag}
      </div>
    `;
  });

  const scoreBar = '█'.repeat(aciertos) + '░'.repeat(6 - aciertos);
  summaryHTML += `
    <div class="summary-row" style="margin-top:8px;">
      <span><strong>${T['score-total']}</strong></span>
      <span style="font-family:monospace;color:var(--yellow)">${scoreBar} ${aciertos}/6</span>
    </div>
  `;
  document.getElementById('report-summary').innerHTML = summaryHTML;
}

// ── ELBOW CHART ──────────────────────────────────────────────────────────────
function initElbowChart() {
  const ctx = document.getElementById('elbow-chart');
  if (!ctx) return;

  if (elbowChart) { elbowChart.destroy(); elbowChart = null; }

  const T = LANG[currentLang];
  elbowChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [
        {
          label: T['chart-inercia'],
          data:  [4800, 2100, 620, 580, 555, 540, 530],
          borderColor:     '#4a90d9',
          backgroundColor: 'rgba(74,144,217,0.12)',
          borderWidth: 3,
          pointRadius:      7,
          pointBackgroundColor: '#4a90d9',
          pointHoverRadius: 9,
          fill: true,
          tension: 0.35,
        },
        {
          label:       T['chart-codo'],
          data:        [null, null, 620, null, null, null, null],
          borderColor: 'rgba(0,0,0,0)',
          pointRadius: 12,
          pointBackgroundColor: '#FFCC00',
          pointBorderColor:     '#111',
          pointBorderWidth: 2,
          showLine: false,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#aaaacc', font: { family: 'Nunito', size: 13 } }
        },
        annotation: {},
        tooltip: {
          callbacks: {
            label: ctx => ` Inercia: ${ctx.raw?.toLocaleString() ?? '—'}`
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: T['chart-x'], color: '#8888aa', font: { size: 13 } },
          ticks: { color: '#8888aa' },
          grid:  { color: '#1e1e40' },
        },
        y: {
          title: { display: true, text: T['chart-y'], color: '#8888aa', font: { size: 13 } },
          ticks: { color: '#8888aa', callback: v => v.toLocaleString() },
          grid:  { color: '#1e1e40' },
        }
      },
      animation: { duration: 900, easing: 'easeOutQuart' }
    }
  });
}

// ── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => setLang('es'));