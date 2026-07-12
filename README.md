# 🧠 K-Means Clustering — Masterclass Pokémon

> 🎓 **Repositorio académico** | Bootcamp de Machine Learning
> 📌 Módulo: Aprendizaje No Supervisado — K-Means Clustering
> 🎮 Temática: Pokémon

¿Alguna vez has querido agrupar cosas sin que nadie te diga cómo hacerlo? Eso es exactamente lo que hace **K-Means**. En esta clase aprendemos a descubrir grupos escondidos dentro de datos, usando el mundo Pokémon para que todo sea más fácil de entender.

<details>
<summary>English</summary>

Have you ever wanted to group things without anyone telling you how? That's exactly what **K-Means** does. In this class we learn to discover hidden groups within data, using the Pokémon world to make everything easier to understand.

</details>

---

## 📁 ¿Qué hay en este repositorio?

```
Masterclass/
├── 📂 docs/
│   ├── KMeansPresentacion.pdf        ← Diapositivas de la clase
│   ├── FichaDeCriterioKMeans.pdf     ← Reflexión ética del algoritmo
│   └── 911Kmean.pdf                  ← Guía de errores comunes
├── 📂 notebooks/
│   ├── KMeans_Pokemon.ipynb          ← Ejercicios para el alumno
│   ├── KMeans_PokemonSolutions.ipynb ← Soluciones completas
│   └── KMeans_PokemonEnglish.ipynb   ← Versión en inglés
├── 🌐 index.html                     ← Escape Room interactivo (juego web)
├── js/main.js
└── css/styles.css
```

<details>
<summary>English</summary>

```
Masterclass/
├── 📂 docs/
│   ├── KMeansPresentacion.pdf        ← Class slides
│   ├── FichaDeCriterioKMeans.pdf     ← Ethical reflection on the algorithm
│   └── 911Kmean.pdf                  ← Common errors guide
├── 📂 notebooks/
│   ├── KMeans_Pokemon.ipynb          ← Student exercises
│   ├── KMeans_PokemonSolutions.ipynb ← Complete solutions
│   └── KMeans_PokemonEnglish.ipynb   ← English version
├── 🌐 index.html                     ← Interactive Escape Room (web game)
├── js/main.js
└── css/styles.css
```

</details>

---

## 📄 Documentos de la clase

<details>
<summary>📊 <strong>KMeansPresentacion.pdf — ¿De qué trata la clase?</strong></summary>

### 🏝️ La idea principal

Imagina que llegas a una isla nueva **sin Pokédex**. Ves criaturas por todos lados pero nadie te dice qué son. Lo único que puedes hacer es observarlas y agruparlas por lo que tienen en común: tamaño, color, comportamiento.

Eso es el **aprendizaje no supervisado**: encontrar grupos en los datos sin que nadie te diga cuál es la respuesta correcta.

---

### 🔵 ¿Qué es un cluster?

Un **cluster** es simplemente un grupo de cosas parecidas entre sí. Las reglas son:
- Cada elemento pertenece a **un solo** grupo.
- **Todos** los elementos quedan asignados a algún grupo.
- Los grupos son **parecidos por dentro** y **diferentes entre sí**.

---

### ⚙️ ¿Cómo funciona K-Means? (4 pasos)

Piensa en K-Means como un juego donde hay **líderes de equipo (Centroides)** y el resto de Pokémon se une al líder más cercano.

```
1. 🎲 Inicialización  →  Se colocan K líderes en posiciones iniciales
2. 📍 Asignación      →  Cada Pokémon se une al líder más cercano
3. 🔄 Actualización   →  Cada líder se mueve al centro de su equipo
4. ✅ Convergencia    →  Se repite hasta que los líderes ya no se mueven
```

> **Centroide** = el "líder" de cada grupo. Su posición es el promedio (media aritmética) de todos los miembros del equipo.

---

### 📏 ¿Cómo sabe el algoritmo quién está más cerca?

Usa la **distancia en línea recta (Distancia Euclídea)** entre dos puntos:

```
distancia = √((x₁−x₂)² + (y₁−y₂)²)
```

⚠️ **Problema importante**: si una variable tiene números muy grandes (ej. Peso: 0–500 kg) y otra muy pequeños (ej. Velocidad: 0–1), el algoritmo va a ignorar la segunda porque los números grandes "dominan" el cálculo.

✅ **Solución**: igualar las escalas antes de empezar (Estandarización) usando `StandardScaler`.

---

### 📐 ¿Cuántos grupos elijo? El Método del Codo

Uno de los problemas de K-Means es que tú decides cuántos grupos quieres antes de correrlo. Para ayudarte, existe el **Método del Codo**:

1. Prueba K = 1, 2, 3... grupos
2. Para cada K mide qué tan compactos quedaron los grupos (esto se llama **Inercia** o **SSE**)
3. Grafica los resultados — vas a ver que la curva baja rápido al principio y luego se aplana
4. El punto donde "dobla" la curva (el codo) es el K ideal

> En los ejemplos de la clase, el codo aparece en **K = 3**.

---

### 😊 ¿Quedaron bien los grupos? El Coeficiente de Silueta

Esta métrica te dice si cada elemento quedó en el grupo correcto:

| Resultado | Qué significa |
|-----------|---------------|
| 😄 Cerca de **1** | Perfecto — el elemento está muy bien ubicado en su grupo |
| 😐 Cerca de **0** | En la frontera — podría pertenecer a dos grupos distintos |
| 😟 Menor que **0** | Mal ubicado — estaría mejor en otro grupo |

---

### 👍 Lo bueno y lo malo de K-Means

| ✅ Puntos fuertes | ⚠️ Limitaciones |
|-------------------|-----------------|
| Rápido y fácil de entender | Un dato muy raro **(Outlier)** puede arrastrar al líder lejos del grupo real |
| Funciona bien con millones de datos | No puede detectar grupos con formas raras (anillos, medias lunas) |
| Fácil de implementar en Python | Hay que decidir cuántos grupos quieres antes de empezar |

---

### 🏅 ¿Mis grupos se parecen a los del experto? (Índice de Rand Ajustado / ARI)

Si tienes una clasificación de referencia hecha por un experto, puedes comparar:
- **ARI = 1.0** 🎉 → tus grupos son idénticos a los del experto
- **ARI = 0.0** 😬 → agrupaste al azar, no coincide en nada

</details>

<details>
<summary>English</summary>

### 🏝️ The main idea

Imagine you arrive at a new island **without a Pokédex**. You see creatures everywhere but nobody tells you what they are. All you can do is observe them and group them by what they have in common: size, color, behavior.

That is **unsupervised learning**: finding groups in data without anyone telling you what the right answer is.

---

### 🔵 What is a cluster?

A **cluster** is simply a group of similar things. The rules are:
- Each element belongs to **one and only one** group.
- **All** elements are assigned to some group.
- Groups are **similar on the inside** and **different from each other**.

---

### ⚙️ How does K-Means work? (4 steps)

Think of K-Means as a game where there are **team leaders (Centroids)** and the rest of the Pokémon join the nearest leader.

```
1. 🎲 Initialization  →  K leaders are placed at initial positions
2. 📍 Assignment      →  Each Pokémon joins the nearest leader
3. 🔄 Update          →  Each leader moves to the center of its team
4. ✅ Convergence     →  Repeat until the leaders no longer move
```

> **Centroid** = the "leader" of each group. Its position is the average (arithmetic mean) of all its members.

---

### 📏 How does the algorithm know who is closest?

It uses the **straight-line distance (Euclidean Distance)** between two points:

```
distance = √((x₁−x₂)² + (y₁−y₂)²)
```

⚠️ **Important problem**: if one variable has very large numbers (e.g. Weight: 0–500 kg) and another has very small ones (e.g. Speed: 0–1), the algorithm will ignore the second because the large numbers "dominate" the calculation.

✅ **Solution**: equalize the scales before starting (Standardization) using `StandardScaler`.

---

### 📐 How many groups do I choose? The Elbow Method

One of the challenges of K-Means is that you decide how many groups you want before running it. To help you, there is the **Elbow Method**:

1. Try K = 1, 2, 3... groups
2. For each K, measure how compact the groups are (this is called **Inertia** or **SSE**)
3. Plot the results — you will see the curve drops fast at first and then flattens out
4. The point where the curve "bends" (the elbow) is the ideal K

> In the class examples, the elbow appears at **K = 3**.

---

### 😊 Are the groups good? The Silhouette Coefficient

This metric tells you whether each element ended up in the right group:

| Result | What it means |
|--------|---------------|
| 😄 Close to **1** | Perfect — the element is very well placed in its group |
| 😐 Close to **0** | On the border — it could belong to two different groups |
| 😟 Less than **0** | Misplaced — it would be better off in another group |

---

### 👍 The good and the bad of K-Means

| ✅ Strengths | ⚠️ Limitations |
|--------------|----------------|
| Fast and easy to understand | A very unusual data point **(Outlier)** can pull the leader far from the real group |
| Works well with millions of data points | Cannot detect groups with unusual shapes (rings, half-moons) |
| Easy to implement in Python | You have to decide how many groups you want before starting |

---

### 🏅 Do my groups match the expert's? (Adjusted Rand Index / ARI)

If you have a reference classification made by an expert, you can compare:
- **ARI = 1.0** 🎉 → your groups are identical to the expert's
- **ARI = 0.0** 😬 → you grouped randomly, nothing matches

</details>

---

<details>
<summary>⚖️ <strong>FichaDeCriterioKMeans.pdf — ¿Es siempre justo usar K-Means?</strong></summary>

K-Means es una herramienta poderosa, pero hay que usarla con cuidado. Estos son los riesgos que debemos tener en cuenta:

- 🔢 **El tamaño de los números importa**: si no estandarizas los datos antes, las variables con números grandes van a "ganar" y las pequeñas van a ser ignoradas. Esto puede hacer que el algoritmo agrupe mal.

- 👤 **Riesgo de sesgo**: en aplicaciones reales (como agrupar personas), un clustering mal hecho puede marginar grupos minoritarios o reforzar prejuicios que ya existían en los datos originales.

- ✅ **Antes de tomar decisiones importantes** con los resultados de K-Means, siempre hay que validar que los grupos tengan sentido, por ejemplo usando el Coeficiente de Silueta.

> 💡 En resumen: K-Means no piensa por sí solo en si lo que hace es justo. Ese trabajo lo hacemos nosotros.

</details>

<details>
<summary>English</summary>

K-Means is a powerful tool, but it must be used carefully. These are the risks we need to keep in mind:

- 🔢 **Number size matters**: if you don't standardize the data first, variables with large numbers will "win" and the smaller ones will be ignored. This can cause the algorithm to group things incorrectly.

- 👤 **Risk of bias**: in real-world applications (such as grouping people), a poorly done clustering can marginalize minority groups or reinforce biases that already existed in the original data.

- ✅ **Before making important decisions** based on K-Means results, always validate that the groups make sense — for example, using the Silhouette Coefficient.

> 💡 In short: K-Means does not think on its own about whether what it does is fair. That work is ours to do.

</details>

---

<details>
<summary>🚑 <strong>911Kmean.pdf — Guía de primeros auxilios (errores comunes)</strong></summary>

### ❌ Error 1: "Mis grupos se ven mezclados y no tienen sentido"

🔍 **Qué pasó**: una variable con números muy grandes está dominando el cálculo y el resto queda ignorada.

🎮 **En Pokémon**: es como comparar a Snorlax y Ninjask usando solo el peso. El peso de Snorlax es tan grande que nunca te fijarías en quién es más rápido.

✅ **Solución**: aplicar `StandardScaler` **antes** de entrenar el modelo para igualar las escalas.

---

### ❌ Error 2: "El código tarda una eternidad en terminar"

🔍 **Qué pasó**: los líderes iniciales se colocaron en malas posiciones y el algoritmo necesita muchas vueltas para encontrar algo razonable.

🎮 **En Pokémon**: imagina que los líderes de equipo pusieron sus banderas en lugares imposibles de alcanzar. Los Pokémon no saben a dónde ir.

✅ **Solución**: usar una inicialización inteligente de líderes (`k-means++`) que elige los puntos de partida de forma más estratégica.

---

### ❌ Error 3: "Un dato raro arruinó todos mis grupos"

🔍 **Qué pasó**: hay un valor extremo (outlier) que está jalando al líder del grupo lejos del resto.

🎮 **En Pokémon**: si metes a Mewtwo (stats 999) en un grupo de Pidgeys, el líder del grupo se va a mover tanto hacia Mewtwo que ya no representa a los Pidgeys.

✅ **Solución**: detectar y eliminar (o separar) los datos raros **antes** de aplicar K-Means.

---

### ❌ Error 4: "Uno de mis grupos quedó vacío"

🔍 **Qué pasó**: la inicialización fue mala o elegiste un K demasiado alto.

✅ **Solución**: scikit-learn lo corrige automáticamente, pero revisa tu K con el Método del Codo para asegurarte.

---

### ❓ Preguntas frecuentes

**¿K-Means siempre encuentra la solución perfecta?**
No. A veces queda atascado en una solución "buena pero no la mejor". Por eso se recomienda correrlo varias veces y quedarse con el mejor resultado (`n_init`).

**¿Puedo agrupar por tipo de Pokémon (Fuego, Agua)?**
No directamente. K-Means solo trabaja con números. Los tipos son categorías y necesitarían un tratamiento diferente.

**¿Cómo sé si mis grupos se parecen a los del Profesor Oak?**
Usando el ARI: si da **1.0** tus grupos son iguales a los del experto, si da **0.0** fue al azar.

</details>

<details>
<summary>English</summary>

### ❌ Error 1: "My groups look mixed up and make no sense"

🔍 **What happened**: a variable with very large numbers is dominating the calculation and everything else is being ignored.

🎮 **In Pokémon**: it's like comparing Snorlax and Ninjask using only their weight. Snorlax's weight is so large that you'd never notice who is faster.

✅ **Solution**: apply `StandardScaler` **before** training the model to equalize the scales.

---

### ❌ Error 2: "The code takes forever to finish"

🔍 **What happened**: the initial leaders were placed in bad positions and the algorithm needs many iterations to find something reasonable.

🎮 **In Pokémon**: imagine the team leaders planted their flags in places that are impossible to reach. The Pokémon don't know where to go.

✅ **Solution**: use smart leader initialization (`k-means++`) which picks starting points in a more strategic way.

---

### ❌ Error 3: "One weird data point ruined all my groups"

🔍 **What happened**: there is an extreme value (outlier) pulling the group's leader far away from the rest.

🎮 **In Pokémon**: if you put Mewtwo (stats 999) into a group of Pidgeys, the group leader will move so far toward Mewtwo that it no longer represents the Pidgeys.

✅ **Solution**: detect and remove (or separate) the outliers **before** applying K-Means.

---

### ❌ Error 4: "One of my groups ended up empty"

🔍 **What happened**: the initialization was poor or you chose a K that is too high.

✅ **Solution**: scikit-learn corrects this automatically, but double-check your K using the Elbow Method to be sure.

---

### ❓ Frequently asked questions

**Does K-Means always find the perfect solution?**
No. Sometimes it gets stuck in a "good but not the best" solution. That's why it is recommended to run it several times and keep the best result (`n_init`).

**Can I group by Pokémon type (Fire, Water)?**
Not directly. K-Means only works with numbers. Types are categories and would need a different treatment.

**How do I know if my groups match Professor Oak's?**
Using the ARI: if it gives **1.0** your groups are identical to the expert's; if it gives **0.0** it was random.

</details>

---

## 📓 Notebooks de práctica

Los notebooks son archivos de Python donde puedes ejecutar el código paso a paso, como si fuera un cuaderno interactivo. Trabajan con estadísticas de Pokémon reales.

<details>
<summary>📋 <strong>Ver qué hace cada notebook y cómo se usa</strong></summary>

### 🗂️ ¿Qué hay en cada archivo?

| Archivo | Para quién | Qué contiene |
|---------|------------|--------------|
| 📘 `KMeans_Pokemon.ipynb` | Alumno | Ejercicios con espacios en blanco para completar (`# TODO`) |
| ✅ `KMeans_PokemonSolutions.ipynb` | Profesor / revisión | El mismo notebook pero con todo resuelto |
| 🌐 `KMeans_PokemonEnglish.ipynb` | Versión internacional | El laboratorio completo en inglés |

### 🔬 ¿Qué se practica?

1. 📦 Cargar y explorar el dataset de Pokémon
2. ⚖️ Estandarizar los datos con `StandardScaler`
3. 📐 Encontrar el K ideal con el Método del Codo
4. 🤖 Entrenar el modelo con `KMeans` de Python
5. 📊 Evaluar qué tan buenos quedaron los grupos

</details>

<details>
<summary>English</summary>

Notebooks are Python files where you can run code step by step, like an interactive workbook. They work with real Pokémon statistics.

### 🗂️ What is in each file?

| File | For whom | What it contains |
|------|----------|------------------|
| 📘 `KMeans_Pokemon.ipynb` | Student | Exercises with blank spaces to fill in (`# TODO`) |
| ✅ `KMeans_PokemonSolutions.ipynb` | Teacher / review | The same notebook but fully solved |
| 🌐 `KMeans_PokemonEnglish.ipynb` | International version | The complete lab in English |

### 🔬 What is practiced?

1. 📦 Load and explore the Pokémon dataset
2. ⚖️ Standardize the data with `StandardScaler`
3. 📐 Find the ideal K using the Elbow Method
4. 🤖 Train the model with Python's `KMeans`
5. 📊 Evaluate how good the resulting groups are

</details>

---

## 🎮 Escape Room — "La Cueva de los Centroides"

Un **juego web interactivo** para poner a prueba lo aprendido. Solo tienes que abrir el archivo `index.html` en cualquier navegador. No necesita instalación ni internet.

<details>
<summary>🕹️ <strong>Ver cómo funciona el juego</strong></summary>

### 🗺️ La historia

Eres un Entrenador Pokémon atrapado en la **Cueva de los Centroides**. Para escapar debes superar **6 salas**, cada una con una pregunta sobre K-Means. Solo tienes **una oportunidad** por sala. Al final recibes un reporte con tu puntuación y diagnóstico por concepto.

### 🚪 Las 6 salas

| Sala | Nombre | ¿Qué se evalúa? |
|------|--------|-----------------|
| 1 | 👾 El Legendario Outlier | ¿Qué le pasa al grupo cuando aparece un dato raro? |
| 2 | 📐 El Método del Codo | ¿Cómo elegir el número ideal de grupos? |
| 3 | ⚔️ La Distancia del Duelo | ¿Cómo mide K-Means la cercanía entre dos puntos? |
| 4 | 🔄 La Convergencia | ¿Cuándo sabe el algoritmo que ya terminó? |
| 5 | ⚖️ El StandardScaler | ¿Por qué es peligroso no igualar las escalas? |
| 6 | 🌀 Las Formas Imposibles | ¿En qué situaciones K-Means no funciona bien? |

### ✨ Extras del juego
- 💬 Explicación detallada después de cada respuesta (acertada o no)
- 🌐 Disponible en español e inglés
- 🖨️ Reporte final imprimible para el profesor
- 📊 Gráfico interactivo del Método del Codo

</details>

<details>
<summary>English</summary>

An **interactive web game** to put what you've learned to the test. Just open the `index.html` file in any browser. No installation or internet connection required.

### 🗺️ The story

You are a Pokémon Trainer trapped in the **Cave of the Centroids**. To escape you must pass **6 rooms**, each with a question about K-Means. You only get **one chance** per room. At the end you receive a report with your score and a diagnosis per concept.

### 🚪 The 6 rooms

| Room | Name | What is tested? |
|------|------|-----------------|
| 1 | 👾 The Legendary Outlier | What happens to the group when an unusual data point appears? |
| 2 | 📐 The Elbow Method | How to choose the ideal number of groups? |
| 3 | ⚔️ The Duel Distance | How does K-Means measure closeness between two points? |
| 4 | 🔄 Convergence | When does the algorithm know it's done? |
| 5 | ⚖️ The StandardScaler | Why is it dangerous not to equalize the scales? |
| 6 | 🌀 The Impossible Shapes | In which situations does K-Means not work well? |

### ✨ Game extras
- 💬 Detailed explanation after each answer (right or wrong)
- 🌐 Available in Spanish and English
- 🖨️ Printable final report for the teacher
- 📊 Interactive Elbow Method chart

</details>

---

## 📖 Glosario

<details>
<summary>🔤 <strong>¿No entiendes algún término? Ábrelo aquí</strong></summary>

| Término | Explicación sencilla |
|---------|----------------------|
| 🔵 **Clustering** | Agrupar datos por similitud, sin que nadie te diga cómo hacerlo |
| 🎯 **Centroide** | El "líder" de cada grupo; su posición es el promedio de todos sus miembros |
| 🔢 **K** | El número de grupos que decides antes de empezar |
| 📉 **Inercia (SSE)** | Qué tan compactos son los grupos; cuanto más baja, mejor |
| 📐 **Método del Codo** | Técnica para encontrar el número ideal de grupos mirando una gráfica |
| ⚖️ **StandardScaler** | Herramienta que iguala la escala de todas las variables antes de agrupar |
| 😊 **Coeficiente de Silueta** | Nota que le pone a cada elemento según qué tan bien ubicado está en su grupo |
| 🏅 **ARI (Índice de Rand Ajustado)** | Compara tus grupos con los de un experto (1 = idénticos, 0 = al azar) |
| 👾 **Outlier** | Un dato muy raro que se aleja mucho del resto y puede confundir al algoritmo |
| ✅ **Convergencia** | El momento en que el algoritmo decide que ya terminó porque los grupos no cambian más |
| 🚀 **Inicialización inteligente (k-means++)** | Una forma más estratégica de colocar los líderes al inicio para obtener mejores resultados |
| 🔵 **DBSCAN** | Otro algoritmo de agrupamiento que sí puede detectar formas raras como anillos |

</details>

<details>
<summary>English</summary>

| Term | Simple explanation |
|------|--------------------|
| 🔵 **Clustering** | Grouping data by similarity, without anyone telling you how to do it |
| 🎯 **Centroid** | The "leader" of each group; its position is the average of all its members |
| 🔢 **K** | The number of groups you decide on before starting |
| 📉 **Inertia (SSE)** | How compact the groups are; the lower, the better |
| 📐 **Elbow Method** | Technique to find the ideal number of groups by looking at a chart |
| ⚖️ **StandardScaler** | Tool that equalizes the scale of all variables before grouping |
| 😊 **Silhouette Coefficient** | Score given to each element based on how well-placed it is in its group |
| 🏅 **ARI (Adjusted Rand Index)** | Compares your groups to an expert's (1 = identical, 0 = random) |
| 👾 **Outlier** | A very unusual data point that strays far from the rest and can confuse the algorithm |
| ✅ **Convergence** | The moment the algorithm decides it is done because the groups no longer change |
| 🚀 **Smart initialization (k-means++)** | A more strategic way to place the leaders at the start to get better results |
| 🔵 **DBSCAN** | Another clustering algorithm that can detect unusual shapes like rings |

</details>

---

## 🗓️ ¿Cómo seguir la clase paso a paso?

```
🎬 PASO 1 — Ver la presentación        →  KMeansPresentacion.pdf
⚖️ PASO 2 — Leer la ficha ética        →  FichaDeCriterioKMeans.pdf
💻 PASO 3 — Hacer el laboratorio       →  KMeans_Pokemon.ipynb
✅ PASO 4 — Revisar las soluciones     →  KMeans_PokemonSolutions.ipynb
🚑 PASO 5 — Si hay dudas o errores     →  911Kmean.pdf
🎮 PASO 6 — Autoevaluarse jugando      →  index.html (Escape Room)
```

<details>
<summary>English</summary>

```
🎬 STEP 1 — Watch the presentation     →  KMeansPresentacion.pdf
⚖️ STEP 2 — Read the ethics sheet      →  FichaDeCriterioKMeans.pdf
💻 STEP 3 — Do the lab                 →  KMeans_Pokemon.ipynb
✅ STEP 4 — Review the solutions       →  KMeans_PokemonSolutions.ipynb
🚑 STEP 5 — If there are doubts/errors →  911Kmean.pdf
🎮 STEP 6 — Self-assess by playing     →  index.html (Escape Room)
```

</details>
