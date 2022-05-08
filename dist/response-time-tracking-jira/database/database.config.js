"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Shard@123!!',
    database: 'carestack_pms',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map