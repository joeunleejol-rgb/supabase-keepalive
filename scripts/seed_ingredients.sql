-- =============================================================================
-- 2U 이유식 — food_types + ingredients 시드 데이터
-- 생성: node scripts/generate-ingredients-seed-sql.cjs
-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run
-- =============================================================================

BEGIN;

DELETE FROM public.ingredients;
DELETE FROM public.food_types;

INSERT INTO public.food_types (
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
  icon_name,
  color_theme,
  sort_order,
  steps,
  steps_en,
  steps_de,
  steps_fr,
  steps_it,
  tips,
  tips_en,
  tips_de,
  tips_fr,
  tips_it
) VALUES (
  'food-kr-topping-cube',
  '토핑(큐브) 이유식',
  'Topping (Cube) Baby Food',
  'Topping- (Würfel-) Beikost',
  'Alimentation topping (cubes)',
  'Svezzamento topping (cubetti)',
  '쌀미음·곡물 베이스 위에 재료별 큐브를 올려 먹는 방식입니다. 한 번에 여러 재료를 만들어 냉동 보관하기 좋아요.',
  'Serve grain porridge with frozen ingredient cubes on top. Batch-prep and freeze cubes for flexible daily meals.',
  'Getreidebrei mit eingefrorenen Zutatenwürfeln servieren. Würfel vorkochen und einfrieren für flexible Tagesmahlzeiten.',
  'Bouillie de céréales garnie de cubes d’ingrédients congelés. Préparez et congelez les cubes à l’avance.',
  'Pappa di cereali con cubetti di ingredienti congelati sopra. Prepara e congela i cubetti in anticipo.',
  'Grid3x3',
  'sky',
  '1',
  '1. 곡물 미음을 끓여 베이스를 준비합니다.
2. 재료별로 큐브 틀에 소분해 냉동합니다.
3. 식사 때 미음에 큐브 2~3개를 올려 해동·섞어 줍니다.
4. 단계에 맞게 큐브 크기와 토핑 종류를 늘려 갑니다.',
  '1. Cook a grain porridge base.
2. Portion each ingredient into cube trays and freeze.
3. At mealtime, add 2–3 cubes to warm porridge and mix.
4. Increase cube size and topping variety as stages progress.',
  '1. Getreidebrei als Basis kochen.
2. Zutaten in Würfelformen portionieren und einfrieren.
3. Zum Essen 2–3 Würfel in warmen Brei geben und mischen.
4. Würfelgröße und Vielfalt stufenweise erhöhen.',
  '1. Préparer une bouillie de céréales.
2. Portionner chaque ingrédient en cubes et congeler.
3. Au repas, ajouter 2–3 cubes au bouillon chaud et mélanger.
4. Augmenter taille et variété progressivement.',
  '1. Preparare una pappa di cereali.
2. Porzionare ogni ingrediente in cubetti e congelare.
3. A pasto, aggiungere 2–3 cubetti alla pappa calda e mescolare.
4. Aumentare dimensioni e varietà gradualmente.',
  '큐브는 15~30ml 크기가 초기에 적합합니다.
토핑은 하루 1~2종만 새로 도입하세요.
해동 후 바로 먹이고 남기지 마세요.',
  '15–30 ml cubes suit early stages.
Introduce only 1–2 new toppings per day.
Serve immediately after thawing — do not refreeze.',
  '15–30 ml Würfel passen für den Anfang.
Nur 1–2 neue Toppings pro Tag einführen.
Nach dem Auftauen sofort servieren.',
  'Cubes de 15–30 ml pour les débuts.
Introduisez 1–2 nouveaux toppings par jour.
Servez immédiatement après décongélation.',
  'Cubetti da 15–30 ml per l’inizio.
Introduci 1–2 nuovi topping al giorno.
Servi subito dopo lo scongelamento.'
);

INSERT INTO public.food_types (
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
  icon_name,
  color_theme,
  sort_order,
  steps,
  steps_en,
  steps_de,
  steps_fr,
  steps_it,
  tips,
  tips_en,
  tips_de,
  tips_fr,
  tips_it
) VALUES (
  'food-kr-blw',
  '자기주도 이유식 (BLW)',
  'Baby-Led Weaning (BLW)',
  'Beikost nach dem Baby-geführt-Prinzip (BLW)',
  'Diversification autoguidée (BLW)',
  'Svezzamento autoguidato (BLW)',
  '아기가 직접 음식을 집어 먹으며 씹기·삼키기를 자연스럽게 배우는 방식입니다. 가족 식사와 함께 시작하기 좋아요.',
  'Baby self-feeds soft finger foods, learning chewing and swallowing naturally. Works well alongside family meals.',
  'Baby isst weiche Fingerfood-Stücke selbst und lernt natürlich kauen und schlucken. Passt gut zu Familienmahlzeiten.',
  'Bébé se nourrit seul avec des bâtonnets moelleux et apprend à mâcher naturellement. Idéal aux repas en famille.',
  'Il bambino si alimenta da solo con bastoncini morbidi e impara a masticare naturalmente. Ideale ai pasti in famiglia.',
  'Hand',
  'emerald',
  '2',
  '1. 손가락으로 잡기 쉬운 크기로 음식을 준비합니다.
2. 아기 앞에 2~3가지만 올려 줍니다.
3. 아기가 스스로 집어 먹도록 기다립니다.
4. 단단한 음식은 피하고 익힌 채소·과일부터 시작합니다.',
  '1. Cut food into easy-to-grip pieces.
2. Offer only 2–3 items at a time.
3. Let baby pick up and eat independently.
4. Avoid hard foods; start with cooked veg and fruit.',
  '1. Essen in griffgerechte Stücke schneiden.
2. Nur 2–3 Sorten gleichzeitig anbieten.
3. Baby selbst essen lassen.
4. Harte Speisen meiden; mit gekochtem Gemüse starten.',
  '1. Couper en morceaux faciles à saisir.
2. Proposer 2–3 aliments à la fois.
3. Laisser bébé manger seul.
4. Éviter les aliments durs ; commencer par légumes cuits.',
  '1. Tagliare in pezzi facili da afferrare.
2. Offrire 2–3 alimenti alla volta.
3. Lasciare che il bambino mangi da solo.
4. Evitare cibi duri; iniziare con verdure cotte.',
  '앉은 자세를 유지하게 하세요.
질겅한 음식은 잘게 썰거나 으깨세요.
알레르기 재료는 하나씩 도입하세요.',
  'Keep baby upright while eating.
Steam or mash tough foods.
Introduce potential allergens one at a time.',
  'Baby aufrecht sitzen lassen.
Zähe Speisen dämpfen oder zerdrücken.
Allergene einzeln einführen.',
  'Maintenir bébé assis droit.
Cuire ou écraser les aliments durs.
Introduire les allergènes un par un.',
  'Tenere il bambino seduto dritto.
Cuocere o schiacciare cibi duri.
Introdurre allergeni uno alla volta.'
);

INSERT INTO public.food_types (
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
  icon_name,
  color_theme,
  sort_order,
  steps,
  steps_en,
  steps_de,
  steps_fr,
  steps_it,
  tips,
  tips_en,
  tips_de,
  tips_fr,
  tips_it
) VALUES (
  'food-kr-vegan-vegetarian',
  '알레르기 안심 비건/채식 이유식',
  'Allergy-Safe Vegan/Vegetarian Baby Food',
  'Allergiearme vegane/vegetarische Beikost',
  'Alimentation végétalienne sans allergènes',
  'Svezzamento vegano/vegetariano anti-allergie',
  '고기·유제품 없이 두부, 오트밀, 채소 위주로 진행하는 채식 이유식입니다. 알레르기 우려가 있는 가정에 적합합니다.',
  'Plant-based weaning without meat or dairy — tofu, oats, and vegetables at the core. Ideal for allergy-conscious families.',
  'Pflanzliche Beikost ohne Fleisch und Milch — Tofu, Haferflocken und Gemüse im Mittelpunkt. Ideal bei Allergiebedenken.',
  'Diversification végétale sans viande ni produits laitiers — tofu, avoine et légumes. Idéal pour les familles sensibles aux allergies.',
  'Svezzamento vegetale senza carne né latticini — tofu, avena e verdure. Ideale per famiglie attente alle allergie.',
  'Leaf',
  'rose',
  '3',
  '1. 두부·콩·오트밀 등 식물성 단백질을 중심 재료로 선택합니다.
2. 고기·생선·달걀 대신 채소·곡물 조합으로 영양을 맞춥니다.
3. 새 재료는 3일간 관찰하며 하나씩 도입합니다.
4. 철·칼슘 보충을 위해 시금치·브로콜리·김 등을 활용합니다.',
  '1. Choose plant proteins like tofu, beans, and oats.
2. Balance nutrition with grains and vegetables instead of meat, fish, or eggs.
3. Introduce new foods one at a time with a 3-day watch.
4. Use spinach, broccoli, and seaweed for iron and calcium.',
  '1. Pflanzliche Proteine wie Tofu, Bohnen und Hafer wählen.
2. Ernährung mit Getreide und Gemüse statt Fleisch, Fisch oder Eier ausgleichen.
3. Neue Lebensmittel einzeln mit 3-Tage-Beobachtung einführen.
4. Spinat, Brokkoli und Algen für Eisen und Kalzium nutzen.',
  '1. Choisir protéines végétales : tofu, légumineuses, avoine.
2. Équilibrer avec céréales et légumes sans viande, poisson ni œuf.
3. Introduire un aliment à la fois avec 3 jours d’observation.
4. Utiliser épinards, brocoli et algues pour fer et calcium.',
  '1. Scegliere proteine vegetali: tofu, legumi, avena.
2. Bilanciare con cereali e verdure senza carne, pesce o uova.
3. Introdurre un alimento alla volta con 3 giorni di osservazione.
4. Usare spinaci, broccoli e alghe per ferro e calcio.',
  '고기·생선·달걀은 식단에서 완전히 제외됩니다.
두부는 부드럽게 으깨 초기에, 큐브로 중기 이후 제공하세요.
영양제는 소아과 상담 후 결정하세요.',
  'Meat, fish, and eggs are fully excluded from meal plans.
Mash tofu for early stages; offer cubes in mid-stage.
Discuss supplements with your paediatrician.',
  'Fleisch, Fisch und Eier werden vollständig ausgeschlossen.
Tofu in der Frühphase pürieren; in der Mittelstufe als Würfel.
Nahrungsergänzung mit Kinderarzt besprechen.',
  'Viande, poisson et œufs exclus du plan.
Écraser le tofu au début ; cubes en milieu de diversification.
Discuter des compléments avec le pédiatre.',
  'Carne, pesce e uova esclusi dal piano.
Schiacciare il tofu all’inizio; cubetti nella fase intermedia.
Discutere integratori con il pediatra.'
);

INSERT INTO public.food_types (
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
  icon_name,
  color_theme,
  sort_order,
  steps,
  steps_en,
  steps_de,
  steps_fr,
  steps_it,
  tips,
  tips_en,
  tips_de,
  tips_fr,
  tips_it
) VALUES (
  'food-eu-puree-mash',
  '퓌레 및 매쉬형 이유식',
  'Puree & Mash Baby Food',
  'Püree- & Mus-Beikost',
  'Purées & mousses',
  'Puree e passato',
  '부드러운 퓌레와 매쉬, 가벼운 수프 형태로 진행하는 유럽식 전통 이유식입니다. 초기 삼킴 연습에 잘 맞습니다.',
  'Classic European-style weaning with smooth purées, mashes, and light soups. Well suited to early swallowing practice.',
  'Klassische europäische Beikost mit weichen Pürees, Mus und leichten Suppen. Gut für frühes Schlucken geeignet.',
  'Diversification européenne traditionnelle : purées lisses, mousses et soupes légères. Idéal pour apprendre à avaler.',
  'Svezzamento europeo tradizionale con puree lisce, passato e zuppe leggere. Adatto alle prime fasi di deglutizione.',
  'Soup',
  'amber',
  '1',
  '1. 재료를 충분히 익혀 부드럽게 퓌레 또는 매쉬로 만듭니다.
2. 초기에는 단일 재료 퓌레로 시작합니다.
3. 중기부터 수프·매쉬 형태로 질감을 점진적으로 키웁니다.
4. 소금·설탕 없이 자연의 단맛을 활용합니다.',
  '1. Cook ingredients until very soft, then purée or mash.
2. Start with single-ingredient purées.
3. Progress to soups and mashes in mid-stage.
4. Use natural sweetness — no added salt or sugar.',
  '1. Zutaten weich kochen und pürieren oder zerdrücken.
2. Mit Einzelzutaten-Pürees beginnen.
3. In der Mittelstufe zu Suppen und Mus übergehen.
4. Natürliche Süße nutzen — kein Salz oder Zucker.',
  '1. Cuire les aliments jusqu’à tendreté, puis mixer ou écraser.
2. Commencer par des purées mono-ingrédient.
3. Passer aux soupes et mousses en milieu de diversification.
4. Utiliser la douceur naturelle — sans sel ni sucre ajoutés.',
  '1. Cuocere gli alimenti fino a morbidezza, poi frullare o schiacciare.
2. Iniziare con puree mono-ingrediente.
3. Passare a zuppe e passato nella fase intermedia.
4. Usare dolcezza naturale — senza sale o zucchero aggiunti.',
  '너무 묽으면 삼키기만 하고 씹는 연습이 부족할 수 있어요.
유럽식 수프는 채소·감자·호박 조합이 흔합니다.
냉장 보관은 24시간 이내, 냉동은 1주일 이내 사용하세요.',
  'Overly thin textures may skip chewing practice.
Classic combos: veg, potato, and squash soups.
Refrigerate within 24 h; use frozen portions within a week.',
  'Zu dünne Konsistenz überspringt Kauübungen.
Klassische Kombis: Gemüse-, Kartoffel- und Kürbissuppen.
Im Kühlschrank max. 24 h; gefroren innerhalb einer Woche.',
  'Texture trop liquide = moins de mastication.
Combinaisons classiques : légumes, pomme de terre, courge.
Réfrigérer 24 h max ; congelé sous une semaine.',
  'Consistenza troppo liquida salta la masticazione.
Combinazioni classiche: verdure, patate, zucca.
In frigo max 24 h; congelato entro una settimana.'
);

INSERT INTO public.food_types (
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
  icon_name,
  color_theme,
  sort_order,
  steps,
  steps_en,
  steps_de,
  steps_fr,
  steps_it,
  tips,
  tips_en,
  tips_de,
  tips_fr,
  tips_it
) VALUES (
  'food-eu-blw',
  '자기주도 이유식 (BLW)',
  'Baby-Led Weaning (BLW)',
  'Beikost nach dem Baby-geführt-Prinzip (BLW)',
  'Diversification autoguidée (BLW)',
  'Svezzamento autoguidato (BLW)',
  '아기가 직접 음식을 집어 먹으며 씹기·삼키기를 자연스럽게 배우는 방식입니다. 가족 식사와 함께 시작하기 좋아요.',
  'Baby self-feeds soft finger foods, learning chewing and swallowing naturally. Works well alongside family meals.',
  'Baby isst weiche Fingerfood-Stücke selbst und lernt natürlich kauen und schlucken. Passt gut zu Familienmahlzeiten.',
  'Bébé se nourrit seul avec des bâtonnets moelleux et apprend à mâcher naturellement. Idéal aux repas en famille.',
  'Il bambino si alimenta da solo con bastoncini morbidi e impara a masticare naturalmente. Ideale ai pasti in famiglia.',
  'Hand',
  'emerald',
  '2',
  '1. 손가락으로 잡기 쉬운 크기로 음식을 준비합니다.
2. 아기 앞에 2~3가지만 올려 줍니다.
3. 아기가 스스로 집어 먹도록 기다립니다.
4. 단단한 음식은 피하고 익힌 채소·과일부터 시작합니다.',
  '1. Cut food into easy-to-grip pieces.
2. Offer only 2–3 items at a time.
3. Let baby pick up and eat independently.
4. Avoid hard foods; start with cooked veg and fruit.',
  '1. Essen in griffgerechte Stücke schneiden.
2. Nur 2–3 Sorten gleichzeitig anbieten.
3. Baby selbst essen lassen.
4. Harte Speisen meiden; mit gekochtem Gemüse starten.',
  '1. Couper en morceaux faciles à saisir.
2. Proposer 2–3 aliments à la fois.
3. Laisser bébé manger seul.
4. Éviter les aliments durs ; commencer par légumes cuits.',
  '1. Tagliare in pezzi facili da afferrare.
2. Offrire 2–3 alimenti alla volta.
3. Lasciare che il bambino mangi da solo.
4. Evitare cibi duri; iniziare con verdure cotte.',
  '앉은 자세를 유지하게 하세요.
질겅한 음식은 잘게 썰거나 으깨세요.
알레르기 재료는 하나씩 도입하세요.',
  'Keep baby upright while eating.
Steam or mash tough foods.
Introduce potential allergens one at a time.',
  'Baby aufrecht sitzen lassen.
Zähe Speisen dämpfen oder zerdrücken.
Allergene einzeln einführen.',
  'Maintenir bébé assis droit.
Cuire ou écraser les aliments durs.
Introduire les allergènes un par un.',
  'Tenere il bambino seduto dritto.
Cuocere o schiacciare cibi duri.
Introdurre allergeni uno alla volta.'
);

INSERT INTO public.food_types (
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
  icon_name,
  color_theme,
  sort_order,
  steps,
  steps_en,
  steps_de,
  steps_fr,
  steps_it,
  tips,
  tips_en,
  tips_de,
  tips_fr,
  tips_it
) VALUES (
  'food-eu-bio-vegetarian',
  '100% 바이오 채식 식단',
  '100% Bio-Vegetarian Diet',
  '100 % Bio-Vegetarische Ernährung',
  'Régime 100 % bio végétarien',
  'Dieta 100% bio vegetariana',
  '유기농 채소·곡물·두부 중심의 100% 채식 이유식입니다. 고기·생선 없이 유럽식 식단 가이드를 제공합니다.',
  'Fully organic plant-based weaning centred on vegetables, grains, and tofu. European-style guidance without meat or fish.',
  'Vollständig pflanzliche Bio-Beikost mit Gemüse, Getreide und Tofu. Europäische Ernährung ohne Fleisch und Fisch.',
  'Diversification 100 % végétale bio : légumes, céréales et tofu. Guide européen sans viande ni poisson.',
  'Svezzamento 100% vegetale bio con verdure, cereali e tofu. Guida europea senza carne né pesce.',
  'Leaf',
  'rose',
  '3',
  '1. 유기농(Bio) 채소·곡물·콩류를 우선 선택합니다.
2. 두부·렌틸·오트밀로 단백질·철분을 보충합니다.
3. 고기·생선·가공육은 식단에서 제외합니다.
4. 계절 채소를 활용해 다양한 퓌레·수프를 만듭니다.',
  '1. Prioritise organic vegetables, grains, and legumes.
2. Use tofu, lentils, and oats for protein and iron.
3. Exclude meat, fish, and processed meats entirely.
4. Rotate seasonal vegetables in purées and soups.',
  '1. Bio-Gemüse, Getreide und Hülsenfrüchte bevorzugen.
2. Tofu, Linsen und Haferflocken für Protein und Eisen.
3. Fleisch, Fisch und Wurst vollständig ausschließen.
4. Saisonales Gemüse in Pürees und Suppen rotieren.',
  '1. Privilégier légumes, céréales et légumineuses bio.
2. Tofu, lentilles et avoine pour protéines et fer.
3. Exclure viande, poisson et charcuterie.
4. Varier les légumes de saison en purées et soupes.',
  '1. Privilegiare verdure, cereali e legumi bio.
2. Tofu, lenticchie e avena per proteine e ferro.
3. Escludere carne, pesce e salumi.
4. Ruotare verdure di stagione in puree e zuppe.',
  'Bio(유기농) 인증 제품을 우선하세요.
고기 성분은 생성 식단에서 자동 제외됩니다.
철분 흡수를 위해 비타민 C가 풍부한 과일과 함께 제공하세요.',
  'Choose certified organic (Bio) products when possible.
Meat ingredients are automatically excluded from generated plans.
Pair iron-rich foods with vitamin-C fruits for absorption.',
  'Bio-zertifizierte Produkte bevorzugen.
Fleisch wird automatisch aus dem Plan ausgeschlossen.
Eisenreiche Speisen mit vitamin-C-reichen Früchten kombinieren.',
  'Privilégier les produits bio certifiés.
La viande est automatiquement exclue du plan.
Associer aliments riches en fer et fruits vitamine C.',
  'Preferire prodotti bio certificati.
La carne è esclusa automaticamente dal piano.
Abbinare cibi ricchi di ferro a frutta con vitamina C.'
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'b5ca4b06-da81-4c3f-aea5-80551bc0533d',
  '쌀',
  'Rice',
  'Reis',
  'Riz',
  'Riso',
  'grain',
  '이유식의 가장 기본이 되는 곡물입니다. 알레르기 유발이 적어 초기 이유식으로 가장 추천됩니다. 5배죽부터 시작해 점차 묽기를 줄입니다.',
  'The most fundamental grain for baby food. Rarely causes allergies, making it the top recommendation for early-stage feeding. Start with a thin porridge and gradually thicken.',
  '4',
  'Wheat',
  'amber',
  '1',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '6a8e7b77-6bf1-4221-9872-fc191ea71b32',
  '현미',
  'Brown Rice',
  'Vollkornreis',
  'Riz brun',
  'Riso integrale',
  'grain',
  '백미보다 영양가가 높지만 소화가 다소 어려울 수 있습니다. 중기 이후부터 도입을 추천하며, 잘 불려 갈아 사용합니다.',
  'More nutritious than white rice but slightly harder to digest. Recommended from mid-stage; soak well and blend before use.',
  '6',
  'Wheat',
  'orange',
  '2',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '78b3bb55-c163-4dcb-8ca0-1521d453e33c',
  '당근',
  'Carrot',
  'Karotte',
  'Carotte',
  'Carota',
  'vegetable',
  '베타카로틴이 풍부한 대표적인 초기 이유식 채소입니다. 잘 익혀 곱게 갈아 사용하며, 알레르기 위험이 낮아 초기부터 도입 가능합니다.',
  'A classic early-stage vegetable rich in beta-carotene. Cook until soft and purée finely. Low allergy risk, suitable from the start.',
  '5',
  'Carrot',
  'orange',
  '3',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '48a8b473-78bb-4060-8d7d-d74a053ff5a3',
  '단호박',
  'Kabocha Squash',
  'Hokkaido-Kürbis',
  'Courge kabocha',
  'Zucca kabocha',
  'vegetable',
  '소화가 잘 되고 달콤한 맛으로 아기가 좋아하는 채소입니다. 베타카로틴과 식이섬유가 풍부하며, 초기부터 도입 가능합니다.',
  'Easy to digest with a naturally sweet flavor babies love. Rich in beta-carotene and fiber; suitable from early stages.',
  '5',
  'Circle',
  'amber',
  '4',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '795aeeb4-d6a9-4541-bf61-f4b2c433f8bd',
  '양배추',
  'Cabbage',
  'Weißkohl',
  'Chou',
  'Cavolo',
  'vegetable',
  '위에 부담이 적고 소화가 잘 되는 채소입니다. 잘 익혀 곱게 갈아 사용하며, 중기 이후부터 다양하게 활용할 수 있습니다.',
  'Gentle on the stomach and easy to digest. Cook thoroughly and purée finely; versatile from mid-stage onward.',
  '6',
  'Salad',
  'green',
  '5',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '510992b2-3391-48d1-bdc5-ab389a653ece',
  '시금치',
  'Spinach',
  'Spinat',
  'Épinard',
  'Spinaci',
  'vegetable',
  '철분과 비타민이 풍부하지만, 초기에는 소량부터 시작해야 합니다. 잘 데쳐서 곱게 다져 사용하며, 중기 이후 추천합니다.',
  'Rich in iron and vitamins, though introduce in small amounts early on. Blanch and finely chop; recommended from mid-stage.',
  '6',
  'Leaf',
  'green',
  '6',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '2837f136-a919-4a47-88f1-4815e546f8ff',
  '사과',
  'Apple',
  'Apfel',
  'Pomme',
  'Mela',
  'fruit',
  '알레르기 위험이 낮고 소화가 잘 되는 대표적인 초기 과일입니다. 잘 익혀 즙을 내거나 곱게 갈아 사용합니다.',
  'A classic early-stage fruit with low allergy risk and easy digestibility. Cook and purée or press into juice.',
  '5',
  'Apple',
  'red',
  '7',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '692d30f0-30ef-4427-9e75-6da06e7755b6',
  '배',
  'Pear',
  'Birne',
  'Poire',
  'Pera',
  'fruit',
  '수분이 많고 소화가 잘 되는 과일입니다. 초기부터 도입 가능하며, 잘 익혀 즙을 내거나 곱게 갈아 줍니다.',
  'High in moisture and easy to digest. Suitable from early stages; cook and purée or juice.',
  '5',
  'Cherry',
  'green',
  '8',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'aba3e5e6-e8c3-418c-9d8b-a267f808f16c',
  '바나나',
  'Banana',
  'Banane',
  'Banane',
  'Banana',
  'fruit',
  '칼륨이 풍부하고 부드러워 으깨기 쉬운 과일입니다. 중기 이후부터 아기가 직접 잡고 먹을 수 있어 BLW에도 적합합니다.',
  'Rich in potassium and soft enough to mash easily. From mid-stage, babies can self-feed banana pieces — great for BLW.',
  '6',
  'Citrus',
  'yellow',
  '9',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'ed96bc84-69a0-4ed2-bfa8-54b3b86c5115',
  '아보카도',
  'Avocado',
  'Avocado',
  'Avocat',
  'Avocado',
  'fruit',
  '건강한 지방과 영양소가 풍부한 과일입니다. 중기 이후부터 추천하며, 으깨어 사용하거나 BLW용으로 적합합니다.',
  'Packed with healthy fats and nutrients. Recommended from mid-stage; mash or use as BLW finger food.',
  '6',
  'Circle',
  'green',
  '10',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '09b502cf-bd53-49d8-ba2e-9385dd739d05',
  '소고기',
  'Beef',
  'Rindfleisch',
  'Bœuf',
  'Manzo',
  'protein',
  '철분과 단백질이 풍부해 중기 이후 필수 재료입니다. 잘 익혀 곱게 갈아 사용하며, 알레르기 반응을 주의깊게 관찰해야 합니다.',
  'Essential from mid-stage for iron and protein. Cook well and purée finely; watch carefully for any allergic reaction.',
  '7',
  'Beef',
  'red',
  '11',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '322f5fc2-c7df-4d83-a17c-404de094d7d4',
  '닭고기',
  'Chicken',
  'Hähnchenfleisch',
  'Poulet',
  'Pollo',
  'protein',
  '소화가 잘 되는 단백질 공급원입니다. 중기 이후부터 추천하며, 잘 익혀 곱게 다져 사용합니다.',
  'An easily digestible protein source. Recommended from mid-stage; cook thoroughly and mince finely.',
  '7',
  'Bird',
  'amber',
  '12',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'df0551b1-8217-40df-ab14-cc5e39799024',
  '흰살생선',
  'White Fish',
  'Weißfisch',
  'Poisson blanc',
  'Pesce bianco',
  'protein',
  '단백질과 DHA가 풍부하지만 알레르기 위험이 있어 주의가 필요합니다. 중기 이후 소량부터 시작하며, 흰살생선(대구, 가자미 등)을 추천합니다.',
  'Rich in protein and DHA, but has allergy potential — introduce cautiously. Start with small amounts from mid-stage; white fish like cod or flounder are good choices.',
  '8',
  'Fish',
  'sky',
  '13',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'e5ed0bf3-fc02-45c9-bdc9-d4f43ced85d5',
  '계란노른자',
  'Egg Yolk',
  'Eigelb',
  'Jaune d''œuf',
  'Tuorlo d''uovo',
  'protein',
  '철분과 단백질이 풍부합니다. 중기 이후 노른자부터 시작해 후기에 흰자를 도입합니다. 알레르기 주의가 필요한 재료입니다.',
  'Rich in iron and protein. Start with yolk from mid-stage and introduce white in late-stage. An allergy-prone ingredient — monitor closely.',
  '7',
  'Egg',
  'yellow',
  '14',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '7ced5677-a9f8-49ad-97f7-7478e71b6e8e',
  '두부',
  'Tofu',
  'Tofu',
  'Tofu',
  'Tofu',
  'protein',
  '식물성 단백질 공급원으로 소화가 잘 됩니다. 중기 이후부터 추천하며, 곱게 으깨어 사용합니다.',
  'A plant-based protein that''s easy to digest. Recommended from mid-stage; mash finely.',
  '7',
  'Square',
  'neutral',
  '15',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '9c5dc5c8-1244-4393-a3bf-2b425433f532',
  '감자',
  'Potato',
  'Kartoffel',
  'Pomme de terre',
  'Patata',
  'vegetable',
  '탄수화물과 비타민 C가 풍부한 식재료입니다. 잘 익혀 곱게 으깨어 사용하며, 초기부터 도입 가능합니다.',
  'Rich in carbohydrates and vitamin C. Cook well and mash finely; suitable from early stages.',
  '5',
  'Circle',
  'amber',
  '16',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '89ba04eb-ae07-41e3-aff0-db54ac524eb7',
  '고구마',
  'Sweet Potato',
  'Süßkartoffel',
  'Patate douce',
  'Patata dolce',
  'vegetable',
  '식이섬유와 베타카로틴이 풍부합니다. 달콤한 맛으로 아기가 좋아하며, 잘 익혀 곱게 으깨어 사용합니다.',
  'Rich in fiber and beta-carotene with a sweet taste babies enjoy. Cook well and mash finely.',
  '5',
  'Circle',
  'orange',
  '17',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '6b5add21-14bd-498d-96c5-c45870868992',
  '브로콜리',
  'Broccoli',
  'Brokkoli',
  'Brocoli',
  'Broccolo',
  'vegetable',
  '비타민과 미네랄이 풍부한 슈퍼푸드입니다. 중기 이후부터 추천하며, 잘 익혀 곱게 다져 사용합니다.',
  'A superfood packed with vitamins and minerals. Recommended from mid-stage; cook well and chop finely.',
  '7',
  'Trees',
  'green',
  '18',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '719aa871-ac40-48e9-a2b5-2e9037189fbc',
  '오트밀',
  'Oatmeal',
  'Haferflocken',
  'Flocons d''avoine',
  'Avena',
  'grain',
  NULL,
  NULL,
  '5',
  'Wheat',
  'amber',
  '20',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'fca9c720-b3d2-448f-95ef-91c194a20452',
  '돼지고기',
  'Pork',
  'Schweinefleisch',
  'Porc',
  'Maiale',
  'protein',
  NULL,
  NULL,
  '8',
  'Sandwich',
  'rose',
  '25',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'f1ecef98-d144-45fa-943a-65b2c9cea8ee',
  '수박',
  'Watermelon',
  'Wassermelone',
  'Pastèque',
  'Anguria',
  'fruit',
  NULL,
  NULL,
  '6',
  'Circle',
  'rose',
  '25',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '32a6bab7-76a5-4edf-bb96-776661472136',
  '애호박',
  'Zucchini',
  'Zucchini',
  'Courgette',
  'Zucchina',
  'vegetable',
  NULL,
  NULL,
  '5',
  'Circle',
  'green',
  '25',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '2f70b91c-bf8c-4dd7-a876-b96f8118a81f',
  '멜론',
  'Melon',
  'Melone',
  'Melon',
  'Melone',
  'fruit',
  NULL,
  NULL,
  '6',
  'Circle',
  'green',
  '26',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'c71daf6d-443a-4fd0-bab1-b989fcec2b0c',
  '요거트',
  'Yogurt',
  'Joghurt',
  'Yaourt',
  'Yogurt',
  'protein',
  NULL,
  NULL,
  '8',
  'Circle',
  'neutral',
  '26',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '4fca50ef-b610-4dc2-ba6e-3ef6f215b89f',
  '검은콩',
  'Black Bean',
  'Schwarze Bohnen',
  'Haricot noir',
  'Fagiolo nero',
  'protein',
  NULL,
  NULL,
  '8',
  'Circle',
  'sky',
  '27',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '8dde5601-06df-4e6e-8e7e-669019f706b3',
  '복숭아',
  'Peach',
  'Pfirsich',
  'Pêche',
  'Pesca',
  'fruit',
  NULL,
  NULL,
  '6',
  'Cherry',
  'rose',
  '27',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '007ba6d6-38b3-4165-9786-a537fc9741e0',
  '찹쌀',
  'Glutinous Rice',
  'Klebreis',
  'Riz glutineux',
  'Riso glutinoso',
  'grain',
  NULL,
  NULL,
  '6',
  'Wheat',
  'amber',
  '30',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '886adb1e-88c9-4f49-a870-9cf181c088e7',
  '망고',
  'Mango',
  'Mango',
  'Mangue',
  'Mango',
  'fruit',
  NULL,
  NULL,
  '7',
  'Citrus',
  'amber',
  '35',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '3855860f-b749-427c-88fb-6e4f0a5099f7',
  '무',
  'Radish',
  'Rettich',
  'Radis',
  'Ravanello',
  'vegetable',
  NULL,
  NULL,
  '6',
  'Circle',
  'neutral',
  '35',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '0becce46-e383-49a5-abf8-8ba717d4a63b',
  '연어',
  'Salmon',
  'Lachs',
  'Saumon',
  'Salmone',
  'protein',
  NULL,
  NULL,
  '9',
  'Fish',
  'sky',
  '35',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '25174dee-49a4-4b3b-a8c2-10448b71d0cd',
  '비트',
  'Beet',
  'Rote Bete',
  'Betterave',
  'Barbabietola',
  'vegetable',
  NULL,
  NULL,
  '6',
  'Circle',
  'rose',
  '36',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'b8dff7d6-64cb-47f8-9a0e-b8d1dca05ff4',
  '자두',
  'Plum',
  'Pflaume',
  'Prune',
  'Prugna',
  'fruit',
  NULL,
  NULL,
  '7',
  'Cherry',
  'rose',
  '36',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'a1837272-775d-47d2-bae5-d649eac2e423',
  '치즈',
  'Cheese',
  'Käse',
  'Fromage',
  'Formaggio',
  'protein',
  NULL,
  NULL,
  '9',
  'Square',
  'amber',
  '36',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '30fc2216-36dd-4682-85e4-b048ba5e85b7',
  '새우',
  'Shrimp',
  'Garnele',
  'Crevette',
  'Gambero',
  'protein',
  NULL,
  NULL,
  '9',
  'Fish',
  'rose',
  '37',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '6f9a48c1-ab72-4181-90c7-44a44b2664b5',
  '기장',
  'Millet',
  'Hirse',
  'Millet',
  'Miglio',
  'grain',
  NULL,
  NULL,
  '7',
  'Wheat',
  'amber',
  '40',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '7a5e6b49-0cdc-4cdd-9d7f-c9c4871b31cc',
  '딸기',
  'Strawberry',
  'Erdbeere',
  'Fraise',
  'Fragola',
  'fruit',
  NULL,
  NULL,
  '8',
  'Cherry',
  'rose',
  '45',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '720ccd2f-0fe2-4165-ba21-01a0fff80275',
  '전란',
  'Whole Egg',
  'Ganzes Ei',
  'Œuf entier',
  'Uovo intero',
  'protein',
  NULL,
  NULL,
  '10',
  'Egg',
  'amber',
  '45',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '35e74b6f-84f0-4591-b868-9c6359cf1a67',
  '파프리카',
  'Bell Pepper',
  'Paprika',
  'Poivron',
  'Peperone',
  'vegetable',
  NULL,
  NULL,
  '7',
  'Circle',
  'rose',
  '45',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'eec98204-e065-4363-a6bb-9bfb7674ffe0',
  '블루베리',
  'Blueberry',
  'Blaubeere',
  'Myrtille',
  'Mirtillo',
  'fruit',
  NULL,
  NULL,
  '8',
  'Cherry',
  'sky',
  '46',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '5afcda7f-2918-4598-af03-d74b28efe2e1',
  '옥수수',
  'Corn',
  'Mais',
  'Maïs',
  'Mais',
  'vegetable',
  NULL,
  NULL,
  '7',
  'Circle',
  'amber',
  '46',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '21136778-02d2-4a72-9601-4f9d16973df7',
  '완두콩',
  'Green Peas',
  'Erbsen',
  'Petits pois',
  'Piselli',
  'vegetable',
  NULL,
  NULL,
  '7',
  'Circle',
  'green',
  '47',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'aaab524e-8630-4f1f-98d3-95cabd36edcc',
  '청경채',
  'Bok Choy',
  'Pak Choi',
  'Pak-choï',
  'Pak choi',
  'vegetable',
  NULL,
  NULL,
  '7',
  'Leaf',
  'green',
  '48',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '7a65805a-d43e-461f-af32-0fa65be81ac7',
  '오이',
  'Cucumber',
  'Gurke',
  'Concombre',
  'Cetriolo',
  'vegetable',
  NULL,
  NULL,
  '7',
  'Circle',
  'green',
  '49',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '21bfedee-d176-4b9d-9070-7c8066e1f807',
  '적양배추',
  'Red Cabbage',
  'Rotkohl',
  'Chou rouge',
  'Cavolo rosso',
  'vegetable',
  NULL,
  NULL,
  '7',
  'Salad',
  'rose',
  '50',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '94e86d88-966f-4653-b3a0-aa797c6f7275',
  '퀴노아',
  'Quinoa',
  'Quinoa',
  'Quinoa',
  'Quinoa',
  'grain',
  NULL,
  NULL,
  '8',
  'Wheat',
  'amber',
  '50',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'de421438-0dca-4457-a4f4-eacba5ebbccf',
  '파스티나케',
  'Parsnip',
  'Pastinake',
  'Panais',
  'Pastinaca',
  'vegetable',
  '독일 이유식에서 자주 쓰이는 달콤하고 부드러운 뿌리채소입니다.',
  'A sweet, mild root vegetable popular in German Beikost. Easy to purée and gentle on baby''s tummy.',
  '5',
  'carrot',
  'green',
  '52',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'd487847a-8b01-4479-93c1-44cf36c7085b',
  '펜넬',
  'Fennel',
  'Fenchel',
  'Fenouil',
  'Finocchio',
  'vegetable',
  '독일 이유식에서 소화를 돕는 채소로 자주 사용됩니다. 달콤한 아니스 향이 특징입니다.',
  'Used in German Beikost for its digestive benefits. Has a mild, sweet anise flavour baby often enjoys.',
  '6',
  'leaf',
  'green',
  '53',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '36e6c375-17c9-4089-aae9-81873a05dd68',
  '연근',
  'Lotus Root',
  'Lotuswurzel',
  'Racine de lotus',
  'Radice di loto',
  'vegetable',
  NULL,
  NULL,
  '8',
  'Circle',
  'neutral',
  '55',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '620a2032-b839-48d6-b366-8d3ca1b32c9e',
  '키위',
  'Kiwi',
  'Kiwi',
  'Kiwi',
  'Kiwi',
  'fruit',
  NULL,
  NULL,
  '9',
  'Circle',
  'green',
  '55',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '757345c5-e799-41b1-9592-9d7449efac45',
  '버섯',
  'Mushroom',
  'Pilze',
  'Champignon',
  'Fungo',
  'vegetable',
  NULL,
  NULL,
  '8',
  'Circle',
  'neutral',
  '56',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'e1a9c0e5-ebed-4015-9898-c57b7f80796c',
  '포도',
  'Grape',
  'Weintraube',
  'Raisin',
  'Uva',
  'fruit',
  NULL,
  NULL,
  '9',
  'Cherry',
  'rose',
  '56',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'f1d9ca44-3312-45a9-a14b-8f16fd94e573',
  '샐러리',
  'Celery',
  'Sellerie',
  'Céleri',
  'Sedano',
  'vegetable',
  NULL,
  NULL,
  '8',
  'Leaf',
  'green',
  '57',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '55bc7b19-8df6-4a00-b33c-8e771a6a786e',
  '아스파라거스',
  'Asparagus',
  'Spargel',
  'Asperge',
  'Asparago',
  'vegetable',
  NULL,
  NULL,
  '8',
  'Leaf',
  'green',
  '58',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  '90d778b9-385f-4821-839f-f7dea4cd0640',
  '보리',
  'Barley',
  'Gerste',
  'Orge',
  'Orzo',
  'grain',
  NULL,
  NULL,
  '8',
  'Wheat',
  'amber',
  '60',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'f220825f-71da-4b56-b7e4-723bad2d1f51',
  '우엉',
  'Burdock Root',
  'Klettenwurzel',
  'Bardane',
  'Bardana',
  'vegetable',
  NULL,
  NULL,
  '9',
  'Circle',
  'amber',
  '65',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'f184dc2f-8637-4a04-bc45-33401c81f120',
  '수수',
  'Sorghum',
  'Sorghum',
  'Sorgho',
  'Sorgo',
  'grain',
  NULL,
  NULL,
  '9',
  'Wheat',
  'amber',
  '70',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'local-ing-lentils',
  '렌틸콩',
  'Lentils',
  'Linsen',
  'Lentilles',
  'Lenticchie',
  'protein',
  '잘 익힌 렌틸콩은 철분과 단백질을 함께 보충해 줍니다.',
  'Well-cooked lentils provide iron and plant protein together.',
  '8',
  'Leaf',
  'green',
  '102',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'local-ing-fava-beans',
  '파바빈',
  'Fava beans',
  'Ackerbohnen',
  'Fèves',
  'Fave',
  'protein',
  '껍질을 제거하고 충분히 익힌 파바빈은 중기 이후 단백질원으로 적합합니다.',
  'Peeled, thoroughly cooked fava beans suit mid-stage plant protein.',
  '9',
  'Leaf',
  'green',
  '103',
  FALSE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'local-ing-chickpeas',
  '병아리콩',
  'Chickpeas',
  'Kichererbsen',
  'Pois chiches',
  'Ceci',
  'protein',
  '으깬 병아리콩은 죽·퓨레에 넣기 좋은 식물성 단백질입니다.',
  'Mashed chickpeas work well in porridge and purées.',
  '8',
  'Leaf',
  'green',
  '104',
  TRUE
);

INSERT INTO public.ingredients (
  id,
  name,
  name_en,
  name_de,
  name_fr,
  name_it,
  category,
  description,
  description_en,
  recommended_month,
  icon_name,
  color_theme,
  sort_order,
  is_starter_recommended
) VALUES (
  'local-ing-tempeh',
  '템페',
  'Tempeh',
  'Tempeh',
  'Tempeh',
  'Tempeh',
  'protein',
  '잘 익힌 템페는 발효 대두로 소화에 도움이 되는 단백질원입니다.',
  'Well-cooked tempeh is fermented soy — a digestible protein source.',
  '10',
  'Leaf',
  'green',
  '105',
  FALSE
);

COMMIT;
