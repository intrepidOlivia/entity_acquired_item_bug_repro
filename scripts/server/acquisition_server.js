const acquireItemSystem = server.registerSystem(0, 0);

acquireItemSystem.initialize = function () {
    this.listenForEvent('minecraft:entity_acquired_item', eventData => this.onItemAcquired(eventData));
};

acquireItemSystem.onItemAcquired = function (eventData) {
    this.sendChatMessage(`Entity ${eventData.data.entity.id} acquired item ${eventData.data.item_stack.item} via ${eventData.data.acquisition_method}`);
};

acquireItemSystem.sendChatMessage = function (message) {
    let eventData = this.createEventData("minecraft:display_chat_event");
    if (eventData) {
        eventData.data.message = message;
        this.broadcastEvent("minecraft:display_chat_event", eventData);
    }
};