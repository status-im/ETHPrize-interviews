# **Qualitative analysis: Education**

Recently, [ETH Prize conducted 84 core Ethereum community developer interviews](https://docs.google.com/spreadsheets/d/1oj9VDHmhxPqQGKUAsISEnejdTnd-D5VAoRnVv2hDn6g/edit?usp=sharing) in an effort to diagnose problems with the developer experience, education and other aspects of the dev tooling.

**These interviews asked a mix of the following questions…**

-   What do you do?
-   What are the tools/libraries/frameworks you use?
-   What are your biggest frustrations?
-   What tools don’t exist at the moment?
-   How do you handle testing?
-   What are the best educational resources?
-   What was the hardest part about learning to develop with Ethereum?
-   Are there any other questions we should be asking?

Interviewed participants included smart contract devs, auditors, security engineers and devop engineers from many teams including: _0x, Aragon, AmbiSafe, Augur, Bounties.network, ChainSage, Consensys, DappHub, Dencetraland, Ethereum Foundation, Giveth, Gnosis, L4, LivePeer, MetaMask, Loom, Mycrypto, Parity, Quantstamp, Quickblocks, Status, Truebit, Truffle, Ujo, Virtue Poker, Wyvern, YC, Zeppelin, eWASM + many more._

**Overview**

Despite the various backgrounds involved, most of the issues raised always led back to one central aspect: Information

More specifically developer education and onboarding.

While the interviews indicated an unsurprising level of friction and frustration surrounding the current developer education available, the problems raised are rather straightforward and in my opinion, are low hanging wins to the Ethereum ecosystem. Nonetheless, these problems are indeed unavoidably painful and thus an even greater reason to solve them early on before too much ‘education/communication debt’ builds up.

**Onboarding education**

Most of the interviewees learnt the ropes of Ethereum from a pool of resources which included: google, youtube, reddit, stack overflow, github issues, source code, documentation, asking others, conversations, twitter and articles spread around the web. It seemed like the standard way to learn things from the internet, but is this the best we can make it? Or is it simply the nature of how things are learnt now a days…

Many who were starting out within the Ethereum ecosystem had trouble grasping the execution model of Ethereum, gaining low level understanding of how Ethereum works, being familiar with the the development environment and conceptualising simple models, such as how gas works. Many also mentioned how they struggled to transition from the a web development mindset to one of software engineering.

> “Building safe smart contracts takes a lot of experience and understanding of game theory, cryptography, complexity skills and an insight into the edge cases that can be used to exploit certain patterns and implementations.”
> 
> “First thing is a soft thing – understanding the difference between a distributed application vs a centralized server application. I’ve taught people some basic blockchain concepts – it doesn’t always make sense to people right away.”

More progressed developers experienced difficulties in optimising code, auditing security vulnerabilities and dealing with undiscovered smart contract edge cases. A popular comment made was about a much needed agreed upon consensus for tooling and framework best practices (eg. when to use what and where).

Another area that was also lacking was in clearly communicating the true value and potential of Ethereum as well as decentralised technologies in general.

While outdated documentation stands separate as more rampant issue amongst projects (many fingers were pointed at Solidity and eWASM), many had found the solidity docs, the yellow paper, beige paper, tutorials such as Cryptozombies, Truffle pet shop, Ethernauts and Zeppelin’s documentation very helpful as jumping off points. Individuals found reading previous github issues as well as previous hacks and exploits being great for understanding the design rationale of tools, projects and libraries. Some also found general primer articles by Preethi Kasireddy helpful.

**On-going education**

Another problem that was discussed by the interviewees included how there was no definitive source of truth for learning how to develop on and understand Ethereum in general. A common complaint included the amount of useless noise that happens as well as how everything was spread all over the place.

> “The resources are pretty spread out, and everything moves so fast it’s hard to keep up today. If you’re using resources from 6 months ago they might be wildly out of date.”

This was often countered by the accessibility of domain experts through gitter chats and github issues. Many indicated how there was a lot of value to be gained from shared expertise and ongoing communication of teams attempting to solve similar problems.

> “When we were starting work on Ethereum stuff we needed to learn. In order to do that well, we needed to talk to different projects as this is ultimately the best way to learn and the Ethereum community can be very welcoming if you just find the right channels.”
> 
> “What other projects do you interact with the most? Building the Ethereum topology, who works with who and which projects? Where there are chasms, so you can get bridge them. Maybe a bounty?”
> 
> “Better communications -> what different teams are building right now. e.g. with Plasma there’s different people around the world pushing forward different implementations.”
> 
> “One of the things I love most about Ethereum in general is the community, so we try to get to know as many other projects as we can and collaborate with them. This is a great way of finding quick answers to hard questions and getting an overview of the best current tools available. -> contact this team for help with X expertise etc.”

Associated with the lack of integrated network of communications, there are calls for collaboration behind agreed upon standards (eg. ERCs) and discovered engineering best practices.

> “I would really like to know if we are all doing the same things to get to where we are, or if there are smarter ways to grow quickly without losing culture/vision. Sometimes it feels like we’re all alone in the jungle, struggling to survive, and it would be awesome if not everyone had to feel this way going forward.”

**Discussion**

These problems mentioned above are mostly related to communications and organisational-type operations. They are straightforward in nature but will be messy to solve. In general, these problems revolved around the ease and availability of information needed by developers throughout their journey: From first hearing about Ethereum to developing their first smart contract to either conducting research or building dapps. While there is a lot of uncharted road ahead, a lot has already been paved. I believe this ‘fleshed out bridge’ of on-boarded education can be built out along the way as the road is paved ahead (eg. With state channels, as techniques and frameworks mature, the question is: How do we deliver this ability to understand and use them to dapp developers?).

How do we enable a small team of five to get together and have the ability to build really powerful game changing dapps?

**What can we potentially do to solve this?**

We need a neutral (non-profit driven) central community championed resource that fully educates and on-boards developers to Ethereum. This would potentially involve clearly communicating the value of Ethereum to thorough deep dives into the various aspects of computer science: computing, virtualisation, distributed systems, cryptography and security engineering (like a CS degree). Ideally, this ‘course’ or ‘education’ resource is intertwined with tutorials and hands on activities while ending with jumping-off-points to get people involved in real projects. A non-software development stream could even be created along side this to onboard educators, writers, designers, product managers etc. to get people up to speed.

This requires a team and proper funding. I would personally love to help get a project like this off the ground however I do not have the right depth of experience in software engineering as well as time spent developing decentralised products (I do product & growth). I would love to help a team like this get the right access to funding and the right team members.

// There are many other problems highlighted by the developer interviews which are focused more on developer experience, tooling, security and testing etc. This article only signals one small chunk of the insights discovered. Would love to see more summaries and responses to the information.

Raw transcribed interviews:

[https://github.com/status-im/ETHPrize/tree/master/bounties_report/analysis](https://github.com/status-im/ETHPrize/tree/master/bounties_report/analysis)

Organised excel:

[https://docs.google.com/spreadsheets/d/1oj9VDHmhxPqQGKUAsISEnejdTnd-D5VAoRnVv2hDn6g](https://docs.google.com/spreadsheets/d/1oj9VDHmhxPqQGKUAsISEnejdTnd-D5VAoRnVv2hDn6g)

Original link: https://emerald.ws/the-current-state-of-ethereum-education/

