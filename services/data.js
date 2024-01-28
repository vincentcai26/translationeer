const languageMapping = {
    "Latin to English": [0],
    "English to Latin": [1]
}

const allApis = [{
        cssSelector: "whitakers",
        enabled: true,
        name: "Whitaker's Words",
        url: "http://archives.nd.edu/cgi-bin/wordz.pl?keyword={{keyword}}",
    },
    {
        cssSelector: "whitakersEnglish",
        enabled: true,
        name: "Whitaker's Words",
        url: "http://archives.nd.edu/cgi-bin/wordz.pl?english={{keyword}}",
    }
];

const templates = {
    aeneid: [
        {
            name: "Aeneid Book 1 Lines 1-11",
            text: "Arma virumque canō, Trōiae quī prīmus ab ōrīs Ītaliam, fātō profugus, Lāvīniaque vēnit lītora, multum ille et terrīs iactātus et altō vī superum saevae memorem Iūnōnis ob īram; multa quoque et bellō passūs, dum conderet urbem, 5 inferretque deōs Latiō, genus unde Latīnum, Albānīque patrēs, atque altae moenia Rōmae. Mūsa, mihī causās memorā, quō nūmine laesō, quidve dolēns, rēgīna deum tot volvere cāsūs īnsīgnem pietāte virum, tot adīre labōrēs 10 impulerit. Tantaene animīs caelestibus īrae?"
        },
        {
            name: "Aeneid Book 1 Lines 12-33",
            text: "Urbs antīqua fuit, Tyriī tenuēre colōnī, Karthāgō, Ītaliam contrā Tiberīnaque longē ōstia, dīves opum studiīsque asperrima bellī, quam Iūnō fertur terrīs magis omnibus ūnam posthabitā coluisse Samō; hīc illius arma, hīc currus fuit; hōc rēgnum dea gentibus esse, sī quā Fāta sinant, iam tum tenditque fovetque. Prōgeniem sed enim Trōiānō ā sanguine dūcī audierat, Tyriās olim quae verteret arcēs; hinc populum lātē regem bellōque superbum ventūrum excidiō Libyae: sīc volvere Parcās. Id metuēns, veterisque memor Sāturnia bellī, prīma quod ad Trōiam prō cārīs gesserat Argīs— necdum etiam causae īrārum saevīque dolōrēs exciderant animō: manet altā mente repostum iūdicium Paridis sprētaeque iniūria fōrmae, et genus invīsum, et raptī Ganymēdis honōrēs. Hīs accēnsa super, iactātōs aequore tōtō Trōas, rēliquiās Danaum atque immītis Achillī, arcēbat longē Latiō, multōsque per annōs errābant, āctī Fātīs, maria omnia circum. Tantae mōlis erat Rōmānam condere gentem!"
        },
        {
            name: "Aeneid Book 1 Lines 180-209",
            text: "Aeneas scopulum interea conscendit, et omnem prospectum late pelago petit, Anthea si quem iactatum vento videat Phrygiasque biremis, aut Capyn, aut celsis in puppibus arma Caici. Navem in conspectu nullam, tris litore cervos prospicit errantis; hos tota armenta sequuntur a tergo, et longum per vallis pascitur agmen. Constitit hic, arcumque manu celerisque sagittas corripuit, fidus quae tela gerebat Achates; ductoresque ipsos primum, capita alta ferentis cornibus arboreis, sternit, tum volgus, et omnem miscet agens telis nemora inter frondea turbam; nec prius absistit, quam septem ingentia victor corpora fundat humi, et numerum cum navibus aequet. Hinc portum petit, et socios partitur in omnes. Vina bonus quae deinde cadis onerarat Acestes litore Trinacrio dederatque abeuntibus heros, dividit, et dictis maerentia pectora mulcet: 'O socii—neque enim ignari sumus ante malorum— O passi graviora, dabit deus his quoque finem. Vos et Scyllaeam rabiem penitusque sonantis accestis scopulos, vos et Cyclopea saxa experti: revocate animos, maestumque timorem mittite: forsan et haec olim meminisse iuvabit. Per varios casus, per tot discrimina rerum tendimus in Latium; sedes ubi fata quietas ostendunt; illic fas regna resurgere Troiae. Durate, et vosmet rebus servate secundis.' Talia voce refert, curisque ingentibus aeger spem voltu simulat, premit altum corde dolorem."
        },
        {
            name: "Aenied Book 4 Lines 160-172",
            text: "Interea magno misceri murmure caelum 160 incipit, insequitur commixta grandine nimbus, et Tyrii comites passim et Troiana iuventus Dardaniusque nepos Veneris diversa per agros tecta metu petiere; ruunt de montibus amnes. speluncam Dido dux et Troianus eandem 165 deveniunt. prima et Tellus et pronuba Iuno dant signum; fulsere ignes et conscius aether conubiis summoque ulularunt vertice Nymphae. ille dies primus leti primusque malorum causa fuit; neque enim specie famave movetur 170 nec iam furtivum Dido meditatur amorem: coniugium vocat, hoc praetexit nomine culpam."
        },
        {
            name: "Aeneid Book 6 Lines 384-416",
            text: "Ergo iter inceptum peragunt fluvioque propinquant. navita quos iam inde ut Stygia prospexit ab unda 385 per tacitum nemus ire pedemque advertere ripae, sic prior adgreditur dictis atque increpat ultro: 'quisquis es, armatus qui nostra ad flumina tendis, fare age, quid venias, iam istinc et comprime gressum. umbrarum hic locus est, somni noctisque soporae: 390 corpora viva nefas Stygia vectare carina. nec vero Alciden me sum laetatus euntem accepisse lacu, nec Thesea Pirithoumque, dis quamquam geniti atque invicti viribus essent. Tartareum ille manu custodem in vincla petivit 395 ipsius a solio regis traxitque trementem; hi dominam Ditis thalamo deducere adorti.' quae contra breviter fata est Amphrysia vates: 'nullae hic insidiae tales (absiste moveri), nec vim tela ferunt; licet ingens ianitor antro 400 aeternum latrans exsanguis terreat umbras, casta licet patrui servet Proserpina limen. Troius Aeneas, pietate insignis et armis, ad genitorem imas Erebi descendit ad umbras. si te nulla movet tantae pietatis imago, 405 at ramum hunc' (aperit ramum qui veste latebat) 'agnoscas.' tumida ex ira tum corda residunt; nec plura his. ille admirans venerabile donum fatalis virgae longo post tempore visum caeruleam advertit puppim ripaeque propinquat. 410 inde alias animas, quae per iuga longa sedebant, deturbat laxatque foros; simul accipit alveo ingentem Aenean. gemuit sub pondere cumba sutilis et multam accepit rimosa paludem. tandem trans fluvium incolumis vatemque virumque 415 informi limo glaucaque exponit in ulua."
        }
    ],
    catullus: [
        {
            name: "Catullus 1",
            text: "Cui dono lepidum novum libellum arida modo pumice expolitum? Corneli, tibi: namque tu solebas meas esse aliquid putare nugas. Iam tum, cum ausus es unus Italorum omne aevum tribus explicare cartis... Doctis, Iuppiter, et laboriosis! Quare habe tibi quidquid hoc libelli— qualecumque, quod, o patrona virgo, plus uno maneat perenne saeclo!"
        },
        {
            name: "Catullus 2",
            text: "Passer, deliciae meae puellae, quicum ludere, quem in sinu tenere, cui primum digitum dare appetenti et acris solet incitare morsus, cum desiderio meo nitenti carum nescio quid lubet iocari et solaciolum sui doloris, credo ut tum gravis acquiescat ardor: tecum ludere sicut ipsa possem et tristis animi levare curas!"
        },
        {
            name: "Catullus 5",
            text: "Vivamus mea Lesbia, atque amemus, rumoresque senum severiorum omnes unius aestimemus assis! soles occidere et redire possunt: nobis cum semel occidit brevis lux, nox est perpetua una dormienda. da mi basia mille, deinde centum, dein mille altera, dein secunda centum, deinde usque altera mille, deinde centum. dein, cum milia multa fecerimus, conturbabimus illa, ne sciamus, aut ne quis malus inuidere possit, cum tantum sciat esse basiorum."
        },
        {
            name: "Catullus 7",
            text: "Quaeris, quot mihi basiationes tuae, Lesbia, sint satis superque. quam magnus numerus Libyssae harenae lasarpiciferis iacet Cyrenis oraclum Iovis inter aestuosi et Batti veteris sacrum sepulcrum; aut quam sidera multa, cum tacet nox, furtivos hominum vident amores: tam te basia multa basiare vesano satis et super Catullo est, quae nec pernumerare curiosi possint nec mala fascinare lingua."
        }
    ],
    gallicwars: [
        {
            name: "Gallic Wars 5.36",
            text: "His rebus permotus Quintus Titurius, cum procul Ambiorigem suos cohortantem conspexisset, interpretem suum Gnaeum Pompeium ad eum mittit rogatum ut sibi militibusque parcat. Ille appellatus respondit: si velit secum colloqui, licere; sperare a multitudine impetrari posse, quod ad militum salutem pertineat; ipsi vero nihil nocitum iri, inque eam rem se suam fidem interponere. Ille cum Cotta saucio communicat, si videatur, pugna ut excedant et cum Ambiorige una colloquantur: sperare ab eo de sua ac militum salute impetrari posse. Cotta se ad armatum hostem iturum negat atque in eo perseverat."
        },
        {
            name: "Gallic Wars 1.7",
            text: "Caesari cum id nuntiatum esset, eos per provinciam nostram iter facere conari, maturat ab urbe proficisci et quam maximis potest itineribus in Galliam ulteriorem contendit et ad Genavam pervenit. Provinciae toti quam maximum potest militum numerum imperat (erat omnino in Gallia ulteriore legio una), pontem, qui erat ad Genavam, iubet rescindi. Ubi de eius adventu Helvetii certiores facti sunt, legatos ad eum mittunt nobilissimos civitatis, cuius legationis Nammeius et Verucloetius principem locum obtinebant, qui dicerent sibi esse in animo sine ullo maleficio iter per provinciam facere, propterea quod aliud iter haberent nullum: rogare ut eius voluntate id sibi facere liceat. Caesar, quod memoria tenebat L. Cassium consulem occisum exercitumque eius ab Helvetiis pulsum et sub iugum missum, concedendum non putabat; neque homines inimico animo, data facultate per provinciam itineris faciundi, temperaturos ab iniuria et maleficio existimabat. Tamen, ut spatium intercedere posset dum milites quos imperaverat convenirent, legatis respondit diem se ad deliberandum sumpturum: si quid vellent, ad Id. April. reverterentur."
        },
        {
            name: "Gallic Wars 4.26",
            text: "Pugnatum est ab utrisque acriter. Nostri tamen, quod neque ordines servare neque firmiter insistere neque signa subsequi poterant atque alius alia ex navi quibuscumque signis occurrerat se adgregabat, magnopere perturbabantur; hostes vero, notis omnibus vadii, ubi ex litore aliquos singulares ex navi egredientes conspexerant, incitatis equis impeditos adoriebantur, plures paucos circumsistebant, alii ab latere aperto in universos tela coiciebant. Quod cum animadvertisset Caesar, scaphas longarum navium, item speculatoria navigia militibus compleri iussit, et quos laborantes conspexerat, his subsidia submittebat. Nostri, simul in arido constiterunt, suis omnibus consecutis, in hostes impetum fecerunt atque eos in fugam dederunt; neque longius prosequi potuerunt, quod equites cursum tenere atque insulam capere non potuerant. Hoc unum ad pristinam fortunam Caesari defuit."
        }
    ],
    metamorphoses: [
        {
            name: "Metamorphoses Book 6 Lines 1-50",
            text: "Praebuerat dictis Tritonia talibus aures carminaque Aonidum iustamque probaverat iram; tum secum: 'laudare parum est, laudemur et ipsae numina nec sperni sine poena nostra sinamus.' Maeoniaeque animum fatis intendit Arachnes, 5 quam sibi lanificae non cedere laudibus artis audierat. non illa loco nec origine gentis clara, sed arte fuit: pater huic Colophonius Idmon Phocaico bibulas tinguebat murice lanas; occiderat mater, sed et haec de plebe suoque 10 aequa viro fuerat; Lydas tamen illa per urbes quaesierat studio nomen memorabile, quamvis orta domo parva parvis habitabat Hypaepis. huius ut adspicerent opus admirabile, saepe deseruere sui nymphae vineta Timoli, 15 deseruere suas nymphae Pactolides undas. nec factas solum vestes, spectare iuvabat tum quoque, cum fierent: tantus decor adfuit arti, sive rudem primos lanam glomerabat in orbes, seu digitis subigebat opus repetitaque longo 20 vellera mollibat nebulas aequantia tractu, sive levi teretem versabat pollice fusum, seu pingebat acu; scires a Pallade doctam. quod tamen ipsa negat tantaque offensa magistra 'certet' ait 'mecum: nihil est, quod victa recusem!' 25 Pallas anum simulat: falsosque in tempora canos addit et infirmos, baculo quos sustinet, artus. tum sic orsa loqui 'non omnia grandior aetas, quae fugiamus, habet: seris venit usus ab annis. consilium ne sperne meum: tibi fama petatur 30 inter mortales faciendae maxima lanae; cede deae veniamque tuis, temeraria, dictis supplice voce roga: veniam dabit illa roganti.' adspicit hanc torvis inceptaque fila relinquit vixque manum retinens confessaque vultibus iram 35 talibus obscuram resecuta est Pallada dictis: 'mentis inops longaque venis confecta senecta, et nimium vixisse diu nocet. audiat istas, si qua tibi nurus est, si qua est tibi filia, voces; consilii satis est in me mihi, neve monendo 40 profecisse putes, eadem est sententia nobis. cur non ipsa venit? cur haec certamina vitat?' tum dea 'venit!' ait formamque removit anilem Palladaque exhibuit: venerantur numina nymphae Mygdonidesque nurus; sola est non territa virgo, 45 sed tamen erubuit, subitusque invita notavit ora rubor rursusque evanuit, ut solet aer purpureus fieri, cum primum Aurora movetur, et breve post tempus candescere solis ab ortu. perstat in incepto stolidaeque cupidine palmae",
        },
        {
            name: "Metamorphoses Book 1 Lines 1-20",
            text: "In nova fert animus mutatas dicere formas corpora; di, coeptis (nam vos mutastis et illas) adspirate meis primaque ab origine mundi ad mea perpetuum deducite tempora carmen! Ante mare et terras et quod tegit omnia caelum 5 unus erat toto naturae vultus in orbe, quem dixere chaos: rudis indigestaque moles nec quicquam nisi pondus iners congestaque eodem non bene iunctarum discordia semina rerum. nullus adhuc mundo praebebat lumina Titan, 10 nec nova crescendo reparabat cornua Phoebe, nec circumfuso pendebat in aere tellus ponderibus librata suis, nec bracchia longo margine terrarum porrexerat Amphitrite; utque erat et tellus illic et pontus et aer, 15 sic erat instabilis tellus, innabilis unda, lucis egens aer; nulli sua forma manebat, obstabatque aliis aliud, quia corpore in uno frigida pugnabant calidis, umentia siccis, mollia cum duris, sine pondere, habentia pondus."
        }
    ]
}

export {languageMapping, allApis, templates}