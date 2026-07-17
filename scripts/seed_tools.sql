-- =============================================================================
-- 2U 이유식 — tools + tool_product_links 시드 데이터
-- 생성: node scripts/generate-tools-seed-sql.cjs
-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run
-- =============================================================================

BEGIN;

DELETE FROM public.tool_product_links;
DELETE FROM public.tools;

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'e581dbec-0e48-4246-b8ff-25df6d91aae3',
  '이유식 전용 도마',
  'Baby Food Cutting Board',
  'Beikost-Schneidebrett',
  'Planche à découper bébé',
  'Tagliere per bebè',
  '어른 식재료의 교차 오염을 방지하기 위해 아기 음식만 따로 조리하는 전용 도마입니다. 가볍고 세척이 편리한 크기가 좋습니다.',
  'A dedicated board for baby food only, kept separate from adult ingredients to prevent cross-contamination. Choose a small, lightweight size that is easy to wash.',
  'Ein eigenes Schneidebrett nur für Beikost, getrennt von Erwachsenen-Zutaten, um Kreuzkontamination zu vermeiden. Klein und leicht reinigbar ist ideal.',
  'Planche réservée aux aliments bébé, séparée des ingrédients adultes pour éviter la contamination croisée. Privilégiez un format compact et facile à laver.',
  'Tagliere dedicato solo agli alimenti per bebè, separato da quello degli adulti per evitare contaminazioni incrociate. Meglio un modello piccolo e facile da lavare.',
  '날것과 익힌 음식용 도마를 구분하는 것이 위생적입니다. 세균 번식이 적은 실리콘, 항균 TPU 또는 전용 나무 소재를 추천하며 주기적인 살균 소독이 필요합니다.',
  'Use separate boards for raw and cooked foods. Silicone, antimicrobial TPU, or dedicated wood boards are recommended — sterilise them regularly.',
  'Trennen Sie Bretter für rohe und gekochte Lebensmittel. Silikon, antimikrobielles TPU oder spezielles Holz sind empfehlenswert — regelmäßig desinfizieren.',
  'Séparez les planches pour aliments crus et cuits. Silicone, TPU antibactérien ou bois dédié sont recommandés — désinfectez-les régulièrement.',
  'Usa taglieri separati per crudo e cotto. Silicone, TPU antibatterico o legno dedicato sono consigliati — sterilizzali periodicamente.',
  'essential',
  'Utensils',
  NULL,
  '1',
  '실리콘 이유식 전용 도마',
  'Silicone baby food cutting board',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EB%8F%84%EB%A7%88',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  '2b6e0781-addb-45a9-9c02-9c9757b245f7',
  '이유식 조리용 냄비',
  'Baby Food Cooking Pot',
  'Beikost-Kochtopf',
  'Casserole pour diversification',
  'Pentola per svezzamento',
  '소량의 죽이나 퓨레를 끓이거나 찌기 위한 아기 전용 냄비입니다. 어른 요리와 분리해 사용하면 맛과 위생을 함께 지킬 수 있습니다.',
  'A small dedicated pot for simmering or steaming tiny portions of porridge and purées. Keeping it separate from adult cookware protects both flavour and hygiene.',
  'Ein kleiner Topf nur für Beikost — zum Köcheln oder Dämpfen kleiner Portionen Brei und Püree. Getrennt von Erwachsenen-Töpfen schützt er Geschmack und Hygiene.',
  'Petite casserole dédiée pour cuire de petites portions de purées et bouillies. Séparée de la vaisselle adulte, elle préserve goût et hygiène.',
  'Piccola pentola dedicata per cuocere porzioni ridotte di pappe e puree. Separata dalla cucina degli adulti, tutela sapore e igiene.',
  '14–16cm 두꺼운 바닥 스테인리스 냄비가 열 분산에 좋습니다. 뚜껑이 있으면 수분을 유지해 죽을 부드럽게 끓일 수 있어요. 사용 후 즉시 세척하고 건조해 보관하세요.',
  'A 14–16 cm stainless-steel pot with a thick base distributes heat evenly. A lid helps retain moisture for soft porridge. Wash and dry immediately after use.',
  'Ein 14–16 cm Edelstahltopf mit dickem Boden verteilt die Wärme gleichmäßig. Ein Deckel hält Feuchtigkeit für weichen Brei. Sofort nach Gebrauch waschen und trocknen.',
  'Une casserole inox de 14–16 cm à fond épais répartit bien la chaleur. Un couvercle garde l’humidité pour des bouillies moelleuses. Lavez et séchez immédiatement après usage.',
  'Una pentola in acciaio da 14–16 cm con fondo spesso distribuisce il calore in modo uniforme. Un coperchio mantiene l’umidità per pappe morbide. Lavare e asciugare subito dopo l’uso.',
  'optional',
  'CookingPot',
  NULL,
  '1',
  '스테인리스 이유식 냄비',
  'Stainless baby food pot',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EB%83%84%EB%B9%84',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'e3efa959-3559-4bcf-8ac2-bcba602c1c08',
  '이유식 초퍼',
  'Baby Food Chopper',
  'Beikost-Hacker',
  'Hachoir pour diversification',
  'Tritatutto per svezzamento',
  '채소·육류를 곱게 다져 초기·중기 이유식 질감을 맞추는 소형 다지기입니다. 손으로 다지기 어려울 때 시간을 크게 줄여 줍니다.',
  'A compact chopper for finely mincing vegetables and meat to match early- and mid-stage textures. Saves significant time when hand-chopping is impractical.',
  'Kompakter Hacker zum feinen Zerkleinern von Gemüse und Fleisch für Früh- und Mittelstufe. Spart viel Zeit, wenn manuelles Hacken mühsam ist.',
  'Hachoir compact pour hacher finement légumes et viande aux textures des premiers stades. Fait gagner du temps quand le hachage manuel est difficile.',
  'Tritatutto compatto per tritare finemente verdure e carne nelle fasi iniziali e intermedie. Fa risparmiare tempo quando il trito a mano è faticoso.',
  '수동 타입은 소량·세척이 쉽고, 전동 타입은 양이 많을 때 편합니다. 날과 용기가 분리되는 구조면 틈새 세균을 줄일 수 있어요.',
  'Manual choppers suit small batches and easy cleaning; electric models help with larger volumes. A detachable blade and bowl reduce bacteria in hard-to-reach gaps.',
  'Manuelle Modelle eignen sich für kleine Mengen und einfache Reinigung, elektrische für größere Portionen. Abnehmbare Klinge und Behälter reduzieren Keime in Ritzen.',
  'Les modèles manuels conviennent aux petites quantités et au nettoyage facile ; les électriques aux gros volumes. Lame et bol amovibles limitent les bactéries dans les interstices.',
  'I modelli manuali vanno bene per piccole quantità e pulizia facile; quelli elettrici per volumi maggiori. Lama e contenitore removibili riducono i batteri negli spazi stretti.',
  'optional',
  'Scissors',
  NULL,
  '2',
  '이유식 소형 초퍼',
  'Compact baby food chopper',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%B4%88%ED%8D%BC',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'e68c601e-acfa-433f-96ed-ef68165a7a15',
  '실리콘 이유식 스푼',
  'Silicone Baby Spoon',
  'Silikon-Baby-Löffel',
  'Cuillère silicone bébé',
  'Cucchiaio silicone bebè',
  '아기 잇몸을 보호하는 부드러운 실리콘 스푼입니다. 첫 이유식부터 입에 넣기 편한 필수 도구예요.',
  'A soft silicone spoon that protects delicate gums — an essential tool from the very first spoonfuls of weaning.',
  'Weicher Silikonlöffel, der empfindliches Zahnfleisch schont — unverzichtbar ab den ersten Beikost-Löffeln.',
  'Cuillère souple en silicone qui protège les gencives sensibles — indispensable dès les premières bouchées.',
  'Cucchiaio morbido in silicone che protegge le gengive delicate — indispensabile fin dalle prime papille.',
  '온도감지 스푼은 뜨거운 음식 전 점검에 유용합니다. 2–3개를 번갈아 세척·소독하세요. 얕고 넓은 스푼 끝이 처음 먹을 때 더 수월해요.',
  'Temperature-sensing tips help check food before feeding. Rotate 2–3 spoons between washing and sterilising. A shallow, wide head makes early feeding easier.',
  'Temperaturanzeigende Spitzen helfen vor dem Füttern. Wechseln Sie 2–3 Löffel zwischen Waschen und Sterilisieren. Flacher, breiter Kopf erleichtert den Einstieg.',
  'Les embouts thermosensibles permettent de vérifier la température avant le repas. Alternez 2–3 cuillères entre lavage et stérilisation. Une tête plate et large facilite les débuts.',
  'Le punte termosensibili aiutano a controllare la temperatura prima del pasto. Alterna 2–3 cucchiai tra lavaggio e sterilizzazione. Una punta bassa e larga facilita l’inizio.',
  'essential',
  'Soup',
  NULL,
  '2',
  '실리콘 이유식 스푼 세트',
  'Silicone weaning spoon set',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%8A%A4%ED%91%BC',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  '66f26214-411b-41c0-b098-a93b3d591b76',
  '계량컵',
  'Measuring Cup',
  'Messbecher',
  'Verre doseur',
  'Misurino',
  '이유식 레시피대로 재료 양을 맞추는 계량컵입니다. 초기 이유식에서 영양 균형과 질감을 일정하게 유지하는 데 도움이 됩니다.',
  'A measuring cup for following weaning recipes accurately. Helps keep nutrition and texture consistent, especially in early-stage feeding.',
  'Messbecher zum genauen Abmessen nach Beikost-Rezepten. Hilft, Nährstoffe und Konsistenz — besonders in der Frühphase — konstant zu halten.',
  'Verre doseur pour suivre précisément les recettes de diversification. Aide à maintenir équilibre nutritionnel et texture, surtout au début.',
  'Misurino per seguire con precisione le ricette dello svezzamento. Aiuta a mantenere equilibrio nutrizionale e consistenza, soprattutto all’inizio.',
  'ml·cc 눈금이 선명한 내열 소재를 선택하세요. 쌀·물 비율을 기록해 두면 매번 같은 농도의 죽을 만들기 쉬워요.',
  'Choose heat-resistant cups with clear ml markings. Note your rice-to-water ratios so you can repeat the same porridge consistency each time.',
  'Wählen Sie hitzebeständige Becher mit klaren ml-Markierungen. Notieren Sie Reis-Wasser-Verhältnisse für gleichmäßigen Brei.',
  'Choisissez un modèle résistant à la chaleur avec graduations ml lisibles. Notez vos ratios riz-eau pour reproduire la même consistance de bouillie.',
  'Scegli un modello resistente al calore con graduazioni ml chiare. Annota i rapporti riso-acqua per ripetere la stessa consistenza della pappa.',
  'optional',
  'Beaker',
  NULL,
  '3',
  '이유식 계량컵',
  'Baby food measuring cup',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EA%B3%84%EB%9F%89%EC%BB%B5',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'abfb9ad6-bfa1-470f-822f-3f477535438f',
  '이유식 턱받이',
  'Baby Bib',
  'Baby-Lätzchen',
  'Bavoir bébé',
  'Bavaglino bebè',
  '이유식을 먹을 때 옷과 바닥을 더럽히지 않도록 막아 주는 턱받이입니다. 매일 쓰는 만큼 세척이 쉬운 소재가 중요합니다.',
  'A bib that keeps clothes and the floor cleaner during messy mealtimes. Easy-to-clean material matters when you use it every day.',
  'Lätzchen, das Kleidung und Boden beim Essen sauberer hält. Leicht zu reinigendes Material ist wichtig bei täglichem Gebrauch.',
  'Bavoir qui protège vêtements et sol pendant les repas brouillons. Un matériau facile à nettoyer compte quand on l’utilise chaque jour.',
  'Bavaglino che protegge vestiti e pavimento durante i pasti disordinati. Un materiale facile da pulire conta se lo usi ogni giorno.',
  '실리콘은 물티슈로 닦기 편하고, 천은 흡수력이 좋아요. 3–5개를 번갈아 쓰세요. 목 부분이 부드럽고 주머니가 있는 제품이 더 실용적입니다.',
  'Silicone wipes clean quickly; fabric absorbs spills well. Keep 3–5 on rotation. Soft neck bands and a catch pocket make daily use much easier.',
  'Silikon lässt sich schnell abwischen, Stoff saugt gut auf. Halten Sie 3–5 im Wechsel bereit. Weiches Nackenband und Auffangtasche erleichtern den Alltag.',
  'Le silicone s’essuie vite ; le tissu absorbe bien. Prévoyez 3–5 bavoirs en rotation. Col souple et poche récupératrice rendent l’usage quotidien plus pratique.',
  'Il silicone si pulisce in fretta; il tessuto assorbe bene. Tieni 3–5 bavaglini in rotazione. Collo morbido e tasca raccoglitore rendono l’uso quotidiano più pratico.',
  'essential',
  'Shirt',
  NULL,
  '3',
  '실리콘 이유식 턱받이',
  'Silicone weaning bib',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%ED%84%B1%EB%B0%9B%EC%9D%B4',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  '9816ff25-2bf0-491f-a102-4e1a53190832',
  '전자 저울',
  'Digital Kitchen Scale',
  'Digitale Küchenwaage',
  'Balance de cuisine numérique',
  'Bilancia da cucina digitale',
  '이유식 재료를 그램 단위로 정밀하게 재는 전자 저울입니다. 소량 재료의 영양 비율을 맞출 때 특히 유용합니다.',
  'A digital scale for weighing weaning ingredients to the gram. Especially useful for balancing small amounts of grains, protein, and liquids.',
  'Digitale Waage zum Wiegen von Beikost-Zutaten auf das Gramm genau. Besonders nützlich für kleine Mengen Getreide, Protein und Flüssigkeit.',
  'Balance numérique pour peser les ingrédients au gramme près. Particulièrement utile pour équilibrer petites quantités de céréales, protéines et liquides.',
  'Bilancia digitale per pesare gli ingredienti al grammo. Particolarmente utile per bilanciare piccole quantità di cereali, proteine e liquidi.',
  '1g 단위까지 표시되는 소형 주방 저울을 추천합니다. 영양제·곡물·육수 비율을 기록해 두면 레시피 재현이 쉬워요.',
  'Choose a compact kitchen scale with 1 g precision. Log your grain, protein, and liquid ratios to reproduce recipes reliably.',
  'Wählen Sie eine kompakte Küchenwaage mit 1-g-Genauigkeit. Notieren Sie Getreide-, Protein- und Flüssigkeitsverhältnisse für reproduzierbare Rezepte.',
  'Choisissez une balance compacte avec précision à 1 g. Notez vos ratios céréales-protéines-liquides pour reproduire vos recettes.',
  'Scegli una bilancia compatta con precisione a 1 g. Annota i rapporti cereali-proteine-liquidi per riprodurre le ricette.',
  'optional',
  'Weight',
  NULL,
  '4',
  '정밀 전자 저울',
  'Precision digital kitchen scale',
  'https://www.coupang.com/np/search?q=%EC%A3%BC%EB%B0%A9%20%EC%A0%84%EC%9E%90%EC%A0%80%EC%9A%B8',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'ef3b9b31-97cf-4f4a-b1d8-9500f8048f6f',
  '빨대컵',
  'Straw Cup',
  'Trinklernbecher mit Strohhalm',
  'Gobelet à paille',
  'Bicchiere con cannuccia',
  '이유식과 함께 물·묽은 음료를 배우게 하는 빨대컵입니다. 흘림 방지 설계로 처음 음용 연습에 적합합니다.',
  'A straw cup for learning to drink water alongside weaning. Spill-proof designs suit early drinking practice.',
  'Trinkbecher mit Strohhalm zum Wasserlernen während der Beikost. Auslaufsichere Modelle eignen sich für erste Trinkübungen.',
  'Gobelet à paille pour apprendre à boire pendant la diversification. Les modèles anti-fuite conviennent aux premiers essais.',
  'Bicchiere con cannuccia per imparare a bere durante lo svezzamento. I modelli anti-rovesciamento sono adatti ai primi tentativi.',
  '생후 6개월 전후 소량의 물부터 시작하세요. BPA-free 분리형 구조가 세척에 유리하고, 180–240ml 용량이 초기에 적당합니다.',
  'Offer small amounts of water from around 6 months. BPA-free, detachable parts are easier to clean; 180–240 ml suits early use.',
  'Ab etwa 6 Monaten kleine Wassermengen anbieten. BPA-frei und abnehmbar erleichtert die Reinigung; 180–240 ml passen für den Anfang.',
  'Proposez de petites quantités d’eau vers 6 mois. Sans BPA et démontable pour un nettoyage facile ; 180–240 ml conviennent au début.',
  'Offri piccole quantità d’acqua intorno ai 6 mesi. Senza BPA e smontabile per una pulizia facile; 180–240 ml vanno bene all’inizio.',
  'essential',
  'GlassWater',
  NULL,
  '4',
  '빨대컵 (흘림방지)',
  'Spill-proof straw cup',
  'https://www.coupang.com/np/search?q=%EC%95%84%EA%B8%B0%20%EB%B9%A8%EB%8C%80%EC%BB%B5',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  '1831aaf2-a988-4abc-aa09-3b068f2118d2',
  '실리콘 주걱',
  'Silicone Spatula',
  'Silikon-Spatel',
  'Spatule en silicone',
  'Spatola in silicone',
  '냄비·용기 바닥의 이유식을 긁어내 waste 없이 옮기는 실리콘 주걱입니다. 소량 조리할 때 남은 양을 아끼는 데 유용합니다.',
  'A silicone spatula for scraping every bit of food from pots and containers — useful when cooking tiny weaning portions.',
  'Silikonspatel zum Herauskratzen jeder Beikost-Reste aus Töpfen und Behältern — praktisch bei kleinen Portionen.',
  'Spatule en silicone pour récupérer toute la préparation au fond des casseroles — utile pour les petites portions bébé.',
  'Spatola in silicone per recuperare tutta la preparazione dal fondo di pentole e contenitori — utile per piccole porzioni.',
  '열에 강한 일체형 실리콘이 틈새 세균을 줄입니다. 모서리가 얇은 타입이 용기 구석까지 깔끔하게 긁을 수 있어요.',
  'Heat-resistant one-piece silicone reduces bacterial buildup. A thin, flexible edge reaches corners and bowl bottoms cleanly.',
  'Hitzebeständiges einteiliges Silikon reduziert Keimbildung. Dünne, flexible Kante erreicht Ecken und Behälterböden gründlich.',
  'Silicone monobloc résistant à la chaleur limite les bactéries. Un bord fin et souple atteint les coins et le fond des récipients.',
  'Silicone monopezzo resistente al calore riduce i batteri. Un bordo sottile e flessibile raggiunge angoli e fondi dei contenitori.',
  'optional',
  'Utensils',
  NULL,
  '5',
  '실리콘 이유식 주걱',
  'Silicone baby food spatula',
  'https://www.coupang.com/np/search?q=%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A3%BC%EA%B1%B1',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'c64d9c51-61c4-4972-aa55-f3c3e48bbb72',
  '아기 식사용 의자',
  'High Chair',
  'Hochstuhl',
  'Chaise haute',
  'Seggiolone',
  '바른 자세로 앉아 안전하게 이유식을 먹도록 돕는 아기 식사용 의자입니다. 안정적인 착석감이 삼킴 안전에 중요합니다.',
  'A high chair that helps baby sit upright safely for meals. Stable, supported posture matters for safe swallowing during weaning.',
  'Hochstuhl, der Babys beim Essen sicher aufrecht sitzen lässt. Stabile Haltung ist wichtig für sicheres Schlucken in der Beikost.',
  'Chaise haute pour que bébé mange assis en sécurité. Une posture stable et soutenue est importante pour une déglutition sûre.',
  'Seggiolone che aiuta il bambino a sedersi in sicurezza durante i pasti. Una postura stabile e supportata è importante per deglutire in sicurezza.',
  '안전벨트·발받침·높이 조절 기능을 확인하세요. 탈착식 트레이는 세척이 편하고, 성장해도 오래 쓸 수 있는 모델이 경제적입니다.',
  'Look for a safety harness, footrest, and adjustable height. A removable tray simplifies cleaning; a grow-with-baby model lasts longer.',
  'Achten Sie auf Sicherheitsgurt, Fußstütze und Höhenverstellung. Abnehmbares Tablett erleichtert die Reinigung; mitwachsende Modelle halten länger.',
  'Vérifiez harnais, repose-pieds et réglage en hauteur. Plateau amovible pour le nettoyage ; un modèle évolutif dure plus longtemps.',
  'Controlla cintura di sicurezza, poggiapiedi e regolazione in altezza. Vassoio removibile per la pulizia; un modello che cresce con il bambino dura di più.',
  'essential',
  'Armchair',
  NULL,
  '5',
  '아기 식사용 의자',
  'Baby high chair',
  'https://www.coupang.com/np/search?q=%EC%95%84%EA%B8%B0%20%EC%8B%9D%EC%82%AC%20%EC%9D%98%EC%9E%90',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'a803c9e4-e65c-4ddf-bdb6-cec8fb2da526',
  '소형 조리기 세트',
  'Baby Food Maker',
  'Beikost-Zubereitungsgerät',
  'Robot cuiseur bébé',
  'Robot per pappe',
  '이유식을 곱게 갈거나 으깨는 소형 믹서·블렌더입니다. 초기 퓨레 질감을 만들 때 일반 믹서기보다 훨씬 편리합니다.',
  'A compact blender or food maker for smooth purées and mashes. Far more practical than a full-size blender for early-stage textures.',
  'Kompakter Mixer oder Beikost-Gerät für feine Pürees und Mus. Deutlich praktischer als ein großer Mixer für Frühstufen-Konsistenzen.',
  'Mixeur compact pour purées et mousses lisses. Bien plus pratique qu’un grand mixeur pour les textures des premiers stades.',
  'Frullatore compatto per puree e passato lisce. Molto più pratico di un frullatore grande per le consistenze iniziali.',
  '소량용 용기가 핵심입니다. 스팀+믹싱 일체형은 영양 손실을 줄이고, 분리·식기세척기 가능 부품이 위생 관리에 유리해요.',
  'A small-capacity jar is key. Steam-and-blend models preserve nutrients; removable, dishwasher-safe parts simplify hygiene.',
  'Kleines Behältervolumen ist entscheidend. Dampf-und-Mix-Modelle erhalten Nährstoffe; abnehmbare, spülmaschinenfeste Teile erleichtern die Hygiene.',
  'Un petit bol est essentiel. Les modèles vapeur + mix réduisent la perte nutritionnelle ; pièces amovibles et lave-vaisselle facilitent l’hygiène.',
  'Un contenitore di piccola capacità è fondamentale. I modelli vapore + mix riducono la perdita nutrizionale; parti removibili e lavastoviglie semplificano l’igiene.',
  'recommended',
  'Blend',
  NULL,
  '5',
  '이유식 소형 조리기',
  'Compact baby food maker',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%A1%B0%EB%A6%AC%EA%B8%B0',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'ba9ad2e8-2fcd-4639-a722-30d97df9480f',
  '이유식 보관 용기',
  'Food Storage Containers',
  'Aufbewahrungsbehälter',
  'Contenants de conservation',
  'Contenitori per conservazione',
  '만든 이유식을 소분해 냉장·냉동 보관하는 용기입니다. 한 번에 여러 끼를 준비해 시간을 절약할 수 있습니다.',
  'Containers for portioning and storing baby food in the fridge or freezer. Batch-cooking saves significant prep time each week.',
  'Behälter zum Portionieren und Aufbewahren von Babynahrung im Kühlschrank oder Gefrierfach. Vorkochen spart wöchentlich viel Zeit.',
  'Contenants pour portionner et conserver les repas bébé au frigo ou congélateur. La préparation en avance fait gagner du temps chaque semaine.',
  'Contenitori per porzionare e conservare il cibo in frigo o congelatore. Preparare in anticipo fa risparmiare tempo ogni settimana.',
  '실리콘·유리 소재가 냉동에 적합합니다. 10–15개면 일주일치 준비가 가능해요. 전자레인지 해동 가능·눈금 표시 제품이 실용적입니다.',
  'Silicone or glass works well for freezing. 10–15 containers cover a week’s prep. Microwave-safe options with volume markings are most practical.',
  'Silikon oder Glas eignet sich zum Einfrieren. 10–15 Behälter reichen für eine Woche. Mikrowellengeeignet mit Volumenmarkierungen ist am praktischsten.',
  'Silicone ou verre conviennent au congélateur. 10–15 contenants couvrent une semaine. Modèles micro-ondes avec graduations de volume sont les plus pratiques.',
  'Silicone o vetro vanno bene per il congelatore. 10–15 contenitori coprono una settimana. Modelli microonde con graduazioni di volume sono i più pratici.',
  'recommended',
  'Package',
  NULL,
  '6',
  '이유식 보관 용기 세트',
  'Baby food storage container set',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EB%B3%B4%EA%B4%80%EC%9A%A9%EA%B8%B0',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  '89b8ed2d-225e-4d14-b6ea-5a07afa3c509',
  '체 또는 거름망',
  'Strainer',
  'Sieb',
  'Passoire',
  'Colino',
  '쌀미음·과일즙 등을 걸러 매끄러운 질감을 만드는 체입니다. 초기 이유식에서 알갱이·섬유를 제거할 때 필요합니다.',
  'A strainer for smoothing rice porridge, fruit juice, and purées. Removes lumps and fibres for very early weaning textures.',
  'Sieb zum Glätten von Reisbrei, Fruchtsaft und Pürees. Entfernt Klumpen und Fasern für sehr frühe Beikost-Konsistenzen.',
  'Passoire pour lisser bouillies, jus de fruits et purées. Retire grumeaux et fibres pour les toutes premières textures.',
  'Colino per levigare pappe di riso, succhi di frutta e puree. Rimuove grumi e fibre per le prime consistenze.',
  '눈이 촘촘한 스테인리스 체가 좋습니다. 걸러낸 찌꺼기는 버리거나 육수로 활용하고, 사용 후 바로 세척하세요.',
  'A fine stainless-steel mesh works best. Discard or reuse pulp for stock; wash immediately after straining.',
  'Feines Edelstahl-Sieb ist ideal. Treber entsorgen oder für Brühe nutzen; sofort nach dem Abseihen waschen.',
  'Maille fine en inox est idéale. Jetez ou réutilisez la pulpe pour un bouillon ; lavez immédiatement après filtrage.',
  'Rete fine in acciaio è l’ideale. Scarta o riusa la polpa per brodo; lava subito dopo il passaggio.',
  'optional',
  'Filter',
  NULL,
  '6',
  '이유식 체/거름망',
  'Fine mesh strainer',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%B2%B4',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  '20883ab6-294e-4cc3-80d7-00fdcca7d34f',
  '이유식 전용 칼',
  'Baby Food Knife',
  'Beikost-Messer',
  'Couteau pour diversification',
  'Coltello per svezzamento',
  '이유식 재료를 작고 균일하게 자르는 전용 칼입니다. 도마와 함께 아기용 조리 도구만 따로 관리할 때 사용합니다.',
  'A dedicated knife for cutting weaning ingredients into small, even pieces. Used alongside a baby-only board to keep prep tools separate.',
  'Spezialmesser zum Schneiden von Beikost-Zutaten in kleine, gleichmäßige Stücke. Zusammen mit dem Baby-Schneidebrett getrennt aufbewahren.',
  'Couteau dédié pour couper les ingrédients en petits morceaux réguliers. À utiliser avec la planche bébé pour garder les ustensiles séparés.',
  'Coltello dedicato per tagliare gli ingredienti in pezzi piccoli e uniformi. Da usare con il tagliere bebè per tenere gli utensili separati.',
  '짧은 칼날·둥근 끝이 안전합니다. 사용 후 즉시 세척하고 성인용 칼과 분리 보관하세요. 스테인리스 소재가 녹·위생 관리에 유리해요.',
  'A short blade with a rounded tip is safer. Wash immediately and store apart from adult knives. Stainless steel resists rust and cleans easily.',
  'Kurze Klinge mit abgerundeter Spitze ist sicherer. Sofort waschen und getrennt von Erwachsenenmessern lagern. Edelstahl rostet wenig und reinigt sich leicht.',
  'Lame courte à bout arrondi plus sûre. Lavez immédiatement et rangez à part des couteaux adultes. L’inox résiste à la rouille et se nettoie facilement.',
  'Lama corta con punta arrotondata più sicura. Lavare subito e riporre separato dai coltelli degli adulti. L’acciaio inox resiste alla ruggine e si pulisce facilmente.',
  'optional',
  'Slice',
  NULL,
  '7',
  '이유식 전용 칼',
  'Baby food prep knife',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%B9%BC',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  'ed26e171-4dbe-4b70-907a-3792c7a5f2e6',
  '아기 식기 세트',
  'Baby Dish Set',
  'Baby-Geschirr-Set',
  'Set de vaisselle bébé',
  'Set stoviglie bebè',
  '아기 손 크기에 맞춘 밥그릇·접시·컵 세트입니다. 스스로 먹기를 시작할 때 흘리지 않도록 돕는 도구입니다.',
  'A bowl, plate, and cup set sized for little hands. Supports self-feeding while helping contain spills and mess.',
  'Schüssel-, Teller- und Becher-Set in Babygröße. Unterstützt Selbst-Essen und hilft, Verschütten einzudämmen.',
  'Set de bol, assiette et tasse adapté aux petites mains. Accompagne l’autonomie alimentaire tout en limitant les éclaboussures.',
  'Set di ciotola, piatto e tazza adatto alle mani piccole. Accompagna l’autonomia alimentare limitando gli schizzi.',
  '흡착 바닥·실리콘 소재가 넘어짐과 깨짐을 줄입니다. 1–2세트면 충분하고, 식기세척기 사용 가능 여부를 확인하세요.',
  'Suction bases and shatterproof silicone reduce tipping and breakage. One to two sets is enough — check dishwasher compatibility.',
  'Saugnapfboden und bruchsicheres Silikon reduzieren Umkippen. Ein bis zwei Sets reichen — Spülmaschinenfestigkeit prüfen.',
  'Ventouses et silicone incassable limitent les renversements. Un à deux sets suffisent — vérifiez la compatibilité lave-vaisselle.',
  'Ventose e silicone infrangibile riducono i ribaltamenti. Uno o due set bastano — verifica la compatibilità con la lavastoviglie.',
  'optional',
  'Salad',
  NULL,
  '8',
  '흡착 아기 식기 세트',
  'Suction baby dish set',
  'https://www.coupang.com/np/search?q=%EC%95%84%EA%B8%B0%20%EC%8B%9D%EA%B8%B0%EC%84%B8%ED%8A%B8',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  '57f137f1-53ac-497f-8674-08565ae0f11f',
  '이유식 책',
  'Weaning Guidebook',
  'Beikost-Ratgeber',
  'Guide de diversification',
  'Guida allo svezzamento',
  '단계별 레시피와 영양 정보를 담은 이유식 가이드북입니다. 처음 시작할 때 방향을 잡는 데 도움이 됩니다.',
  'A weaning guidebook with stage-by-stage recipes and nutrition basics. Helps set direction when you are just getting started.',
  'Beikost-Ratgeber mit stufengerechten Rezepten und Ernährungsgrundlagen. Hilft, Orientierung zu finden, wenn Sie gerade beginnen.',
  'Guide de diversification avec recettes par étape et bases nutritionnelles. Aide à se orienter quand on débute.',
  'Guida allo svezzamento con ricette per fase e basi nutrizionali. Aiuta a orientarsi quando si inizia.',
  '초·중·후기 단계, 식재료 도입 순서, 알레르기 안내가 체계적으로 정리된 책을 고르세요. 소아과 전문의가 검수한 도서가 신뢰할 만합니다.',
  'Pick a book covering early, mid, and late stages plus ingredient order and allergy guidance. Titles reviewed by paediatricians are most reliable.',
  'Wählen Sie ein Buch zu Früh-, Mittel- und Spätphase sowie Zutatenreihenfolge und Allergiehinweisen. Von Kinderärzten geprüfte Titel sind am verlässlichsten.',
  'Choisissez un ouvrage couvrant stades début, milieu et fin, ordre d’introduction et allergènes. Les titres validés par des pédiatres sont les plus fiables.',
  'Scegli un libro che copra fasi iniziali, intermedie e avanzate, ordine degli ingredienti e allergeni. Titoli revisionati da pediatri sono i più affidabili.',
  'optional',
  'BookOpen',
  NULL,
  '9',
  '삐뽀삐뽀 119 이유식',
  'Beep Beep 119 Baby Food',
  'https://product.kyobobook.co.kr/detail/S000001967752',
  NULL
);

INSERT INTO public.tools (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  detail_description,
  detail_description_en,
  detail_description_de,
  detail_description_fr,
  detail_description_it,
  category,
  icon_name,
  image_url,
  sort_order,
  product_name,
  product_name_en,
  product_link,
  product_image_url
) VALUES (
  '1b94fed9-5e17-4a16-8159-6c27bdf7b1d0',
  '이유식 큐브틀',
  'Cube Freezer Tray',
  'Eiswürfelform für Beikost',
  'Bac à glaçons pour purées',
  'Vaschetta cubetti per pappe',
  '퓨레·죽을 소분해 얼려 두는 실리콘 큐브틀입니다. 큐브 이유식 방식의 핵심 도구로, 필요할 때마다 꺼내 쓰기 편합니다.',
  'A silicone cube tray for freezing purées and porridge in portions. The core tool for cube-style weaning — thaw only what you need.',
  'Silikon-Eiswürfelform zum Einfrieren von Pürees und Brei in Portionen. Kernstück der Würfel-Beikost — nur auftauen, was gebraucht wird.',
  'Bac à glaçons en silicone pour congeler purées et bouillies en portions. Outil clé de la méthode par cubes — ne décongelez que le nécessaire.',
  'Vaschetta in silicone per congelare puree e pappe in porzioni. Strumento chiave del metodo a cubetti — scongela solo il necessario.',
  '15–30ml 칸 크기가 초·중기에 적합합니다. 뚜껑이 있으면 냉동 냄새를 줄이고, 얼린 큐브는 밀폐 용기·지퍼백으로 옮겨 보관하세요.',
  '15–30 ml wells suit early and mid stages. Lids reduce freezer odours; transfer frozen cubes to airtight containers or bags for longer storage.',
  '15–30 ml Fächer passen für Früh- und Mittelstufe. Deckel reduzieren Gefriergerüche; gefrorene Würfel in dichte Behälter oder Beutel umfüllen.',
  'Cases de 15–30 ml conviennent aux stades début et milieu. Un couvercle limite les odeurs ; transférez les cubes congelés en contenants ou sachets hermétiques.',
  'Scomparti da 15–30 ml vanno bene per fasi iniziali e intermedie. Un coperchio riduce gli odori; trasferisci i cubetti congelati in contenitori o sacchetti ermetici.',
  'recommended',
  'Snowflake',
  NULL,
  '10',
  '실리콘 이유식 큐브틀',
  'Silicone baby food cube tray',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%ED%81%90%EB%B8%8C%ED%8B%80',
  NULL
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000001',
  'e581dbec-0e48-4246-b8ff-25df6d91aae3',
  'KR',
  '실리콘 이유식 전용 도마',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EB%8F%84%EB%A7%88',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000002',
  'e581dbec-0e48-4246-b8ff-25df6d91aae3',
  'DE',
  'Silicone baby food cutting board',
  'https://www.amazon.de/s?k=Beikost%20Schneidebrett',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000003',
  'e581dbec-0e48-4246-b8ff-25df6d91aae3',
  'FR',
  'Silicone baby food cutting board',
  'https://www.amazon.fr/s?k=planche%20decouper%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000004',
  'e581dbec-0e48-4246-b8ff-25df6d91aae3',
  'IT',
  'Silicone baby food cutting board',
  'https://www.amazon.it/s?k=tagliere%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000005',
  '2b6e0781-addb-45a9-9c02-9c9757b245f7',
  'KR',
  '스테인리스 이유식 냄비',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EB%83%84%EB%B9%84',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000006',
  '2b6e0781-addb-45a9-9c02-9c9757b245f7',
  'DE',
  'Stainless baby food pot',
  'https://www.amazon.de/s?k=Beikost%20Topf',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000007',
  '2b6e0781-addb-45a9-9c02-9c9757b245f7',
  'FR',
  'Stainless baby food pot',
  'https://www.amazon.fr/s?k=casserole%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000008',
  '2b6e0781-addb-45a9-9c02-9c9757b245f7',
  'IT',
  'Stainless baby food pot',
  'https://www.amazon.it/s?k=pentola%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000009',
  'e3efa959-3559-4bcf-8ac2-bcba602c1c08',
  'KR',
  '이유식 소형 초퍼',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%B4%88%ED%8D%BC',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000010',
  'e3efa959-3559-4bcf-8ac2-bcba602c1c08',
  'DE',
  'Compact baby food chopper',
  'https://www.amazon.de/s?k=Beikost%20Hacker',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000011',
  'e3efa959-3559-4bcf-8ac2-bcba602c1c08',
  'FR',
  'Compact baby food chopper',
  'https://www.amazon.fr/s?k=hachoir%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000012',
  'e3efa959-3559-4bcf-8ac2-bcba602c1c08',
  'IT',
  'Compact baby food chopper',
  'https://www.amazon.it/s?k=tritatutto%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000013',
  'e68c601e-acfa-433f-96ed-ef68165a7a15',
  'KR',
  '실리콘 이유식 스푼 세트',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%8A%A4%ED%91%BC',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000014',
  'e68c601e-acfa-433f-96ed-ef68165a7a15',
  'DE',
  'Silicone weaning spoon set',
  'https://www.amazon.de/s?k=Silikon%20Baby%20Loeffel',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000015',
  'e68c601e-acfa-433f-96ed-ef68165a7a15',
  'FR',
  'Silicone weaning spoon set',
  'https://www.amazon.fr/s?k=cuillere%20silicone%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000016',
  'e68c601e-acfa-433f-96ed-ef68165a7a15',
  'IT',
  'Silicone weaning spoon set',
  'https://www.amazon.it/s?k=cucchiaio%20silicone%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000017',
  '66f26214-411b-41c0-b098-a93b3d591b76',
  'KR',
  '이유식 계량컵',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EA%B3%84%EB%9F%89%EC%BB%B5',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000018',
  '66f26214-411b-41c0-b098-a93b3d591b76',
  'DE',
  'Baby food measuring cup',
  'https://www.amazon.de/s?k=Messbecher%20Baby',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000019',
  '66f26214-411b-41c0-b098-a93b3d591b76',
  'FR',
  'Baby food measuring cup',
  'https://www.amazon.fr/s?k=verre%20doseur%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000020',
  '66f26214-411b-41c0-b098-a93b3d591b76',
  'IT',
  'Baby food measuring cup',
  'https://www.amazon.it/s?k=misurino%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000021',
  'abfb9ad6-bfa1-470f-822f-3f477535438f',
  'KR',
  '실리콘 이유식 턱받이',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%ED%84%B1%EB%B0%9B%EC%9D%B4',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000022',
  'abfb9ad6-bfa1-470f-822f-3f477535438f',
  'DE',
  'Silicone weaning bib',
  'https://www.amazon.de/s?k=Baby%20Laetzchen',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000023',
  'abfb9ad6-bfa1-470f-822f-3f477535438f',
  'FR',
  'Silicone weaning bib',
  'https://www.amazon.fr/s?k=bavoir%20silicone%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000024',
  'abfb9ad6-bfa1-470f-822f-3f477535438f',
  'IT',
  'Silicone weaning bib',
  'https://www.amazon.it/s?k=bavaglino%20silicone%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000025',
  '9816ff25-2bf0-491f-a102-4e1a53190832',
  'KR',
  '정밀 전자 저울',
  'https://www.coupang.com/np/search?q=%EC%A3%BC%EB%B0%A9%20%EC%A0%84%EC%9E%90%EC%A0%80%EC%9A%B8',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000026',
  '9816ff25-2bf0-491f-a102-4e1a53190832',
  'DE',
  'Precision digital kitchen scale',
  'https://www.amazon.de/s?k=digitale%20Kuechenwaage',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000027',
  '9816ff25-2bf0-491f-a102-4e1a53190832',
  'FR',
  'Precision digital kitchen scale',
  'https://www.amazon.fr/s?k=balance%20cuisine%20numerique',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000028',
  '9816ff25-2bf0-491f-a102-4e1a53190832',
  'IT',
  'Precision digital kitchen scale',
  'https://www.amazon.it/s?k=bilancia%20cucina%20digitale',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000029',
  'ef3b9b31-97cf-4f4a-b1d8-9500f8048f6f',
  'KR',
  '빨대컵 (흘림방지)',
  'https://www.coupang.com/np/search?q=%EC%95%84%EA%B8%B0%20%EB%B9%A8%EB%8C%80%EC%BB%B5',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000030',
  'ef3b9b31-97cf-4f4a-b1d8-9500f8048f6f',
  'DE',
  'Spill-proof straw cup',
  'https://www.amazon.de/s?k=Trinklernbecher',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000031',
  'ef3b9b31-97cf-4f4a-b1d8-9500f8048f6f',
  'FR',
  'Spill-proof straw cup',
  'https://www.amazon.fr/s?k=gobelet%20paille%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000032',
  'ef3b9b31-97cf-4f4a-b1d8-9500f8048f6f',
  'IT',
  'Spill-proof straw cup',
  'https://www.amazon.it/s?k=bicchiere%20cannuccia%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000033',
  '1831aaf2-a988-4abc-aa09-3b068f2118d2',
  'KR',
  '실리콘 이유식 주걱',
  'https://www.coupang.com/np/search?q=%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%A3%BC%EA%B1%B1',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000034',
  '1831aaf2-a988-4abc-aa09-3b068f2118d2',
  'DE',
  'Silicone baby food spatula',
  'https://www.amazon.de/s?k=Silikon%20Spatel',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000035',
  '1831aaf2-a988-4abc-aa09-3b068f2118d2',
  'FR',
  'Silicone baby food spatula',
  'https://www.amazon.fr/s?k=spatule%20silicone',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000036',
  '1831aaf2-a988-4abc-aa09-3b068f2118d2',
  'IT',
  'Silicone baby food spatula',
  'https://www.amazon.it/s?k=spatola%20silicone',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000037',
  'c64d9c51-61c4-4972-aa55-f3c3e48bbb72',
  'KR',
  '아기 식사용 의자',
  'https://www.coupang.com/np/search?q=%EC%95%84%EA%B8%B0%20%EC%8B%9D%EC%82%AC%20%EC%9D%98%EC%9E%90',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000038',
  'c64d9c51-61c4-4972-aa55-f3c3e48bbb72',
  'DE',
  'Baby high chair',
  'https://www.amazon.de/s?k=Hochstuhl%20Baby',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000039',
  'c64d9c51-61c4-4972-aa55-f3c3e48bbb72',
  'FR',
  'Baby high chair',
  'https://www.amazon.fr/s?k=chaise%20haute%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000040',
  'c64d9c51-61c4-4972-aa55-f3c3e48bbb72',
  'IT',
  'Baby high chair',
  'https://www.amazon.it/s?k=seggiolone%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000041',
  'a803c9e4-e65c-4ddf-bdb6-cec8fb2da526',
  'KR',
  '이유식 소형 조리기',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%A1%B0%EB%A6%AC%EA%B8%B0',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000042',
  'a803c9e4-e65c-4ddf-bdb6-cec8fb2da526',
  'DE',
  'Compact baby food maker',
  'https://www.amazon.de/s?k=Beikost%20Geraet',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000043',
  'a803c9e4-e65c-4ddf-bdb6-cec8fb2da526',
  'FR',
  'Compact baby food maker',
  'https://www.amazon.fr/s?k=robot%20cuiseur%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000044',
  'a803c9e4-e65c-4ddf-bdb6-cec8fb2da526',
  'IT',
  'Compact baby food maker',
  'https://www.amazon.it/s?k=robot%20pappe%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000045',
  'ba9ad2e8-2fcd-4639-a722-30d97df9480f',
  'KR',
  '이유식 보관 용기 세트',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EB%B3%B4%EA%B4%80%EC%9A%A9%EA%B8%B0',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000046',
  'ba9ad2e8-2fcd-4639-a722-30d97df9480f',
  'DE',
  'Baby food storage container set',
  'https://www.amazon.de/s?k=Beikost%20Behaelter',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000047',
  'ba9ad2e8-2fcd-4639-a722-30d97df9480f',
  'FR',
  'Baby food storage container set',
  'https://www.amazon.fr/s?k=contenants%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000048',
  'ba9ad2e8-2fcd-4639-a722-30d97df9480f',
  'IT',
  'Baby food storage container set',
  'https://www.amazon.it/s?k=contenitori%20pappa%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000049',
  '89b8ed2d-225e-4d14-b6ea-5a07afa3c509',
  'KR',
  '이유식 체/거름망',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%B2%B4',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000050',
  '89b8ed2d-225e-4d14-b6ea-5a07afa3c509',
  'DE',
  'Fine mesh strainer',
  'https://www.amazon.de/s?k=Feinsieb',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000051',
  '89b8ed2d-225e-4d14-b6ea-5a07afa3c509',
  'FR',
  'Fine mesh strainer',
  'https://www.amazon.fr/s?k=passoire%20fine',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000052',
  '89b8ed2d-225e-4d14-b6ea-5a07afa3c509',
  'IT',
  'Fine mesh strainer',
  'https://www.amazon.it/s?k=colino%20fine',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000053',
  '20883ab6-294e-4cc3-80d7-00fdcca7d34f',
  'KR',
  '이유식 전용 칼',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%EC%B9%BC',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000054',
  '20883ab6-294e-4cc3-80d7-00fdcca7d34f',
  'DE',
  'Baby food prep knife',
  'https://www.amazon.de/s?k=Beikost%20Messer',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000055',
  '20883ab6-294e-4cc3-80d7-00fdcca7d34f',
  'FR',
  'Baby food prep knife',
  'https://www.amazon.fr/s?k=couteau%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000056',
  '20883ab6-294e-4cc3-80d7-00fdcca7d34f',
  'IT',
  'Baby food prep knife',
  'https://www.amazon.it/s?k=coltello%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000057',
  'ed26e171-4dbe-4b70-907a-3792c7a5f2e6',
  'KR',
  '흡착 아기 식기 세트',
  'https://www.coupang.com/np/search?q=%EC%95%84%EA%B8%B0%20%EC%8B%9D%EA%B8%B0%EC%84%B8%ED%8A%B8',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000058',
  'ed26e171-4dbe-4b70-907a-3792c7a5f2e6',
  'DE',
  'Suction baby dish set',
  'https://www.amazon.de/s?k=Baby%20Geschirr%20Set',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000059',
  'ed26e171-4dbe-4b70-907a-3792c7a5f2e6',
  'FR',
  'Suction baby dish set',
  'https://www.amazon.fr/s?k=set%20vaisselle%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000060',
  'ed26e171-4dbe-4b70-907a-3792c7a5f2e6',
  'IT',
  'Suction baby dish set',
  'https://www.amazon.it/s?k=set%20stoviglie%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000061',
  '57f137f1-53ac-497f-8674-08565ae0f11f',
  'KR',
  '삐뽀삐뽀 119 이유식',
  'https://product.kyobobook.co.kr/detail/S000001967752',
  '교보문고'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000062',
  '57f137f1-53ac-497f-8674-08565ae0f11f',
  'DE',
  'Beep Beep 119 Baby Food',
  'https://www.amazon.de/s?k=Beikost%20Ratgeber',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000063',
  '57f137f1-53ac-497f-8674-08565ae0f11f',
  'FR',
  'Beep Beep 119 Baby Food',
  'https://www.amazon.fr/s?k=guide%20diversification%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000064',
  '57f137f1-53ac-497f-8674-08565ae0f11f',
  'IT',
  'Beep Beep 119 Baby Food',
  'https://www.amazon.it/s?k=guida%20svezzamento%20bebe',
  'Amazon.it'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000065',
  '1b94fed9-5e17-4a16-8159-6c27bdf7b1d0',
  'KR',
  '실리콘 이유식 큐브틀',
  'https://www.coupang.com/np/search?q=%EC%9D%B4%EC%9C%A0%EC%8B%9D%20%ED%81%90%EB%B8%8C%ED%8B%80',
  'Coupang'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000066',
  '1b94fed9-5e17-4a16-8159-6c27bdf7b1d0',
  'DE',
  'Silicone baby food cube tray',
  'https://www.amazon.de/s?k=Eiswuerfelform%20Beikost',
  'Amazon.de'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000067',
  '1b94fed9-5e17-4a16-8159-6c27bdf7b1d0',
  'FR',
  'Silicone baby food cube tray',
  'https://www.amazon.fr/s?k=bac%20glacons%20puree%20bebe',
  'Amazon.fr'
);

INSERT INTO public.tool_product_links (
  id,
  tool_id,
  country_code,
  product_name,
  product_link,
  store_name
) VALUES (
  'b2000001-0001-4000-8000-000000000068',
  '1b94fed9-5e17-4a16-8159-6c27bdf7b1d0',
  'IT',
  'Silicone baby food cube tray',
  'https://www.amazon.it/s?k=vaschetta%20cubetti%20pappa',
  'Amazon.it'
);

COMMIT;
