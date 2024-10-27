export function getYears() {

    let yearStart = 2020;
    let yearEnd = new Date().getFullYear();

    let years = [];

    for(let currentYear = yearStart; currentYear <= yearEnd; currentYear++ ) {

        years.push({ id: currentYear + "", description: currentYear + "" });
    }

    return years;
}