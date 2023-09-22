const geoOffice = {
	type: "FeatureCollection",
	features: [
		// España
		{
			type: "Feature",
			properties: {
				country: "España",
				name: "Manuel Gonzalez",
				address: "Calle Emilia Pardo Bazán 1, 28903 Getafe, Madrid",
				email: "informacion@iniseg.es",
				phone1: "(+34) 912 141 926",
				phone2: "(+34) 698 94 67 60",
				link: "https://www.iniseg.es/",
				img: "assets/images/menu/logo-iniseg.png",
				icon: "assets/images/flags/spain.png",
			},
			geometry: { coordinates: [-3.7250254302832104, 40.40762311697125], type: "Point" },
			id: 0,
		},
		// Estados Unidos
		{
			type: "Feature",
			properties: {
				country: "Estados Unidos",
				name: "",
				address: " 3350 SW 148th Ave Suite 120-232 Miramar, FL 33027",
				email: "informacion@iniseg.es",
				phone1: "",
				phone2: "",
				link: "#",
				img: "assets/images/cards/avatar.jpg",
				icon: "assets/images/flags/usa.png",
			},
			geometry: { coordinates: [-80.19483300939197, 25.775466109932196], type: "Point" },
			id: 1,
		},
		// Guatemala
		{
			type: "Feature",
			properties: {
				country: "Guatemala",
				name: "Gabriel Juárez Lucas",
				address: "--",
				email: "informacion@iniseg.gt",
				phone1: "",
				phone2: "",
				link: "",
				img: "assets/images/cards/director6.jpg",
				icon: "assets/images/flags/guatemala.png",
			},
			geometry: { coordinates: [-90.51066786881499, 14.643671313773837], type: "Point" },
			id: 2,
		},
		// República Dominicana
		{
			type: "Feature",
			properties: {
				country: "República Dominicana",
				name: "Ambiorix Cepeda Hernández",
				address: "--",
				email: "informacion@iniseg.do",
				phone1: "(+1) 809 2849208",
				phone2: "",
				link: "",
				img: "assets/images/cards/director8.jpg",
				icon: "assets/images/flags/dominicanRepublic.png",
			},
			geometry: { coordinates: [-69.93561418016417, 18.47630340658148], type: "Point" },
			id: 3,
		},
		// Colombia
		{
			type: "Feature",
			properties: {
				country: "Colombia",
				name: "Elmers Freddy Velandia",
				address: "Cr.15 # 88-64 edificio Zimma. piso 3 oficina 301.",
				email: "informacion@iniseg.co",
				phone1: "(+57) 601 508 5983",
				phone2: "(+57) 317 367 5907",
				link: "https://www.iniseg.es/colombia/",
				img: "assets/images/cards/director2.jpg",
				icon: "assets/images/flags/colombia.png",
			},
			geometry: { coordinates: [-74.0862613620725, 4.648787384234694], type: "Point" },
			id: 5,
		},
		// Ecuador
		{
			type: "Feature",
			properties: {
				country: "Ecuador",
				name: "Ms Miguel Ramiro Mantilla Andrade Gral Insp (SP)",
				address:
					"Francisco de Paula OE4-13 y 24 de septiembre, Valle de los Chillos, sector puente de la Autopista General Rumiñahui",
				email: "informacion@iniseg.ec",
				phone1: "",
				phone2: "",
				link: "",
				img: "assets/images/cards/director4.jpg",
				icon: "assets/images/flags/ecuador.png",
			},
			geometry: { coordinates: [-78.51784919206966, -0.23930757369956268], type: "Point" },
			id: 6,
		},
		// Perú
		{
			type: "Feature",
			properties: {
				country: "Perú",
				name: "Raúl Silva Alban",
				address: "Calle Castilla La Nueva Mz N lote 13. La Molina.",
				email: "informacion@iniseg.pe",
				phone1: "+(51) 956 253 928",
				phone2: "",
				link: "",
				img: "assets/images/cards/director7.png",
				icon: "assets/images/flags/peru.png",
			},
			geometry: { coordinates: [-76.96110386527891, -12.063135281927913], type: "Point" },
			id: 7,
		},
		// Bolivia
		{
			type: "Feature",
			properties: {
				country: "Bolivia",
				name: "Hugo San Martín",
				address: "Av. Muñoz Reyes 1578",
				email: "informacion@iniseg.com.bo",
				phone1: "(+591) 78901482",
				phone2: "",
				link: "#",
				img: "assets/images/cards/director5.jpg",
				icon: "assets/images/flags/bolivia.png",
			},
			geometry: { coordinates: [-68.08741476666623, -16.512514181059316], type: "Point" },
			id: 8,
		},
	],
};

export default geoOffice;
