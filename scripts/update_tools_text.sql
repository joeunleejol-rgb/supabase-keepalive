-- =============================================================================
-- 2U 이유식 — tools 테이블 텍스트 동기화 (요약 / 상세 설명 역할 분리)
-- 생성: src/data/toolsData.ts 와 동일 (node scripts/generate-tools-update-sql.cjs)
-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run
-- =============================================================================

BEGIN;
-- 이유식 전용 도마
UPDATE tools
SET
  description = '어른 식재료의 교차 오염을 방지하기 위해 아기 음식만 따로 조리하는 전용 도마입니다. 가볍고 세척이 편리한 크기가 좋습니다.',
  description_en = 'A dedicated board for baby food only, kept separate from adult ingredients to prevent cross-contamination. Choose a small, lightweight size that is easy to wash.',
  description_de = 'Ein eigenes Schneidebrett nur für Beikost, getrennt von Erwachsenen-Zutaten, um Kreuzkontamination zu vermeiden. Klein und leicht reinigbar ist ideal.',
  description_fr = 'Planche réservée aux aliments bébé, séparée des ingrédients adultes pour éviter la contamination croisée. Privilégiez un format compact et facile à laver.',
  description_it = 'Tagliere dedicato solo agli alimenti per bebè, separato da quello degli adulti per evitare contaminazioni incrociate. Meglio un modello piccolo e facile da lavare.',
  detail_description = '날것과 익힌 음식용 도마를 구분하는 것이 위생적입니다. 세균 번식이 적은 실리콘, 항균 TPU 또는 전용 나무 소재를 추천하며 주기적인 살균 소독이 필요합니다.',
  detail_description_en = 'Use separate boards for raw and cooked foods. Silicone, antimicrobial TPU, or dedicated wood boards are recommended — sterilise them regularly.',
  detail_description_de = 'Trennen Sie Bretter für rohe und gekochte Lebensmittel. Silikon, antimikrobielles TPU oder spezielles Holz sind empfehlenswert — regelmäßig desinfizieren.',
  detail_description_fr = 'Séparez les planches pour aliments crus et cuits. Silicone, TPU antibactérien ou bois dédié sont recommandés — désinfectez-les régulièrement.',
  detail_description_it = 'Usa taglieri separati per crudo e cotto. Silicone, TPU antibatterico o legno dedicato sono consigliati — sterilizzali periodicamente.'
WHERE id = 'e581dbec-0e48-4246-b8ff-25df6d91aae3';

-- 이유식 조리용 냄비
UPDATE tools
SET
  description = '소량의 죽이나 퓨레를 끓이거나 찌기 위한 아기 전용 냄비입니다. 어른 요리와 분리해 사용하면 맛과 위생을 함께 지킬 수 있습니다.',
  description_en = 'A small dedicated pot for simmering or steaming tiny portions of porridge and purées. Keeping it separate from adult cookware protects both flavour and hygiene.',
  description_de = 'Ein kleiner Topf nur für Beikost — zum Köcheln oder Dämpfen kleiner Portionen Brei und Püree. Getrennt von Erwachsenen-Töpfen schützt er Geschmack und Hygiene.',
  description_fr = 'Petite casserole dédiée pour cuire de petites portions de purées et bouillies. Séparée de la vaisselle adulte, elle préserve goût et hygiène.',
  description_it = 'Piccola pentola dedicata per cuocere porzioni ridotte di pappe e puree. Separata dalla cucina degli adulti, tutela sapore e igiene.',
  detail_description = '14–16cm 두꺼운 바닥 스테인리스 냄비가 열 분산에 좋습니다. 뚜껑이 있으면 수분을 유지해 죽을 부드럽게 끓일 수 있어요. 사용 후 즉시 세척하고 건조해 보관하세요.',
  detail_description_en = 'A 14–16 cm stainless-steel pot with a thick base distributes heat evenly. A lid helps retain moisture for soft porridge. Wash and dry immediately after use.',
  detail_description_de = 'Ein 14–16 cm Edelstahltopf mit dickem Boden verteilt die Wärme gleichmäßig. Ein Deckel hält Feuchtigkeit für weichen Brei. Sofort nach Gebrauch waschen und trocknen.',
  detail_description_fr = 'Une casserole inox de 14–16 cm à fond épais répartit bien la chaleur. Un couvercle garde l’humidité pour des bouillies moelleuses. Lavez et séchez immédiatement après usage.',
  detail_description_it = 'Una pentola in acciaio da 14–16 cm con fondo spesso distribuisce il calore in modo uniforme. Un coperchio mantiene l’umidità per pappe morbide. Lavare e asciugare subito dopo l’uso.'
WHERE id = '2b6e0781-addb-45a9-9c02-9c9757b245f7';

-- 이유식 초퍼
UPDATE tools
SET
  description = '채소·육류를 곱게 다져 초기·중기 이유식 질감을 맞추는 소형 다지기입니다. 손으로 다지기 어려울 때 시간을 크게 줄여 줍니다.',
  description_en = 'A compact chopper for finely mincing vegetables and meat to match early- and mid-stage textures. Saves significant time when hand-chopping is impractical.',
  description_de = 'Kompakter Hacker zum feinen Zerkleinern von Gemüse und Fleisch für Früh- und Mittelstufe. Spart viel Zeit, wenn manuelles Hacken mühsam ist.',
  description_fr = 'Hachoir compact pour hacher finement légumes et viande aux textures des premiers stades. Fait gagner du temps quand le hachage manuel est difficile.',
  description_it = 'Tritatutto compatto per tritare finemente verdure e carne nelle fasi iniziali e intermedie. Fa risparmiare tempo quando il trito a mano è faticoso.',
  detail_description = '수동 타입은 소량·세척이 쉽고, 전동 타입은 양이 많을 때 편합니다. 날과 용기가 분리되는 구조면 틈새 세균을 줄일 수 있어요.',
  detail_description_en = 'Manual choppers suit small batches and easy cleaning; electric models help with larger volumes. A detachable blade and bowl reduce bacteria in hard-to-reach gaps.',
  detail_description_de = 'Manuelle Modelle eignen sich für kleine Mengen und einfache Reinigung, elektrische für größere Portionen. Abnehmbare Klinge und Behälter reduzieren Keime in Ritzen.',
  detail_description_fr = 'Les modèles manuels conviennent aux petites quantités et au nettoyage facile ; les électriques aux gros volumes. Lame et bol amovibles limitent les bactéries dans les interstices.',
  detail_description_it = 'I modelli manuali vanno bene per piccole quantità e pulizia facile; quelli elettrici per volumi maggiori. Lama e contenitore removibili riducono i batteri negli spazi stretti.'
WHERE id = 'e3efa959-3559-4bcf-8ac2-bcba602c1c08';

-- 실리콘 이유식 스푼
UPDATE tools
SET
  description = '아기 잇몸을 보호하는 부드러운 실리콘 스푼입니다. 첫 이유식부터 입에 넣기 편한 필수 도구예요.',
  description_en = 'A soft silicone spoon that protects delicate gums — an essential tool from the very first spoonfuls of weaning.',
  description_de = 'Weicher Silikonlöffel, der empfindliches Zahnfleisch schont — unverzichtbar ab den ersten Beikost-Löffeln.',
  description_fr = 'Cuillère souple en silicone qui protège les gencives sensibles — indispensable dès les premières bouchées.',
  description_it = 'Cucchiaio morbido in silicone che protegge le gengive delicate — indispensabile fin dalle prime papille.',
  detail_description = '온도감지 스푼은 뜨거운 음식 전 점검에 유용합니다. 2–3개를 번갈아 세척·소독하세요. 얕고 넓은 스푼 끝이 처음 먹을 때 더 수월해요.',
  detail_description_en = 'Temperature-sensing tips help check food before feeding. Rotate 2–3 spoons between washing and sterilising. A shallow, wide head makes early feeding easier.',
  detail_description_de = 'Temperaturanzeigende Spitzen helfen vor dem Füttern. Wechseln Sie 2–3 Löffel zwischen Waschen und Sterilisieren. Flacher, breiter Kopf erleichtert den Einstieg.',
  detail_description_fr = 'Les embouts thermosensibles permettent de vérifier la température avant le repas. Alternez 2–3 cuillères entre lavage et stérilisation. Une tête plate et large facilite les débuts.',
  detail_description_it = 'Le punte termosensibili aiutano a controllare la temperatura prima del pasto. Alterna 2–3 cucchiai tra lavaggio e sterilizzazione. Una punta bassa e larga facilita l’inizio.'
WHERE id = 'e68c601e-acfa-433f-96ed-ef68165a7a15';

-- 계량컵
UPDATE tools
SET
  description = '이유식 레시피대로 재료 양을 맞추는 계량컵입니다. 초기 이유식에서 영양 균형과 질감을 일정하게 유지하는 데 도움이 됩니다.',
  description_en = 'A measuring cup for following weaning recipes accurately. Helps keep nutrition and texture consistent, especially in early-stage feeding.',
  description_de = 'Messbecher zum genauen Abmessen nach Beikost-Rezepten. Hilft, Nährstoffe und Konsistenz — besonders in der Frühphase — konstant zu halten.',
  description_fr = 'Verre doseur pour suivre précisément les recettes de diversification. Aide à maintenir équilibre nutritionnel et texture, surtout au début.',
  description_it = 'Misurino per seguire con precisione le ricette dello svezzamento. Aiuta a mantenere equilibrio nutrizionale e consistenza, soprattutto all’inizio.',
  detail_description = 'ml·cc 눈금이 선명한 내열 소재를 선택하세요. 쌀·물 비율을 기록해 두면 매번 같은 농도의 죽을 만들기 쉬워요.',
  detail_description_en = 'Choose heat-resistant cups with clear ml markings. Note your rice-to-water ratios so you can repeat the same porridge consistency each time.',
  detail_description_de = 'Wählen Sie hitzebeständige Becher mit klaren ml-Markierungen. Notieren Sie Reis-Wasser-Verhältnisse für gleichmäßigen Brei.',
  detail_description_fr = 'Choisissez un modèle résistant à la chaleur avec graduations ml lisibles. Notez vos ratios riz-eau pour reproduire la même consistance de bouillie.',
  detail_description_it = 'Scegli un modello resistente al calore con graduazioni ml chiare. Annota i rapporti riso-acqua per ripetere la stessa consistenza della pappa.'
WHERE id = '66f26214-411b-41c0-b098-a93b3d591b76';

-- 이유식 턱받이
UPDATE tools
SET
  description = '이유식을 먹을 때 옷과 바닥을 더럽히지 않도록 막아 주는 턱받이입니다. 매일 쓰는 만큼 세척이 쉬운 소재가 중요합니다.',
  description_en = 'A bib that keeps clothes and the floor cleaner during messy mealtimes. Easy-to-clean material matters when you use it every day.',
  description_de = 'Lätzchen, das Kleidung und Boden beim Essen sauberer hält. Leicht zu reinigendes Material ist wichtig bei täglichem Gebrauch.',
  description_fr = 'Bavoir qui protège vêtements et sol pendant les repas brouillons. Un matériau facile à nettoyer compte quand on l’utilise chaque jour.',
  description_it = 'Bavaglino che protegge vestiti e pavimento durante i pasti disordinati. Un materiale facile da pulire conta se lo usi ogni giorno.',
  detail_description = '실리콘은 물티슈로 닦기 편하고, 천은 흡수력이 좋아요. 3–5개를 번갈아 쓰세요. 목 부분이 부드럽고 주머니가 있는 제품이 더 실용적입니다.',
  detail_description_en = 'Silicone wipes clean quickly; fabric absorbs spills well. Keep 3–5 on rotation. Soft neck bands and a catch pocket make daily use much easier.',
  detail_description_de = 'Silikon lässt sich schnell abwischen, Stoff saugt gut auf. Halten Sie 3–5 im Wechsel bereit. Weiches Nackenband und Auffangtasche erleichtern den Alltag.',
  detail_description_fr = 'Le silicone s’essuie vite ; le tissu absorbe bien. Prévoyez 3–5 bavoirs en rotation. Col souple et poche récupératrice rendent l’usage quotidien plus pratique.',
  detail_description_it = 'Il silicone si pulisce in fretta; il tessuto assorbe bene. Tieni 3–5 bavaglini in rotazione. Collo morbido e tasca raccoglitore rendono l’uso quotidiano più pratico.'
WHERE id = 'abfb9ad6-bfa1-470f-822f-3f477535438f';

-- 전자 저울
UPDATE tools
SET
  description = '이유식 재료를 그램 단위로 정밀하게 재는 전자 저울입니다. 소량 재료의 영양 비율을 맞출 때 특히 유용합니다.',
  description_en = 'A digital scale for weighing weaning ingredients to the gram. Especially useful for balancing small amounts of grains, protein, and liquids.',
  description_de = 'Digitale Waage zum Wiegen von Beikost-Zutaten auf das Gramm genau. Besonders nützlich für kleine Mengen Getreide, Protein und Flüssigkeit.',
  description_fr = 'Balance numérique pour peser les ingrédients au gramme près. Particulièrement utile pour équilibrer petites quantités de céréales, protéines et liquides.',
  description_it = 'Bilancia digitale per pesare gli ingredienti al grammo. Particolarmente utile per bilanciare piccole quantità di cereali, proteine e liquidi.',
  detail_description = '1g 단위까지 표시되는 소형 주방 저울을 추천합니다. 영양제·곡물·육수 비율을 기록해 두면 레시피 재현이 쉬워요.',
  detail_description_en = 'Choose a compact kitchen scale with 1 g precision. Log your grain, protein, and liquid ratios to reproduce recipes reliably.',
  detail_description_de = 'Wählen Sie eine kompakte Küchenwaage mit 1-g-Genauigkeit. Notieren Sie Getreide-, Protein- und Flüssigkeitsverhältnisse für reproduzierbare Rezepte.',
  detail_description_fr = 'Choisissez une balance compacte avec précision à 1 g. Notez vos ratios céréales-protéines-liquides pour reproduire vos recettes.',
  detail_description_it = 'Scegli una bilancia compatta con precisione a 1 g. Annota i rapporti cereali-proteine-liquidi per riprodurre le ricette.'
WHERE id = '9816ff25-2bf0-491f-a102-4e1a53190832';

-- 빨대컵
UPDATE tools
SET
  description = '이유식과 함께 물·묽은 음료를 배우게 하는 빨대컵입니다. 흘림 방지 설계로 처음 음용 연습에 적합합니다.',
  description_en = 'A straw cup for learning to drink water alongside weaning. Spill-proof designs suit early drinking practice.',
  description_de = 'Trinkbecher mit Strohhalm zum Wasserlernen während der Beikost. Auslaufsichere Modelle eignen sich für erste Trinkübungen.',
  description_fr = 'Gobelet à paille pour apprendre à boire pendant la diversification. Les modèles anti-fuite conviennent aux premiers essais.',
  description_it = 'Bicchiere con cannuccia per imparare a bere durante lo svezzamento. I modelli anti-rovesciamento sono adatti ai primi tentativi.',
  detail_description = '생후 6개월 전후 소량의 물부터 시작하세요. BPA-free 분리형 구조가 세척에 유리하고, 180–240ml 용량이 초기에 적당합니다.',
  detail_description_en = 'Offer small amounts of water from around 6 months. BPA-free, detachable parts are easier to clean; 180–240 ml suits early use.',
  detail_description_de = 'Ab etwa 6 Monaten kleine Wassermengen anbieten. BPA-frei und abnehmbar erleichtert die Reinigung; 180–240 ml passen für den Anfang.',
  detail_description_fr = 'Proposez de petites quantités d’eau vers 6 mois. Sans BPA et démontable pour un nettoyage facile ; 180–240 ml conviennent au début.',
  detail_description_it = 'Offri piccole quantità d’acqua intorno ai 6 mesi. Senza BPA e smontabile per una pulizia facile; 180–240 ml vanno bene all’inizio.'
WHERE id = 'ef3b9b31-97cf-4f4a-b1d8-9500f8048f6f';

-- 실리콘 주걱
UPDATE tools
SET
  description = '냄비·용기 바닥의 이유식을 긁어내 waste 없이 옮기는 실리콘 주걱입니다. 소량 조리할 때 남은 양을 아끼는 데 유용합니다.',
  description_en = 'A silicone spatula for scraping every bit of food from pots and containers — useful when cooking tiny weaning portions.',
  description_de = 'Silikonspatel zum Herauskratzen jeder Beikost-Reste aus Töpfen und Behältern — praktisch bei kleinen Portionen.',
  description_fr = 'Spatule en silicone pour récupérer toute la préparation au fond des casseroles — utile pour les petites portions bébé.',
  description_it = 'Spatola in silicone per recuperare tutta la preparazione dal fondo di pentole e contenitori — utile per piccole porzioni.',
  detail_description = '열에 강한 일체형 실리콘이 틈새 세균을 줄입니다. 모서리가 얇은 타입이 용기 구석까지 깔끔하게 긁을 수 있어요.',
  detail_description_en = 'Heat-resistant one-piece silicone reduces bacterial buildup. A thin, flexible edge reaches corners and bowl bottoms cleanly.',
  detail_description_de = 'Hitzebeständiges einteiliges Silikon reduziert Keimbildung. Dünne, flexible Kante erreicht Ecken und Behälterböden gründlich.',
  detail_description_fr = 'Silicone monobloc résistant à la chaleur limite les bactéries. Un bord fin et souple atteint les coins et le fond des récipients.',
  detail_description_it = 'Silicone monopezzo resistente al calore riduce i batteri. Un bordo sottile e flessibile raggiunge angoli e fondi dei contenitori.'
WHERE id = '1831aaf2-a988-4abc-aa09-3b068f2118d2';

-- 아기 식사용 의자
UPDATE tools
SET
  description = '바른 자세로 앉아 안전하게 이유식을 먹도록 돕는 아기 식사용 의자입니다. 안정적인 착석감이 삼킴 안전에 중요합니다.',
  description_en = 'A high chair that helps baby sit upright safely for meals. Stable, supported posture matters for safe swallowing during weaning.',
  description_de = 'Hochstuhl, der Babys beim Essen sicher aufrecht sitzen lässt. Stabile Haltung ist wichtig für sicheres Schlucken in der Beikost.',
  description_fr = 'Chaise haute pour que bébé mange assis en sécurité. Une posture stable et soutenue est importante pour une déglutition sûre.',
  description_it = 'Seggiolone che aiuta il bambino a sedersi in sicurezza durante i pasti. Una postura stabile e supportata è importante per deglutire in sicurezza.',
  detail_description = '안전벨트·발받침·높이 조절 기능을 확인하세요. 탈착식 트레이는 세척이 편하고, 성장해도 오래 쓸 수 있는 모델이 경제적입니다.',
  detail_description_en = 'Look for a safety harness, footrest, and adjustable height. A removable tray simplifies cleaning; a grow-with-baby model lasts longer.',
  detail_description_de = 'Achten Sie auf Sicherheitsgurt, Fußstütze und Höhenverstellung. Abnehmbares Tablett erleichtert die Reinigung; mitwachsende Modelle halten länger.',
  detail_description_fr = 'Vérifiez harnais, repose-pieds et réglage en hauteur. Plateau amovible pour le nettoyage ; un modèle évolutif dure plus longtemps.',
  detail_description_it = 'Controlla cintura di sicurezza, poggiapiedi e regolazione in altezza. Vassoio removibile per la pulizia; un modello che cresce con il bambino dura di più.'
WHERE id = 'c64d9c51-61c4-4972-aa55-f3c3e48bbb72';

-- 소형 조리기 세트
UPDATE tools
SET
  description = '이유식을 곱게 갈거나 으깨는 소형 믹서·블렌더입니다. 초기 퓨레 질감을 만들 때 일반 믹서기보다 훨씬 편리합니다.',
  description_en = 'A compact blender or food maker for smooth purées and mashes. Far more practical than a full-size blender for early-stage textures.',
  description_de = 'Kompakter Mixer oder Beikost-Gerät für feine Pürees und Mus. Deutlich praktischer als ein großer Mixer für Frühstufen-Konsistenzen.',
  description_fr = 'Mixeur compact pour purées et mousses lisses. Bien plus pratique qu’un grand mixeur pour les textures des premiers stades.',
  description_it = 'Frullatore compatto per puree e passato lisce. Molto più pratico di un frullatore grande per le consistenze iniziali.',
  detail_description = '소량용 용기가 핵심입니다. 스팀+믹싱 일체형은 영양 손실을 줄이고, 분리·식기세척기 가능 부품이 위생 관리에 유리해요.',
  detail_description_en = 'A small-capacity jar is key. Steam-and-blend models preserve nutrients; removable, dishwasher-safe parts simplify hygiene.',
  detail_description_de = 'Kleines Behältervolumen ist entscheidend. Dampf-und-Mix-Modelle erhalten Nährstoffe; abnehmbare, spülmaschinenfeste Teile erleichtern die Hygiene.',
  detail_description_fr = 'Un petit bol est essentiel. Les modèles vapeur + mix réduisent la perte nutritionnelle ; pièces amovibles et lave-vaisselle facilitent l’hygiène.',
  detail_description_it = 'Un contenitore di piccola capacità è fondamentale. I modelli vapore + mix riducono la perdita nutrizionale; parti removibili e lavastoviglie semplificano l’igiene.'
WHERE id = 'a803c9e4-e65c-4ddf-bdb6-cec8fb2da526';

-- 이유식 보관 용기
UPDATE tools
SET
  description = '만든 이유식을 소분해 냉장·냉동 보관하는 용기입니다. 한 번에 여러 끼를 준비해 시간을 절약할 수 있습니다.',
  description_en = 'Containers for portioning and storing baby food in the fridge or freezer. Batch-cooking saves significant prep time each week.',
  description_de = 'Behälter zum Portionieren und Aufbewahren von Babynahrung im Kühlschrank oder Gefrierfach. Vorkochen spart wöchentlich viel Zeit.',
  description_fr = 'Contenants pour portionner et conserver les repas bébé au frigo ou congélateur. La préparation en avance fait gagner du temps chaque semaine.',
  description_it = 'Contenitori per porzionare e conservare il cibo in frigo o congelatore. Preparare in anticipo fa risparmiare tempo ogni settimana.',
  detail_description = '실리콘·유리 소재가 냉동에 적합합니다. 10–15개면 일주일치 준비가 가능해요. 전자레인지 해동 가능·눈금 표시 제품이 실용적입니다.',
  detail_description_en = 'Silicone or glass works well for freezing. 10–15 containers cover a week’s prep. Microwave-safe options with volume markings are most practical.',
  detail_description_de = 'Silikon oder Glas eignet sich zum Einfrieren. 10–15 Behälter reichen für eine Woche. Mikrowellengeeignet mit Volumenmarkierungen ist am praktischsten.',
  detail_description_fr = 'Silicone ou verre conviennent au congélateur. 10–15 contenants couvrent une semaine. Modèles micro-ondes avec graduations de volume sont les plus pratiques.',
  detail_description_it = 'Silicone o vetro vanno bene per il congelatore. 10–15 contenitori coprono una settimana. Modelli microonde con graduazioni di volume sono i più pratici.'
WHERE id = 'ba9ad2e8-2fcd-4639-a722-30d97df9480f';

-- 체 또는 거름망
UPDATE tools
SET
  description = '쌀미음·과일즙 등을 걸러 매끄러운 질감을 만드는 체입니다. 초기 이유식에서 알갱이·섬유를 제거할 때 필요합니다.',
  description_en = 'A strainer for smoothing rice porridge, fruit juice, and purées. Removes lumps and fibres for very early weaning textures.',
  description_de = 'Sieb zum Glätten von Reisbrei, Fruchtsaft und Pürees. Entfernt Klumpen und Fasern für sehr frühe Beikost-Konsistenzen.',
  description_fr = 'Passoire pour lisser bouillies, jus de fruits et purées. Retire grumeaux et fibres pour les toutes premières textures.',
  description_it = 'Colino per levigare pappe di riso, succhi di frutta e puree. Rimuove grumi e fibre per le prime consistenze.',
  detail_description = '눈이 촘촘한 스테인리스 체가 좋습니다. 걸러낸 찌꺼기는 버리거나 육수로 활용하고, 사용 후 바로 세척하세요.',
  detail_description_en = 'A fine stainless-steel mesh works best. Discard or reuse pulp for stock; wash immediately after straining.',
  detail_description_de = 'Feines Edelstahl-Sieb ist ideal. Treber entsorgen oder für Brühe nutzen; sofort nach dem Abseihen waschen.',
  detail_description_fr = 'Maille fine en inox est idéale. Jetez ou réutilisez la pulpe pour un bouillon ; lavez immédiatement après filtrage.',
  detail_description_it = 'Rete fine in acciaio è l’ideale. Scarta o riusa la polpa per brodo; lava subito dopo il passaggio.'
WHERE id = '89b8ed2d-225e-4d14-b6ea-5a07afa3c509';

-- 이유식 전용 칼
UPDATE tools
SET
  description = '이유식 재료를 작고 균일하게 자르는 전용 칼입니다. 도마와 함께 아기용 조리 도구만 따로 관리할 때 사용합니다.',
  description_en = 'A dedicated knife for cutting weaning ingredients into small, even pieces. Used alongside a baby-only board to keep prep tools separate.',
  description_de = 'Spezialmesser zum Schneiden von Beikost-Zutaten in kleine, gleichmäßige Stücke. Zusammen mit dem Baby-Schneidebrett getrennt aufbewahren.',
  description_fr = 'Couteau dédié pour couper les ingrédients en petits morceaux réguliers. À utiliser avec la planche bébé pour garder les ustensiles séparés.',
  description_it = 'Coltello dedicato per tagliare gli ingredienti in pezzi piccoli e uniformi. Da usare con il tagliere bebè per tenere gli utensili separati.',
  detail_description = '짧은 칼날·둥근 끝이 안전합니다. 사용 후 즉시 세척하고 성인용 칼과 분리 보관하세요. 스테인리스 소재가 녹·위생 관리에 유리해요.',
  detail_description_en = 'A short blade with a rounded tip is safer. Wash immediately and store apart from adult knives. Stainless steel resists rust and cleans easily.',
  detail_description_de = 'Kurze Klinge mit abgerundeter Spitze ist sicherer. Sofort waschen und getrennt von Erwachsenenmessern lagern. Edelstahl rostet wenig und reinigt sich leicht.',
  detail_description_fr = 'Lame courte à bout arrondi plus sûre. Lavez immédiatement et rangez à part des couteaux adultes. L’inox résiste à la rouille et se nettoie facilement.',
  detail_description_it = 'Lama corta con punta arrotondata più sicura. Lavare subito e riporre separato dai coltelli degli adulti. L’acciaio inox resiste alla ruggine e si pulisce facilmente.'
WHERE id = '20883ab6-294e-4cc3-80d7-00fdcca7d34f';

-- 아기 식기 세트
UPDATE tools
SET
  description = '아기 손 크기에 맞춘 밥그릇·접시·컵 세트입니다. 스스로 먹기를 시작할 때 흘리지 않도록 돕는 도구입니다.',
  description_en = 'A bowl, plate, and cup set sized for little hands. Supports self-feeding while helping contain spills and mess.',
  description_de = 'Schüssel-, Teller- und Becher-Set in Babygröße. Unterstützt Selbst-Essen und hilft, Verschütten einzudämmen.',
  description_fr = 'Set de bol, assiette et tasse adapté aux petites mains. Accompagne l’autonomie alimentaire tout en limitant les éclaboussures.',
  description_it = 'Set di ciotola, piatto e tazza adatto alle mani piccole. Accompagna l’autonomia alimentare limitando gli schizzi.',
  detail_description = '흡착 바닥·실리콘 소재가 넘어짐과 깨짐을 줄입니다. 1–2세트면 충분하고, 식기세척기 사용 가능 여부를 확인하세요.',
  detail_description_en = 'Suction bases and shatterproof silicone reduce tipping and breakage. One to two sets is enough — check dishwasher compatibility.',
  detail_description_de = 'Saugnapfboden und bruchsicheres Silikon reduzieren Umkippen. Ein bis zwei Sets reichen — Spülmaschinenfestigkeit prüfen.',
  detail_description_fr = 'Ventouses et silicone incassable limitent les renversements. Un à deux sets suffisent — vérifiez la compatibilité lave-vaisselle.',
  detail_description_it = 'Ventose e silicone infrangibile riducono i ribaltamenti. Uno o due set bastano — verifica la compatibilità con la lavastoviglie.'
WHERE id = 'ed26e171-4dbe-4b70-907a-3792c7a5f2e6';

-- 이유식 책
UPDATE tools
SET
  description = '단계별 레시피와 영양 정보를 담은 이유식 가이드북입니다. 처음 시작할 때 방향을 잡는 데 도움이 됩니다.',
  description_en = 'A weaning guidebook with stage-by-stage recipes and nutrition basics. Helps set direction when you are just getting started.',
  description_de = 'Beikost-Ratgeber mit stufengerechten Rezepten und Ernährungsgrundlagen. Hilft, Orientierung zu finden, wenn Sie gerade beginnen.',
  description_fr = 'Guide de diversification avec recettes par étape et bases nutritionnelles. Aide à se orienter quand on débute.',
  description_it = 'Guida allo svezzamento con ricette per fase e basi nutrizionali. Aiuta a orientarsi quando si inizia.',
  detail_description = '초·중·후기 단계, 식재료 도입 순서, 알레르기 안내가 체계적으로 정리된 책을 고르세요. 소아과 전문의가 검수한 도서가 신뢰할 만합니다.',
  detail_description_en = 'Pick a book covering early, mid, and late stages plus ingredient order and allergy guidance. Titles reviewed by paediatricians are most reliable.',
  detail_description_de = 'Wählen Sie ein Buch zu Früh-, Mittel- und Spätphase sowie Zutatenreihenfolge und Allergiehinweisen. Von Kinderärzten geprüfte Titel sind am verlässlichsten.',
  detail_description_fr = 'Choisissez un ouvrage couvrant stades début, milieu et fin, ordre d’introduction et allergènes. Les titres validés par des pédiatres sont les plus fiables.',
  detail_description_it = 'Scegli un libro che copra fasi iniziali, intermedie e avanzate, ordine degli ingredienti e allergeni. Titoli revisionati da pediatri sono i più affidabili.'
WHERE id = '57f137f1-53ac-497f-8674-08565ae0f11f';

-- 이유식 큐브틀
UPDATE tools
SET
  description = '퓨레·죽을 소분해 얼려 두는 실리콘 큐브틀입니다. 큐브 이유식 방식의 핵심 도구로, 필요할 때마다 꺼내 쓰기 편합니다.',
  description_en = 'A silicone cube tray for freezing purées and porridge in portions. The core tool for cube-style weaning — thaw only what you need.',
  description_de = 'Silikon-Eiswürfelform zum Einfrieren von Pürees und Brei in Portionen. Kernstück der Würfel-Beikost — nur auftauen, was gebraucht wird.',
  description_fr = 'Bac à glaçons en silicone pour congeler purées et bouillies en portions. Outil clé de la méthode par cubes — ne décongelez que le nécessaire.',
  description_it = 'Vaschetta in silicone per congelare puree e pappe in porzioni. Strumento chiave del metodo a cubetti — scongela solo il necessario.',
  detail_description = '15–30ml 칸 크기가 초·중기에 적합합니다. 뚜껑이 있으면 냉동 냄새를 줄이고, 얼린 큐브는 밀폐 용기·지퍼백으로 옮겨 보관하세요.',
  detail_description_en = '15–30 ml wells suit early and mid stages. Lids reduce freezer odours; transfer frozen cubes to airtight containers or bags for longer storage.',
  detail_description_de = '15–30 ml Fächer passen für Früh- und Mittelstufe. Deckel reduzieren Gefriergerüche; gefrorene Würfel in dichte Behälter oder Beutel umfüllen.',
  detail_description_fr = 'Cases de 15–30 ml conviennent aux stades début et milieu. Un couvercle limite les odeurs ; transférez les cubes congelés en contenants ou sachets hermétiques.',
  detail_description_it = 'Scomparti da 15–30 ml vanno bene per fasi iniziali e intermedie. Un coperchio riduce gli odori; trasferisci i cubetti congelati in contenitori o sacchetti ermetici.'
WHERE id = '1b94fed9-5e17-4a16-8159-6c27bdf7b1d0';
COMMIT;

-- 실행 후 확인 (17행, summary ≠ detail)
SELECT
  name,
  LEFT(description, 50) AS summary_preview,
  LEFT(detail_description, 50) AS detail_preview
FROM tools
ORDER BY sort_order, name;
