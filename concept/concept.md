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
3. Floor Squasher (trap)
4. Slime (monster)
5. Viking? (monster)
6. Small Flame (monster)
7. Big Flame (monster)
8. Ninja (monster)
9. Yeti (monster)
10. Magician (monster)
11. Transporter (monster)
12. Death bird (monster)
13. Dragon (boss)

| Item | Moves | Special |
| ---- | ----- | ----- |
| Spike Trap | Three-turn progression | kills all standing on it when activate |
| Flame Thrower | Three-turn progression | kills all in path when activated |
| Floor Squasher | Three turn progression | kills all by squashing against ceiling |
| Slime | One LRUD | Player can only move max one square after killing |
| Viking | One Diagonal | None |
| Small Flame | One/Two LRUD | Sprays flame one square LRUD after death |
| Big Flame | One LRUD | Player can't kill, sprays flame across 9 squares after death |
| Ninja | 2x1 (Chess Knight) | None |
| Yeti | One LRUD | Freezes all monsters for two turns when killed |
| Magician | One LRUD or diagonal | Casts spell that wraps protective bubble around random monsters |
| Transporter | One LRUD | If on same row in line of site, swaps location with player with transport ray |
| Death bird | One LRUD | If on smae row in line of site, kills player with death ray |
| Dragon | One LRUD | See below |

The monsters appear on later levels - e.g. Death bird never appears on the first level.

The Dragon appears on level 10.
It starts in the center of the level, and sleeps for 5 turns with a count-down.
The player must sneek past it to the treasure during these first 5 turns.
It then wakes up, and starts chasing the player.
They need to use the walls to escape it.
Each turn, it shoots flame into the the column in front of it - for three rows (same, one up, one down).