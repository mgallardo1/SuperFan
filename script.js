var a = document.getElementById("Reset")
var b = document.getElementById("Marvel")
var c = document.getElementById("Batman")
var d = document.getElementById("Starwars")
var e = document.getElementById("Wizardingworld")
var f = document.getElementById("Spiderman")
var g = document.getElementById("Godzilla")
var h = document.getElementById("mcumoney")
var i = document.getElementById("swmoney")
var j = document.getElementById("wwmoney")
var k = document.getElementById("bmmoney")
var l = document.getElementById("smmoney")
var m = document.getElementById("gzmoney")
var n = document.getElementById("mcudescription")
var o = document.getElementById("swdescription")
var p = document.getElementById("wwdescription")
var q = document.getElementById("bmdescription")
var r = document.getElementById("smdescription")
var s = document.getElementById("gzdescription")
var t = document.getElementById("bmmovies")
var u = document.getElementById("smmovies")
var v = document.getElementById("gzmovies")
var w = document.getElementById("mcumovies")
var x = document.getElementById("swmovies")
var y = document.getElementById("wwmovies")
var z = document.getElementById("avengersmusic")
var ab = document.getElementById("batmanmusic")
var bb = document.getElementById("starwarsmusic")
var cb = document.getElementById("spidermanmusic")
var db = document.getElementById("harrypottermusic")
var eb = document.getElementById("godzillamusic")
var fb = document.getElementById("theavengers")
var gb = document.getElementById("avengersageofultron")
var hb = document.getElementById("avengersinfinitywar")
var ib = document.getElementById("avengersendgame")
var jb = document.getElementById("starwarsepisodei")
var kb = document.getElementById("starwarsvii")
var lb = document.getElementById("starwarsrogueone")
var mb= document.getElementById("starwarsviii")
var nb= document.getElementById("harrypottersorcererstone")
var ob= document.getElementById("harrypotterorderofthephoenix")
var pb= document.getElementById("harrypotterdeathlyhallowspart1")
var qb= document.getElementById("harrypotterdeathlyhallowspart2")
var rb= document.getElementById("spiderman1")
var sb= document.getElementById("spiderman2")
var tb= document.getElementById("spiderman3")
var ub= document.getElementById("batmanbegins")
var vb= document.getElementById("thedarkknight")
var wb= document.getElementById("thedarknightrises")
var xb= document.getElementById("godzilla1954")
var yb= document.getElementById("godzilla2014")
var zb= document.getElementById("shingodzilla")
var kotm= document.getElementById("godzillakingofthemonsters")
var ac= document.getElementById("godzilla2014roar")
var bc= document.getElementById("godzilla1954roar")
var cc= document.getElementById("shingodzillaroar")
var dc= document.getElementById("mothraroar")
var ec= document.getElementById("Ghidoraroar")
var fc= document.getElementById("Rodanroar")
var gc= document.getElementById("luke")
var hc= document.getElementById("obiwan")
var ic= document.getElementById("hansolo")
var jc= document.getElementById("leia")
var kc= document.getElementById("yoda")
var lc= document.getElementById("darthvader")
var mc= document.getElementById("ironman")
var nc= document.getElementById("thor")
var oc= document.getElementById("spiderman")
var pc= document.getElementById("captainamerica")
var qc= document.getElementById("hulk")
var rc= document.getElementById("blackpanther")

function restart(elem){
	document.location.reload(true);
}

//In this function, as well as the 5 following ones, I am using the remove onclick atrribute, in order to make the image a simple image, without extra function.
function changePicturem(elem){
	a.src = "images/MCU_Images/Marvel_Cinematic_Universe.png";
	b.src = "images/MCU_Images/IronMan.jpg";
	c.src = "images/MCU_Images/CaptainAmerica.jpg";
	d.src = "images/MCU_Images/Thor.jpg";
	e.src = "images/MCU_Images/spiderman.jpg";
	f.src = "images/MCU_Images/hulk.jpg";
	g.src = "images/MCU_Images/BlackPanther.jpg";
	b.removeAttribute("onclick");
	c.removeAttribute("onclick");
	d.removeAttribute("onclick");
	e.removeAttribute("onclick");
	f.removeAttribute("onclick");
	g.removeAttribute("onclick");
	h.style.display="flex"
	n.style.display="flex"
	w.style.display="flex"
	document.getElementById( "Marvel" ).setAttribute( "onClick", "javascript: ironman();" );
	document.getElementById( "Batman" ).setAttribute( "onClick", "javascript: captainamerica();" );
	document.getElementById( "Starwars" ).setAttribute( "onClick", "javascript: thor();" );
	document.getElementById( "Spiderman" ).setAttribute( "onClick", "javascript: hulk();" );
	document.getElementById( "Wizardingworld" ).setAttribute( "onClick", "javascript: spiderman();" );	
	document.getElementById( "Godzilla" ).setAttribute( "onClick", "javascript: blackpanther();" );
	z.play();
}

var ironman = function(){
	z.pause()
	mc.play()
	nc.pause()
	oc.pause()
	pc.pause()
	qc.pause()
	rc.pause()
}

var thor = function(){
	z.pause();
	mc.pause()
	nc.play()
	oc.pause()
	pc.pause()
	qc.pause()
	rc.pause()
}

var spiderman = function(){
	z.pause();
	mc.pause()
	nc.pause()
	oc.play()
	pc.pause()
	qc.pause()
	rc.pause()
}

var captainamerica = function(){
	z.pause();
	mc.pause()
	nc.pause()
	oc.pause()
	pc.play()
	qc.pause()
	rc.pause()
}

var hulk = function(){
	z.pause();
	mc.pause()
	nc.pause()
	oc.pause()
	pc.pause()
	qc.play()
	rc.pause()
}

var blackpanther = function(){
	z.pause();
	mc.pause()
	nc.pause()
	oc.pause()
	pc.pause()
	qc.pause()
	rc.play()
}

function changePictures(elem){
	a.src = "images/SW_Images/Star-wars-logo.jpg";
	b.src = "images/SW_Images/luke.jpg";
	c.src = "images/SW_Images/ObiWan.jpg";
	d.src = "images/SW_Images/han.jpg";
	e.src = "images/SW_Images/yoda.jpg";
	f.src = "images/SW_Images/leia.jpg";
	g.src = "images/SW_Images/darthvader.jpg";
	b.removeAttribute("onclick");
	c.removeAttribute("onclick");
	d.removeAttribute("onclick");
	e.removeAttribute("onclick");
	f.removeAttribute("onclick");
	g.removeAttribute("onclick");
	i.style.display="flex"
	o.style.display="flex"
	x.style.display="flex"
	document.getElementById( "Marvel" ).setAttribute( "onClick", "javascript: luke();" );
	document.getElementById( "Batman" ).setAttribute( "onClick", "javascript: obiwan();" );
	document.getElementById( "Starwars" ).setAttribute( "onClick", "javascript: hansolo();" );
	document.getElementById( "Spiderman" ).setAttribute( "onClick", "javascript: leia();" );
	document.getElementById( "Wizardingworld" ).setAttribute( "onClick", "javascript: yoda();" );	
	document.getElementById( "Godzilla" ).setAttribute( "onClick", "javascript: darthvader();" );
	bb.play();
}

var luke = function(){
    bb.pause()	
	gc.play()
	hc.pause()
	ic.pause()
	jc.pause()
	kc.pause()
	lc.pause()
}

var hansolo = function(){
    bb.pause()	
	gc.pause()
	hc.pause()
	ic.play()
	jc.pause()
	kc.pause()
	lc.pause()
}

var yoda = function(){
    bb.pause()	
	gc.pause()
	hc.pause()
	ic.pause()
	jc.pause()
	kc.play()
	lc.pause()
}

var obiwan = function(){
    bb.pause()	
	gc.pause()
	hc.play()
	ic.pause()	 
	jc.pause()
	kc.pause()
	lc.pause()
}

var leia = function(){
    bb.pause()	
	gc.pause()
	hc.pause()
	ic.pause()	 
	jc.play()
	kc.pause()
	lc.pause()
}

var darthvader = function(){
    bb.pause()	
	gc.pause()
	hc.pause()
	ic.pause()	 
	jc.pause()
	kc.pause()
	lc.play()
}

function changePictureb(elem){
	a.src = "images/BM_Images/batmantrilogy.jpg";
	b.src = "images/BM_Images/batman.jpg";
	c.src = "images/BM_Images/scarecrow.jpg";
	d.src = "images/BM_Images/gordon.jpg";
	e.src = "images/BM_Images/joker.jpg";
	f.src = "images/BM_Images/catwoman.jpg";
	g.src = "images/BM_Images/Bane.jpg";
	b.removeAttribute("onclick");
	c.removeAttribute("onclick");
	d.removeAttribute("onclick");
	e.removeAttribute("onclick");
	f.removeAttribute("onclick");
	g.removeAttribute("onclick");
	b.classList.remove("img");
	c.classList.remove("img");
	d.classList.remove("img");
	e.classList.remove("img");
	f.classList.remove("img");
	g.classList.remove("img");
	b.classList.add("img2");
	c.classList.add("img2");
	d.classList.add("img2");
	e.classList.add("img2");
	f.classList.add("img2");
	g.classList.add("img2");
	k.style.display="flex"
	q.style.display="flex"
	t.style.display="flex"
	ab.play();
}

function changePicturesm(elem){
	a.src = "images/SM_Images/spidermantrilogy.jpg";
	b.src = "images/SM_Images/peter.jpg";
	c.src = "images/SM_Images/maryjane.jpg";
	d.src = "images/SM_Images/harry.jpg";
	e.src = "images/SM_Images/greengoblin.jpg";
	f.src = "images/SM_Images/doctor octopus.jpg";
	g.src = "images/SM_Images/venom.jpg";
	b.removeAttribute("onclick");
	c.removeAttribute("onclick");
	d.removeAttribute("onclick");
	e.removeAttribute("onclick");
	f.removeAttribute("onclick");
	g.removeAttribute("onclick");
	b.classList.remove("img");
	c.classList.remove("img");
	d.classList.remove("img");
	e.classList.remove("img");
	f.classList.remove("img");
	g.classList.remove("img");
	b.classList.add("img2");
	c.classList.add("img2");
	d.classList.add("img2");
	e.classList.add("img2");
	f.classList.add("img2");
	g.classList.add("img2");
	l.style.display="flex"
	r.style.display="flex"
	u.style.display="flex"
	cb.play();
}

function changePicturew(elem){
	a.src = "images/WW_Images/wizardingworldlogo.png";
	b.src = "images/WW_Images/Harry.jpg";
	c.src = "images/WW_Images/Ron.jpg";
	d.src = "images/WW_Images/Hermione.jpg";
	e.src = "images/WW_Images/dumbledore.jpg";
	f.src = "images/WW_Images/Voldemort.jpg";
	g.src = "images/WW_Images/Newt.jpg";
	b.removeAttribute("onclick");
	c.removeAttribute("onclick");
	d.removeAttribute("onclick");
	e.removeAttribute("onclick");
	f.removeAttribute("onclick");
	g.removeAttribute("onclick");
	b.classList.remove("img");
	c.classList.remove("img");
	d.classList.remove("img");
	e.classList.remove("img");
	f.classList.remove("img");
	g.classList.remove("img");
	b.classList.add("img2");
	c.classList.add("img2");
	d.classList.add("img2");
	e.classList.add("img2");
	f.classList.add("img2");
	g.classList.add("img2");
	j.style.display="flex"
	p.style.display="flex"
	y.style.display="flex"
	db.play();
}

function changePictureg(elem){
	a.src = "images/GZ_Images/godzillalogo.jpg";
	b.src = "images/GZ_Images/Godzilla.jpg";
	c.src = "images/GZ_Images/Mothra.jpg";
	d.src = "images/GZ_Images/Ghidorah.jpg";
	e.src = "images/GZ_Images/rodan.jpg";
	f.src = "images/GZ_Images/SG.jpeg";
	g.src = "images/GZ_Images/Kong.jpg";
	b.removeAttribute("onclick");
	c.removeAttribute("onclick");
	d.removeAttribute("onclick");
	e.removeAttribute("onclick");
	f.removeAttribute("onclick");
	g.removeAttribute("onclick");
	m.style.display="flex"
	s.style.display="flex"
	v.style.display="flex"
	document.getElementById( "Marvel" ).setAttribute( "onClick", "javascript: roar1();" );
	document.getElementById( "Batman" ).setAttribute( "onClick", "javascript: roar2();" );
	document.getElementById( "Starwars" ).setAttribute( "onClick", "javascript: roar3();" );
	document.getElementById( "Spiderman" ).setAttribute( "onClick", "javascript: roar4();" );
	document.getElementById( "Wizardingworld" ).setAttribute( "onClick", "javascript: roar5();" );	
	document.getElementById( "Godzilla" ).setAttribute( "onClick", "javascript: roar6();" );
	eb.play()
}

var roar1 = function(){
    eb.pause()	
	bc.pause()
	cc.pause()
	dc.pause()
	ec.pause()
	fc.pause()
	ac.play()
}

var roar2 = function(){
    eb.pause()	
	bc.pause()
	cc.pause()
	ac.pause()
	ec.pause()
	fc.pause()
	dc.play()
}

var roar3 = function(){
    eb.pause()	
	bc.pause()
	cc.pause()
	ac.pause()
	dc.pause()
	fc.pause()
	ec.play()
}

var roar4 = function(){
    eb.pause()	
	bc.pause()
	ec.pause()
	ac.pause()
	dc.pause()
	fc.pause()
	cc.play()
}

var roar5 = function(){
    eb.pause()	
	ec.pause()
	cc.pause()
	ac.pause()
	dc.pause()
	bc.pause()
	fc.play()
}

var roar6 = function(){
    eb.pause()	
	ec.pause()
	cc.pause()
	ac.pause()
	dc.pause()
	fc.pause()
	bc.play()
}

function changeta(elem){
	document.getElementsByClassName("mcudescription")[0].innerHTML = "When Thor's evil brother, Loki, gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury, director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's 'dream team' are Iron Man, Captain America, the Hulk, Thor, the Black Widow and Hawkeye.";
	document.getElementsByClassName("mcumoney")[0].innerHTML = "This movie made around 1.52 billion  dollars at the global box office";
	fb.classList.remove("grey");
	gb.classList.add("grey");
	hb.classList.add("grey");
	ib.classList.add("grey");

}

function changeaaou(elem){
	document.getElementsByClassName("mcudescription")[0].innerHTML = "When Tony Stark jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor, the Incredible Hulk and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.";
	document.getElementsByClassName("mcumoney")[0].innerHTML = "This movie made around 1.41 billion  dollars at the global box office";
	fb.classList.add("grey");
	gb.classList.remove("grey");
	hb.classList.add("grey");
	ib.classList.add("grey");
}

function changeaiw(elem){
	document.getElementsByClassName("mcudescription")[0].innerHTML = "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.";
	document.getElementsByClassName("mcumoney")[0].innerHTML = "This movie made around 2.05 billion  dollars at the global box office";
	fb.classList.add("grey");
	gb.classList.add("grey");
	hb.classList.remove("grey");
	ib.classList.add("grey");
}

function changeae(elem){
	document.getElementsByClassName("mcudescription")[0].innerHTML = "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.";
	document.getElementsByClassName("mcumoney")[0].innerHTML = "This movie made around 2.77 billion  dollars at the global box office";
	fb.classList.add("grey");
	gb.classList.add("grey");
	hb.classList.add("grey");
	ib.classList.remove("grey");
}

function changeswei(elem){
	document.getElementsByClassName("swdescription")[0].innerHTML = "Obi-Wan Kenobi is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn; Anakin Skywalker, who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.";
	document.getElementsByClassName("swmoney")[0].innerHTML = "This movie made around 1.03 billion  dollars at the global box office";
	jb.classList.remove("grey");
	kb.classList.add("grey");
	lb.classList.add("grey");
	mb.classList.add("grey");
}

function changeswevii(elem){
	document.getElementsByClassName("swdescription")[0].innerHTML = "Set 30 years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire.";
	document.getElementsByClassName("swmoney")[0].innerHTML = "This movie made around 2.07 billion  dollars at the global box office";
	jb.classList.add("grey");
	kb.classList.remove("grey");
	lb.classList.add("grey");
	mb.classList.add("grey");
}

function changeswro(elem){
	document.getElementsByClassName("swdescription")[0].innerHTML = "Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen becomes the Empire's lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, Jyn joins forces with a spy and other resistance fighters to steal the space station's plans for the Rebel Alliance.";
	document.getElementsByClassName("swmoney")[0].innerHTML = "This movie made around 1.06 billion  dollars at the global box office";
	jb.classList.add("grey");
	kb.classList.add("grey");
	lb.classList.remove("grey");
	mb.classList.add("grey");
}

function changesweviii(elem){
	document.getElementsByClassName("swdescription")[0].innerHTML = "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.";
	document.getElementsByClassName("swmoney")[0].innerHTML = "This movie made around 1.33 billion  dollars at the global box office";
	jb.classList.add("grey");
	kb.classList.add("grey");
	lb.classList.add("grey");
	mb.classList.remove("grey");
}

function changehpss(elem){
	document.getElementsByClassName("wwdescription")[0].innerHTML = "Harry, Ron, and Hermione deduce that the treasure under the trapdoor is the Philosopher's Stone, which can transform metal into gold and can also confer immortality. They later discover that Voldemort has been killing unicorns in the Forbidden Forest and drinking their blood, another way to achieve immortality.";
	document.getElementsByClassName("wwmoney")[0].innerHTML = "This movie made around 978 million dollars at the global box office";
	nb.classList.remove("grey");
	ob.classList.add("grey");
	pb.classList.add("grey");
	qb.classList.add("grey");
}

function changehpootp(elem){
	document.getElementsByClassName("wwdescription")[0].innerHTML = "Now in his fifth year at Hogwarts, Harry learns that many in the wizarding community do not know the truth of his encounter with Lord Voldemort. Cornelius Fudge, minister of Magic, appoints his toady, Dolores Umbridge, as Defense Against the Dark Arts teacher, for he fears that professor Dumbledore will take his job. But her teaching is deficient and her methods, cruel, so Harry prepares a group of students to defend the school against a rising tide of evil.";
	document.getElementsByClassName("wwmoney")[0].innerHTML = "This movie made around 938 million dollars at the global box office";
	nb.classList.add("grey");
	ob.classList.remove("grey");
	pb.classList.add("grey");
	qb.classList.add("grey");
}

function changehpdhp1(elem){
	document.getElementsByClassName("wwdescription")[0].innerHTML = "Without the guidance and protection of their professors, Harry, Ron and Hermione begin a mission to destroy the Horcruxes, the sources of Voldemort's immortality. Though they must rely on one another more than ever, dark forces threaten to tear them apart. Voldemort's Death Eaters have seized control of the Ministry of Magic and Hogwarts, and they are searching for Harry even as he and his friends prepare for the ultimate showdown.";
	document.getElementsByClassName("wwmoney")[0].innerHTML = "This movie made around 960 million dollars at the global box office";
	nb.classList.add("grey");
	ob.classList.add("grey");
	pb.classList.remove("grey");
	qb.classList.add("grey");
}

function changehpdhp2(elem){
	document.getElementsByClassName("wwdescription")[0].innerHTML = "The end begins as Harry, Ron, and Hermione go back to Hogwarts to find and destroy Voldemort's final horcruxes, but when Voldemort finds out about their mission, the biggest battle begins and life as they know it will never be the same again.";
	document.getElementsByClassName("wwmoney")[0].innerHTML = "This movie made around 1.34 billion  dollars at the global box office";
	nb.classList.add("grey");
	ob.classList.add("grey");
	pb.classList.add("grey");
	qb.classList.remove("grey");
}

function changesm1(elem){
	document.getElementsByClassName("smdescription")[0].innerHTML = " When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.";
	document.getElementsByClassName("smmoney")[0].innerHTML = "This movie made around 825 million dollars at the global box office";
	rb.classList.remove("grey");
	sb.classList.add("grey");
	tb.classList.add("grey");
}

function changesm2(elem){
	document.getElementsByClassName("smdescription")[0].innerHTML = "DescriptionWhen a failed nuclear fusion experiment results in an explosion that kills his wife, Dr. Otto Octavius is transformed into Dr. Octopus, a cyborg with deadly metal tentacles. Doc Ock blames Spider-Man for the accident and seeks revenge. Meanwhile, Spidey's alter ego, Peter Parker, faces fading powers and self-doubt. Complicating matters are his best friend's hatred for Spider-Man and his true love's sudden engagement to another man.";
	document.getElementsByClassName("smmoney")[0].innerHTML = "This movie made around 783 million dollars at the global box office";
	rb.classList.add("grey");
	sb.classList.remove("grey");
	tb.classList.add("grey");
}

function changesm3(elem){
	document.getElementsByClassName("smdescription")[0].innerHTML = "Peter Parker and M.J. seem to finally be on the right track in their complicated relationship, but trouble looms for the superhero and his lover. Peter's Spider-Man suit turns black and takes control of him, not only giving Peter enhanced power but also bringing out the dark side of his personality. Peter must overcome the suit's influence as two supervillains, Sandman and Venom, rise up to destroy him and all those he holds dear.";
	document.getElementsByClassName("smmoney")[0].innerHTML = "This movie made around 890 million dollars at the global box office";
	rb.classList.add("grey");
	sb.classList.add("grey");
	tb.classList.remove("grey");
}

function changebb(elem){
	document.getElementsByClassName("bmdescription")[0].innerHTML = "A young Bruce Wayne travels to the Far East, where he's trained in the martial arts by Henri Ducard, a member of the mysterious League of Shadows. When Ducard reveals the League's true purpose -- the complete destruction of Gotham City -- Wayne returns to Gotham intent on cleaning up the city without resorting to murder. With the help of Alfred, his loyal butler, and Lucius Fox, a tech expert at Wayne Enterprises, Batman is born.";
	document.getElementsByClassName("bmmoney")[0].innerHTML = "This movie made around 373 million dollars at the global box office";
	ub.classList.remove("grey");
	vb.classList.add("grey");
	wb.classList.add("grey");
}

function changetdk(elem){
	document.getElementsByClassName("bmdescription")[0].innerHTML = "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.";
	document.getElementsByClassName("bmmoney")[0].innerHTML = "This movie made around 1 billion  dollars at the global box office";
	ub.classList.add("grey");
	vb.classList.remove("grey");
	wb.classList.add("grey");
}

function changetdkr(elem){
	document.getElementsByClassName("bmdescription")[0].innerHTML = "It has been eight years since Batman, in collusion with Commissioner Gordon , vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar and a merciless terrorist named Bane force Batman out of exile and into a battle he may not be able to win.";
	document.getElementsByClassName("bmmoney")[0].innerHTML = "This movie made around 1.08 billion  dollars at the global box office";
	ub.classList.add("grey");
	vb.classList.add("grey");
	wb.classList.remove("grey");
}

function changeg1954(elem){
	document.getElementsByClassName("gzdescription")[0].innerHTML = "A fire-breathing behemoth terrorizes Japan after an atomic bomb awakens it from its centuries-old sleep.";
	document.getElementsByClassName("gzmoney")[0].innerHTML = "This movie made around 20.98 million dollars at the global box office";
	xb.classList.remove("grey");
	yb.classList.add("grey");
	zb.classList.add("grey");
	kotm.classList.add("grey");
}

function changeg2014(elem){
	document.getElementsByClassName("gzdescription")[0].innerHTML = "Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when Godzilla, King of the Monsters, arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.";
	document.getElementsByClassName("gzmoney")[0].innerHTML = "This movie made around 524 million dollars at the global box office";
	xb.classList.add("grey");
	yb.classList.remove("grey");
	zb.classList.add("grey");
	kotm.classList.add("grey");
}

function changesg(elem){
	document.getElementsByClassName("gzdescription")[0].innerHTML = "Japan is plunged into chaos when a skyscraper-sized lizard monster rises from the deep of Tokyo Bay and lays waste to Tokyo.";
	document.getElementsByClassName("gzmoney")[0].innerHTML = "This movie made around 78 million dollars at the global box office";
	xb.classList.add("grey");
	yb.classList.add("grey");
	zb.classList.remove("grey");
	kotm.classList.add("grey");
}

function changegkotm(elem){
	document.getElementsByClassName("gzdescription")[0].innerHTML = "Members of the crypto-zoological agency Monarch face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species-thought to be mere myths-rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.";
	document.getElementsByClassName("gzmoney")[0].innerHTML = "This movie made around 385 million dollars at the global box office";
	xb.classList.add("grey");
	yb.classList.add("grey");
	zb.classList.add("grey");
	kotm.classList.remove("grey");
}
