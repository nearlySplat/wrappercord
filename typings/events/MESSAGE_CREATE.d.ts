import { GatewayMessageCreateDispatch } from 'discord-api-types';
import { WebSocketManager } from '../ws';
export default function (manager: WebSocketManager, data: GatewayMessageCreateDispatch): void;
