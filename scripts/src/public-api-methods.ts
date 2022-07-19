import { methodsWithCustomTypes } from "../../src/typed-method-types/mod.ts";

// https://api.slack.com/methods
// These are all of the public Slack API methods
export const getPublicAPIMethods = () => {
  const publicAPIMethods = [
    "admin.analytics.getFile",
    "admin.apps.approve",
    "admin.apps.clearResolution",
    "admin.apps.restrict",
    "admin.apps.uninstall",
    "admin.apps.approved.list",
    "admin.apps.requests.cancel",
    "admin.apps.requests.list",
    "admin.apps.restricted.list",
    "admin.auth.policy.assignEntities",
    "admin.auth.policy.getEntities",
    "admin.auth.policy.removeEntities",
    "admin.barriers.create",
    "admin.barriers.delete",
    "admin.barriers.list",
    "admin.barriers.update",
    "admin.conversations.archive",
    "admin.conversations.convertToPrivate",
    "admin.conversations.create",
    "admin.conversations.delete",
    "admin.conversations.disconnectShared",
    "admin.conversations.getConversationPrefs",
    "admin.conversations.getCustomRetention",
    "admin.conversations.getTeams",
    "admin.conversations.invite",
    "admin.conversations.removeCustomRetention",
    "admin.conversations.rename",
    "admin.conversations.search",
    "admin.conversations.setConversationPrefs",
    "admin.conversations.setCustomRetention",
    "admin.conversations.setTeams",
    "admin.conversations.unarchive",
    "admin.conversations.ekm.listOriginalConnectedChannelInfo",
    "admin.conversations.restrictAccess.addGroup",
    "admin.conversations.restrictAccess.listGroups",
    "admin.conversations.restrictAccess.removeGroup",
    "admin.emoji.add",
    "admin.emoji.addAlias",
    "admin.emoji.list",
    "admin.emoji.remove",
    "admin.emoji.rename",
    "admin.inviteRequests.approve",
    "admin.inviteRequests.deny",
    "admin.inviteRequests.list",
    "admin.inviteRequests.approved.list",
    "admin.inviteRequests.denied.list",
    "admin.teams.admins.list",
    "admin.teams.create",
    "admin.teams.list",
    "admin.teams.owners.list",
    "admin.teams.settings.info",
    "admin.teams.settings.setDefaultChannels",
    "admin.teams.settings.setDescription",
    "admin.teams.settings.setDiscoverability",
    "admin.teams.settings.setIcon",
    "admin.teams.settings.setName",
    "admin.usergroups.addChannels",
    "admin.usergroups.addTeams",
    "admin.usergroups.listChannels",
    "admin.usergroups.removeChannels",
    "admin.users.assign",
    "admin.users.invite",
    "admin.users.list",
    "admin.users.remove",
    "admin.users.setAdmin",
    "admin.users.setExpiration",
    "admin.users.setOwner",
    "admin.users.setRegular",
    "admin.users.session.clearSettings",
    "admin.users.session.getSettings",
    "admin.users.session.invalidate",
    "admin.users.session.list",
    "admin.users.session.reset",
    "admin.users.session.resetBulk",
    "admin.users.session.setSettings",
    "admin.users.unsupportedVersions.export",
    "api.test",
    "apps.connections.open",
    "apps.event.authorizations.list",
    "apps.manifest.create",
    "apps.manifest.delete",
    "apps.manifest.export",
    "apps.manifest.update",
    "apps.manifest.validate",
    "apps.uninstall",
    "auth.revoke",
    "auth.test",
    "auth.teams.list",
    "bookmarks.add",
    "bookmarks.edit",
    "bookmarks.list",
    "bookmarks.remove",
    "bots.info",
    "calls.add",
    "calls.end",
    "calls.info",
    "calls.update",
    "calls.participants.add",
    "calls.participants.remove",
    "chat.delete",
    "chat.deleteScheduledMessage",
    "chat.getPermalink",
    "chat.meMessage",
    "chat.postEphemeral",
    "chat.postMessage",
    "chat.scheduleMessage",
    "chat.unfurl",
    "chat.update",
    "chat.scheduledMessages.list",
    "conversations.acceptSharedInvite",
    "conversations.approveSharedInvite",
    "conversations.archive",
    "conversations.close",
    "conversations.create",
    "conversations.declineSharedInvite",
    "conversations.history",
    "conversations.info",
    "conversations.invite",
    "conversations.inviteShared",
    "conversations.join",
    "conversations.kick",
    "conversations.leave",
    "conversations.list",
    "conversations.listConnectInvites",
    "conversations.mark",
    "conversations.members",
    "conversations.open",
    "conversations.rename",
    "conversations.replies",
    "conversations.setPurpose",
    "conversations.setTopic",
    "conversations.unarchive",
    "dialog.open",
    "dnd.endDnd",
    "dnd.endSnooze",
    "dnd.info",
    "dnd.setSnooze",
    "dnd.teamInfo",
    "emoji.list",
    "enterprise.auth.idpconfig.apply",
    "enterprise.auth.idpconfig.get",
    "enterprise.auth.idpconfig.list",
    "enterprise.auth.idpconfig.remove",
    "enterprise.auth.idpconfig.set",
    "files.comments.delete",
    "files.delete",
    "files.info",
    "files.list",
    "files.revokePublicURL",
    "files.sharedPublicURL",
    "files.upload",
    "files.remote.add",
    "files.remote.info",
    "files.remote.list",
    "files.remote.remove",
    "files.remote.share",
    "files.remote.update",
    "migration.exchange",
    "oauth.access",
    "oauth.v2.access",
    "oauth.v2.exchange",
    "openid.connect.token",
    "openid.connect.userInfo",
    "pins.add",
    "pins.list",
    "pins.remove",
    "reactions.add",
    "reactions.get",
    "reactions.list",
    "reactions.remove",
    "reminders.add",
    "reminders.complete",
    "reminders.delete",
    "reminders.info",
    "reminders.list",
    "rtm.connect",
    "rtm.start",
    "search.all",
    "search.files",
    "search.messages",
    "stars.add",
    "stars.list",
    "stars.remove",
    "team.accessLogs",
    "team.billableInfo",
    "team.info",
    "team.integrationLogs",
    "team.billing.info",
    "team.preferences.list",
    "team.profile.get",
    "tooling.tokens.rotate",
    "usergroups.create",
    "usergroups.disable",
    "usergroups.enable",
    "usergroups.list",
    "usergroups.update",
    "usergroups.users.list",
    "usergroups.users.update",
    "users.conversations",
    "users.deletePhoto",
    "users.getPresence",
    "users.identity",
    "users.info",
    "users.list",
    "users.lookupByEmail",
    "users.setActive",
    "users.setPhoto",
    "users.setPresence",
    "users.profile.get",
    "users.profile.set",
    "views.open",
    "views.publish",
    "views.push",
    "views.update",
    "workflows.stepCompleted",
    "workflows.stepFailed",
    "workflows.updateStep",
  ];

  // upcoming platform 2.0 methods we want available but aren't listed quite yet
  const platform2Methods = [
    "functions.completeError",
    "functions.completeSuccess",
    "workflows.triggers.update",
    "workflows.triggers.delete",
  ];

  const methodsSet = new Set([
    ...publicAPIMethods,
    ...platform2Methods,
  ]);

  methodsWithCustomTypes.forEach((customMethod) => {
    methodsSet.delete(customMethod);
  });

  const methods = Array.from(methodsSet);

  methods.sort((a, b) => a.localeCompare(b));

  return methods;
};
