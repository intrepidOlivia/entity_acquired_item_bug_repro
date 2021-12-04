# Minecraft Scripting entity_acquired_item Bug

Reproduction case for a bug in Minecraft Bedrock's experimental scripting system.

## Description of the bug:

The `entity_acquired_item` event does not fire when it should. Only the `pick_up` acquisition event makes the server event fire, but this is a bug because multiple acquisition types are suggested to be available for the `acquisition_method` property of the event data, and  [the scripting documentation](https://bedrock.dev/docs/stable/Scripting#minecraft%3Aentity_acquired_item) explicitly lists villager trading as an example of when this event should fire.

## How to repro:

1. Download or clone this repo to `development_behavior_packs` in your Minecraft folder.
2. Start the game and add the "Entity Acquired Item bug" Behavior Pack to a world.
3. Make sure "Additional Modding Capabilities" is toggled On in the world's Game settings.
4. Ensure that the script is working by dropping an item on the ground and picking it up (a message should appear in the chat window).
5. The bug is when the message does not appear in the chat window on acquiring an item. It reproduces in the following cases:
- Making a trade with a villager
- Creating something with the crafting table
- Retrieving an item from a chest.
