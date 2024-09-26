// Datos de los productos y sus precios
const menu = {
    entradas: {
        'Empanadas (carne o jamón y queso)': 1000,
        'Ensalada Rusa': 2400,
        'Matambre Casero': 4400,
        'Mayonesa De Ave': 2600,
        'Lengua': 3500,
        'Omelet Mixto': 4000,
        'Omelet Jamón o queso': 3500,
        'Rabas': 9500,
    },
    tortillas: {
        'Tortilla De Papa': 3600,
        'Tortilla De Papa Y Cebolla': 4000,
        'Tortilla Española': 5000,
        'Tortilla Especial Napoli': 5200,
        'Tortilla De Acelga': 3300,
    },
    ensaladas: {
        '1 Gusto': 2400,
        '2 Gustos': 2500,
        '3 Gustos': 2900,
        '4 Gustos': 3300,
        'Rúcula Y Queso': 3500,
        'Especial Napoli': 4300,
    },
    pastas: {
        'Canelones Tuco': 4000,
        'Canelones Crema': 5000,
        'Canelones Mixtos': 4800,
        'Lasagna Napoli': 5000,
        'Ñoquis Tuco': 3500,
        'Ñoquis Crema': 4500,
        'Ñoquis Mixtos': 4300,
        'Ravioles Tuco': 4000,
        'Ravioles Crema': 5000,
        'Ravioles Mixtos': 4800,
        'Sorrentinos Tuco': 4000,
        'Sorrentinos Crema': 5000,
        'Sorrentinos Mixtos': 4800,
        'Tallarines Tuco': 3500,
        'Tallarines Crema': 4500,
        'Tallarines Mixtos': 4300,
        'Estofado De Carne': 2800,
        'Estofado De Pollo': 3500,
    },
    delDia: {
        'Arroz Con Pollo': 5000,
        'Puchero': 5000,
        'Guiso De Lentejas (Martes)': 4800,
        'Guiso De Mondongo': 4800,
        'Estofado Con Papa Natural': 5600,
    },
    carnes: {
        'Vacío': 6000,
        'Vacío A La Piamontesa': 9000,
        'Vacío Al Roquefort': 8600,
        'Vacío Al Champignon': 9000,
        'Vacío Al Puerro': 8400,
        'Parrillada P/1': 10000,
        'Parrillada P/2': 20000,
        'Costeleta De Ternera': 4500,
        'Costeleta De Cerdo': 4500,
        'Entrecot': 6500,
        'Asado De Tira': 6800,
        'Chorizo': 2200,
        'Morcilla': 1800,
        'Matambre De Ternera O Cerdo (solo)': 7000,
        'Matambre Al Puerro': 9400,
        'Matambre A La Crema': 9200,
        'Bife De Pollo': 3500,
        'Pollo 1/4': 3300,
        'Pollo Relleno': 7000,
        'Pollo Relleno Al Champignon': 9600,
        'Pollo Relleno Al Roquefort': 9600,
        'Suprema': 3500,
        'Suprema Napolitana': 4500,
        'Suprema Napolitana Con Papas': 7000,
        'Suprema Maryland': 11000,
        'Milanesa': 3700,
        'Milanesa Napolitana': 4700,
        'Milanesa Napolitana Con Papas': 7200,
        'Riñón Provenzal O Leonesa': 6500,
    },
    sandwiches: {
        'Fam De Milanesa O Suprema Común': 3800,
        'Fam De Milanesa O Suprema Completo': 4500,
        'Fam Lomito Completo': 5400,
        'Choripán Común': 3000,
        'Choripán Completo': 4300,
    },
    pizzas: {
        'Pizza De Queso': 8000,
        'Pizza Especial': 9000,
        'Pizza De Roquefort': 9800,
        'Pizza Napolitana': 10800,
    },
    mariscos: {
        'Filet De Merluza': 5000,
        'Filet De Merluza A La Napolitana': 6000,
        'Paella': 10000,
        'Arroz Con Calamar': 9000,
        'Cazuela De Mariscos': 11000,
        'Lasagna De Mariscos': 9500,
    },
};

// Función para mostrar el menú en la página
function displayMenu() {
    const container = document.getElementById('menu-container');
    for (let category in menu) {
        const section = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        section.appendChild(title);

        const list = document.createElement('ul');
        for (let item in menu[category]) {
            const listItem = document.createElement('li');
            listItem.textContent = `${item}: $${menu[category][item]}`;
            list.appendChild(listItem);
        }
        section.appendChild(list);
        container.appendChild(section);
    }
}

// Ejecutar la función al cargar la página
window.onload = displayMenu;
