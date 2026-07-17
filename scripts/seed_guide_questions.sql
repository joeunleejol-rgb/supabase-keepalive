-- =============================================================================
-- 2U 이유식 — guide_questions 시드 데이터
-- 생성: node scripts/generate-guide-questions-sql.cjs
-- 사용: Supabase Dashboard → SQL Editor → 전체 복사 후 Run
-- =============================================================================

BEGIN;

DELETE FROM public.guide_questions;

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000001',
  '아기가 이유식을 시작할 수 있는 월령(4~6개월)에 도달했나요?',
  'Has your baby reached the age to start weaning (around 4–6 months)?',
  'Hat Ihr Baby das Alter erreicht, um mit der Beikost zu beginnen (ca. 4–6 Monate)?',
  'Votre bébé a-t-il atteint l’âge pour commencer la diversification (vers 4–6 mois) ?',
  'Il vostro bambino ha raggiunto l’età per iniziare lo svezzamento (circa 4–6 mesi)?',
  'baby_ready',
  '보통 생후 4~6개월부터 이유식을 시작합니다. 아기의 발달 상태를 먼저 확인해 주세요.',
  'Weaning usually starts around 4–6 months. Check your baby’s development first.',
  'Die Beikost beginnt meist zwischen dem 4. und 6. Monat. Prüfen Sie zuerst die Entwicklung Ihres Babys.',
  'La diversification commence en général vers 4–6 mois. Vérifiez d’abord le développement de bébé.',
  'Lo svezzamento di solito inizia intorno ai 4–6 mesi. Verificate prima lo sviluppo del bambino.',
  '1'
);

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000002',
  '아기가 머리를 안정적으로 받칠 수 있나요?',
  'Can your baby hold their head steady?',
  'Kann Ihr Baby den Kopf stabil halten?',
  'Votre bébé tient-il bien sa tête ?',
  'Il vostro bambino riesce a tenere la testa stabile?',
  'baby_ready',
  '머리를 꾸준히 들고 유지할 수 있어야 안전하게 이유식을 먹일 수 있습니다.',
  'A steady head helps your baby eat safely during early weaning.',
  'Ein stabiler Kopf hilft beim sicheren Essen in der Frühphase der Beikost.',
  'Une bonne tenue de tête permet de nourrir bébé en toute sécurité.',
  'Una testa stabile aiuta a nutrire il bambino in sicurezza nelle prime fasi.',
  '2'
);

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000003',
  '아기가 앉은 자세(보조 포함)를 유지할 수 있나요?',
  'Can your baby stay seated (with support if needed)?',
  'Kann Ihr Baby sitzen (ggf. mit Unterstützung)?',
  'Votre bébé peut-il rester assis (avec soutien si besoin) ?',
  'Il vostro bambino riesce a stare seduto (con supporto se necessario)?',
  'baby_ready',
  '안정적인 자세에서 먹어야 넘기거나 질식 위험을 줄일 수 있습니다.',
  'A stable seated position reduces choking and spitting risks.',
  'Eine stabile Sitzposition verringert Würge- und Verschluckungsrisiken.',
  'Une position assise stable réduit les risques de fausse route.',
  'Una posizione seduta stabile riduce il rischio di soffocamento.',
  '3'
);

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000004',
  '아기가 음식에 관심을 보이나요?',
  'Does your baby show interest in food?',
  'Zeigt Ihr Baby Interesse an Essen?',
  'Votre bébé montre-t-il de l’intérêt pour la nourriture ?',
  'Il vostro bambino mostra interesse per il cibo?',
  'baby_ready',
  '숟가락이나 어른의 음식을 쳐다보거나 입을 벌리면 이유식 준비 신호일 수 있습니다.',
  'Watching spoons or opening the mouth when others eat can be a readiness sign.',
  'Löffel beobachten oder den Mund öffnen kann ein Bereitschaftssignal sein.',
  'Regarder la cuillère ou ouvrir la bouche peut être un signe de préparation.',
  'Guardare il cucchiaio o aprire la bocca può essere un segnale di prontezza.',
  '4'
);

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000005',
  '혀 밀어내기 반사가 줄었나요?',
  'Has the tongue-thrust reflex decreased?',
  'Hat sich der Zungenstreckreflex verringert?',
  'Le réflexe d’extrusion de la langue a-t-il diminué ?',
  'Il riflesso di estrusione della lingua è diminuito?',
  'baby_ready',
  '손가락에 묽은 음식을 살짝 묻혀 넣었을 때 혀로 밀어내지 않고 삼키려는 반응이 보이면 좋습니다.',
  'If thin food on a finger is not pushed out but swallowed, that is a good sign.',
  'Wenn dünne Kost auf dem Finger nicht ausgestoßen, sondern geschluckt wird, ist das ein gutes Zeichen.',
  'Si une nourriture fine sur le doigt est avalée plutôt que repoussée, c’est bon signe.',
  'Se un cibo liquido sul dito viene ingoiato invece che spinto fuori, è un buon segno.',
  '5'
);

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000006',
  '엄마가 이유식에 대한 기본 지식을 갖추고 있나요?',
  'Do you have basic knowledge about baby weaning?',
  'Haben Sie Grundwissen zur Beikost?',
  'Avez-vous des connaissances de base sur la diversification ?',
  'Avete conoscenze di base sullo svezzamento?',
  'mom_ready',
  '이유식의 단계, 재료 선택, 알레르기 주의사항 등 기본 지식을 알고 계신가요?',
  'Do you know weaning stages, ingredient choices, and allergy precautions?',
  'Kennen Sie Beikost-Stufen, Zutatenwahl und Allergievorsicht?',
  'Connaissez-vous les étapes, le choix des aliments et les précautions allergiques ?',
  'Conoscete le fasi, la scelta degli alimenti e le precauzioni per le allergie?',
  '6'
);

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000008',
  '가족 중 알레르기 병력이 있나요?',
  'Is there a family history of allergies?',
  'Gibt es allergische Erkrankungen in der Familie?',
  'Y a-t-il des antécédents allergiques dans la famille ?',
  'Ci sono precedenti di allergie in famiglia?',
  'mom_ready',
  '알레르기 가족력이 있다면 새 재료를 한 가지씩 천천히 도입하며 반응을 관찰해 주세요.',
  'With a family history of allergies, introduce new foods one at a time and watch for reactions.',
  'Bei familiärer Allergieneigung neue Lebensmittel einzeln und langsam einführen.',
  'En cas d’antécédents, introduisez les nouveaux aliments un par un et observez les réactions.',
  'Con precedenti familiari, introdurre un alimento alla volta e osservare le reazioni.',
  '8'
);

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000009',
  '소아과 의사와 이유식 시작 시점을 상담했나요?',
  'Have you discussed when to start weaning with your pediatrician?',
  'Haben Sie den Beikostbeginn mit dem Kinderarzt besprochen?',
  'Avez-vous parlé du début de la diversification avec votre pédiatre ?',
  'Avete parlato dell’inizio dello svezzamento con il pediatra?',
  'general',
  '아기의 성장·영양 상태에 맞는 시작 시점과 진행 속도를 전문의와 함께 정하면 더 안전합니다.',
  'A pediatrician can help set a safe start time and pace for your baby.',
  'Der Kinderarzt hilft, einen sicheren Startzeitpunkt und ein passendes Tempo festzulegen.',
  'Le pédiatre aide à fixer un début et un rythme adaptés à bébé.',
  'Il pediatra aiuta a stabilire tempi e ritmo adatti al bambino.',
  '9'
);

INSERT INTO public.guide_questions (
  id,
  question,
  question_en,
  question_de,
  question_fr,
  question_it,
  category,
  description,
  description_en,
  description_de,
  description_fr,
  description_it,
  sort_order
) VALUES (
  'a1000001-0001-4000-8000-000000000010',
  '이유식 도구를 미리 준비했나요?',
  'Have you prepared your weaning tools in advance?',
  'Haben Sie die Beikost-Werkzeuge schon vorbereitet?',
  'Avez-vous préparé les ustensiles pour la diversification ?',
  'Avete già preparato gli utensili per lo svezzamento?',
  'general',
  '도마, 이유식 스푼, 턱받이, 조리 도구 등 필요한 도구를 미리 준비하면 더 원활하게 시작할 수 있습니다.',
  'Preparing a board, spoon, bib, and cookware ahead of time helps you start smoothly.',
  'Brett, Löffel, Lätzchen und Kochutensilien vorab bereitzustellen erleichtert den Start.',
  'Préparer planche, cuillère, bavoir et ustensiles à l’avance facilite le démarrage.',
  'Preparare tagliere, cucchiaio, bavaglino e utensili in anticipo facilita l’inizio.',
  '10'
);

COMMIT;
