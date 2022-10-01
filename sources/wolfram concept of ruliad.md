link::https://writings.stephenwolfram.com/2021/11/the-concept-of-the-ruliad/
author::[[Stephen Wolfram]]
date::2021-11-11
#science #informatique 
# wolfram concept of ruliad


---
# The Concept of the Ruliad
![](https://content.wolfram.com/uploads/sites/43/2021/11/icon-ruliad.png)

![The Concept of the Ruliad](https://content.wolfram.com/uploads/sites/43/2021/11/Ruliad-hero3.png "The Concept of the Ruliad")

## The Entangled Limit of Everything

I call it the ruliad. Think of it as the entangled limit of everything that is computationally possible: the result of following all possible computational rules in all possible ways. It’s yet another surprising construct that’s arisen from our [Physics Project](https://www.wolframphysics.org/). And it’s one that I think has extremely deep implications—both in science and beyond.

In many ways, the ruliad is a strange and profoundly abstract thing. But it’s something very universal—a kind of ultimate limit of all abstraction and generalization. And it encapsulates not only all formal possibilities but also everything about our physical universe—and everything we experience can be thought of as sampling that part of the ruliad that corresponds to our particular way of perceiving and interpreting the universe.

We’re going to be able to say many things about the ruliad without engaging in all its technical details. (And—it should be said at the outset—we’re still only at the very beginning of nailing down those technical details and setting up the difficult mathematics and formalism they involve.) But to ground things here, let’s start with a slightly technical discussion of what the ruliad is.

In the language of our Physics Project, it’s the ultimate limit of all [rulial multiway systems](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/). And as such, it traces out the entangled consequences of progressively applying all possible computational rules.

Here is an example of an [ordinary multiway system](https://www.wolframscience.com/nks/p204--multiway-systems/) based on the string replacement rules {A → AB, BB → A} (indicated respectively by blueish and reddish edges):

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg1.png)

&#10005

At each step, the rules are applied in all possible ways to each state. Often this generates multiple new states, leading to branching in the graph. But, importantly, there can also be merging—from multiple states being transformed to the same state.

The idea of a rulial multiway system is not just to apply particular rules in all possible ways, but to apply all possible rules of a given form. For example, if we consider “[1 → 2, 2 → 1 A, B string rules](https://www.wolframphysics.org/technical-introduction/the-updating-process-for-string-substitution-systems/typical-multiway-graph-structures/)”, the possible rules are

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg2.png)

&#10005

and the resulting multiway graph is (where now we’re using purple to indicate that there are edges for every possible rule):

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg3.png)

&#10005

Continuing a little longer, and with a different layout, we get:

![](https://content.wolfram.com/uploads/sites/43/2022/04/1110swimg4B.png)

&#10005

This may already look a little complicated. But the ruliad is something in a sense infinitely more complicated. Its concept is to use not just all rules of a given form, but all possible rules. And to apply these rules to all possible initial conditions. And to run the rules for an infinite number of steps.

The pictures above can be thought of as coarse finite approximations to the ruliad. The full ruliad involves taking the infinite limits of all possible rules, all possible initial conditions and all possible steps. Needless to say, this is a complicated thing to do, and there are many subtleties yet to work out about how to do it.

Perhaps the most obviously difficult issue is how conceivably to enumerate “all possible rules”. But here we can use the [Principle of Computational Equivalence](https://www.wolframscience.com/nks/chap-12--the-principle-of-computational-equivalence/) to tell us that whatever “basis” we use, what comes out will eventually be effectively equivalent. Above we used [string substitution systems](https://www.wolframphysics.org/technical-introduction/the-updating-process-for-string-substitution-systems/). But here, for example, is a [rulial multiway system made with 2-state 2-color Turing machines](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/):

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg5v2.png)

&#10005

And here is a rulial multiway system made from [hypergraph rewriting of the kind used in our Physics Project](https://www.wolframphysics.org/technical-introduction/the-updating-process-in-our-models/multiway-systems-for-our-models/), using [all rules with signature](https://www.wolframphysics.org/technical-introduction/typical-behaviors/the-number-of-possible-rules/) ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg6.png):

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg7.png)

&#10005

As another example, consider a [multiway system based on numbers](https://www.wolframphysics.org/bulletins/2021/10/multicomputation-with-numbers-the-case-of-simple-multiway-systems), in which the rules multiply by each possible integer:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg8.png)

&#10005

Here’s what happens starting with 1 (and truncating the graph whenever the value exceeds 100):

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg9.png)

&#10005

Even with this simple setup, the results are surprisingly complicated (though it’s possible to give quite a bit of analysis in this particular case, as described in the [Appendix](https://writings.stephenwolfram.com/2021/11/the-concept-of-the-ruliad/#appendix-the-case-of-the-multiplicad) at the end of this piece).

The beginning of the multiway graph is nevertheless simple: from 1 we connect to each successive integer. But then things get more complicated. To see what’s going on, let’s look at a fragment of the graph:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg10.png)

&#10005

In a sense, everything would be simple if every path in the graph were separate:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg11.png)

&#10005

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg12.png)

&#10005

But the basic concept of multiway systems is that equivalent states should be merged—so here the “two ways to get 6” (i.e. 1 × 2 × 3 and 1 × 3 × 2) are combined, and what appears in the multiway graph is:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg13.png)

&#10005

For integers, the obvious notion of equivalence is numerical equality. For hypergraphs, it’s isomorphism. But the important point is that equivalence is what makes the multiway graph nontrivial. We can think about what it does as being to entangle paths. Without equivalence, different paths in the multiway system—corresponding to different possible histories—would all be separate. But equivalence entangles them.

The full ruliad is in effect a representation of all possible computations. And what gives it structure is the equivalences that exist between states generated by different computations. In a sense, there are two forces at work: the “forward” effect of the progress of computation, and the “sideways” effect of equivalences that entangle different computations. (Mathematically this can be thought of as being like decomposing the ruliad structure in terms of fibrations and foliations.)

## Experiencing the Ruliad

In thinking about finding a fundamental theory of physics, one thing always bothered me. Imagine we successfully identify a rule that describes everything about our universe. Then the obvious next question will be: “Why this rule, and not another?” Well, how about if actually the universe in effect [just runs every possible rule](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/#why-this-universe-the-relativity-of-rules)? What would this mean? It means that in a sense the “full story” of the universe is just the ruliad.

But the ruliad contains everything that is computationally possible. So why then do we have the perception that the universe has specific laws, and that definite things happen in it?

It all has to do with the fact that we are [bounded observers](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/), [embedded within the ruliad](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/). We never get to see the full ruliad; we just sample tiny parts of it, parsing them according to our particular [methods of perception and analysis](https://www.wolframscience.com/nks/chap-10--processes-of-perception-and-analysis/). And the crucial point is that for coherent observers like us, there are certain robust features that we will inevitably see in the ruliad. And these features turn out to include [fundamental laws of our physics](https://www.wolframphysics.org/), in particular general relativity and quantum mechanics.

One can imagine an observer very different from us (say some kind of alien intelligence) who would sample different aspects of the ruliad, and deduce different laws. But one of the surprising core discoveries of our [Physics Project](https://www.wolframphysics.org/) is that even an observer with quite basic features like us will experience laws of physics that precisely correspond to ones we know.

An analogy (that’s actually ultimately the result of the same underlying phenomenon) may help to illustrate what’s going on. Consider molecules in a gas. The molecules bounce around in a complicated pattern that depends on their detailed properties. But an observer like us doesn’t trace this whole pattern. Instead we only observe certain “coarse-grained” features. And the point is that these features are largely independent of the detailed properties of the molecules—and robustly correspond to our standard laws of physics, like the [Second Law of thermodynamics](https://www.wolframscience.com/nks/p441--irreversibility-and-the-second-law-of-thermodynamics/). But a different kind of observer, sampling and “parsing” the system differently, could in principle identify different features, corresponding to different laws of physics.

One of the conceptual difficulties in thinking about how we perceive the ruliad is that it’s a story of “self-observation”. Essentially by the very definition of the ruliad, we ourselves are part of it. We never get to “see the whole ruliad from the outside”. We only get to “[experience it from the inside](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/)”.

In some ways it’s a bit like our efforts to construct the ruliad. In the end, the ruliad involves infinite rules, infinite initial conditions, and infinite time. But any way of assembling the ruliad from pieces effectively involves making particular choices about how we take those infinite limits. And that’s pretty much like the fact that as entities embedded within the ruliad, we have to make particular choices about how to sample it.

One of the remarkable aspects of the ruliad is that it’s in some sense the [unique ultimately inevitable and necessary formal object](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/#the-laws-of-the-rulial-universe). If one sets up some particular computational system or mathematical theory, there are choices to be made. But in the ruliad there are no choices. Because everything is there. And in a sense every aspect of the structure of the ruliad is just something formally necessary. It requires no outside input; it is just a formal consequence of the meaning of terms, like the abstract fact ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg14.png).

But while the ruliad is unique, the description of it is not. In constructing it, one can imagine using Turing machines or hypergraph rewriting systems or indeed any other kind of computational system. Each will ultimately lead to the same limiting object that is the ruliad, but each of them can be thought of as defining a different coordinate system for describing the ruliad.

The very generality of the ruliad makes it unsurprising that there is vast diversity in how it can be described. And in a sense each possible description is like a possible way of experiencing the ruliad. In analogy to the (deeply related) situation with spacetime in general relativity, we might say that there are many reference frames in which to experience the ruliad—but it’s always the same ruliad underneath.

It’s important to understand that the “ruliad from the outside” could seem very different from any “internal” experience of it by an observer like us. As an example, consider a simple finite approximation to the ruliad, built from string substitution systems. In what we did above, we always started from a specific initial condition. But the full ruliad involves starting from all possible initial conditions. (Of course, one could always just say one starts from a “null” initial condition, then have rules of the form null → everything.) So now let’s consider starting from all possible strings, say of length 4. If we use all possible 2-element-to-2-element rules, the finite approximation to the ruliad that we’ll get will be:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg15.png)

&#10005

At some level this is a simple structure, and—as is inevitable for any finite approximation to the ruliad—its [transitive closure](https://reference.wolfram.com/language/ref/TransitiveClosureGraph.html) is just the [complete graph](https://reference.wolfram.com/language/ref/CompleteGraph.html):

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg16.png)

&#10005

So why doesn’t this mean that the ruliad is somehow trivial? A key part of the story is that we never get to “see the ruliad from the outside” like this. We are always part of it, sampling it according to some procedure, or, somewhat equivalently, thinking about constructing it according to some procedure.

As an analogy, consider the real numbers. The whole continuum of all real numbers is “from the outside” in many ways a simple construct. But if we imagine actually trying to construct real numbers, say digit by digit, according to some definite procedure, then we’re dealing precisely with what [Turing machines were originally invented to model](https://www.wolframscience.com/nks/notes-12-4--computable-reals/), and the whole structure of computation is involved. (As we’ll see, our way of thinking about “observers like us” is ultimately quite related to “Turing machines with bounded descriptions”.)

In a sense, at an outside “holistic” level, the ruliad has a certain simple perfection. But as soon as you try to look at “what’s in the ruliad”, you have to parametrize or coordinatize it, and then you’re inevitably exposed to its intricate internal structure.

## Observers Like Us

One could imagine very different ways in which entities embedded within the ruliad could “experience” it. But what’s most relevant for us is how “[observers like us](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/)” do it—and how we manage to synthesize from what’s going on in the ruliad our perception of reality, and our view of how our physical universe works.

Let’s start by talking not about the full ruliad but rather about models in our Physics Project based on specific underlying rules. At the lowest level, we have a “machine-code” description of the universe is which everything just consists of a network of “atoms of space” that is continually being updated—and which we can think of as carrying out a giant, if incoherent, computation, full of [computational irreducibility](https://www.wolframscience.com/nks/p737--computational-irreducibility/). But the remarkable fact is that somehow we, as observers of this, [manage to pick out of it a certain slice](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/#observers-and-their-physics) that ends up showing coherent, computationally reducible features—that for example seem to reproduce our known laws of physics.

How does this work? Partly it has to do with features of us as observers, partly with features of how the universe fundamentally works, and partly with an interplay between these.

The first crucial feature of us as observers is that we’re computationally bounded: the way we “parse” the universe involves doing an amount of computation that’s absolutely tiny compared to all the computation going on in the universe. We sample only a tiny part of what’s “really going on underneath”, and we aggregate many details to get the summary that represents our perception of the universe.

But why should that summary have any coherence? Basically it’s because we impose coherence through our definition of how observers like us work. One part of the universe will be affected by others. But to consider part of the universe as an “observer”, there has to be a certain coherence to it. The behavior of the universe somehow has to imprint itself on a “medium” that has a certain coherence and consistency.

Down at the level of atoms of space, everything is always changing. But we can still identify emergent features that have a certain persistence. And it’s out of those features that what we call observers are built. Given only the atoms of space with all their computationally irreducible behavior, it’s not at the outset obvious that any real persistence could exist or be identified. But in our models we expect that there will, for example, be essentially [topological features that correspond to particles](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/#elementary-particles-old-and-new) that persistently maintain their identity.

And the point is that we can expect to “aggregate up” much further and be able to identify something like a human observer—that we can consider to persistently maintain its identity to the point where phenomena from the universe can be “systematically imprinted” on it.

Down at the level of atoms of space, there’s a whole multiway graph of possible sequences of updates that can occur—with each path in effect corresponding to a different “thread of time” for the universe. But it’s a crucial fact about [us as observers of the universe](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/) that we don’t perceive all those branching and merging threads of time. Instead, we imagine that we have a single, definite thread of experience—in which everything is sequentialized in time.

I’ve [argued elsewhere](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/) that this sequentialization in time is a defining characteristic of “human-like consciousness”. And it turns out that one of its consequences is that it implies that the particular perception we will have of the universe must be one in which there are laws of physics that correspond to ones we know.

It’s not obvious, by the way, that if we sequentialize time we can form any consistent view of the universe. But the phenomenon of [causal invariance](https://www.wolframphysics.org/technical-introduction/the-updating-process-for-string-substitution-systems/the-phenomenon-of-causal-invariance)—which seems ultimately to be guaranteed by the fundamental structure of the ruliad—turns out to imply that we can expect a certain generalized relativistic invariance that will inevitably lead to eventual consistency.

The notion of sequentialization in time is closely related to the idea that—even though our individual atoms of space are continually changing—we can view ourselves as having a coherent existence through time. And there’s a similar phenomenon for space. At the outset, it’s not obvious that there can be “pure motion”, in which something can move in space without “fundamentally changing”. But it turns out again to be consistent to view this as how things work for us: that even though we’re “made of different atoms of space” when we’re in different places, we can still imagine that in some sense we maintain the “same identity”.

Down at the level of individual atoms of space, there really isn’t any coherent notion of space. And the fact that we form such a notion seems to be intimately connected to what we might think of as details of us. Most important is that we’re in a sense “intermediate in size” in the universe. We’re large relative to the effective distance between atoms of space ([which might be ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg17.png) m](https://www.wolframphysics.org/technical-introduction/potential-relation-to-physics/units-and-scales/)), yet we’re small compared to the size of the whole universe (![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg18.png) m). And the result is that we tend to aggregate the effects of many atoms of space, but still perceive different features of space (say, different gravitational fields) in different parts of the universe.

The fact that we “naturally form a notion of space” also seems to depend on another issue of scale—that for us the speed of light “seems fast”. It takes our brains perhaps milliseconds to process anything we see. But the point is that this is very long compared to the time it takes light to get to us from objects in our typical local environment. And the result is that we tend to perceive there as being an instantaneous configuration of the world laid out in space, that “separately” changes in time. But if, for example, our brains ran much faster, or we were much bigger than we are, then the speed of light would “seem slower” to us, and we wouldn’t tend to form the notion of an “instantaneous state of space”.

OK, so what about quantum mechanics? The most fundamental feature of quantum mechanics is that it implies that things in the universe follow not just one but many possible paths of history—which we only get to make certain kinds of measurements on. And in our [Physics Project this is something natural](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/#the-inevitability-of-quantum-mechanics), and in fact inevitable. Given any particular configuration of the universe, there are many possible updates that can occur. And when we trace out all the possibilities, we get a multiway system, in which different threads of history continually branch and merge.

So how do observers like us fit into this? Being part of the universe, we inevitably branch and merge, just like the rest of the universe. So to understand our experience, what we need to ask is how a [“branching brain” will perceive a “branching universe”](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/#the-quantum-observer). And the story is remarkably similar to what we discussed above for our experience of space and time: it all has to do with imagining ourselves to have a certain definite persistence.

In other words, even if when “viewed from the outside” our brain might be following many different paths of history, “from the inside” we can still potentially assume that everything is conflated into a single thread of history. But will this ultimately be a consistent thing to do? Once again, causal invariance implies that it will. There are specific “quantum effects” where we can tell that there are multiple branches of history being followed, but in the end it’ll be consistent to imagine an “objective reality” about “what happened”.

In our Physics Project we imagine that there are abstract relations between atoms of space, and in the end the pattern of these relations defines the structure of physical space. But what about different branches of history in the multiway graph? Can we think of these as related? The answer is yes. For example, we can say that at a particular time, states on two branches are “adjacent” if they share an immediate ancestor in the multiway graph. And tracing through such connections we can develop a notion of “[branchial space](https://www.wolframphysics.org/technical-introduction/the-updating-process-for-string-substitution-systems/the-concept-of-branchial-graphs/)”—a kind of space in which states on different branches of history are laid out:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg19.png)

&#10005

One can think of branchial space as being defined by the pattern of entanglements between different branches of history. And in our Physics Project it turns out that the fundamental [laws of quantum mechanics seem to just be a direct translation of the fundamental laws of spacetime](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/#general-relativity-and-quantum-mechanics-are-the-same-idea) into branchial space. And just like the speed of light governs the maximum rate at which effects can propagate in physical space, so similarly in our models there’s a “[maximum entanglement speed](https://www.wolframphysics.org/technical-introduction/potential-relation-to-physics/correspondence-between-relativity-and-quantum-mechanics/)” at which effects can propagate in branchial space.

So what are we like as observers in branchial space? Just like in physical space, we can presumably be thought of as having a certain size in branchial space. We don’t yet know quite how to measure this size, but it’s surely related to the effective number of quantum degrees of freedom we involve.

In our everyday experience of things like gases, we’re sufficiently large compared to individual molecules that we normally just perceive the gas as some kind of continuum fluid—and in normal circumstances we can’t even tell that it’s made of molecules. Well, it’s presumably the same kind of thing for physical space—where we’re even much larger compared to the atoms of space, and it’s a major challenge to [figure out how to detect their presence](https://writings.stephenwolfram.com/2021/04/the-wolfram-physics-project-a-one-year-update/#towards-experimental-implications). What about for branchial space? As the underlying rules for the system get applied, different branches of history will in effect “move around” in branchial space in complex and computationally irreducible ways. And just like when we observe molecules in a gas, we’ll mostly just observe overall aggregate effects analogous to fluid mechanics—and only in special circumstances will we notice “quantum effects” that reveal the presence of multiple independent threads of history.

## Living in Rulial Space

We’ve discussed how “observers like us” perceive models of physics of the type that arise in our Physics Project. But how will we perceive the whole ruliad? It begins with a generalization of the story for branchial space. Because now as well as having different branches associated with different updatings according to a particular rule, we have different branches associated with updatings according to different rules.

And just as we can slice an ordinary multiway system at a particular time to get an instantaneous version of branchial space, so now we can slice a rulial multiway system to get an instantaneous version of what we can call rulial space—a space in which different branches can correspond not just to different histories, but to different rules for history.

It’s a fairly complicated setup, with “pure branchial space” inevitably being deeply interwoven with rulial space. But as a first approximation, we can think of rulial space as being somewhat separate, and laid out so that different places in it correspond to the results of applying different rules—with nearby places effectively being associated with “nearby” rules.

And just as we can think of effects propagating in branchial space, so also we can think of them propagating in rulial space. In branchial space we can talk about entanglement cones as the analog of light cones, and a maximum entanglement speed as the analog of the speed of light. In rulial space we can instead talk about “[emulation cones](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/#the-emerging-picture-of-rulial-space)”—and a “maximum emulation speed”.

In our rough approximation of rulial space, each point is in effect associated with a particular rule. So how do we “move” from one point to another? Effectively we have to be emulating the behavior of one rule by another. But why should it even be possible to do this? The answer is the [Principle of Computational Equivalence](https://www.wolframscience.com/nks/chap-12--the-principle-of-computational-equivalence/), which states that, in effect, most rules will be equivalent in their computational capabilities—and in particular they will be capable of universal computation, so that any given rule can always “run a program” that will make it emulate any other rule.

One can think of the program as an interpreter or translator that goes from one rule to another. The Principle of Computational Equivalence tells one that such a translator must essentially always exist. But how fast will the translator run? Effectively that’s what distance in rulial space measures. Because to “do a certain translation”, branches in the rulial multiway system have to reach from one rule to another. But they can only do that at the maximum emulation speed.

What does the maximum emulation speed measure? Effectively it corresponds to the [raw computational processing speed of the universe](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/#the-emerging-picture-of-rulial-space). We can think of representing computations in some language—say the [Wolfram Language](https://www.wolfram.com/language/). Then the processing speed will be measured in “Wolfram Language tokens processed per second” (“WLT/s”). In some sense, of course, giving a value for this speed is just a way of relating our human units of time (say, seconds) to the “intrinsic unit of time” associated with the computational processing that’s going on in the universe. Or, in other words, it’s a kind of ultimate definition of a second relative to purely formal constructs.

OK, but how does this relate to us as observers embedded within the ruliad? Well, just as we imagine that—along with the rest of the universe—we’re continually branching and merging in branchial space, so also this will be what happens in rulial space. In other words—like the rest of the universe—our brains aren’t following a particular rule; they’re following branching and merging paths that represent all possible rules.

But “from inside” we can still potentially imagine that we have a single thread of experience—effectively conflating what happens on all those different branches. And once again we can ask whether doing this will be consistent. And the answer seems to be that, yes, it can be. And what guarantees this is again a kind of “[rulial relativity](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/#why-this-universe-the-relativity-of-rules)” that’s a consequence of causal invariance. There are many details here, which we’ll address to some extent later. But the broad outline is that causal invariance can be thought of as being associated with paths of history that diverge, eventually converging again. But since the ruliad contains paths corresponding to all possible rules, it’s basically inevitable that it will contain what’s needed to “undo” whatever divergence occurs.

So what does this mean? Basically it’s saying that even though the universe is in some sense intrinsically “following all possible rules”—as represented by paths in the ruliad—we as observers of the universe can still “take the point of view” that the universe follows a particular rule. Well, actually, it’s not quite a particular rule. Because just as we’re in some sense “quite big” in physical and presumably branchial space, so also we’re potentially “quite big” in rulial space.

And being extended in rulial space is basically saying that we consider not just one, but a range of possible rules to be what describe the universe. How can it work this way? Well, as observers of the universe, we can try to deduce what the “true rule for the universe” is. But inevitably we have to do this by performing physical experiments, and then using inductive inference to try to figure out what the “rule for the universe is”. But the issue is that as entities embedded within the universe, we can only ever do a finite number of experiments—and with these we’ll never be able to precisely nail down the “true rule”; there’ll always be some uncertainty.

When we think of ourselves as observers of the universe, there’s in a sense lots of “arbitrariness” in the way we’re set up. For example, we exist at a particular location in physical space—in our particular solar system and so on. Presumably we also exist at a particular location in branchial space, though it’s less clear how to “name” that. And in addition we exist at a particular location in rulial space.

What determines that location? Essentially it’s determined by how we operate as observers: the particular sensory system we have, and the particular means of description that we’ve developed in our language and in the history of knowledge in our civilization. In principle we could imagine sensing or describing our universe differently. But the way we do it defines the particular place in rulial space at which we find ourselves.

But what does all this mean in terms of the ruliad? The ruliad is the unique limiting structure formed by following all possible rules in all possible ways. But when we “observe the ruliad” we’re effectively “paying attention to” only particular aspects of it. Some of that “paying attention” we can conveniently describe in terms of our particular “location in the ruliad”. But some is more naturally described by thinking about equivalence classes in the ruliad.

Given two states that exist in the ruliad, we have to ask whether as observers we want to consider them distinct, or whether we want to conflate them, and consider them “the same”. When we discussed the construction of the ruliad, we already had many versions of this issue. Indeed, whenever we said that two paths in the ruliad “merge”, that’s really just saying that we treat the outcomes as equivalent.

“Viewed from the outside”, one could imagine that absolutely nothing is equivalent. Two hypergraphs produced in two different ways (and thus, perhaps, with differently labeled nodes) are “from the outside” in some sense different. But “viewed from the inside”, they pretty much have to be viewed as “the same”, in essence because all their effects will be the same. But at some level, even such conflation of differently labeled hypergraphs can be thought of as an “act of the observer”; something that one can only see works that way if one’s “observing it from inside the system”.

But all the way through our description of the observer, it’s very much the same story: it’s a question of what should be considered equivalent to what. In sequentializing time, we’re effectively saying that “all of space” (or “all of branchial space”, or rulial space) should be considered “equivalent”. There are many subtle issues of equivalence that also arise in the [construction of states in the ruliad from underlying tokens](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/#the-formal-structure-of-multicomputation), in defining what rules and initial conditions should be considered the same, and in many other places.

The ruliad is in some sense the most complicated constructible object. But if we as computationally bounded observers are going to perceive things about it, we have to find some way to “cut it down to size”. And we do that by defining equivalence classes, and then paying attention only to those whole classes, not all the details of what’s going on inside them. But a key point is that because we are computationally bounded observers who imagine a certain coherence in their experience, there are strong constraints on what kinds of equivalence classes we can use.

If we return again to the situation of molecules in a gas, we can say that we form equivalence classes in which we look only coarsely at the positions of molecules, in “buckets” defined by simple, bounded computations—and we don’t look at their finer details, with all the computational irreducibility they involve. And it’s because of this way of looking at the system that we conclude that it follows the Second Law of thermodynamics, exhibits fluid behavior, etc.

And it’s very much the same story with the ruliad—and with the laws of physics. If we constrain the kind of way that we observe—or “parse”—the ruliad, then it becomes inevitable that the effective laws we’ll see will have certain features, which turns out apparently to be exactly what’s needed to reproduce known laws of physics. The full ruliad is in a sense very wild; but as observers with certain characteristics, we see a much tamer version of it, and in fact what we see is [capable of being described in terms of laws](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/#observers-reference-frames-and-emergent-laws) that we can largely write just in terms of existing mathematical constructs.

At the outset, we might have imagined that the ruliad would basically just serve as a kind of dictionary of possible universes—a “universe of all possible universes” in which each possible universe has different laws. But the ruliad is in a sense a much more complicated object. Rather than being a “dictionary” of possible separate universes, it is something that entangles together all possible universes. The Principle of Computational Equivalence implies a certain homogeneity to this entangled structure. But the crucial point is that we don’t “look at this structure from the outside”: we are instead observers embedded within the structure. And what we observe then depends on our characteristics. And it turns out that even very basic features of our consciousness and sensory apparatus in a sense inevitably lead to known laws of physics—and in a sense do so generically, independent of details of just where in rulial space we are, or exactly what slice of the ruliad we take.

So far we’ve primarily talked about the ruliad in terms of physics and the fundamental structure of our physical universe. But the ruliad is actually something still more general than that. Because ultimately it is just created from the abstract concept of following all possible computational rules. And, yes, we can interpret these rules as representing things going on in our universe. But we can also interpret them as representing things going on in some other, less immediately physically realizable system. Or, for that matter, representing something purely formal, and, say, mathematical.

This way of talking about the ruliad might make one think that it should be “considered a possible model” for our universe, or for other things. But the bizarre and surprising point is that it is more than that. It’s not just a possible model that might be one of many. Rather, it is the unique ultimate representation of all possible models, entangled together. As we’ve discussed, there are many subtle choices about how we observe the ruliad. But the ultimate ruliad itself is a unique thing, with no choice about what it is.

As I’ve [discussed at more length elsewhere](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/), the ruliad is in a sense a representation of all possible necessary truths—a formal object whose structure is an inevitable consequence of the very notion of formalization. So how does this relate to the idea that the ruliad also at an ultimate level represents our physical universe? What I’ve [argued elsewhere](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/) is that it means that the ultimate structure of our universe is a formal necessity. In other words, it’s a matter of formal necessity that the universe must exist, and have an ultimate ruliad structure. The fact that we perceive the universe to operate in a certain way—with our standard laws of physics, for example—is then a consequence of the particular way observers like us perceive it, which in turn depends on things like where in rulial space we happen to find ourselves.

But beyond physics, what else might the ruliad represent? The ruliad is an ultimate example of [multicomputation, and of what I’ve characterized as the fourth major paradigm for theoretical science](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/). Often in multicomputation, what’s of interest is multiway systems with specific underlying rules. And already at this level, much of the apparatus that we’ve described in connection with the ruliad also applies—and in a sense “trickles down” to give various universal results.

But there are also definitely cases of multicomputation (other than physics) where the full notion of applying all possible rules is relevant. The global structures of [metamathematics](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/#metamathematics), [economics](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/#economics), [linguistics](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/#linguistics) and [evolutionary biology](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/#evolutionary-biology) seem likely to provide examples—and in each case we can expect that at the core is the ruliad, with its unique structure. Of course, this doesn’t mean that what we observe must always be the same, because what we observe depends on our characteristics as an observer—and the characteristics of “being an observer” in metamathematics, for example, are surely different from those for economics or evolutionary biology, or, for that matter, physics.

For sure, the “sensory apparatus” that we effectively use is different in different cases. But there are certain similar human-based features that still seem to apply. Whatever the domain, we always act as computationally bounded observers. And it seems that we also always have a certain coherence, consistently maintaining our “observerhood” through time or across some form of space. And it seems likely that these “human-induced” characteristics alone are sufficient to yield some very global implications for observed behavior.

## The View from Mathematics

How should we think about the ruliad mathematically? In many ways, the ruliad is more an object of metamathematics than of mathematics itself. For in talking about the effects of all possible rules, it in a sense transcends individual mathematical theories—to describe a kind of metatheory of all possible theories.

Given a particular mathematical axiom system, it’s rather easy to see [correspondence with a multiway system](https://www.wolframscience.com/nks/p777--implications-for-mathematics-and-its-foundations/). There are a variety of ways to set it up, but one approach is to think of states in the multiway system as being expressions in the language used for the axiom system, and then to think of rules in the multiway system as applying transformations on these expressions that implement axioms in the axiom system.

For example, with the (Abelian semigroup) axioms

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg20.png)

&#10005

here’s a multiway system generated from the expression ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg21.png) by applying the (two-way) transformations defined by the axioms in all possible ways to each expression:

![](https://content.wolfram.com/uploads/sites/43/2021/11/sw1110v2img23.png)

&#10005

But now from this graph we can read off the “theorem”:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg23.png)

&#10005

A proof of this theorem

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg24.png)

&#10005

is just a path in the multiway graph:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg25.png)

&#10005

A significantly less direct but still perfectly valid proof would correspond to the 13-step path:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg26.png)

&#10005

It’s a slightly technical point, but perhaps worth mentioning that there are alternative ways to set up the correspondence between axiomatic mathematical systems and multiway systems. One such way is to take the states in the multiway system to be not expressions (like ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg27.png)) but whole propositions (like ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg28.png)). Axioms then show up as states, and the rules for the multiway system are “rules of inference” or “rules of entailment” that define how, say, pairs of propositions “entail” (or “imply”) other ones. (And, yes, this requires a generalized multiway system with not just 1 state → many states, but for example 2 states → 1 state.) Typical automated theorem provers (like [FindEquationalProof](http://reference.wolfram.com/language/ref/FindEquationalProof.html)) operate in this kind of setup, attempting to find paths that lead from initial propositions and axioms to some final state that corresponds to an “obviously true” proposition, like ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg29.png).

But whatever the detailed setup, the basic picture is that an axiomatic mathematical system has an associated multiway graph, in which paths correspond to proofs. Given the rules for the multiway system, there is in general no way to guarantee that the path (if it exists) corresponding to the proof of some particular result will be of bounded length, leading to the possibility of undecidability. But even when a path exists, it may require an irreducibly large amount of computation to find it. Still, finding such paths is what automated theorem provers do. For example, we know [(as I discovered in 2000) that ((_b_ · _c_) · _a_) · (_b_ · ((_b_ · _a_) · _b_)) = _a_ is the minimal axiom system for Boolean algebra](https://writings.stephenwolfram.com/2018/11/logic-explainability-and-the-future-of-understanding/), because [FindEquationalProof](http://reference.wolfram.com/language/ref/FindEquationalProof.html) finds a path that proves it.

But this path—and the corresponding proof—is a very “non-human” construct (and, for example, in 21 years essentially no progress has been made in finding a [“human-understandable narrative” for it](https://writings.stephenwolfram.com/2018/11/logic-explainability-and-the-future-of-understanding/)). And we can make an analogy here to the situation in physics. The individual rule applications in the multiway graph (or the proof) are like individual updating events applied to the atoms of space—and they show all kinds of complexity and computational irreducibility. But in physics, human observers work at a higher level. And the same, one suspects, is true in mathematics.

Rather than looking at every detail of the multiway graph, human “mathematical observers” (i.e. pure mathematicians) in effect define all sorts of equivalences that conflate together different parts of the graph. If the individual updates in the multiway graph are like molecular dynamics, human pure mathematics seems to operate much more at the “fluid dynamics level”, concentrating on “broad mathematical constructs”, not the “machine code” of specific low-level axiomatic representations. (Of course, there are some situations, for example related to undecidability, where the “molecular dynamics” effectively “breaks through”.)

We’ve outlined above (and [discussed at length elsewhere](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/)) how physical observers like us “parse” the low-level structure of the physical universe (and the ruliad). How might mathematical observers do it? A large part has to do with the identification of equivalences. And the key idea is that things which are considered equivalent should be assumed to be “the same”, and therefore “conflated for mathematical purposes”.

The most elementary example of something like this is the statement ([already present in Euclid](https://writings.stephenwolfram.com/2020/09/the-empirical-metamathematics-of-euclid-and-beyond/)) that if ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg31.png) and ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg32.png), then ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg33.png). The extensionality axiom of set theory is a more sophisticated example. And the univalence axiom of homotopy type theory is perhaps the most sophisticated current version.

There’s a very operational version of this that appears in automated theorem proving. Imagine that you’ve proved that ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg34.png) and ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg35.png). Then (by the assumed properties of equality) it follows that ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg36.png). One way we could use this result is just to merge the nodes for ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg37.png) and ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg38.png). But a “bigger” thing we can do is to add the “completion” ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg39.png) as a general rule for generating the multiway system.

Consider, for example, the string substitution multiway system A ↔ AB:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg40.png)

&#10005

But notice here that both ABA ↔ ABBA and ABA ↔ ABAB. So now add the “completion” ABBA ↔ ABAB. Here’s the resulting multiway graph:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg41.png)

&#10005

Adding the completion has generated lots of new “direct equivalences”. But we can also think of it as having done something else: not only has it defined equivalences between states; it’s also defined equivalences between paths—or in effect between proofs. (Or, put another way, it’s implementing homotopic equivalence between proofs. By the way, it’s an important feature of human mathematics that progress is typically measured in theorems proved; different proofs of the same theorem are normally implicitly considered equivalent in terms of the progress of mathematics.)

In a [category theory interpretation](https://arxiv.org/pdf/2105.10822.pdf), transformations between states in the original multiway graph are like ordinary morphisms (1-morphisms). But when we’re making transformations between “proof paths”, this is like 2-morphisms. And just as we can add transformations between proofs, we can also add transformations between proofs-between-proofs, and so on. The result is that we can build up a whole hierarchy of higher and higher categories, eventually ending with an ∞-category.

But now we can begin to see the connection with the ruliad. The ruliad is in a sense the result of taking the limit of adding more and more possible rules. Above we did this quite explicitly in terms of the original underlying rules, for example by enumerating possible strings or possible integer multipliers.

But we can view successive completions as doing something very similar. Yes, the rules are enumerated in a different order. But in the end there’ll still be an infinite number of distinct rules being used.

Of course there are many mathematical details missing here. But in broad outline, it seems that one can think of the approach to the ruliad as some kind of limit of successively higher categories. But this limit is something that’s been studied (albeit in the upper reaches of pure mathematics), and it’s an object called the ∞-groupoid. (It’s a groupoid because when all the rules are included things inevitably “go both ways”). So, OK, is the ruliad “just” the ∞-groupoid? Not quite. Because there are more rules and more initial conditions in the ruliad, even beyond those added by completions. And in the end the ruliad actually seems to be the ∞-category of ∞-groupoids, or [what’s called the (∞,1)-category](https://arxiv.org/pdf/2111.03460.pdf).

But knowing that the ruliad can be thought of as composed of ∞-groupoids means that we can [apply mathematical ideas](https://arxiv.org/pdf/2111.03460.pdf) about the ∞-groupoid to the ruliad.

Probably the most important is Grothendieck’s hypothesis, which asserts that the ∞-groupoid inevitably has a topological and (with a few other conditions) ultimately geometric structure. In other words, even though one might have imagined that one constructed the ∞-groupoid from “pure logic” (or from pure formal axiomatic structures), the assertion is that the limiting object one obtains inevitably exhibits some kind of geometrical or “spatial” structure.

Viewed in terms of the ruliad—and our explicit finite examples of it—this might not seem surprising. And indeed in our Physics Project, the whole concept of the [emergence of space from large-scale hypergraphs](https://www.wolframphysics.org/technical-introduction/limiting-behavior-and-emergent-geometry/) is closely related. But here from Grothendieck’s hypothesis we’re basically seeing a general claim that the [ruliad must have “inevitable geometry”](https://www.wolframphysics.org/bulletins/2020/08/a-candidate-geometrical-formalism-for-the-foundations-of-mathematics-and-physics/)—and we can then view things like the emergence of space in our Physics Project as a kind of “trickle down” from results about the ruliad. (And in general, a big “application” of geometrical structure is the possibility of “pure motion”.)

What does all this mean about the ruliad and mathematics? In a sense the ruliad represents all possible mathematics—the application of all possible rules, corresponding to all possible axiom systems. And from this “ultimate metamathematics”, [human “mathematical observers”](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/#the-relation-to-mathematics) are sampling pieces that correspond to the pure mathematics they consider of interest.

Perhaps these will align with particular axiom systems of the kind automated theorem provers (or proof assistants) use. But things may be “sloppier” than that, with human mathematical observers effectively being extended in rulial space—and capable of making “fluid-dynamics-level” conclusions, even if not “molecular-dynamics-level” ones.

But a key (and in some ways very surprising) point is that the ruliad can be viewed as the basis of both physics and mathematics. In some sense, physics and mathematics are at their core the same thing. They only “appear different” to us because the way we “observe” them is different.

I plan to discuss the implications for mathematics at greater length elsewhere. But suffice it to say here that the existence of a common underlying core—namely the ruliad—for both physics and mathematics immediately allows one to start importing powerful results from physics into mathematics, and vice versa. It also allows one, [as I have done elsewhere](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/#the-relation-to-mathematics), to start comparing the existence of the universe with the (Platonic-style) concept of the fundamental existence of mathematics.

## The View from Computation Theory

The ruliad can be thought of as an encapsulation of doing all possible computations in all possible ways. What we might think of as a “single computation” might consist of repeatedly applying the rules for a [Turing machine](https://www.wolframscience.com/nks/p78--turing-machines/) to “deterministically” generate a sequence of computational steps:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg42.png)

&#10005

But one can also consider a [“multicomputational” system](https://www.wolframphysics.org/bulletins/2021/02/multiway-turing-machines/), in which rules can generate multiple states, and the whole evolution of the system can be represented by a multiway graph:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg43.png)

&#10005

In traditional computation theory, one talks about rules like these as “nondeterministic”, because they can have multiple outcomes—though one usually imagines that the final answer one wants from a computation can be found as the result of some particular path. (In what I now call the [multicomputational paradigm](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/)—that I believe is important for modeling in physics and other places—one instead considers the [complete multiway graph](https://www.wolframphysics.org/bulletins/2021/02/multiway-turing-machines/) of entangled possible histories.)

In constructing the ruliad, one is in a sense going to a more extreme version of multicomputation, in which one uses not just a particular rule with multiple outcomes, but all possible rules. In effect, the concept is to use “maximal nondeterminism”, and at each step to independently “pick whatever rule one wants”, tracing out a rulial multiway system that includes all the different possible paths this generates.

For the kind of Turing machines illustrated above, the [rulial multiway graph one gets](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/) after one step is:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg44.png)

&#10005

After 2 steps the result is:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg45.png)

&#10005

The full ruliad is then some kind of infinite limit of this process. But as before, there’s lots of subtlety in how this limit is taken. But we can at least characterize some ways of approaching it using ideas from computational complexity theory. Increasing the number of steps of evolution is like increasing the time complexity one allows. Increasing the “size of states” (e.g. the width of nonzero Turing machine tape) that one includes is like increasing the space complexity one allows. And increasing the complexity of the rule (as measured in the number of bits needed to specify it) is like increasing the algorithmic complexity one allows. The ruliad is what is obtained by taking all these computational resource measures to infinity.

And a critical claim is that regardless of how this is done, the final ruliad construct one gets will always—at least in some sense—be the same. There will be many ways to coordinatize it, or to sample it, but the claim is that it’s always the same object that one’s dealing with. And ultimately the reason for this is the [Principle of Computational Equivalence](https://www.wolframscience.com/nks/chap-12--the-principle-of-computational-equivalence/). Because it implies that whatever “computational parametrization” or “computational description language” one uses for the ruliad, one will almost always get something that can be viewed as “computationally equivalent”.

We’ve talked about building up the ruliad using Turing machines. But what about other models of computation—like cellular automata or register machines or lambda calculus? As soon as there’s computation universality we know that we’ll get results that are at least in principle equivalent, because in a sense there’s only a “finite translation cost” associated with setting up an interpreter from one model of computation to another. Or, put another way, we can always emulate the application of the rule for one system by just a finite number of rule applications for the other system.

But from computation universality alone we have no guarantee that there won’t be “extreme deformations” introduced by this deformation. What the Principle of Computational Equivalence says, however, is that almost always the deformations won’t have to be extreme. And indeed we can expect that particularly when multiple rules are involved, there’ll be rapid convergence almost always to a kind of “uniform equivalence” that ensures that the final structure of the ruliad is always the same.

But the Principle of Computational Equivalence appears to say still more about the ruliad: it says that not only will the ruliad be the same independent of the “computational basis” used to construct it, but also that there’ll be a certain uniformity across the ruliad. Different “regions of the ruliad” might involve different specific rules or different patterns of their application. But the Principle of Computational Equivalence implies that almost always the computations that happen will be equivalent, so that—at least at a certain scale—the structure associated with them will also be equivalent.

Knowing that the ruliad contains so many different computations, one might imagine that it would show no particular uniformity or homogeneity. But the Principle of Computational Equivalence seems to imply that it necessarily does, and moreover that there must be a certain coherence to its structure—that one can interpret (in the style of Grothendieck’s hypothesis) as an inevitable emergent geometry.

An individual computation corresponds to a path in the ruliad, going from its “input state” to its “output state”. In an ordinary deterministic computation, the path is restricted to always use the same rule at each step. In a nondeterministic computation, there can be different rules at different steps. But now we can formulate things like the P vs. NP problem essentially in terms of the geometry of the ruliad.

Here’s a picture of the same finite Turing-machine-based approximation to the ruliad as above—but now with the [paths that correspond to deterministic Turing machine computations](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/#deterministic-turing-machine-paths-in-rulial-space) marked in red:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg46.png)

&#10005

The P vs. NP problem basically asks roughly whether the deterministic computations (shown here in red) will eventually “fill the ruliad”, or whether the general nondeterministic computations that are part of the ruliad will always “reach further”. Once again, there are many complicated and subtle issues here. But it’s interesting to see how something like the P vs. NP problem might play out in the ruliad.

In physics (and mathematics), we as human observers tend to sample the ruliad in a coarse-grained way, “noticing” only certain aspects of it. So is there an analog of this in computation theory—perhaps associated with certain characteristics of the “computation-theoretic observer”? There’s a potential answer, rather similar to what we’ve already seen in both physics and mathematics.

The basic point is that in computation theory we tend to study classes of computations (say P or NP) rather than individual computations. And in doing this we are in a sense always conflating many different possible inputs and possible outputs—which we assume we do in a computationally bounded way (e.g. through polynomial-time transformations, etc.)

Another thing is that we tend to focus more on the “experience of the end user” than the detailed activities of the “programmer”. In other words, we’re concerned more with what computational results are obtained, with what computational resources, rather than on the details of the program constructed to achieve this. Or, put another way, we tend to think about computation in terms of things like the successive evaluation of functions—and we conflate the different paths by which this is achieved.

Most likely this means that there are “effective laws” that can be derived in this computational view of the ruliad, analogous to laws of physics like general relativity. So what might some other analogies be?

A computation, as we’ve mentioned, corresponds to a path in the ruliad. And whenever there’s a possibility for an infinite path in the ruliad, this is a sign of undecidability: that there may be no finite way to determine whether a computation can reach a particular result. But what about cases when many paths converge to a point at which no further rules apply, or effectively “time stops”? This is the analog of a spacelike singularity—or a black hole—in the ruliad. And in terms of computation theory, it corresponds to something decidable: every computation one does will get to a result in finite time.

One can start asking questions like: [What is the density of black holes in rulial space](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/#the-emerging-picture-of-rulial-space)? If we construct the ruliad using Turing machines, this is basically analogous to asking “What’s the density of halting Turing machines (+initial conditions) in rulial space?” And this is essentially given by [Chaitin’s Ω](https://www.wolframscience.com/nks/notes-10-3--algorithmic-information-theory/).

But so is there some number Ω that we can just compute for the ruliad? Well, actually, no. Because the undecidability of the halting problem makes Ω noncomputable. One can get approximations to it, but—in the language of the ruliad—those will correspond to using particular samplings or particular reference frames. Or in other words, even the perceived density of “decidability black holes” in the ruliad depends on features of the observer.

## What’s beyond the Ruliad?

In our Physics Project we usually talk of the universe “evolving through time” (albeit with many entangled threads of history). But if the ruliad and its structure is a matter of formal necessity, doesn’t that mean that the whole ruliad effectively “already exists”—“outside of time”? Well, in some sense it does. But ultimately that would only be relevant to us if we could “look at the ruliad from the outside”.

And as observers like us within the ruliad, we necessarily have a different perception. Because [our consciousness](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/)—with its computational boundedness—only gets to sample a certain sequence of pieces of the ruliad. If it were not for computational irreducibility, we might get to “jump around” in time. But computational irreducibility, together with our own computational boundedness, implies that our perception must necessarily just experience the passage of time through an irreducible process of computation.

In other words, while in some sense the ruliad may all “already be there” when viewed from the outside, our own perception of it “from the inside” is necessarily a progressive one, that effectively corresponds to the passage of time.

Could we experience the ruliad differently, even while being computationally bounded? If we think of the ruliad as a graph, then our usual “sequence of configurations of space at successive times” way of experiencing the ruliad is like a [breadth-first traversal](https://www.wolframphysics.org/technical-introduction/the-updating-process-for-string-substitution-systems/foliations-and-coordinates-on-causal-graphs/#p-255). But could we for example instead do a depth-first traversal, exploring all time before investigating different parts of space? (And, yes, something like this can happen in general relativity near an event horizon, or in connection with timelike singularities.)

Later, we’ll discuss different ways to perceive the ruliad and the universe. But it seems to be a feature of anything we might call a coherent observer that there needs to be some form of progression in the perception. And so while we might not call it the passage of time, there’ll still be some way in which our exploration of the ruliad has a computationally irreducible process underneath.

A very important [claim about the ruliad is that it’s unique.](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/#is-this-the-only-universe?) Yes, it can be coordinatized and sampled in different ways. But ultimately there’s only one ruliad. And we can trace the argument for this to the Principle of Computational Equivalence. In essence there’s only one ruliad because the Principle of Computational Equivalence says that almost all rules lead to computations that are equivalent. In other words, the Principle of Computational Equivalence tells us that there’s only one ultimate equivalence class for computations.

But what if we just imagine a “[hypercomputation](https://www.wolframscience.com/nks/p720--the-content-of-the-principle/)” not in that class? For example, imagine a hypercomputation (analogous, for example, to an oracle for a Turing machine) that in a finite number of steps will give us the result from an infinite number of steps of a computationally irreducible process. Such a hypercomputation isn’t part of our usual ruliad. But we could still formally imagine a hyperruliad that includes it—and indeed we could imagine a whole infinite hierarchy of successively larger and more powerful hyperruliads.

But it’s a fundamental claim that we’re making—that can be thought of as a matter of natural science—that in our universe only computation can occur, not hypercomputation.

At a purely formal level, there’s nothing wrong with hyperruliads. They exist as a matter of formal necessity just like the ordinary ruliad does. But the key point is that an observer embedded within the ruliad [can never perceive a hyperruliad](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/#why-this-universe-the-relativity-of-rules). As a matter of formal necessity there is, in a sense, a permanent event horizon that prevents anything from any hyperruliad from affecting anything in the ordinary ruliad.

So now we can be a bit more precise about our statement that “hypercomputation doesn’t happen in our universe”. Really we should say that we assert that we as observers operate purely computationally and not hypercomputationally. And this means that we are embedded within the ordinary ruliad, and not the hyperruliad.

Yes, we could imagine some other entity that’s embedded within the hyperruliad, and perceives what it considers to be the universe to operate hypercomputationally. But in a statement that’s in a sense more “about us” than “about the universe”, we assert that that can’t be us, and that we in a sense live purely within the ruliad—which means that for us the [Principle of Computational Equivalence holds](https://www.wolframscience.com/nks/p726--the-validity-of-the-principle/), and we perceive only computation, not hypercomputation.

## Communicating across Rulial Space

What observers can there be embedded in the ruliad, and how should we characterize them? In physical spacetime we’re used to characterizing observers by their locations in physical space and by things like the spacetime reference frames they construct. And it’s very much the same for observers in the ruliad: we can characterize them by where they are in rulial space, and what rulial reference frames they use.

The Principle of Computational Equivalence tells us that it’s almost always possible to “encode” one “model of how the ruliad works” in any other model—effectively just by setting up a program that emulates the rules for one model using the rules for the other model. But we can think of these different models as being associated with different possible observers in the ruliad.

In other words, we can say that observers “at different places in rulial space” (or “using different rulial reference frames”) are using different description languages for what’s happening in the ruliad. And when an observer “moves” in rulial space, they’re effectively doing a translation from one description language to another. (And, yes, there’s a [maximum rate of motion ρ](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/#the-emerging-picture-of-rulial-space) in rulial space—which is the rulial analog of the speed of light—and which is effectively determined by the fundamental processing speed of the universe.)

So far this might all seem quite abstract. But there are immediate, everyday examples that effectively correspond to being at different places in rulial space. A simple concrete one is computers with different instruction sets. Another one is different brains with different consciousnesses.

We can think of a single human [consciousness as having a certain thread of experience of the universe](https://writings.stephenwolfram.com/2021/03/what-is-consciousness-some-new-perspectives-from-our-physics-project/). Part of that experience is determined by the physical location of the consciousness and by the sensory apparatus with which it samples the world. But part is determined by the “internal description language” that it uses. And inevitably this internal description language depends both on the detailed physiology of the brain in which it is implemented, and on the past history of experiences that have “defined its way of looking at the world”. In the analogy of artificial neural networks, different networks will tend to have different “internal representations” because this depends not only on the network architecture, but also on the particular training data that the network has “experienced”.

Why can’t one human consciousness “get inside” another? It’s not just a matter of separation in physical space. It’s also that the different consciousnesses—in particular by virtue of their different histories—are inevitably at different locations in rulial space. In principle they could be brought together; but this would require not just motion in physical space, but also motion in rulial space.

But why then do different consciousnesses seem to have compatible views about “what happens in the universe”? Essentially this can be seen as a consequence of rulial relativity—which in turn depends on the inevitable causal invariance of the ruliad, which follows from the Principle of Computational Equivalence. There are certainly many issues to be worked out, but basically what seems to be going on is that because of causal invariance, different rulial reference frames will ultimately yield the same [rulial multiway causal graphs](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/#rulial-multiway-causal-graphs), and therefore the same “fundamental description of reality”.

We’ve talked about different consciousnesses. But what about just “different ways of thinking”? Well, it’s definitely more than an analogy to say that different ways of thinking correspond to different positions in rulial space. If there’s lots of common history then there’ll be common ancestry in the rulial multiway graph and one will necessarily end up close in rulial space. But without common history, one can end up with different description languages—or different ways of thinking—that are not nearby in rulial space.

In physical space we expect to effectively use momentum to move our location. And it’s potentially a bizarrely similar story in rulial space. In our models of fundamental physics, [energy and momentum are essentially related to the density of activity](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/#what-is-energy-what-is-mass) (i.e. elementary updating events) in physical space. And we can similarly define a rulial analog of energy and momentum in terms of activity in rulial space. But it’s exactly this activity that provides connections between different parts of rulial space, or in effect “enables motion” in rulial space.

In other words, if you want to move in rulial space, you can do it by putting in the appropriate computational work to change your conceptual point of view (or, essentially equivalently, your language for describing things). So what about curvature (or the analog of gravity) in rulial space—say generated through an analog of Einstein’s equations from density of activity in rulial space? Presumably this relates to the difficulty—or time it takes—to get from one place in rulial space, and one way of thinking, to another. And conceivably things like “paradigm shifts” between different ways of thinking might be associated with features of rulial space like event horizons.

But let’s say you’re at one place in rulial space, and you want to get to another—or at least “send a signal” there. A typical microscopic change at one point in rulial space will tend to just “spread out in all directions” and “decay quickly”. But if you want to “coherently communicate”, you need some kind of structure that will persist as it propagates through rulial space. And by analogy with the case of physical space, what this presumably means is that you effectively need a “rulial particle”.

In terms of the ruliad, a rulial particle would presumably be some kind of “topological obstruction” or “topologically stable structure” that is at any moment effectively localized in rulial space and maintains its identity as it propagates across rulial space. But what might a rulial particle be in more everyday terms?

Potentially it’s like what we’d normally consider a concept—or something to which we might assign a word in human language. If we have ways of thinking—or consciousnesses—whose details are different, the issue is what will be robust enough to be able to be transported between them. And what everyday experience seems to suggest is that the answer is concepts. Even though one might have a slightly different way of thinking, what one calls “a fish” (or essentially, the concept of a fish) is something that can still robustly be communicated.

It’s interesting to notice that for an observer like us, there seem to be only a finite set of types of “elementary particles” that exist in physical space. And perhaps that’s not unrelated to the fact that observers like us also seem to imagine that there are in some sense only a finite number of “basic concepts” (associated, say, with distinct words in human languages). There’s lots more detail that exists in rulial space—or in the ruliad—but for observers like us, with our type of way of sampling the ruliad, these might be core coherent structures that we perceive.

## So Is There a Fundamental Theory of Physics?

The concept of the ruliad arose from our efforts to find a fundamental theory of physics. But now that we know about the ruliad, what does it tell us about a fundamental theory?

At the outset, we might have imagined that the end point of our project would be the identification of some particular rule of which we could say “This is the rule for the universe”. But of course then we’d be faced with the question: “Why that rule, and not another?” And perhaps we would imagine just having to say “That’s something that you have to go beyond science to answer”.

But the ruliad implies a quite different—and in my view ultimately much more satisfying—picture. The ruliad itself is a construct of abstract necessity—that in a sense represents the entangled behavior of all possible rules for the universe. But instead of imagining that some particular rule out of all these possibilities is “picked from outside” as “the choice for our universe”, what we suppose is that—as observers embedded within the ruliad—we’re the ones who are implicitly picking the rule by virtue of how we sample and perceive the ruliad.

At first this might seem like it’s a wimp out. We want to know how our universe works. Yet we seem to be saying “we just pick whatever rule we feel like”. But that’s not really the story at all. Because in fact observers that are even vaguely like us are in effect deeply constrained in what rules they can attribute to the universe. There’s still some freedom, but a fundamental result is that for observers like us it seems to be basically inevitable that any rule we can pick will on a large scale reproduce the central known general laws of physics, in particular general relativity and quantum mechanics.

In other words, for observers generally like us it’s a matter of abstract necessity that we must observe general laws of physics that are the ones we know. But what about more specific things, like the particular spectrum of elementary particles, or the particular distribution of matter in the universe? It’s not clear how far “the general” goes—in other words, what is a matter of abstract necessity purely from the structure of the ruliad and general features of observers like us.

But inevitably at some point we will run out of “the general”. And then we’ll be down to specifics. So where do those specifics enter? Ultimately they must be determined by the details of how we sample the ruliad. And a prominent part of that is simply: Where in the ruliad are we? We can ask that about our location in physical space. And we can also ask it about our location in rulial space.

What does all this mean? At some level it’s saying that the way we are as observers is what makes us attribute certain rules to our universe. The ruliad is in a sense the only thing that fundamentally exists—and in fact its existence is a matter of abstract necessity. And our universe as we experience it is some “slice of the ruliad”, with what slice it is being determined by what we’re like as observers.

Let’s look at the logical structure of what we’re saying. First, we’re describing the ruliad, which at the outset doesn’t have anything specifically to do with physics: it’s just a formal construct whose structure is a matter of abstract necessity, and which relates as much to mathematics as it does to physics. But what “puts the physics in” is that we in effect “live in the ruliad”, and our perception of everything is based on “experiencing the ruliad”. But that experience—and the effective laws of physics it entails—inevitably depends on “where we are in the ruliad” and how we’re able to sample it.

And this is where our pieces of “falsifiable natural science” come in. The first “assertion of natural science” that we make is that we are embedded only within the ordinary ruliad, and not a hyperruliad—or in other words that our experience encompasses only computation, and not hypercomputation.

This is closely related to a second assertion, which may in fact be considered to subsume this: that we are computationally bounded observers, or, in other words, that our processes of perception involve bounded computation. Relative to the whole ruliad—and all the computation it entails—we’re asserting that we as observers occupy only a tiny part.

There’s one more assertion as well, again related to computational boundedness: that we as observers have a certain coherence or persistence. In general the ruliad contains all sorts of wild and computationally irreducible behavior. But what we’re asserting is that that part of the ruliad that is associated with us as observers has a certain simplicity or computational reducibility: and that as we evolve through time or move in space, we somehow maintain our identity.

These assertions seem very general, and in some ways almost self-evident—at least as they apply to us. But the important and surprising discovery is that they alone seem to lead us inexorably to crucial features of physics as we know it.

Where does this physics “come from”? It comes partly from the formal structure of the ruliad, and formal features of the multicomputational processes it involves. And it comes partly from the nature of us as observers. So if we ask “Why is the physics of our universe the way it is?”, an important part of the answer is “Because we observe the universe the way we do”.

One might imagine that in some sense physics would give us no choice about how we observe the universe. But that’s not the case. Because in the end our “observation” of the universe is about the “abstract conceptual model” we build up for the universe. And, yes, that’s certainly informed by the particular sensory apparatus we have, and so on. But it’s something we can certainly imagine being different.

We can think of ourselves as using some particular description language for the universe. The structure of that language is constrained by the assertions we gave above. But within such a description language, the laws of physics necessarily work out the way they do. But if we chose a different description language, we’d end up with different laws of physics.

Much of our perception of the universe is based on our raw biological structure—the way our sensory organs (like our eyes) work, as well as the way our brains integrate the inputs we get. But that’s not all there is to it. There’s also a certain base of knowledge in our civilization that informs how we parse our “raw perception”—and in effect what description language we use. Once we have the idea of periodic behavior, say, we can use it to describe things that we’d previously have to talk about in a less “economical” way.

But what if our knowledge changed? Or we had different sensory capabilities? Or we used technology to integrate our sensory input in different ways? Then we’d be able to perceive and describe the universe in different ways.

One’s first impression might be that the ruliad effectively contains many possible “parallel universes”, and that we have selected ourselves into one of these, perhaps as a result of our particular characteristics. But in fact the ruliad isn’t about “parallel universes”, it’s about universes that are entangled at the finest possible level. And an important consequence of this is that it means we’re not “stuck in a particular parallel universe”. Instead, we can expect that by somehow “changing our point of view”, we can effectively find ourselves in a “different universe”.

Put another way, a given description of the universe is roughly represented by being at a certain location in rulial space. But it’s possible to move in rulial space—and end up with a different description, and different effective laws for the universe.

But how difficult is motion in rulial space? It could be that some impressive future technology would allow us to “move far enough” to end up with significantly different laws of physics. But it seems more likely that we’d be able to move only comparatively little—and never be able to “escape the box” of things like computational boundedness, and coherence of the observer.

Of course, even changing a little might lead us to different detailed laws of physics—say attributing a different mass to the electron, or a different value of the electromagnetic coupling constant α. But actually, even in traditional physics, this is [already something that happens](https://www.wolframscience.com/nks/notes-9-14--particle-masses/). When viewed at different energy scales—or in a sense with different technology—these quantities have different effective values (as characterized by the renormalization group).

At first it might seem a little strange to say that as our knowledge or technology change, the laws of physics change. But the whole point is that it’s really our perceived laws of physics. At the level of the raw ruliad there aren’t definite laws of physics. It’s only when we “sample our slice” of the ruliad that we perceive definite laws.

What does all this mean operationally for the search for a fundamental theory of physics? At some level we could just point to the ruliad and declare victory. But this certainly wouldn’t give us specific predictions about the particulars of our perceived universe. To get that we have to go further—and we have to be able to say something about what “slice of the ruliad” we’re dealing with. But the good news is that we don’t seem to have to make many assumptions about ourselves as observers to be able to identify many physical laws that observers like us should perceive.

So can we ever expect to nail down a single, specific rule for the universe, say one a particular observer would attribute to it? Given our characteristics as observers, the answer is undoubtedly no. We’re simply not that small in rulial space. But we’re not that big, either. And, importantly, we’re small enough that we can expect to “do science” and consider the universe to “behave in definite ways”. But just as in physical space we’re vastly larger than the scale associated with the atoms of space, so similarly we’re also undoubtedly vastly larger in rulial space than the individual components of the ruliad—so we can’t expect our experience to all be “concentrated in one thread” of the ruliad, following one particular rule.

As we discussed above, by doing experiments we can use scientific inference to attempt to localize ourselves in rulial space. But we won’t be able to do enough to say “from our point of view, the universe is operating according to this one specific rule, and not another”. Instead, there’ll be a whole collection of rules that are “good enough”, in the sense that they’ll be sufficient to predict the results of experiments we can realistically do.

People have often imagined that, try as we might, we’d never be able to “get to the bottom of physics” and find a specific rule for our universe. And in a sense our inability to localize ourselves in rulial space supports this intuition. But what our Physics Project seems to rather dramatically suggest is that we can “get close enough” in rulial space to have vast predictive power about how our universe must work, or at least how observers like us must perceive it to work.

## Alien Views of the Ruliad

We’ve discussed how “observers like us” will necessarily “parse the ruliad” in ways that make us perceive the universe to follow the laws of physics as we know them. But how different could things get? We have a definite sense of what constitutes a “reasonable observer” based on our 21st-century human experience—and in particular our biology, our technology and our ways of thinking.

But what other kinds of observers can we imagine? What about, for example, [animals other than humans](https://www.wolframscience.com/nks/p827--intelligence-in-the-universe/)—in particular say ones whose sensory experience emphasizes olfaction or echolocation or fluid motion? We can think of such animals as operating in a different rulial reference frame or at a different place in rulial space. But how far away in rulial space will they be? How similar or not will their “world views” (and perceived laws of physics) be to ours? It’s hard to know. Presumably our basic assertions about computational boundedness and coherence still apply. But just how the specifics of something like sequentialization in time play out, say, for an ant colony, seems quite unclear.

Maybe one day we’ll be able to systematically “think like other animals”. But as of now we haven’t been able to “travel that far” in rulial space. We’ve quite thoroughly explored physical space, say on the surface of our planet, but we haven’t explored very far at all in rulial space. We don’t have a way to translate our thinking into some kind of “thinking differently”—and we don’t, for example, [have a common language to get there](https://writings.stephenwolfram.com/2018/01/showing-off-to-the-universe-beacons-for-the-afterlife-of-our-civilization/).

There’s often an assumption (a kind of “human exceptionalism”) that if it wasn’t for details of the human experience—like brains and words—then we’d necessarily be dealing with something fundamentally simpler, that could not, for example, show features that we might identify as intelligence. But the [Principle of Computational Equivalence tells us this isn’t correct](https://www.wolframscience.com/nks/p822--intelligence-in-the-universe/). Because it says that there’s a certain maximal computational sophistication that’s achieved not just by us humans but also by a vast range of other systems. The restrictions of what we’ve chosen to study (in science and elsewhere) have often made us miss this, but in fact computational sophistication—and the direct generalization of our notion of intelligence that’s associated with it—seems quite ubiquitous across many different kinds of systems.

So can those other kinds of systems act as “observers like us”? To do so, they need not just computational sophistication, but also a certain alignment with the features we have that lead to our coherent thread of “conscious experience”. And even given that, to actually “connect with” such systems, we need to be able to reach far enough in rulial space to sufficiently make a translation.

Imagine the [weather (sometimes said to “have a mind of its own”)](https://www.wolframscience.com/nks/p822--intelligence-in-the-universe/). It’s got plenty of computational sophistication. But is there any sense in which it sequentializes time like we do? Or can one only think of all those different parts of our atmosphere “running in their own time”? To know things like this, we effectively have to have a way to “translate” from the operation of the weather to our (current) way of thinking.

And in some sense we can consider the whole enterprise of natural science as being an effort to find a method of translation—or a [common language—between nature and our way of thinking](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/#the-challenge-of-language-design-for-the-universe).

We as observers in effect trace out particular trajectories in rulial space; the challenge of natural science is to “reach out” in rulial space and “pull in” more of the ruliad; to be able to define a way to translate more parts of the ruliad to our processes of thinking. Every time we do an experiment, we can think of this as representing a moment of “connection” or “communication” between us and some aspect of nature. The experiment in effect defines a small piece of “common history” between us and nature—which helps “knit together” the parts of rulial space associated with us and with nature.

One of the great mysteries of science has been why—in the vastness of physical space—we’ve never detected something we identify as “alien intelligence”, or an “alien civilization”. We might have thought that it was because we humans have either achieved a unique pinnacle of intelligence or computational ability—or have fundamentally not gotten far enough. But the Principle of Computational Equivalence explodes the idea of this kind of cosmic computational pecking order.

So what could actually be going on? Thinking in terms of the ruliad suggests an answer. Our radio telescopes might be able to detect signals from far away in physical space. But our putative aliens might not only live far away in physical space, but also in rulial space.

Put another way, the “alien civilization” might be sampling aspects of the ruliad—and in effect the universe—that are utterly different from those we’re used to. That different sampling might be happening right down at the level of atoms of space, or it might be that the rulial distance from us to the aliens is small enough that there’s enough “shared description language” that the alien civilization might rise to the level of seeming like some kind of [“noise” relative to our view of “what’s important in the universe”](https://www.wolframscience.com/nks/p836--intelligence-in-the-universe/).

We might wonder how far apart what we could consider “alien civilizations” would be in physical space. But what we now realize is that we also have to consider [how far apart they might be in rulial space](https://writings.stephenwolfram.com/2018/01/showing-off-to-the-universe-beacons-for-the-afterlife-of-our-civilization/#the-space-of-all-possible-civilizations). And just like in exploring physical space we can imagine building better spacecraft or better telescopes, so also we can imagine building better ways to reach across rulial space.

We’re so used to physical space that it seems to us very concrete to reach across it. Of course, in our Physics Project, things like motion in physical space end up—like everything else—being pure computational processes. And from this point of view, reaching across rulial space is ultimately no more abstract—even though today we would describe it in terms of “doing (abstract) computations” rather than “moving in space”.

Relative to our own physical size, the universe already seems like a vast place. But the full ruliad is even incredibly more vast. And we are likely much tinier in rulial space relative to the whole universe than we are in physical space. From the Principle of Computational Equivalence we can expect that there’s ultimately no lack of raw computational sophistication out there—but thinking in terms of the ruliad, the issue is whether what’s going on is close enough to us in rulial space that we can [successfully see it as an “alien civilization”](https://writings.stephenwolfram.com/2018/01/showing-off-to-the-universe-beacons-for-the-afterlife-of-our-civilization/).

One test of rulial distance might be to ask whether our putative aliens perceive the same laws of physics for the universe that we do. We know that at least the general forms of those laws depend only on what seem to us rather loose conditions. But to get good alignment presumably requires at the very least that we and the aliens are somehow “comparable in size” not only in physical space (and branchial space), but also in rulial space.

It’s humbling how difficult it is to imagine the universe from the point of view of an alien at a different place in rulial space. But for example if the alien is big compared to us in rulial space, we can say that they’ll inevitably have a version of science that seems to us much “vaguer” than ours. Because if they maintain a coherent thread of experience, they’ll have to conflate more distant paths in rulial space, on which the universe will do things that are “more different” than what we’re used to. (And, yes, there should be rulial analogs of quantum phenomena, associated for example with conflated paths that diverge far in rulial space.)

What would it mean operationally for there to be an alien civilization perhaps nearby in physical space but at a distance in rulial space? Basically the alien civilization will be “operating” in features of the universe that our parsing of the universe just doesn’t pick up. As a simple analogy, our view of, for example, a box of gas might be that it’s something with a certain temperature and pressure. But a different “parsing” of that system might identify a whole world of detailed motions of molecules that with respect to that parsing can be viewed as a vast “alien civilization”. Of course, the situation is much more extreme when it comes to the whole ruliad, and all the paths of history and configurations of atoms of space that it represents.

Relative to the whole ruliad, our civilization and our experience have carved out an extremely tiny piece. And what we’re thinking of as “alien civilizations” might also have carved out their own tiny pieces. And while we’re all “living in the same ruliad”, we might no more be able to detect each other or communicate (and likely very much less) than we can across vast distances in physical space.

What of the future? The future of our civilization might well be a story of mapping out more of rulial space. If we continue to invent new technology, explore new ideas and generally broaden our ways of thinking and perceiving, we will gradually—albeit in tiny steps—map out more of rulial space. How far can we get? The ultimate limit is determined by the maximum rulial speed. But if we expect to maintain our character as “observers like us”, we’ll no doubt be limited to something much less.

Among other issues, moving in rulial space involves doing computation. (The ultimate scale is set by the “processing power” of the universe—which defines the maximum rulial speed.) But “density of computation” effectively corresponds to a generalized version of mass—and is for example a source of “generalized gravity”. And it could be that to “move any significant distance” in rulial space, we’d have to “experience enough generalized gravity” that we could never maintain things like the kind of coherence we need to be an “observer like us”.

Put another way: yes, it might in principle be possible to “reach out in rulial space” and “contact the rulial aliens”. But it might be that doing so would require us to be so different from the way we currently are that we wouldn’t recognize anything like consciousness or anything that really makes us “identifiably us”. And if this is so, we are in a sense limited to experiencing the ruliad “on our own” from our particular place in rulial space, forever isolated from “alien civilizations” elsewhere in rulial space.

## Conceptual Implications of the Ruliad

What does the concept of the ruliad mean for the fundamental way we think about things like science? The typical conception of “what science does” is that it’s about us figuring out—as “objectively” as we can—how the world happens to be. But the concept of the ruliad in a sense turns this on its head.

Because it says that at some ultimate level, everything is a matter of abstract necessity. And it’s just our “parsing” of it that defines the subject matter of what we call science. We might have thought that the science of the universe was just something that’s “out there”. But what we’re realizing is that instead in some fundamental sense, it’s all “on us”.

But does that mean that there’s no “objective truth”, and nothing that can robustly be said about the universe without “passing it through us”? Well, no. Because what we’ve discovered through our Physics Project is that actually there are quite global things that can (“objectively”) be said about our universe and the laws it follows, as perceived by observers like us.

We don’t have to know in detail about us humans and the particular ways we perceive things. All we need are some general features—particularly that we are computationally bounded, and that we have a certain persistence and coherence. And this is all it takes to deduce some quite specific statements about how our universe operates, at least as we perceive it.

So in a sense what this means is that there is a large “zone of objectivity”; a large set of choices for how we could be that will still lead us to the same “objective truth” about our universe. But if we go far enough away in our mechanism for “parsing the ruliad”, this will no longer be the case. From our current vantage point, we’d no doubt then be hard-pressed to recognize how we’re “doing the parsing”, but the results we’d get would no longer give us the same laws of physics or general perception of the universe that we’re used to.

This view of things has all sorts of implications for various long-discussed philosophical issues. But it’s also a view that has precise scientific consequences. And these don’t just relate to physics. Because the ruliad is really a general object that represents the entangled behavior of all possible abstract rules. When we think of ourselves as observers embedded within this object, it means that [for us things are actualized](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/), and we have what we call physics. But we can also imagine sampling the ruliad in different ways.

Some of those ways [correspond to mathematics (or metamathematics)](https://writings.stephenwolfram.com/2021/04/why-does-the-universe-exist-some-perspectives-from-our-physics-project/#the-relation-to-mathematics). Some correspond to theoretical computer science. The ruliad is the single object that underlies all of them. And which of them we’re talking about just depends on how we imagine we’re sampling or parsing the ruliad, and how we’re describing what we’re observing.

With this degree of generality and universality, it’s inevitable that the ruliad must be a complicated object; in fact, in a sense it must encapsulate all possible achievable complexity. But what’s important is that we now have a definite concept of the ruliad, as something we can study and analyze.

It’s not simple to do this. The ruliad is at some level an object of great and perhaps supremely elegant abstract regularity. But for us to get any concrete handle on it and its structure, we need to break it down into some kind of “digestible slices” which inevitably lose much of its abstract regularity.

And we’re just at the beginning of seeing how best to “unpack” and “pick through” the ruliad. With explicit computations, we can only chip away at the [very simplest approximations to the ruliad](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/). In a sense it’s a tribute to the naturalness and inevitability of the ruliad that it’s so closely related to some of the most advanced abstract mathematical methods we know so far. But again, even with these methods we’re barely scratching the surface of the ruliad and what it contains.

The theoretical exploration of the ruliad will be a long and difficult journey. But the incredible generality and universality of the ruliad means that every piece of progress is likely to have exceptionally powerful consequences. In some sense the exploration of the ruliad can be seen as the encapsulated expression of everything it means to do theoretical investigation: a kind of ultimately abstract limit of theoretical science and more.

For me, the ruliad in a sense builds on a tower of ideas, that include the computational paradigm in general, the exploration of the computational universe of simple programs, the Principle of Computational Equivalence, our Physics Project and the notion of multicomputation. But even with all of these it’s still a significant further jump in abstraction. And one whose consequences will take considerable time to unfold.

But for now it’s exciting to have at least been able to define this thing I call the ruliad, and to start seeing some of its unprecedentedly broad and deep implications.

---

## Appendix: The Case of the “Multiplicad”

As a very simple example of something like the ruliad, we can consider what we might call the “multiplicad”: a rulial [multiway system based on integers](https://www.wolframphysics.org/bulletins/2021/10/multicomputation-with-numbers-the-case-of-simple-multiway-systems), in which the rules simply multiply by successive integers:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg47.png)

&#10005

(Note that this kind of pure multiplication is presumably not computation universal, so the limiting object here will not be a coordinatization of the actual full ruliad.)

Just like with the full ruliad, there are many different “directions” in which to build up the multiplicad. We could allow as many multipliers and steps as we want, but limit the total size of numbers generated, here say to 30:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg48.png)

&#10005

As an alternative, we can limit the number of multipliers _s_, say to ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg49.png). Then the multiplicad would build up like this:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg50.png)

&#10005

In the pictures we’ve drawn so far, we’re effectively always deduplicating different occurrences of the same integer. So, for example, the integer 12 can be generated as 1 × 3 × 4 or 1 × 6 × 2 or 1 × 3 × 2 × 2, etc. And in principle we could show each of these “different 12s” separately. But in our [deduplicated graph](https://writings.stephenwolfram.com/2021/09/even-beyond-physics-introducing-multicomputation-as-a-fourth-general-paradigm-for-theoretical-science/#the-formal-structure-of-multicomputation), only a single 12 appears—with the different possible decompositions of 12 being reflected in the presence of multiple paths that lead to the 12.

Sometimes the structure we get is richer—if much bigger—when we don’t immediately do deduplication. For example, if we allow any number of multipliers (i.e. take ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg51.png)) then after just 1 step we will get all integers—and if we do deduplication, then this will be the end of our graph, because we “already have all the integers”. But if we don’t do deduplication, we’ll get a slightly more complicated picture, that begins like this:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg52.png)

&#10005

The “topological” structure of this graph is now straightforward, but its “labeling” with numbers is less so—and if we ask, for example, where a particular number appears after _t_ steps, this can be more complicated.

Imagine that we are looking only at the subtrees associated with up to _s_ multipliers at the first step—or, equivalently, that we are looking at the rulial multiway system “truncated” with only _s_ rules. Which numbers will appear after ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg53.png) steps? The answer is that it will be precisely those numbers that show up in an _s_ × _s_ multiplication table where we start from ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg54.png):

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg55.png)

&#10005

Clearly no primes appear here, but some numbers can appear multiple times (e.g. 12 appears 4 times). In general, the number of times that the number ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg56.png) will show up is the number of proper divisors it has, or [DivisorSigma](http://reference.wolfram.com/language/ref/DivisorSigma.html)[0, _n_]–2:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg57.png)

&#10005

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg58.png)

&#10005

We can continue this, to ask how many times a given number _n_ will occur at a particular step _t_:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg59.png)

&#10005

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg60.png)

&#10005

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg61.png)

&#10005

We can think of these results as being determined by the number of times that _n_ appears in an _s_ × _s_ × _s_… (_t_ times) multiplication array. Alternatively, to know the results for a given number _n_, we can look at all the ways _n_ can be decomposed into factors. For ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg62.png), for example, we would have:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg63.png)

&#10005

And from this we can deduce that 12 appears once at ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg64.png) (i.e. with 1 factor), 4 times at ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg65.png) (i.e. with 2 factors) and 3 times at ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg66.png) (i.e. with 3 factors).

The full multiplicad is formed by taking the limits ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg67.png) and ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg68.png) (as well as what is essentially the limit ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg69.png) for an infinite set of possible initial conditions). As we can see, our “finite perception” of the multiplicad will be different depending on how we sample it in _s_ and _t_.

As an example, let’s consider what happens for given _s_ as a function of _t_. For ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg70.png), we simply have powers of 2:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg71.png)

&#10005

For ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg72.png), where can multiply by both 2 and 3, we get:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg73.png)

&#10005

In studying multiway systems, it is often of interest to ask about the [growth rates of the number of states](https://www.wolframphysics.org/technical-introduction/the-updating-process-for-string-substitution-systems/typical-multiway-graph-structures/) reached over the course of _t_ steps (i.e. the growth rates of volumes of geodesic balls). In the case ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg74.png), the number of states reached by step _t_ is just _t_. For ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg75.png), it’s the triangular numbers _t_ (_t –_ 1)/2:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg76.png)

&#10005

Here are some results for larger _s_:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg77.png)

&#10005

Each of these sequences is generated by a linear recurrence relation with a kernel given by a sequence of signed binomial coefficients. The values for successive _t_ can be represented by polynomials:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg78.png)

&#10005

The leading term in the growth of number of states is then determined by the orders of these polynomials, which turn out to be just [PrimePi](http://reference.wolfram.com/language/ref/PrimePi.html)[_s_]:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg79.png)

&#10005

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg80.png)

&#10005

For the case ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg81.png), we saw above that the multiway graph essentially forms a simple 2D grid. For larger _s_, the graph becomes more complicated, though it still approximates a grid—but in dimension [PrimePi](http://reference.wolfram.com/language/ref/PrimePi.html)[_s_]. (The reason [PrimePi](http://reference.wolfram.com/language/ref/PrimePi.html)[_s_] appears is that in a sense the combining of primes less than _s_ are the largest “drivers” of structure in the multiway graph.)

In our general analysis of multiway graphs, it is common to consider [branchial graphs](https://www.wolframphysics.org/technical-introduction/the-updating-process-for-string-substitution-systems/the-concept-of-branchial-graphs/)—or for a rulial multiway system what we can call [rulial graphs](https://www.wolframphysics.org/bulletins/2020/06/exploring-rulial-space-the-case-of-turing-machines/#rulial-graphs)—obtained by looking at a slice of the multiway graph, effectively for a given _t_, and asking what states are connected by having a common ancestor. The results for ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg82.png) are rather trivial (here shown for ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg83.png), 2, 3):

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg84.png)

&#10005

For ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg85.png) we get:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg86.png)

&#10005

And for ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg87.png) we have:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg88.png)

&#10005

In a sense these pictures show how numbers in the multiplicad can be “laid out in rulial space”. For ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg89.png), the “large-_t_ graph” has a very linear form

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg90.png)

&#10005

and the numbers that appear “from left to right” are arranged more or less in numerical order:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg91.png)

&#10005

For ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg92.png), the result is a 2D-like structure:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg93.png)

&#10005

And again the numbers that appear are roughly arranged in a kind of “numerical sequence”:

![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg94.png)

&#10005

We can then think of this as suggesting that the multiplicad “generates a rulial space” that can be approximately coordinatized purely by the values of the numbers that appear in it. How all this works in the limit ![](https://content.wolfram.com/uploads/sites/43/2021/11/1110swimg95.png) is not clear, though somehow the “1D” sequence of numerical values presumably “snakes through” [PrimePi](http://reference.wolfram.com/language/ref/PrimePi.html)[_s_]-dimensional space as some kind of approximation to a space-filling curve.

It should be noted that we’ve only considered one particular way of sampling the rulial multiway graph as a function of _t_. In general there are many different possible foliations that could be used, all of them giving us in effect a different view of the multiplicad, from a different “reference frame”.

As mentioned at the beginning, the multiplicad is presumably not on its own capable of giving us the full ruliad. But if we change the underlying rules—probably even just [inserting addition as well as multiplication](https://www.wolframphysics.org/bulletins/2021/10/multicomputation-with-numbers-the-case-of-simple-multiway-systems/#multiplication-and-addition)—we’ll potentially get a system that is [capable of universal computation](https://www.wolframscience.com/nks/p673--emulating-cellular-automata-with-other-systems/), and which can therefore generate the full ruliad. Needless to say, the particular representation of the ruliad obtained by the kind of “numerical processes” that we’ve used here may be utterly different from any representation that we would recognize from our perception of the physical universe.

## Thanks & Note

Thanks for discussions of various aspects of the ruliad to Xerxes Arsiwalla, James Boyd, Elise Cawley, Hatem Elshatlawy, Jonathan Gorard and Nik Murzin. Thanks also to Ed Pegg and Joseph Stocke for input about the multiplicad. A [new paper by Xerxes Arsiwalla and Jonathan Gorard](https://arxiv.org/pdf/2111.03460.pdf) discusses in a more technical way some ideas and results related to the ruliad.