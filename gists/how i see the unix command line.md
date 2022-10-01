---
gists:
  - id: 88e29cabd85f710168ad836523fde914
    url: 'https://gist.github.com/88e29cabd85f710168ad836523fde914'
    createdAt: '2022-09-28T08:37:00Z'
    updatedAt: '2022-09-28T08:37:00Z'
    filename: how i see the unix command line.md
    isPublic: true
---
# How I see the unix command line

**Important :** When I use the term "command line", i really mean "unix command line", or at least "unix-like command line".

## The command line

The [command line](https://en.wikipedia.org/wiki/Command-line_interface) is well known to be a very powerfull tool for programmers : it allows the user to combine quickly, easily and in rich ways basically any utility, and therefore to automate and customize a lot of actions. It also permits a full control over what you do on your machine, since you can basically do anything.

But it is also a rough interface for anyone used to the today's beautifull IDEs, where any action is one or two clicks of your mouse away, and where everything is "_plug and play_". Such smoothed interfaces exchange ability to automate, customize and combine things for ease of doing things that are already programmed. This is a serious advantage, especially for beginners, that can focus on what is really important (actually learning a programming language). And don't get me wrong : some IDEs have incredible features (like the ones from JetBrains), but even if they do _these things very well_, you are not able to change anything and to automate as much as you could with command line. The philosophy is different, for different usecases and different persons.

So here is a quick recap of why you should use the command line :
 - _control_ over basically everything (fine grain control over files, programs etc.)
 - _combine_ all the programs you have (all mechanisms to commpose tools)
 - _automate_ the actions you do often or that are annoying or long (kind of the result of _control_ of _combine_)
And here is what the graphical apps are good at :
 - ease of learning (just click buttons)
 - quickly find how to do something (just click buttons)
 - have some proprietary ~~garbage~~ features like in the JetBrains IDEs

## The good, the bad and the ugly

Now that we know what are the powers of the command line, we can easily find what tools are actually good or bad for it.

Just once more, the command line is about _control_, _combine_ and _automate_.
So any good utility that integrates with the command line should have these properties, right ? 
 - _control_ : especially, fine control over specific things 
 - _combine_ : hability to integrate with other apps via the different standard mechanisms
 - _automate_ : again a mix of _control_ and _combine_

Obvious examples of good apps for the command line are the ones that are often shipped with it : basic ones like `cat`, `ls` (that are almost mandatory for using the command line), or more advanced ones like `grep`, `sort`, `uniq`, `sed`, `awk`...
All of these have common properties : they can combine with other apps in many ways, they do a specific thing and allow fine control of that specific action.

You also have "bad" command line apps : apps that don't combine well with other ones, or that don't allow you to control accurately something.

I added another section : the "ugly" apps, in my mind these are the apps that integrate quite well, but that feel "hacky", or weird, because they are _just working_, but not with proper foundations, neither with any sability or robustness : they are tools that are just a little more complex than an automation, but not as well made as real apps. We all have faced at least one of these apps, that often do something very specific, and they work, but you know that they probably won't resist a lot of updates on anything. I don't put them in the class of "bad" apps, because they can be perfectly integrated in the command line interface, but i call them "ugly" because they obviously should be avoided (it is always a problem to rely on dangerous software, so you may search for better alternatives, or create one yourself).

The usual way to describe what a "good" app should do is the _unix philosophy_ : in unix, apps should "do one thing, but do it well", and then be able to connect with other tools. What i call "bad tools" are either tools that do too much things (but that is not always a problem, it depends), and most importantly that don't connect well with other apps.

### The case of Emacs

Emacs is an app that runs in the command line (but now also has a gui). It is an extremely powerfull prograamming environment, that basically allows you to do almost everything in emacs (calendar, browser, note-taking, emails, music...)
Emacs started as an advanced text editor, but with the years it grew and got to the point where it can contain everything. 

According to the unix philosophy of "do one thing, but do it well", Emacs should be considered as a "bad" command line app, right ?

The special thing with emacs is that the environment is not anymore the command line, but emacs itself. Emacs has _control_, _composition_ and _automatisation_, but not _with other unix apps_ : it has these between Emacs packages. So, for example, in emacs, you can easily connect you email client, your calendar, your note taking system etc.

What is important to understand is that this philosophy of _control_, _composition_ and _automatisation_ is not at all limited to the command line (even if it is one of the places where it is the most important, and therefore the most implemented) : it can be realized anywhere to make any environment better.


## ???
example of apps that use the command line powers very well

## Conclusion




> **Disclaimer :**
> In this article, I try to explain what I understand of some concepts and tools, in the hope that it will help some people to understand and use them.
> It is widely based on my personnal opinions. You may not agree with me, and if so I would be pleased to know your opinion !
