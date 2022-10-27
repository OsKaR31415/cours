
On travaille sur $C = \left\{\{ u_{n} \in \mathbb{C}^{\mathbb{N}} \mid \exists k > 0, u_{n} \leq kv_{n} \} \;\big|\; v_{n} \in \mathbb{C}^{\mathbb{N}} \right\}$


```dataviewjs
const data = dv.pages("#flashcards").file.map((x) => x.outlinks.length)
// building the chart object
const chartData = {
    type: 'line',
    data: {
        datasets: [{
            label: "Nom du truc",
            data: data, // dataview field
            }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
}
// render the graphic, using obsidian charts plugin
window.renderChart(chartData, this.container)
```

