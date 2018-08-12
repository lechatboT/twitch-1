import Channel, { ChannelData } from '../Channel/Channel';
import { NonEnumerable } from '../../Toolkit/Decorators';
import TwitchClient from '../../TwitchClient';

/** @private */
export interface UserFollowData {
	created_at: string;
	notifications: boolean;
	channel: ChannelData;
}

/**
 * A relation of a previously given user following a channel.
 */
export default class UserFollow {
	@NonEnumerable private readonly _client: TwitchClient;

	/** @private */
	constructor(private readonly _data: UserFollowData, client: TwitchClient) {
		this._client = client;
	}

	/**
	 * The followed channel.
	 */
	get channel() {
		return new Channel(this._data.channel, this._client);
	}
}
