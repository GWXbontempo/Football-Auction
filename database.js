/* ============================================================
   FOOTBALL AUCTION — BASE DE DADOS
   Edite só este arquivo para adicionar/ajustar jogadores e países.
   Carregado por index.html antes do jogo (script clássico: funciona
   ao abrir direto do disco, sem servidor).
   ============================================================ */

/* País (como escrito na lista) -> código ISO de 2 letras, usado para a bandeira.
   Inglaterra e Escócia são tratadas à parte no jogo. */
const ISO={Bélgica:'BE',Brasil:'BR',Itália:'IT',Alemanha:'DE',Eslovênia:'SI',Holanda:'NL',Portugal:'PT',França:'FR',Marrocos:'MA',Canadá:'CA',Espanha:'ES',Croácia:'HR',Uruguai:'UY',Noruega:'NO',Egito:'EG',Argentina:'AR',Polônia:'PL',Geórgia:'GE',Equador:'EC',Suécia:'SE',Hungria:'HU',Camarões:'CM',Guiné:'GN',Sérvia:'RS',Nigéria:'NG',Colômbia:'CO'};

/* Formato: Nome|País|AnoNasc|Clube|Posição|Secundária|Velocidade,Finalização,Passe,Drible,Defesa,Físico
   Atributos são ESTIMATIVAS não oficiais. Para adicionar/editar jogadores, mexa só nesta lista. */
const RAW=`Thibaut Courtois|Bélgica|1992|Real Madrid|GK||42,20,62,35,96,85
Alisson Becker|Brasil|1992|Liverpool|GK||46,20,73,40,92,79
Gianluigi Donnarumma|Itália|1999|Manchester City|GK||46,20,63,35,94,84
Marc-André ter Stegen|Alemanha|1992|Barcelona|GK||42,20,78,45,86,75
Jan Oblak|Eslovênia|1993|Atlético de Madrid|GK||43,20,59,35,93,81
Virgil van Dijk|Holanda|1991|Liverpool|ZAG||70,60,72,70,90,85
Rúben Dias|Portugal|1997|Manchester City|ZAG||71,45,71,66,94,86
William Saliba|França|2001|Arsenal|ZAG||81,40,71,71,95,85
Alessandro Bastoni|Itália|1999|Inter de Milão|LE|ZAG|76,56,88,79,96,83
Antonio Rüdiger|Alemanha|1993|Real Madrid|ZAG||80,45,65,60,86,88
Marquinhos|Brasil|1994|PSG|ZAG|VOL|73,52,77,72,92,82
Gabriel Magalhães|Brasil|1997|Arsenal|ZAG||71,48,66,61,93,88
Achraf Hakimi|Marrocos|1998|PSG|LD|PD|96,76,83,86,84,78
Trent Alexander-Arnold|Inglaterra|1998|Real Madrid|LD|MEI|79,70,94,83,85,73
Alphonso Davies|Canadá|2000|Bayern de Munique|LE|PE|95,60,72,80,76,76
Pau Cubarsí|Espanha|2007|Barcelona|ZAG||71,40,79,73,91,75
Dayot Upamecano|França|1998|Bayern de Munique|ZAG||80,40,68,66,84,86
Joško Gvardiol|Croácia|2002|Manchester City|LE|ZAG|81,56,78,76,93,87
Nuno Mendes|Portugal|2002|PSG|LE|PE|93,53,80,86,87,75
Andrew Robertson|Escócia|1994|Liverpool|LE||81,56,84,77,85,76
Éder Militão|Brasil|1998|Real Madrid|LD|ZAG|85,42,72,69,93,87
Rodri|Espanha|1996|Manchester City|VOL|ZAG|63,73,95,82,91,88
Jude Bellingham|Inglaterra|2003|Real Madrid|MEI|MAT|80,84,91,92,74,81
Pedri|Espanha|2002|Barcelona|MEI||75,72,96,96,67,67
Federico Valverde|Uruguai|1998|Real Madrid|LD|MEI|85,79,87,82,82,87
Declan Rice|Inglaterra|1999|Arsenal|VOL|ZAG|75,71,88,80,88,88
Vitinha|Portugal|2000|PSG|VOL|MEI|75,74,96,95,77,73
Martin Ødegaard|Noruega|1998|Arsenal|MEI|MAT|71,78,94,91,61,67
Florian Wirtz|Alemanha|2003|Liverpool|MAT|MEI|78,80,88,92,56,64
Jamal Musiala|Alemanha|2003|Bayern de Munique|MAT|PE|83,80,86,96,52,66
Kevin De Bruyne|Bélgica|1991|Napoli|MEI|MAT|66,86,93,86,56,72
Bruno Fernandes|Portugal|1994|Manchester United|MAT|MEI|70,84,89,82,70,76
Nicolò Barella|Itália|1997|Inter de Milão|VOL|MEI|77,73,90,85,82,81
Joshua Kimmich|Alemanha|1995|Bayern de Munique|LD|VOL|73,73,95,86,88,81
Frenkie de Jong|Holanda|1997|Barcelona|VOL|MEI|80,64,88,92,76,70
Bernardo Silva|Portugal|1994|Manchester City|MEI|PD|78,76,88,92,70,66
Phil Foden|Inglaterra|2000|Manchester City|MAT|PE|79,82,84,88,56,64
Kylian Mbappé|França|1998|Real Madrid|ATA|PE|97,92,80,92,40,76
Erling Haaland|Noruega|2000|Manchester City|ATA||91,95,68,80,45,92
Lamine Yamal|Espanha|2007|Barcelona|PD||91,84,87,96,40,61
Vinícius Júnior|Brasil|2000|Real Madrid|PE||96,84,78,94,40,72
Mohamed Salah|Egito|1992|Liverpool|PD|ATA|90,90,84,88,48,72
Harry Kane|Inglaterra|1993|Bayern de Munique|ATA|MAT|70,94,86,80,50,82
Raphinha|Brasil|1996|Barcelona|PD|PE|87,86,83,92,50,75
Ousmane Dembélé|França|1997|PSG|PD|PE|95,88,84,96,48,68
Bukayo Saka|Inglaterra|2001|Arsenal|PD||86,84,84,88,62,70
Lautaro Martínez|Argentina|1997|Inter de Milão|ATA||82,88,76,84,50,82
Diogo Costa|Portugal|1999|Porto|GK||42,20,72,35,88,82
David Raya|Espanha|1995|Arsenal|GK||40,20,82,38,88,76
Emiliano Martínez|Argentina|1992|Aston Villa|GK||40,18,62,30,88,82
Jules Koundé|França|1998|Barcelona|LD|ZAG|87,46,81,76,92,84
João Cancelo|Portugal|1994|Barcelona|LD|LE|85,59,89,86,76,71
Alejandro Balde|Espanha|2003|Barcelona|LE||92,48,74,82,74,72
Federico Dimarco|Itália|1997|Inter de Milão|LE|PE|81,63,91,84,82,74
Alessandro Buongiorno|Itália|1999|Napoli|ZAG||70,38,68,62,86,84
William Pacho|Equador|2001|PSG|ZAG||78,35,70,62,86,84
Bruno Guimarães|Brasil|1997|Newcastle United|VOL|MEI|72,68,86,82,80,82
João Neves|Portugal|2004|PSG|VOL|MEI|77,59,90,86,84,76
Alexis Mac Allister|Argentina|1998|Liverpool|MEI|VOL|70,75,95,87,72,73
Cole Palmer|Inglaterra|2002|Chelsea|MAT|PD|72,88,86,90,48,68
Dani Olmo|Espanha|1998|Barcelona|MAT|MEI|76,78,86,90,52,66
Gavi|Espanha|2004|Barcelona|MEI|VOL|75,64,87,87,77,77
Moisés Caicedo|Equador|2001|Chelsea|VOL|MEI|76,55,82,78,86,84
Enzo Fernández|Argentina|2001|Chelsea|MEI|VOL|69,70,93,84,73,75
Michael Olise|França|2001|Bayern de Munique|PD|MAT|78,82,86,92,44,64
Rodrygo|Brasil|2001|Real Madrid|PD|ATA|86,82,80,90,42,66
Gabriel Martinelli|Brasil|2001|Arsenal|PE|ATA|90,80,74,86,46,74
Bradley Barcola|França|2002|PSG|PE|ATA|92,78,74,88,40,68
Julián Álvarez|Argentina|2000|Atlético de Madrid|ATA|MAT|82,86,78,84,52,76
Alexander Isak|Suécia|1999|Liverpool|ATA||88,90,72,88,42,78
Victor Osimhen|Nigéria|1998|Galatasaray|ATA||90,88,62,78,38,88
Rafael Leão|Portugal|1999|Milan|PE|ATA|91,80,75,89,42,75
Ederson Moraes|Brasil|1993|Fenerbahçe|GK||48,22,86,42,84,78
Mike Maignan|França|1995|Milan|GK||44,20,76,38,90,82
Yassine Bounou|Marrocos|1991|Al-Hilal|GK||40,18,65,30,86,80
Ronald Araújo|Uruguai|1999|Barcelona|ZAG|LD|82,48,66,64,86,90
Ibrahima Konaté|França|1999|Liverpool|ZAG||82,35,64,60,86,90
Piero Hincapié|Equador|2002|Arsenal|ZAG|LE|82,42,72,70,84,82
Matthijs de Ligt|Holanda|1999|Manchester United|ZAG||68,40,68,62,88,88
Ben White|Inglaterra|1997|Arsenal|LD|ZAG|75,49,82,77,87,80
Denzel Dumfries|Holanda|1996|Inter de Milão|LD|PD|89,66,73,76,79,87
Malo Gusto|França|2003|Chelsea|LD||88,42,76,80,72,72
Riccardo Calafiori|Itália|2002|Arsenal|LE|ZAG|79,49,85,79,88,80
Ferland Mendy|França|1995|Real Madrid|LE||86,35,68,76,82,78
Mikel Merino|Espanha|1996|Arsenal|MEI|VOL|63,70,84,79,79,83
Fabián Ruiz|Espanha|1996|PSG|MEI|VOL|64,70,94,86,70,75
İlkay Gündoğan|Alemanha|1990|Galatasaray|MEI|MAT|58,72,88,82,62,64
Sandro Tonali|Itália|2000|Newcastle United|VOL|MEI|73,66,89,81,83,83
Manuel Ugarte|Uruguai|2001|Manchester United|VOL||72,42,72,68,86,84
Aurélien Tchouaméni|França|2000|Real Madrid|VOL|ZAG|71,53,84,76,90,88
Amadou Onana|Bélgica|2001|Aston Villa|VOL|MEI|72,48,70,68,82,90
Dominik Szoboszlai|Hungria|2000|Liverpool|MEI|MAT|82,78,84,82,64,78
Xavi Simons|Holanda|2003|Tottenham|MAT|PD|81,74,81,87,48,64
Rayan Cherki|França|2003|Manchester City|MAT|PD|76,72,82,94,40,62
Eberechi Eze|Inglaterra|1998|Arsenal|MAT|PE|78,78,80,92,46,70
Savinho|Brasil|2004|Manchester City|PD|PE|85,70,77,88,42,63
Bryan Mbeumo|Camarões|1999|Manchester United|PD|ATA|84,84,76,82,48,78
Nico Williams|Espanha|2002|Athletic Club|PE|PD|92,75,75,88,42,67
Luis Díaz|Colômbia|1997|Bayern de Munique|PE|ATA|90,82,76,90,46,72
Cody Gakpo|Holanda|1999|Liverpool|PE|ATA|82,82,76,84,44,78
Marcus Thuram|França|1997|Inter de Milão|ATA|PE|86,84,72,82,42,86
Ollie Watkins|Inglaterra|1995|Aston Villa|ATA||85,83,69,76,44,77
Serhou Guirassy|Guiné|1996|Borussia Dortmund|ATA||72,88,64,72,42,86
Benjamin Šeško|Eslovênia|2003|Manchester United|ATA||88,84,62,76,38,86
Dusan Vlahović|Sérvia|2000|Juventus|ATA||72,90,62,72,40,86
Endrick|Brasil|2006|Real Madrid|ATA||82,79,61,82,38,75
Khvicha Kvaratskhelia|Geórgia|2001|PSG|PE||86,82,80,92,48,70`.split('\n');
