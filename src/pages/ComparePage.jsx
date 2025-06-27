// pages/ComparePage.jsx
import '../App.css'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions} from "@mui/material";


function ComparePage() {
    return (
        <div>
            <div className="header-div">
                <Link to='/'>
                    <h1 className="center-blue-text">SimilarSizeTo</h1>
                </Link>
            </div>
            <div>
                <Card className = "crd-input">
                    <CardContent>
                        <form>
                            <input type={"text"} id = "size" name = "size" placeholder={"How many units?"} className={"inputboxes"}/>
                            <select id = "unit" name = "unit" className={"inputboxes"}>
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
                        </form>
                    </CardContent>
                    <CardActions>
                        <button>Submit</button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default ComparePage
