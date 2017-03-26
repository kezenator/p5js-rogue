# Concept: p5js-rogue

p5js-rogue is a small rogue-like game to achieve somthing small and complete
in Javascript using p5js.

It's based on an Android/iOS game "MicRogue" by Cresent Moon Games:
http://crescentmoongames.com/

## High-level concept

You come to a dungeon/tower. You want to collect the treasure.
You enter, and progress through 10 levels.
At the end you find the treasure - but also a dragon!
You need to collect the treasure and escape but through the ten
levels to reach freedom.

## Gameplay

Each level is a small 2D grid of tiles.
You need to progress from one corner to the diagonal opposite.
Gameplay in the "MicRogue" was touch-screen based - but
keyboard or mouse would also be possible.

Basically, the only moves are
 1) Move to available square
 2) Don't move, and face the other way.

There are walls, traps and monsters to block your progress.

Gameplay is taken in turns - first the player takes a turn.
Then evey trap and monster takes a turn, before the player
is able to take a turn again.

## Player

The player can move zero, one or two squares
left, right, up or down on each move.

They can't move through walls or monsters.

They can jump on all monsters, except as noted
below for each element.

## Other Elements

The following other elements are in the game.

1. Spike-trap (trap)
2. Flame Thrower (trap)
3. Slime (monster)
4. Viking? (monster)
5. Small Flame (monster)
6. Big Flame (monster)
7. Ninja (monster)
8. Yeti (monster)
9. Alien? (monster)

| Item | Moves | Special |
| ---- | ----- | ----- |
| Spike Trap | Three-turn progression | kills all standing on it when activate |
| Flame Thrower | Three-turn progression | kills all in path when activated |
| Slime | One LRUD | Player can only move max one square after killing |
| Viking | One Diagonal | None |
| Small Flame | Two LRUD | None |
| Big Flame | One LRUD or diagonal | Can't be killed |
| Ninja | 2x1 (Chess Knight) | None |
| Yeti | TODO | TODO |
| Alien | TODO | TODO |
