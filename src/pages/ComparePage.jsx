import '../App.css'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from "@mui/material";
import { useState } from 'react';

const comparisonExamples = {
    length: [
        { label: "Length of a Grain of Rice", value: 0.006, unit: "m", icon: "🌾" },
        { label: "Length of a Paperclip", value: 0.03, unit: "m", icon: "📎" },
        { label: "Length of a Credit Card", value: 0.085, unit: "m", icon: "💳" },
        { label: "Length of a Pencil", value: 0.19, unit: "m", icon: "✏️" },
        { label: "Length of a Ruler", value: 0.3, unit: "m", icon: "📏" },
        { label: "Length of a Laptop", value: 0.36, unit: "m", icon: "💻" },
        { label: "Length of a Baseball Bat", value: 0.85, unit: "m", icon: "🏏" },
        { label: "Length of a Guitar", value: 1, unit: "m", icon: "🎸" },
        { label: "Height of a Door", value: 2, unit: "m", icon: "🚪" },
        { label: "Height of a Basketball Hoop", value: 3.05, unit: "m", icon: "🏀" },
        { label: "Length of a Car", value: 4.5, unit: "m", icon: "🚗" },
        { label: "Height of a Giraffe", value: 5.5, unit: "m", icon: "🦒" },
        { label: "Length of a Bus", value: 12, unit: "m", icon: "🚌" },
        { label: "Height of a Telephone Pole", value: 13, unit: "m", icon: "📡" },
        { label: "Length of a Blue Whale", value: 25, unit: "m", icon: "🐋" },
        { label: "Length of a Olympic Pool", value: 50, unit: "m", icon: "🏊‍♂️" },
        { label: "Length of a Boeing 747", value: 70.6, unit: "m", icon: "✈️" },
        { label: "Height of a Statue of Liberty", value: 93, unit: "m", icon: "🗽" },
        { label: "Height of the Eiffel Tower", value: 330, unit: "m", icon: "🗼" },
        { label: "Height of the Empire State Building", value: 443, unit: "m", icon: "🏙️" }
    ],

    area: [
        { label: "Area of a Post-it Note", value: 0.0064, unit: "m²", icon: "📝" },
        { label: "Area of a Smartphone Screen", value: 0.01, unit: "m²", icon: "📱" },
        { label: "Area of a Tablet Screen", value: 0.03, unit: "m²", icon: "📟" },
        { label: "Surface Area of a Desk", value: 0.5, unit: "m²", icon: "🪑" },
        { label: "Floor Area of a Shower", value: 1.2, unit: "m²", icon: "🚿" },
        { label: "Floor Area of an Office Cubicle", value: 3, unit: "m²", icon: "💼" },
        { label: "Floor Area of an Elevator", value: 5, unit: "m²", icon: "🛗" },
        { label: "Area of a Parking Spot", value: 12, unit: "m²", icon: "🅿️" },
        { label: "Floor Area of a Bedroom", value: 15, unit: "m²", icon: "🛏️" },
        { label: "Floor Area of a Studio Apartment", value: 30, unit: "m²", icon: "🏠" },
        { label: "Area of a Tennis Court", value: 260, unit: "m²", icon: "🎾" },
        { label: "Area of a Basketball Court", value: 420, unit: "m²", icon: "🏀" },
        { label: "Land Area of a House Block", value: 600, unit: "m²", icon: "🏡" },
        { label: "Floor Area of a Supermarket", value: 1500, unit: "m²", icon: "🛒" },
        { label: "Area of a Football Field", value: 5400, unit: "m²", icon: "🏈" },
        { label: "Area of a Soccer Field", value: 7140, unit: "m²", icon: "⚽" },
        { label: "Area of a Small Park", value: 10000, unit: "m²", icon: "🌳" },
        { label: "Area of a Manhattan Block", value: 80000, unit: "m²", icon: "🏙️" },
        { label: "Floor Area of an Airport Terminal", value: 200000, unit: "m²", icon: "🛫" },
        { label: "Area of Central Park", value: 3410000, unit: "m²", icon: "🌲" }
    ],

    mass: [
        { label: "Mass of a Feather", value: 0.0005, unit: "kg", icon: "🪶" },
        { label: "Mass of a Sheet of Paper", value: 0.005, unit: "kg", icon: "📄" },
        { label: "Mass of a Tennis Ball", value: 0.057, unit: "kg", icon: "🎾" },
        { label: "Mass of an Apple", value: 0.2, unit: "kg", icon: "🍎" },
        { label: "Mass of a Bottle of Water", value: 1, unit: "kg", icon: "🥤" },
        { label: "Mass of a Laptop", value: 2, unit: "kg", icon: "💻" },
        { label: "Mass of a Cat", value: 4.5, unit: "kg", icon: "🐈" },
        { label: "Mass of a 10kg Dumbbell", value: 10, unit: "kg", icon: "🏋️" },
        { label: "Mass of a Microwave", value: 15, unit: "kg", icon: "📻" },
        { label: "Mass of a Suitcase", value: 25, unit: "kg", icon: "🧳" },
        { label: "Mass of an average Person", value: 70, unit: "kg", icon: "🧍" },
        { label: "Mass of a Refrigerator", value: 100, unit: "kg", icon: "🧊" },
        { label: "Mass of a Piano", value: 300, unit: "kg", icon: "🎹" },
        { label: "Mass of a Grizzly Bear", value: 400, unit: "kg", icon: "🐻" },
        { label: "Mass of a Motorbike", value: 500, unit: "kg", icon: "🏍️" },
        { label: "Mass of a Horse", value: 600, unit: "kg", icon: "🐎" },
        { label: "Mass of a Car", value: 1500, unit: "kg", icon: "🚗" },
        { label: "Mass of a Giraffe", value: 1600, unit: "kg", icon: "🦒" },
        { label: "Mass of an Elephant", value: 6000, unit: "kg", icon: "🐘" },
        { label: "Mass of a T-Rex", value: 8000, unit: "kg", icon: "🦖" }
    ]
};

const unitToBase = {
    "millimetres (mm)": { factor: 0.001, type: "length" },
    "centimetres (cm)": { factor: 0.01, type: "length" },
    "metres (m)": { factor: 1, type: "length" },
    "kilometres (km)": { factor: 1000, type: "length" },
    "inches (in)": { factor: 0.0254, type: "length" },
    "feet (ft)": { factor: 0.3048, type: "length" },
    "yards (yd)": { factor: 0.9144, type: "length" },
    "miles (mi)": { factor: 1609.34, type: "length" },
    "nautical miles (nmi)": { factor: 1852, type: "length" },

    "square millimetres (mm²)": { factor: 0.000001, type: "area" },
    "square centimetres (cm²)": { factor: 0.0001, type: "area" },
    "square metres (m²)": { factor: 1, type: "area" },
    "ares (a)": { factor: 100, type: "area" },
    "hectares (ha)": { factor: 10000, type: "area" },
    "square kilometres (km²)": { factor: 1_000_000, type: "area" },
    "square inches (in²)": { factor: 0.00064516, type: "area" },
    "square feet (ft²)": { factor: 0.092903, type: "area" },
    "square yards (yd²)": { factor: 0.836127, type: "area" },
    "acres (ac)": { factor: 4046.86, type: "area" },
    "square miles (mi²)": { factor: 2_589_988, type: "area" },

    "milligrams (mg)": { factor: 0.000001, type: "mass" },
    "grams (g)": { factor: 0.001, type: "mass" },
    "kilograms (kg)": { factor: 1, type: "mass" },
    "tonnes (t)": { factor: 1000, type: "mass" },
    "ounces (oz)": { factor: 0.0283495, type: "mass" },
    "pounds (lb)": { factor: 0.453592, type: "mass" },
    "stones (st)": { factor: 6.35029, type: "mass" },
    "short tons (US ton)": { factor: 907.1847, type: "mass" },
    "long tons (UK ton)": { factor: 1016.05, type: "mass" }
};

function ComparePage() {
    const [size, setSize] = useState('');
    const [unit, setUnit] = useState('');
    const [comparisons, setComparisons] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const numericSize = parseFloat(size);

        if (!size || isNaN(numericSize)) {
            alert("Please enter a valid number for size.");
            return;
        }

        if (!unit || !(unit in unitToBase)) {
            alert("Please select a supported unit.");
            return;
        }

        const { factor, type } = unitToBase[unit];
        const baseValue = numericSize * factor;

        const allExamples = comparisonExamples[type];

        const sorted = [...allExamples].sort((a, b) =>
            Math.abs(baseValue - a.value) - Math.abs(baseValue - b.value)
        ).slice(0, 6); // closest 6 instead of 4

        const results = sorted.map((example) => {
            const ratio = baseValue / example.value;
            let description = '';

            if (ratio >= 1) {
                description = `${ratio.toFixed(2)}× the ${example.label}`;
            } else {
                description = `${(1 / ratio).toFixed(2)}× smaller than the ${example.label}`;
            }

            return {
                label: example.label,
                detail: description,
                icon: example.icon
            };
        });

        setComparisons(results);
    };

    return (
        <div>
            <div className="header-div">
                <Link to='/'>
                    <h1 className="center-blue-text">SimilarSizeTo</h1>
                </Link>
            </div>
            <div className="div-main-homepage">
                <Card sx={{ backgroundColor: '#444444' }} className="crd-input">
                    <CardContent>
                        <p className="card-text">Please enter the values to visualise:</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="size"
                                name="size"
                                placeholder="How many units?"
                                className="inputboxes"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <select
                                id="unit"
                                name="unit"
                                className="inputboxes"
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                            >
                                <option value="" disabled>Select a unit</option>

                                <optgroup label="📏 Length / Distance">
                                    <option value="millimetres (mm)">Millimetres (mm)</option>
                                    <option value="centimetres (cm)">Centimetres (cm)</option>
                                    <option value="metres (m)">Metres (m)</option>
                                    <option value="kilometres (km)">Kilometres (km)</option>
                                    <option value="inches (in)">Inches (in)</option>
                                    <option value="feet (ft)">Feet (ft)</option>
                                    <option value="yards (yd)">Yards (yd)</option>
                                    <option value="miles (mi)">Miles (mi)</option>
                                    <option value="nautical miles (nmi)">Nautical Miles (nmi)</option>
                                </optgroup>

                                <optgroup label="📐 Area (Square Units)">
                                    <option value="square millimetres (mm²)">Square Millimetres (mm²)</option>
                                    <option value="square centimetres (cm²)">Square Centimetres (cm²)</option>
                                    <option value="square metres (m²)">Square Metres (m²)</option>
                                    <option value="ares (a)">Ares (a)</option>
                                    <option value="hectares (ha)">Hectares (ha)</option>
                                    <option value="square kilometres (km²)">Square Kilometres (km²)</option>
                                    <option value="square inches (in²)">Square Inches (in²)</option>
                                    <option value="square feet (ft²)">Square Feet (ft²)</option>
                                    <option value="square yards (yd²)">Square Yards (yd²)</option>
                                    <option value="acres (ac)">Acres (ac)</option>
                                    <option value="square miles (mi²)">Square Miles (mi²)</option>
                                </optgroup>

                                <optgroup label="⚖️ Mass / Weight">
                                    <option value="milligrams (mg)">Milligrams (mg)</option>
                                    <option value="grams (g)">Grams (g)</option>
                                    <option value="kilograms (kg)">Kilograms (kg)</option>
                                    <option value="tonnes (t)">Tonnes (t)</option>
                                    <option value="ounces (oz)">Ounces (oz)</option>
                                    <option value="pounds (lb)">Pounds (lb)</option>
                                    <option value="stones (st)">Stones (st)</option>
                                    <option value="short tons (US ton)">Short Tons (US ton)</option>
                                    <option value="long tons (UK ton)">Long Tons (UK ton)</option>
                                </optgroup>
                            </select>

                            <CardActions>
                                <button type="submit" className="btn-submit">Submit</button>
                            </CardActions>
                        </form>
                    </CardContent>
                </Card>

                <div className="results-grid">
                    {comparisons.map((item, index) => (
                        <Card key={index} sx={{ backgroundColor: '#444444' }} className="crd-display">
                            <CardContent>
                                <div style={{ fontSize: '40px' }}>{item.icon}</div>
                                <p className="crd-display-header"><b>{item.label}</b></p>
                                <p style={{ color: 'white', fontSize: '18px', marginTop: '0.5em' }}>{item.detail}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ComparePage;
