---
alias: ["combinateur", "combinateurs"]
---
up::[[APL]]
#informatique 

---

# Beside ∘
**Beside**, **Compose**, **After**
Composition de fonctions
 - Monadique : `f∘g ⍵` $\iff$ `f(g ⍵)`
 - Dyadique : `⍺ (f∘g) ⍵` $\iff$ `⍺ f (g ⍵)`
     - test d'un palindrôme : `(≡∘⌽)⍨⍵` $\iff$ `(⊢≡⌽)⍵`
 - 


# Atop ⍤
 - Monadique : `(g ⍥ h) ⍵` $\iff$ `g (h ⍵)`
     - même chose que [[APL combinateurs#Beside ∘|beside ∘]] et [[APL combinateurs#Over ⍥|over ⍥]]
 - Dyadique : `⍺ (g ⍤ h) ⍵` $\iff$ `g (⍺ h ⍵)`
     - ![[APL combinateur atop.excalidraw|200]]


# Over ⍥
 - Monadique : `(g ⍥ h) ⍵` $\iff$ `g (h ⍵)`
     - même chose que [[APL combinateurs#Beside ∘|beside ∘]] et [[APL combinateurs#Atop ⍤|Atop ⍤]]
 - Dyadique : `⍺ (g ⍥ h) ⍵` $\iff$ `(h ⍺) g (h ⍵)`
     - `g` est appliqué **par dessus** `h` (over)
```apl
      x←3 1 2
      y←4 6 5
      x +⍥(⌈/) y ⍝ ajouter le max de x et le max de y
9
      ⍝ même chose que
      (⌈/x)+⌈/y
9
```


