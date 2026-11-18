// Antennas and Wave Propagation (AWP) Questions - Units III & IV
// 3rd Year ECE - 75 MCQs

const awpQuestions = [
    {
        id: 1,
        question: "Main difference between resonant and non-resonant antenna is",
        options: [
            "Resonant has traveling wave, non-resonant has standing wave",
            "Resonant has standing wave, narrow BW; non-resonant has traveling wave, broadband",
            "Both have same bandwidth",
            "Resonant is always long wire"
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        question: "Yagi-Uda antenna consists of",
        options: [
            "Only driven elements",
            "1 driven, 1 reflector, N directors",
            "All reflectors",
            "Only directors"
        ],
        correctAnswer: 1
    },
    {
        id: 3,
        question: "In Yagi-Uda, length of reflector compared to driven element is",
        options: [
            "5% shorter",
            "5% longer",
            "Same",
            "Half"
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "In Yagi-Uda, length of directors is",
        options: [
            "Longer than driven",
            "Shorter than driven",
            "Equal to reflector",
            "λ"
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "Folded dipole is used in Yagi as driven element because",
        options: [
            "Increases gain",
            "Increases input impedance from 73Ω to ∼280Ω for matching",
            "Decreases impedance",
            "Makes it non-resonant"
        ],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "Impedance of single folded dipole is",
        options: [
            "73Ω",
            "146Ω",
            "292Ω",
            "50Ω"
        ],
        correctAnswer: 2
    },
    {
        id: 7,
        question: "Yagi-Uda is generally used for",
        options: [
            "Satellite communication",
            "TV reception at VHF/UHF",
            "Mobile",
            "Microwave link"
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "Log-periodic antenna is",
        options: [
            "Frequency independent antenna",
            "Narrow band",
            "Resonant at one frequency",
            "Loop type"
        ],
        correctAnswer: 0
    },
    {
        id: 9,
        question: "In log-periodic, active region principle means",
        options: [
            "All elements radiate at all frequencies",
            "Only 3-4 elements near λ/2 radiate at a given frequency",
            "Only reflector radiates",
            "No radiation"
        ],
        correctAnswer: 1
    },
    {
        id: 10,
        question: "Design ratio τ = Lₙ₊₁/Lₙ for log-periodic is",
        options: [
            "Greater than 1",
            "Less than 1 (typically 0.7 to 0.9)",
            "Equal to 1",
            "Equal to 0"
        ],
        correctAnswer: 1
    },
    {
        id: 11,
        question: "Huygen's principle states",
        options: [
            "Each point on wavefront is a new secondary source",
            "Reflection law",
            "Slot is complementary",
            "No radiation from aperture"
        ],
        correctAnswer: 0
    },
    {
        id: 12,
        question: "Babinet's principle relates",
        options: [
            "Dipole and Yagi",
            "Dipole and its complementary slot antenna",
            "Horn and Parabola",
            "Two dipoles"
        ],
        correctAnswer: 1
    },
    {
        id: 13,
        question: "Relation between slot impedance Zₛ and dipole Zᴅ is",
        options: [
            "Zₛ = Zᴅ",
            "ZₛZᴅ = η²/4 ≈ 355²",
            "Zₛ + Zᴅ = 0",
            "Zₛ = 2Zᴅ"
        ],
        correctAnswer: 1
    },
    {
        id: 14,
        question: "Horn antenna is used because",
        options: [
            "To match waveguide to free space and provide higher directivity",
            "To reduce gain",
            "As isotropic radiator",
            "For low frequency only"
        ],
        correctAnswer: 0
    },
    {
        id: 15,
        question: "Which horn has flaring in both E and H plane?",
        options: [
            "Sectoral H-plane",
            "Sectoral E-plane",
            "Pyramidal horn",
            "Conical horn"
        ],
        correctAnswer: 2
    },
    {
        id: 16,
        question: "Optimum horn design condition is related to",
        options: [
            "Maximum gain for given slant length",
            "Minimum VSWR",
            "Zero phase error ∼108° for H-plane, δ less than 0.25λ",
            "Both A & C"
        ],
        correctAnswer: 3
    },
    {
        id: 17,
        question: "Parabolic reflector converts",
        options: [
            "Plane wave to spherical wave",
            "Spherical wave from focus to plane wave after reflection",
            "No conversion",
            "Circular to linear"
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        question: "Equation of parabola with focus at origin is r = ?",
        options: [
            "r = f",
            "r = 2f/(1 + cosθ)",
            "r = fcosθ",
            "r = f²"
        ],
        correctAnswer: 1
    },
    {
        id: 19,
        question: "Gain of parabolic reflector is approximately",
        options: [
            "G = (πD/λ)²ηₐₚ",
            "G = λ/D",
            "G = D/λ",
            "G = 2D/λ"
        ],
        correctAnswer: 0
    },
    {
        id: 20,
        question: "For D = 3m, λ = 0.1m, aperture efficiency 0.6, gain is approximately",
        options: [
            "30 dB",
            "38.3 dB",
            "10 dB",
            "50 dB"
        ],
        correctAnswer: 1
    },
    {
        id: 21,
        question: "Beamwidth of parabolic reflector is approximately",
        options: [
            "70λ/D degrees",
            "D/λ",
            "140λ/D",
            "10° always"
        ],
        correctAnswer: 0
    },
    {
        id: 22,
        question: "Cassegrain feed uses",
        options: [
            "Single parabolic reflector",
            "Parabolic primary + Hyperbolic secondary",
            "Two parabolas",
            "Lens"
        ],
        correctAnswer: 1
    },
    {
        id: 23,
        question: "Advantage of Cassegrain is",
        options: [
            "Low noise, feed at vertex, short waveguide run",
            "High cross-pol",
            "Low gain",
            "Not used"
        ],
        correctAnswer: 0
    },
    {
        id: 24,
        question: "Lens antenna works on principle of",
        options: [
            "Reflection",
            "Refraction through dielectric/metal to convert spherical to plane",
            "Diffraction only",
            "No principle"
        ],
        correctAnswer: 1
    },
    {
        id: 25,
        question: "Which antenna has more blockage – parabolic vs Cassegrain?",
        options: [
            "Parabolic has more blockage",
            "Cassegrain secondary causes blockage but less waveguide loss",
            "No blockage",
            "Both equal"
        ],
        correctAnswer: 1
    },
    {
        id: 26,
        question: "Microstrip patch antenna consists of",
        options: [
            "Ground plane, substrate, radiating patch",
            "Only patch",
            "Only ground",
            "Horn"
        ],
        correctAnswer: 0
    },
    {
        id: 27,
        question: "Patch length for resonance is approximately",
        options: [
            "λ/4",
            "λ/2 (0.49λ due to fringing)",
            "λ",
            "λ/8"
        ],
        correctAnswer: 1
    },
    {
        id: 28,
        question: "Fringing fields in patch antenna cause",
        options: [
            "Increase in effective length, reduction in resonant frequency",
            "No effect",
            "Decrease in length",
            "Increase in gain to 20dB"
        ],
        correctAnswer: 0
    },
    {
        id: 29,
        question: "Bandwidth of rectangular patch is typically",
        options: [
            "40–50%",
            "2–5% (narrow)",
            "100%",
            "0.1%"
        ],
        correctAnswer: 1
    },
    {
        id: 30,
        question: "Best feeding method for wide bandwidth in patch is",
        options: [
            "Microstrip line feed",
            "Coaxial probe",
            "Aperture coupled feed",
            "All same"
        ],
        correctAnswer: 2
    },
    {
        id: 31,
        question: "For fᵣ = 2.4GHz, εᵣ = 2.2, width W of patch is approximately?",
        options: [
            "W = (c/2fᵣ)√(2/(εᵣ+1)) ≈ 49mm",
            "10mm",
            "100mm",
            "5mm"
        ],
        correctAnswer: 0
    },
    {
        id: 32,
        question: "Smart antenna – Fixed weight beamforming means",
        options: [
            "Weights adapt continuously",
            "Pre-defined fixed beams switched",
            "No beam",
            "Isotropic"
        ],
        correctAnswer: 1
    },
    {
        id: 33,
        question: "Adaptive beamforming uses algorithm",
        options: [
            "LMS, RLS, MUSIC to maximize SINR",
            "No algorithm",
            "Ohm's law",
            "Friis formula"
        ],
        correctAnswer: 0
    },
    {
        id: 34,
        question: "Folded dipole has bandwidth",
        options: [
            "More than single dipole",
            "Less than single dipole",
            "Same",
            "Zero"
        ],
        correctAnswer: 0
    },
    {
        id: 35,
        question: "Which antenna gives circular polarization easily?",
        options: [
            "Yagi",
            "Log-periodic with crossed elements",
            "Helical is not in this unit",
            "Horn"
        ],
        correctAnswer: 1
    },
    {
        id: 36,
        question: "Aperture efficiency of horn is",
        options: [
            "100%",
            "40–60%",
            "10%",
            "90%"
        ],
        correctAnswer: 1
    },
    {
        id: 37,
        question: "E-plane and H-plane of horn should be",
        options: [
            "Same phase center for proper feed",
            "Different",
            "No phase center",
            "Infinite"
        ],
        correctAnswer: 0
    },
    {
        id: 38,
        question: "Microstrip antenna is preferred for",
        options: [
            "Aircraft, mobile, missile due to low profile, light weight, conformal",
            "High power",
            "Low frequency AM",
            "Not preferred"
        ],
        correctAnswer: 0
    },
    {
        id: 39,
        question: "Surface wave in microstrip causes",
        options: [
            "Increased efficiency",
            "Reduced efficiency and spurious radiation",
            "No effect",
            "Gain increase"
        ],
        correctAnswer: 1
    },
    {
        id: 40,
        question: "End-fire array of Yagi is example of",
        options: [
            "Resonant array",
            "Parasitic array – directors produce end-fire beam",
            "Broadside",
            "Non-resonant"
        ],
        correctAnswer: 1
    },
    {
        id: 41,
        question: "Array of 2 isotropic point sources field is Eₜ = E₀[1 + eʲψ], ψ = ?",
        options: [
            "βd sinθ + α",
            "βd cosθ + α",
            "βd + α",
            "α only"
        ],
        correctAnswer: 0
    },
    {
        id: 42,
        question: "Array factor for 2 equal amplitude sources is",
        options: [
            "2cos(ψ/2)",
            "2sin(ψ/2)",
            "cosψ",
            "1"
        ],
        correctAnswer: 0
    },
    {
        id: 43,
        question: "For 2 element broadside array d = λ/2, α = 0, maxima at",
        options: [
            "θ = 0°, 180°",
            "θ = 90°, 270°",
            "θ = 45°",
            "No maxima"
        ],
        correctAnswer: 1
    },
    {
        id: 44,
        question: "For 2 element end-fire array α = −βd, maxima at",
        options: [
            "θ = 90°",
            "θ = 0°",
            "θ = 45°",
            "θ = 180° only"
        ],
        correctAnswer: 1
    },
    {
        id: 45,
        question: "Linear N-element uniform array factor magnitude is",
        options: [
            "sin(ψ/2) / sin(Nψ/2)",
            "sin(Nψ/2) / sin(ψ/2)",
            "Ncos(ψ/2)",
            "N"
        ],
        correctAnswer: 1
    },
    {
        id: 46,
        question: "Nulls of N-element array occur at",
        options: [
            "Nψ/2 = ±kπ, k ≠ mN",
            "ψ = ±2π/N",
            "ψ = 90°",
            "No nulls"
        ],
        correctAnswer: 0
    },
    {
        id: 47,
        question: "Broadside array has phase α = ?",
        options: [
            "0",
            "−βd",
            "−βd − π/N",
            "90°"
        ],
        correctAnswer: 0
    },
    {
        id: 48,
        question: "Ordinary end-fire array has phase α = ?",
        options: [
            "0",
            "−βd",
            "+βd",
            "π"
        ],
        correctAnswer: 1
    },
    {
        id: 49,
        question: "Hansen-Woodyard increased directivity condition is",
        options: [
            "α = −(βd + π/N)",
            "α = −βd",
            "α = 0",
            "α = βd"
        ],
        correctAnswer: 0
    },
    {
        id: 50,
        question: "Directivity of ordinary N-element broadside is approximately",
        options: [
            "N",
            "1.8N",
            "N²",
            "2N"
        ],
        correctAnswer: 0
    },
    {
        id: 51,
        question: "Directivity of Hansen-Woodyard end-fire is approximately",
        options: [
            "N",
            "1.8N to 2N (greater than ordinary)",
            "N/2",
            "1"
        ],
        correctAnswer: 1
    },
    {
        id: 52,
        question: "Principle of pattern multiplication states",
        options: [
            "Total pattern = Element pattern × Array Factor",
            "Total = Element + Array",
            "Total = Element / Array",
            "No relation"
        ],
        correctAnswer: 0
    },
    {
        id: 53,
        question: "Beam scanning is achieved by",
        options: [
            "Changing d",
            "Changing inter-element phase shift α",
            "Changing frequency only",
            "Changing element size"
        ],
        correctAnswer: 1
    },
    {
        id: 54,
        question: "Scan angle θ₀ for maximum is given by",
        options: [
            "cosθ₀ = −α/βd",
            "sinθ₀ = −α/βd",
            "θ₀ = α",
            "θ₀ = βd"
        ],
        correctAnswer: 1
    },
    {
        id: 55,
        question: "As beam scans away from broadside, beamwidth",
        options: [
            "Decreases",
            "Increases as 1/cosθ₀",
            "Same",
            "Becomes zero"
        ],
        correctAnswer: 1
    },
    {
        id: 56,
        question: "Binomial array amplitude distribution follows",
        options: [
            "Uniform",
            "Binomial coefficients C(N−1, r)",
            "Random",
            "Gaussian"
        ],
        correctAnswer: 1
    },
    {
        id: 57,
        question: "Main property of binomial array for d = λ/2 is",
        options: [
            "No side lobes",
            "Highest side lobes",
            "Max directivity",
            "End-fire"
        ],
        correctAnswer: 0
    },
    {
        id: 58,
        question: "Disadvantage of binomial array is",
        options: [
            "High side lobes",
            "Low directivity and large amplitude variation difficult to realize",
            "Narrow band",
            "No disadvantage"
        ],
        correctAnswer: 1
    },
    {
        id: 59,
        question: "Dolph-Chebyshev array gives",
        options: [
            "All side lobes at same level – optimum for given SLL",
            "No side lobes",
            "Random SLL",
            "High SLL"
        ],
        correctAnswer: 0
    },
    {
        id: 60,
        question: "Uniform amplitude array SLL is",
        options: [
            "−13.5 dB",
            "−40 dB",
            "−3 dB",
            "0 dB"
        ],
        correctAnswer: 0
    },
    {
        id: 61,
        question: "Reciprocity theorem in measurements means",
        options: [
            "Tx pattern ≠ Rx pattern",
            "Tx and Rx patterns are identical",
            "No pattern",
            "Gain is different"
        ],
        correctAnswer: 1
    },
    {
        id: 62,
        question: "Far field distance criterion is",
        options: [
            "R less than λ",
            "R ≥ 2D²/λ",
            "R = D²/λ",
            "R = λ/2"
        ],
        correctAnswer: 1
    },
    {
        id: 63,
        question: "Why is 2D²/λ distance needed?",
        options: [
            "To keep phase error less than 22.5° (π/8) from aperture edge",
            "No reason",
            "For gain",
            "For impedance"
        ],
        correctAnswer: 0
    },
    {
        id: 64,
        question: "Near field is divided into",
        options: [
            "Reactive near field and Radiating near field (Fresnel)",
            "Only far field",
            "No division",
            "E and H field only"
        ],
        correctAnswer: 0
    },
    {
        id: 65,
        question: "Sources of errors in antenna measurement are",
        options: [
            "Reflections from ground, nearby objects, imperfect absorbers",
            "No errors",
            "Only cable loss",
            "Only frequency"
        ],
        correctAnswer: 0
    },
    {
        id: 66,
        question: "Anechoic chamber walls are covered with",
        options: [
            "Metal plates",
            "Pyramidal absorbers (carbon-loaded foam) to give less than −40 dB reflection",
            "Wood",
            "Glass"
        ],
        correctAnswer: 1
    },
    {
        id: 67,
        question: "What is Gain measurement – Comparison method formula?",
        options: [
            "Gtest = Gstd × Ptest/Pstd (linear), in dB: Gt = Gs + 10log(Pt/Ps)",
            "Gt = Gs",
            "Gt = Pt/Ps",
            "No formula"
        ],
        correctAnswer: 0
    },
    {
        id: 68,
        question: "Absolute gain method uses",
        options: [
            "Friis transmission formula: Pr = PtGtGr(λ/4πR)²",
            "Ohm's law",
            "VSWR",
            "No formula"
        ],
        correctAnswer: 0
    },
    {
        id: 69,
        question: "Radiation pattern measurement setup needs",
        options: [
            "Turntable rotating test antenna, fixed source, recorder",
            "Only source",
            "Only test antenna",
            "No setup"
        ],
        correctAnswer: 0
    },
    {
        id: 70,
        question: "Impedance measurement is done by",
        options: [
            "VSWR meter / Vector Network Analyzer (VNA) and Smith chart",
            "Only pattern",
            "Only gain",
            "Ammeter"
        ],
        correctAnswer: 0
    },
    {
        id: 71,
        question: "Compact range is used to",
        options: [
            "Create plane wave in short distance using parabolic reflector",
            "Measure near field",
            "Increase gain",
            "No use"
        ],
        correctAnswer: 0
    },
    {
        id: 72,
        question: "Radiation hazard limit for human at microwave is approximately",
        options: [
            "10mW/cm²",
            "100W/cm²",
            "1W/cm²",
            "0"
        ],
        correctAnswer: 0
    },
    {
        id: 73,
        question: "Radiation hazard causes",
        options: [
            "Eye cataract, tissue heating due to high power density W = PtGt/4πR²",
            "No effect",
            "Only cold",
            "Gain increase"
        ],
        correctAnswer: 0
    },
    {
        id: 74,
        question: "For D = 2m antenna at 3GHz (λ = 0.1m), far field distance is",
        options: [
            "2D²/λ = 80m",
            "10m",
            "1m",
            "0.1m"
        ],
        correctAnswer: 0
    },
    {
        id: 75,
        question: "Uniform vs Non-uniform amplitude: As taper increases",
        options: [
            "SLL decreases, beamwidth increases",
            "SLL increases, beamwidth decreases",
            "No change",
            "Both decrease"
        ],
        correctAnswer: 0
    }
];

console.log('✅ AWP Questions Loaded:', awpQuestions.length);
