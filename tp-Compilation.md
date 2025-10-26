# 🧠 TP1 — Compilation : Analyse Lexicale avec LEX / FLEX

## 🎯 Objectif du TP

في هذا الـTP، نتعلم كيف نكتب **برنامجًا بلغة LEX (أو Flex في Windows/Linux)** لإنشاء **Analyseur Lexical** أي **المحلل المعجمي**.  
مهمته هي تحليل النصوص وإخراج **tokens** (رموز لغوية) بناءً على **expressions régulières**.

---

## ⚙️ 1. Introduction à LEX / FLEX

### 🔹 Qu’est-ce que LEX ?

**LEX** هو مولّد (générateur) لبرامج C قادرة على التعرف على أنماط معينة في النصوص.  
باختصار:

> LEX lit un texte → compare avec des expressions régulières → exécute des actions en C.

---

### 🔹 Fichier LEX `.l`

يتكون من **3 أقسام رئيسية**:

```lex
%{
   /* Partie C : déclarations, bibliothèques, variables */
%}

%%
   /* Partie Règles : expressions régulières + actions */
%%

   /* Partie C : fonction main() */
🔹 Commandes d’exécution (sous Windows avec Flex)
bash
Copy code
flex tp1_lexical.l
gcc lex.yy.c -o tp1_lexical.exe
tp1_lexical.exe
📦 2. Le code complet du TP
lex
Copy code
%{
#include <stdio.h>
%}

/* ---------- Section des Règles ---------- */
%%
/* --- Exercice 1 : Opérateurs et Suites --- */
[+\-*/]                    { printf("Operateur\n"); }
F+                         { printf("Suite de F\n"); }
(ab){2,}                   { printf("Deux 'ab' ou plus\n"); }
^[A-Za-z0-9]{3}$           { printf("Mot de longueur 3\n"); }

/* --- Exercice 2 : Nombres et Identificateurs --- */
[0-9]+                     { printf("Nombre entier\n"); }
[0-9]+"."[0-9]+            { printf("Nombre reel\n"); }
[A-Z][A-Za-z0-9]*          { printf("Identificateur (Majuscule + alphanum)\n"); }

/* --- Exercice 3 : Identificateur spécial --- */
[a-zA-Z]([A-Za-z0-9_]*[A-Za-z0-9]+)?   { printf("Identificateur special\n"); }

/* --- Exercice 4 : Chaine Pascal --- */
\'([^']|\'\')*\'           { printf("Chaine Pascal\n"); }

/* --- Exercice 5 : Chaine C --- */
\"[^\"]*\"                 { printf("Chaine C\n"); }

/* --- Exercice Bonus : Numéro Algérien --- */
0(5|6|7)[0-9]{8}           { printf("Numero Algerien valide\n"); }

/* --- Autres caractères / ignorer --- */
[ \t\n]+                   { /* ignorer espaces */ }
.                          { /* ignorer le reste */ }
%%

/* ---------- Section C : main ---------- */
int main() {
    printf("=== LEXICAL ANALYZER (TP1 Compilation) ===\n");
    printf("Entrez un texte (Ctrl+Z pour finir sous Windows):\n\n");
    yylex();  // Lance l’analyse lexicale
    printf("\n=== Fin de l’analyse ===\n");
    return 0;
}
```

🧩 3. Explication du code (ligne par ligne)
🧱 Section 1 — %{ %} : les définitions C
```lex
%{
#include <stdio.h>
%}
```
نضيف مكتبة stdio.h لاستخدام دالة printf.

يمكن هنا أيضًا تعريف متغيرات أو دوال إضافية عند الحاجة.

⚙️ Section 2 — %% : les règles lexicales
الجزء الأهم في LEX، يحتوي على قواعد التعرف (patterns) باستخدام expressions régulières،
وإجراء (action) بلغة C بعد كل تطابق.

🧮 Exercice 1 : Opérateurs et Suites
Expression régulière	Signification	Action
[+\-*/]	أي من الرموز + - * /	affiche "Operateur"
F+	سلسلة من F واحدة أو أكثر	affiche "Suite de F"
(ab){2,}	تكرار "ab" مرتين أو أكثر	affiche "Deux 'ab' ou plus"
^[A-Za-z0-9]{3}$	كلمة من 3 حروف أو أرقام	affiche "Mot de longueur 3"

🔢 Exercice 2 : Nombres et Identificateurs
Expression régulière	Signification	Action
[0-9]+	عدد صحيح	"Nombre entier"
[0-9]+"."[0-9]+	عدد حقيقي	"Nombre réel"
[A-Z][A-Za-z0-9]*	معرف يبدأ بحرف كبير	"Identificateur"

🧬 Exercice 3 : Identificateur spécial
```lex
[a-zA-Z]([A-Za-z0-9_]*[A-Za-z0-9]+)?
```
يبدأ بحرف.

يمكن أن يحتوي على أرقام أو _.

لا ينتهي بـ _.

✅ Exemples valides : bART, r44d2, pTR_ple_5
❌ Non valides : Z__p, n__2

💬 Exercice 4 : Chaîne Pascal
```lex
\'([^']|\'\')*\'           { printf("Chaine Pascal\n"); }
```
تبدأ وتنتهي بـ '.

يمكن أن تحتوي ' مزدوجة داخلها ('').

🧪 Exemple : 'it''s ok'

🧵 Exercice 5 : Chaîne C
```lex
\"[^\"]*\"                 { printf("Chaine C\n"); }
```
تبدأ وتنتهي بـ ".

لا تحتوي على " في الداخل.

🧪 Exemple : "Hello World"

🇩🇿 Exercice Bonus : Numéro Algérien
```lex
0(5|6|7)[0-9]{8}
```
يبدأ بـ 05 أو 06 أو 07

يتبع بـ 8 أرقام.

✅ Exemples valides :

```lex
0551234567  
0678899001  
0794456123
```
🔇 Ignorer les autres caractères
```lex
[ \t\n]+  { /* ignorer espaces */ }
.         { /* ignorer le reste */ }
```
تجاهل المسافات، الأسطر، والرموز غير المطابقة لأي قاعدة.

🧾 Section 3 — main()
```c
int main() {
    printf("=== LEXICAL ANALYZER (TP1 Compilation) ===\n");
    yylex();
    printf("=== Fin de l’analyse ===\n");
    return 0;
}
yylex() هي الدالة الأساسية التي يبدأ بها المحلل المعجمي.
```

تقرأ الإدخال وتطبق القواعد بالترتيب.

عندما ينتهي النص، تعود الدالة ويُطبع “Fin de l’analyse”.

🧪 4. Exemple d’exécution
Entrée :
```bash
+
FFF
abab
123
12.45
Pascal
bART
'it''s ok'
"Hello World"
0551234567
Sortie :
```

```java
Operateur
Suite de F
Deux 'ab' ou plus
Nombre entier
Nombre reel
Identificateur (Majuscule + alphanum)
Identificateur special
Chaine Pascal
Chaine C
Numero Algerien valide
```

📘 5. Rappels théoriques
Analyse lexicale = découpage du texte en tokens (mots-clés, opérateurs, identificateurs...).

Regex (expression régulière) décrit le modèle d’un token.

LEX → génère automatiquement un code C (lex.yy.c) qui implémente l’analyseur.

💡 6. Astuces de TP
Toujours sauvegarder le fichier en .l

Compiler avec flex puis gcc

Si tu veux voir les tokens un par un :
→ ajouter printf("Token: %s\n", yytext); à chaque règle.

Pour éviter les conflits, tester chaque expression séparément d’abord.

🧠 7. Mini Quiz
Q1: Quelle expression reconnaît un nombre réel ?
➡️ [0-9]+"."[0-9]+

Q2: Quelle est la fonction principale dans un programme LEX ?
➡️ yylex()

Q3: Quelle différence entre chaîne Pascal et chaîne C ?
➡️ Pascal utilise '...' et accepte '' interne,
C utilise "..." et refuse " interne.

✅ 8. Résumé final
Élément	Rôle
%{...%}	Section C (includes, variables)
%%	Délimite les règles
Regex { action }	Règle d’analyse
yylex()	Lance le scanner
yytext	Contient le texte reconnu

📁 Nom du fichier : tp1_lexical.l
📘 Titre : TP1 – Analyse Lexicale avec LEX / FLEX
👨‍💻 Auteur : Moussaoui Aboubaker – L3 Informatique
🏫 Université : El-Oued
🗓️ Année : 2025
