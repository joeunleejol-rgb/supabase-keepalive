import { FOOD_TYPE_IDS } from './constants';
import type { FoodType } from '../types';

export const KR_FOOD_TYPES: FoodType[] = [
  {
    id: FOOD_TYPE_IDS.KR_TOPPING_CUBE,
    name: '토핑(큐브) 이유식',
    name_en: 'Topping (Cube) Baby Food',
    name_de: 'Topping- (Würfel-) Beikost',
    name_fr: 'Alimentation topping (cubes)',
    name_it: 'Svezzamento topping (cubetti)',
    description:
      '쌀미음·곡물 베이스 위에 재료별 큐브를 올려 먹는 방식입니다. 한 번에 여러 재료를 만들어 냉동 보관하기 좋아요.',
    description_en:
      'Serve grain porridge with frozen ingredient cubes on top. Batch-prep and freeze cubes for flexible daily meals.',
    description_de:
      'Getreidebrei mit eingefrorenen Zutatenwürfeln servieren. Würfel vorkochen und einfrieren für flexible Tagesmahlzeiten.',
    description_fr:
      'Bouillie de céréales garnie de cubes d’ingrédients congelés. Préparez et congelez les cubes à l’avance.',
    description_it:
      'Pappa di cereali con cubetti di ingredienti congelati sopra. Prepara e congela i cubetti in anticipo.',
    icon_name: 'Grid3x3',
    color_theme: 'sky',
    sort_order: 1,
    steps:
      '1. 곡물 미음을 끓여 베이스를 준비합니다.\n2. 재료별로 큐브 틀에 소분해 냉동합니다.\n3. 식사 때 미음에 큐브 2~3개를 올려 해동·섞어 줍니다.\n4. 단계에 맞게 큐브 크기와 토핑 종류를 늘려 갑니다.',
    steps_en:
      '1. Cook a grain porridge base.\n2. Portion each ingredient into cube trays and freeze.\n3. At mealtime, add 2–3 cubes to warm porridge and mix.\n4. Increase cube size and topping variety as stages progress.',
    steps_de:
      '1. Getreidebrei als Basis kochen.\n2. Zutaten in Würfelformen portionieren und einfrieren.\n3. Zum Essen 2–3 Würfel in warmen Brei geben und mischen.\n4. Würfelgröße und Vielfalt stufenweise erhöhen.',
    steps_fr:
      '1. Préparer une bouillie de céréales.\n2. Portionner chaque ingrédient en cubes et congeler.\n3. Au repas, ajouter 2–3 cubes au bouillon chaud et mélanger.\n4. Augmenter taille et variété progressivement.',
    steps_it:
      '1. Preparare una pappa di cereali.\n2. Porzionare ogni ingrediente in cubetti e congelare.\n3. A pasto, aggiungere 2–3 cubetti alla pappa calda e mescolare.\n4. Aumentare dimensioni e varietà gradualmente.',
    tips:
      '큐브는 15~30ml 크기가 초기에 적합합니다.\n토핑은 하루 1~2종만 새로 도입하세요.\n해동 후 바로 먹이고 남기지 마세요.',
    tips_en:
      '15–30 ml cubes suit early stages.\nIntroduce only 1–2 new toppings per day.\nServe immediately after thawing — do not refreeze.',
    tips_de:
      '15–30 ml Würfel passen für den Anfang.\nNur 1–2 neue Toppings pro Tag einführen.\nNach dem Auftauen sofort servieren.',
    tips_fr:
      'Cubes de 15–30 ml pour les débuts.\nIntroduisez 1–2 nouveaux toppings par jour.\nServez immédiatement après décongélation.',
    tips_it:
      'Cubetti da 15–30 ml per l’inizio.\nIntroduci 1–2 nuovi topping al giorno.\nServi subito dopo lo scongelamento.',
  },
  {
    id: FOOD_TYPE_IDS.KR_BLW,
    name: '자기주도 이유식 (BLW)',
    name_en: 'Baby-Led Weaning (BLW)',
    name_de: 'Beikost nach dem Baby-geführt-Prinzip (BLW)',
    name_fr: 'Diversification autoguidée (BLW)',
    name_it: 'Svezzamento autoguidato (BLW)',
    description:
      '아기가 직접 음식을 집어 먹으며 씹기·삼키기를 자연스럽게 배우는 방식입니다. 가족 식사와 함께 시작하기 좋아요.',
    description_en:
      'Baby self-feeds soft finger foods, learning chewing and swallowing naturally. Works well alongside family meals.',
    description_de:
      'Baby isst weiche Fingerfood-Stücke selbst und lernt natürlich kauen und schlucken. Passt gut zu Familienmahlzeiten.',
    description_fr:
      'Bébé se nourrit seul avec des bâtonnets moelleux et apprend à mâcher naturellement. Idéal aux repas en famille.',
    description_it:
      'Il bambino si alimenta da solo con bastoncini morbidi e impara a masticare naturalmente. Ideale ai pasti in famiglia.',
    icon_name: 'Hand',
    color_theme: 'emerald',
    sort_order: 2,
    steps:
      '1. 손가락으로 잡기 쉬운 크기로 음식을 준비합니다.\n2. 아기 앞에 2~3가지만 올려 줍니다.\n3. 아기가 스스로 집어 먹도록 기다립니다.\n4. 단단한 음식은 피하고 익힌 채소·과일부터 시작합니다.',
    steps_en:
      '1. Cut food into easy-to-grip pieces.\n2. Offer only 2–3 items at a time.\n3. Let baby pick up and eat independently.\n4. Avoid hard foods; start with cooked veg and fruit.',
    steps_de:
      '1. Essen in griffgerechte Stücke schneiden.\n2. Nur 2–3 Sorten gleichzeitig anbieten.\n3. Baby selbst essen lassen.\n4. Harte Speisen meiden; mit gekochtem Gemüse starten.',
    steps_fr:
      '1. Couper en morceaux faciles à saisir.\n2. Proposer 2–3 aliments à la fois.\n3. Laisser bébé manger seul.\n4. Éviter les aliments durs ; commencer par légumes cuits.',
    steps_it:
      '1. Tagliare in pezzi facili da afferrare.\n2. Offrire 2–3 alimenti alla volta.\n3. Lasciare che il bambino mangi da solo.\n4. Evitare cibi duri; iniziare con verdure cotte.',
    tips:
      '앉은 자세를 유지하게 하세요.\n질겅한 음식은 잘게 썰거나 으깨세요.\n알레르기 재료는 하나씩 도입하세요.',
    tips_en:
      'Keep baby upright while eating.\nSteam or mash tough foods.\nIntroduce potential allergens one at a time.',
    tips_de:
      'Baby aufrecht sitzen lassen.\nZähe Speisen dämpfen oder zerdrücken.\nAllergene einzeln einführen.',
    tips_fr:
      'Maintenir bébé assis droit.\nCuire ou écraser les aliments durs.\nIntroduire les allergènes un par un.',
    tips_it:
      'Tenere il bambino seduto dritto.\nCuocere o schiacciare cibi duri.\nIntrodurre allergeni uno alla volta.',
  },
  {
    id: FOOD_TYPE_IDS.KR_VEGAN,
    name: '알레르기 안심 비건/채식 이유식',
    name_en: 'Allergy-Safe Vegan/Vegetarian Baby Food',
    name_de: 'Allergiearme vegane/vegetarische Beikost',
    name_fr: 'Alimentation végétalienne sans allergènes',
    name_it: 'Svezzamento vegano/vegetariano anti-allergie',
    description:
      '고기·유제품 없이 두부, 오트밀, 채소 위주로 진행하는 채식 이유식입니다. 알레르기 우려가 있는 가정에 적합합니다.',
    description_en:
      'Plant-based weaning without meat or dairy — tofu, oats, and vegetables at the core. Ideal for allergy-conscious families.',
    description_de:
      'Pflanzliche Beikost ohne Fleisch und Milch — Tofu, Haferflocken und Gemüse im Mittelpunkt. Ideal bei Allergiebedenken.',
    description_fr:
      'Diversification végétale sans viande ni produits laitiers — tofu, avoine et légumes. Idéal pour les familles sensibles aux allergies.',
    description_it:
      'Svezzamento vegetale senza carne né latticini — tofu, avena e verdure. Ideale per famiglie attente alle allergie.',
    icon_name: 'Leaf',
    color_theme: 'rose',
    sort_order: 3,
    steps:
      '1. 두부·콩·오트밀 등 식물성 단백질을 중심 재료로 선택합니다.\n2. 고기·생선·달걀 대신 채소·곡물 조합으로 영양을 맞춥니다.\n3. 새 재료는 3일간 관찰하며 하나씩 도입합니다.\n4. 철·칼슘 보충을 위해 시금치·브로콜리·김 등을 활용합니다.',
    steps_en:
      '1. Choose plant proteins like tofu, beans, and oats.\n2. Balance nutrition with grains and vegetables instead of meat, fish, or eggs.\n3. Introduce new foods one at a time with a 3-day watch.\n4. Use spinach, broccoli, and seaweed for iron and calcium.',
    steps_de:
      '1. Pflanzliche Proteine wie Tofu, Bohnen und Hafer wählen.\n2. Ernährung mit Getreide und Gemüse statt Fleisch, Fisch oder Eier ausgleichen.\n3. Neue Lebensmittel einzeln mit 3-Tage-Beobachtung einführen.\n4. Spinat, Brokkoli und Algen für Eisen und Kalzium nutzen.',
    steps_fr:
      '1. Choisir protéines végétales : tofu, légumineuses, avoine.\n2. Équilibrer avec céréales et légumes sans viande, poisson ni œuf.\n3. Introduire un aliment à la fois avec 3 jours d’observation.\n4. Utiliser épinards, brocoli et algues pour fer et calcium.',
    steps_it:
      '1. Scegliere proteine vegetali: tofu, legumi, avena.\n2. Bilanciare con cereali e verdure senza carne, pesce o uova.\n3. Introdurre un alimento alla volta con 3 giorni di osservazione.\n4. Usare spinaci, broccoli e alghe per ferro e calcio.',
    tips:
      '고기·생선·달걀은 식단에서 완전히 제외됩니다.\n두부는 부드럽게 으깨 초기에, 큐브로 중기 이후 제공하세요.\n영양제는 소아과 상담 후 결정하세요.',
    tips_en:
      'Meat, fish, and eggs are fully excluded from meal plans.\nMash tofu for early stages; offer cubes in mid-stage.\nDiscuss supplements with your paediatrician.',
    tips_de:
      'Fleisch, Fisch und Eier werden vollständig ausgeschlossen.\nTofu in der Frühphase pürieren; in der Mittelstufe als Würfel.\nNahrungsergänzung mit Kinderarzt besprechen.',
    tips_fr:
      'Viande, poisson et œufs exclus du plan.\nÉcraser le tofu au début ; cubes en milieu de diversification.\nDiscuter des compléments avec le pédiatre.',
    tips_it:
      'Carne, pesce e uova esclusi dal piano.\nSchiacciare il tofu all’inizio; cubetti nella fase intermedia.\nDiscutere integratori con il pediatra.',
  },
];

export const EU_FOOD_TYPES: FoodType[] = [
  {
    id: FOOD_TYPE_IDS.EU_PUREE_MASH,
    name: '퓌레 및 매쉬형 이유식',
    name_en: 'Puree & Mash Baby Food',
    name_de: 'Püree- & Mus-Beikost',
    name_fr: 'Purées & mousses',
    name_it: 'Puree e passato',
    description:
      '부드러운 퓌레와 매쉬, 가벼운 수프 형태로 진행하는 유럽식 전통 이유식입니다. 초기 삼킴 연습에 잘 맞습니다.',
    description_en:
      'Classic European-style weaning with smooth purées, mashes, and light soups. Well suited to early swallowing practice.',
    description_de:
      'Klassische europäische Beikost mit weichen Pürees, Mus und leichten Suppen. Gut für frühes Schlucken geeignet.',
    description_fr:
      'Diversification européenne traditionnelle : purées lisses, mousses et soupes légères. Idéal pour apprendre à avaler.',
    description_it:
      'Svezzamento europeo tradizionale con puree lisce, passato e zuppe leggere. Adatto alle prime fasi di deglutizione.',
    icon_name: 'Soup',
    color_theme: 'amber',
    sort_order: 1,
    steps:
      '1. 재료를 충분히 익혀 부드럽게 퓌레 또는 매쉬로 만듭니다.\n2. 초기에는 단일 재료 퓌레로 시작합니다.\n3. 중기부터 수프·매쉬 형태로 질감을 점진적으로 키웁니다.\n4. 소금·설탕 없이 자연의 단맛을 활용합니다.',
    steps_en:
      '1. Cook ingredients until very soft, then purée or mash.\n2. Start with single-ingredient purées.\n3. Progress to soups and mashes in mid-stage.\n4. Use natural sweetness — no added salt or sugar.',
    steps_de:
      '1. Zutaten weich kochen und pürieren oder zerdrücken.\n2. Mit Einzelzutaten-Pürees beginnen.\n3. In der Mittelstufe zu Suppen und Mus übergehen.\n4. Natürliche Süße nutzen — kein Salz oder Zucker.',
    steps_fr:
      '1. Cuire les aliments jusqu’à tendreté, puis mixer ou écraser.\n2. Commencer par des purées mono-ingrédient.\n3. Passer aux soupes et mousses en milieu de diversification.\n4. Utiliser la douceur naturelle — sans sel ni sucre ajoutés.',
    steps_it:
      '1. Cuocere gli alimenti fino a morbidezza, poi frullare o schiacciare.\n2. Iniziare con puree mono-ingrediente.\n3. Passare a zuppe e passato nella fase intermedia.\n4. Usare dolcezza naturale — senza sale o zucchero aggiunti.',
    tips:
      '너무 묽으면 삼키기만 하고 씹는 연습이 부족할 수 있어요.\n유럽식 수프는 채소·감자·호박 조합이 흔합니다.\n냉장 보관은 24시간 이내, 냉동은 1주일 이내 사용하세요.',
    tips_en:
      'Overly thin textures may skip chewing practice.\nClassic combos: veg, potato, and squash soups.\nRefrigerate within 24 h; use frozen portions within a week.',
    tips_de:
      'Zu dünne Konsistenz überspringt Kauübungen.\nKlassische Kombis: Gemüse-, Kartoffel- und Kürbissuppen.\nIm Kühlschrank max. 24 h; gefroren innerhalb einer Woche.',
    tips_fr:
      'Texture trop liquide = moins de mastication.\nCombinaisons classiques : légumes, pomme de terre, courge.\nRéfrigérer 24 h max ; congelé sous une semaine.',
    tips_it:
      'Consistenza troppo liquida salta la masticazione.\nCombinazioni classiche: verdure, patate, zucca.\nIn frigo max 24 h; congelato entro una settimana.',
  },
  {
    id: FOOD_TYPE_IDS.EU_BLW,
    name: '자기주도 이유식 (BLW)',
    name_en: 'Baby-Led Weaning (BLW)',
    name_de: 'Beikost nach dem Baby-geführt-Prinzip (BLW)',
    name_fr: 'Diversification autoguidée (BLW)',
    name_it: 'Svezzamento autoguidato (BLW)',
    description:
      '아기가 직접 음식을 집어 먹으며 씹기·삼키기를 자연스럽게 배우는 방식입니다. 가족 식사와 함께 시작하기 좋아요.',
    description_en:
      'Baby self-feeds soft finger foods, learning chewing and swallowing naturally. Works well alongside family meals.',
    description_de:
      'Baby isst weiche Fingerfood-Stücke selbst und lernt natürlich kauen und schlucken. Passt gut zu Familienmahlzeiten.',
    description_fr:
      'Bébé se nourrit seul avec des bâtonnets moelleux et apprend à mâcher naturellement. Idéal aux repas en famille.',
    description_it:
      'Il bambino si alimenta da solo con bastoncini morbidi e impara a masticare naturalmente. Ideale ai pasti in famiglia.',
    icon_name: 'Hand',
    color_theme: 'emerald',
    sort_order: 2,
    steps:
      '1. 손가락으로 잡기 쉬운 크기로 음식을 준비합니다.\n2. 아기 앞에 2~3가지만 올려 줍니다.\n3. 아기가 스스로 집어 먹도록 기다립니다.\n4. 단단한 음식은 피하고 익힌 채소·과일부터 시작합니다.',
    steps_en:
      '1. Cut food into easy-to-grip pieces.\n2. Offer only 2–3 items at a time.\n3. Let baby pick up and eat independently.\n4. Avoid hard foods; start with cooked veg and fruit.',
    steps_de:
      '1. Essen in griffgerechte Stücke schneiden.\n2. Nur 2–3 Sorten gleichzeitig anbieten.\n3. Baby selbst essen lassen.\n4. Harte Speisen meiden; mit gekochtem Gemüse starten.',
    steps_fr:
      '1. Couper en morceaux faciles à saisir.\n2. Proposer 2–3 aliments à la fois.\n3. Laisser bébé manger seul.\n4. Éviter les aliments durs ; commencer par légumes cuits.',
    steps_it:
      '1. Tagliare in pezzi facili da afferrare.\n2. Offrire 2–3 alimenti alla volta.\n3. Lasciare che il bambino mangi da solo.\n4. Evitare cibi duri; iniziare con verdure cotte.',
    tips:
      '앉은 자세를 유지하게 하세요.\n질겅한 음식은 잘게 썰거나 으깨세요.\n알레르기 재료는 하나씩 도입하세요.',
    tips_en:
      'Keep baby upright while eating.\nSteam or mash tough foods.\nIntroduce potential allergens one at a time.',
    tips_de:
      'Baby aufrecht sitzen lassen.\nZähe Speisen dämpfen oder zerdrücken.\nAllergene einzeln einführen.',
    tips_fr:
      'Maintenir bébé assis droit.\nCuire ou écraser les aliments durs.\nIntroduire les allergènes un par un.',
    tips_it:
      'Tenere il bambino seduto dritto.\nCuocere o schiacciare cibi duri.\nIntrodurre allergeni uno alla volta.',
  },
  {
    id: FOOD_TYPE_IDS.EU_BIO_VEG,
    name: '100% 바이오 채식 식단',
    name_en: '100% Bio-Vegetarian Diet',
    name_de: '100 % Bio-Vegetarische Ernährung',
    name_fr: 'Régime 100 % bio végétarien',
    name_it: 'Dieta 100% bio vegetariana',
    description:
      '유기농 채소·곡물·두부 중심의 100% 채식 이유식입니다. 고기·생선 없이 유럽식 식단 가이드를 제공합니다.',
    description_en:
      'Fully organic plant-based weaning centred on vegetables, grains, and tofu. European-style guidance without meat or fish.',
    description_de:
      'Vollständig pflanzliche Bio-Beikost mit Gemüse, Getreide und Tofu. Europäische Ernährung ohne Fleisch und Fisch.',
    description_fr:
      'Diversification 100 % végétale bio : légumes, céréales et tofu. Guide européen sans viande ni poisson.',
    description_it:
      'Svezzamento 100% vegetale bio con verdure, cereali e tofu. Guida europea senza carne né pesce.',
    icon_name: 'Leaf',
    color_theme: 'rose',
    sort_order: 3,
    steps:
      '1. 유기농(Bio) 채소·곡물·콩류를 우선 선택합니다.\n2. 두부·렌틸·오트밀로 단백질·철분을 보충합니다.\n3. 고기·생선·가공육은 식단에서 제외합니다.\n4. 계절 채소를 활용해 다양한 퓌레·수프를 만듭니다.',
    steps_en:
      '1. Prioritise organic vegetables, grains, and legumes.\n2. Use tofu, lentils, and oats for protein and iron.\n3. Exclude meat, fish, and processed meats entirely.\n4. Rotate seasonal vegetables in purées and soups.',
    steps_de:
      '1. Bio-Gemüse, Getreide und Hülsenfrüchte bevorzugen.\n2. Tofu, Linsen und Haferflocken für Protein und Eisen.\n3. Fleisch, Fisch und Wurst vollständig ausschließen.\n4. Saisonales Gemüse in Pürees und Suppen rotieren.',
    steps_fr:
      '1. Privilégier légumes, céréales et légumineuses bio.\n2. Tofu, lentilles et avoine pour protéines et fer.\n3. Exclure viande, poisson et charcuterie.\n4. Varier les légumes de saison en purées et soupes.',
    steps_it:
      '1. Privilegiare verdure, cereali e legumi bio.\n2. Tofu, lenticchie e avena per proteine e ferro.\n3. Escludere carne, pesce e salumi.\n4. Ruotare verdure di stagione in puree e zuppe.',
    tips:
      'Bio(유기농) 인증 제품을 우선하세요.\n고기 성분은 생성 식단에서 자동 제외됩니다.\n철분 흡수를 위해 비타민 C가 풍부한 과일과 함께 제공하세요.',
    tips_en:
      'Choose certified organic (Bio) products when possible.\nMeat ingredients are automatically excluded from generated plans.\nPair iron-rich foods with vitamin-C fruits for absorption.',
    tips_de:
      'Bio-zertifizierte Produkte bevorzugen.\nFleisch wird automatisch aus dem Plan ausgeschlossen.\nEisenreiche Speisen mit vitamin-C-reichen Früchten kombinieren.',
    tips_fr:
      'Privilégier les produits bio certifiés.\nLa viande est automatiquement exclue du plan.\nAssocier aliments riches en fer et fruits vitamine C.',
    tips_it:
      'Preferire prodotti bio certificati.\nLa carne è esclusa automaticamente dal piano.\nAbbinare cibi ricchi di ferro a frutta con vitamina C.',
  },
];

export const DEFAULT_FOOD_TYPES: FoodType[] = [...KR_FOOD_TYPES, ...EU_FOOD_TYPES];

export function resolveFoodTypes(remote: FoodType[] | null | undefined): FoodType[] {
  if (remote && remote.length > 0) return remote;
  return DEFAULT_FOOD_TYPES;
}
