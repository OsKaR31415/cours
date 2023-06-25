up:: [[PKM|PKM]]
title:: "my efforts shown as heatmaps"
#pkm 

---

```dataviewjs
dv.span("**Kung-fu**")
const calendarData = {
    showCurrentDayBorder: true, // (optional) defaults to true
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"daily"').where(p => p.kung_fu)) {
    //dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.kung_fu, // (required) the data you want to track, will map color intensities automatically
        color: "dark_green",
    })
}

renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**Spaced repetition :luc_repeat: 🧠**")
const calendarData = {
    showCurrentDayBorder: true, // (optional) defaults to true
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"daily"').where(p => p.kung_fu)) {
    //dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.spaced_repetition, // (required) the data you want to track, will map color intensities automatically
        color: "dark_purple",
    })
}

renderHeatmapCalendar(this.container, calendarData)
```

