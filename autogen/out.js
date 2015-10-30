class XTypeBuffer extends CursorBuffer {
    readBOOL() {
        return this.readUInt8();
    }

    writeBOOL() {
        this.writeUInt8(...arguments);
    }

    readBYTE() {
        return this.readUInt8();
    }

    writeBYTE() {
        this.writeUInt8(...arguments);
    }

    readCARD8() {
        return this.readUInt8();
    }

    writeCARD8() {
        this.writeUInt8(...arguments);
    }

    readINT8() {
        return this.readInt8();
    }

    writeINT8() {
        this.writeInt8(...arguments);
    }

    readCARD16() {
        return this.readUInt16();
    }

    writeCARD16() {
        this.writeUInt16(...arguments);
    }

    readINT16() {
        return this.readInt16();
    }

    writeINT16() {
        this.writeInt16(...arguments);
    }

    readCARD32() {
        return this.readUInt32();
    }

    writeCARD32() {
        this.writeUInt32(...arguments);
    }

    readINT32() {
        return this.readInt32();
    }

    writeINT32() {
        this.writeInt32(...arguments);
    }

    readVISUALID() {
        return this.readCARD32();
    }

    writeVISUALID() {
        this.writeCARD32(...arguments);
    }

    readTIMESTAMP() {
        return this.readCARD32();
    }

    writeTIMESTAMP() {
        this.writeCARD32(...arguments);
    }

    readKEYSYM() {
        return this.readCARD32();
    }

    writeKEYSYM() {
        this.writeCARD32(...arguments);
    }

    readKEYCODE() {
        return this.readCARD8();
    }

    writeKEYCODE() {
        this.writeCARD8(...arguments);
    }

    readBUTTON() {
        return this.readCARD8();
    }

    writeBUTTON() {
        this.writeCARD8(...arguments);
    }

    readWINDOW() {
        return this.readCARD32();
    }

    writeWINDOW() {
        this.writeCARD32(...arguments);
    }

    readPIXMAP() {
        return this.readCARD32();
    }

    writePIXMAP() {
        this.writeCARD32(...arguments);
    }

    readCURSOR() {
        return this.readCARD32();
    }

    writeCURSOR() {
        this.writeCARD32(...arguments);
    }

    readFONT() {
        return this.readCARD32();
    }

    writeFONT() {
        this.writeCARD32(...arguments);
    }

    readGCONTEXT() {
        return this.readCARD32();
    }

    writeGCONTEXT() {
        this.writeCARD32(...arguments);
    }

    readCOLORMAP() {
        return this.readCARD32();
    }

    writeCOLORMAP() {
        this.writeCARD32(...arguments);
    }

    readATOM() {
        return this.readCARD32();
    }

    writeATOM() {
        this.writeCARD32(...arguments);
    }

    readDRAWABLE() {
        return this.readCARD32();
    }

    writeDRAWABLE() {
        this.writeCARD32(...arguments);
    }

    readFONTABLE() {
        return this.readCARD32();
    }

    writeFONTABLE() {
        this.writeCARD32(...arguments);
    }

    static xids = new Map([
        ["WINDOW", null],
        ["PIXMAP", null],
        ["CURSOR", null],
        ["FONT", null],
        ["GCONTEXT", null],
        ["COLORMAP", null],
        ["ATOM", null],
        ["DRAWABLE", new Set(["WINDOW", "PIXMAP"])],
        ["FONTABLE", new Set(["FONT", "GCONTEXT"])]
    ]);

    readCHAR2B() {
        var obj = {};
        obj.byte1 = this.readCARD8();
        obj.byte2 = this.readCARD8();
        return obj;
    }

    writeCHAR2B(obj) {
        this.writeCARD8(obj.byte1);
        this.writeCARD8(obj.byte2);
    }

    readPOINT() {
        var obj = {};
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        return obj;
    }

    writePOINT(obj) {
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
    }

    readRECTANGLE() {
        var obj = {};
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        return obj;
    }

    writeRECTANGLE(obj) {
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
    }

    readARC() {
        var obj = {};
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.angle1 = this.readINT16();
        obj.angle2 = this.readINT16();
        return obj;
    }

    writeARC(obj) {
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
        this.writeINT16(obj.angle1);
        this.writeINT16(obj.angle2);
    }

    readFORMAT() {
        var obj = {};
        obj.depth = this.readCARD8();
        obj.bits_per_pixel = this.readCARD8();
        obj.scanline_pad = this.readCARD8();
        this.moveCursor(5);
        return obj;
    }

    writeFORMAT(obj) {
        this.writeCARD8(obj.depth);
        this.writeCARD8(obj.bits_per_pixel);
        this.writeCARD8(obj.scanline_pad);
        this.moveCursor(5);
    }

    readVISUALTYPE() {
        var obj = {};
        obj.visual_id = this.readVISUALID();
        obj.class = this.readCARD8();
        obj.bits_per_rgb_value = this.readCARD8();
        obj.colormap_entries = this.readCARD16();
        obj.red_mask = this.readCARD32();
        obj.green_mask = this.readCARD32();
        obj.blue_mask = this.readCARD32();
        this.moveCursor(4);
        return obj;
    }

    writeVISUALTYPE(obj) {
        this.writeVISUALID(obj.visual_id);
        this.writeCARD8(obj.class);
        this.writeCARD8(obj.bits_per_rgb_value);
        this.writeCARD16(obj.colormap_entries);
        this.writeCARD32(obj.red_mask);
        this.writeCARD32(obj.green_mask);
        this.writeCARD32(obj.blue_mask);
        this.moveCursor(4);
    }

    readDEPTH() {
        var obj = {};
        obj.depth = this.readCARD8();
        this.moveCursor(1);
        obj.visuals_len = this.readCARD16();
        this.moveCursor(4);
        var visuals_length = obj.visuals_len;
        obj.visuals = [];

        for (let i = 0; i < visuals_length; i++) {
            obj.visuals.push(this.readVISUALTYPE());
        }

        return obj;
    }

    writeDEPTH(obj) {
        obj.visuals_len = obj.visuals.length;
        this.writeCARD8(obj.depth);
        this.moveCursor(1);
        this.writeCARD16(obj.visuals_len);
        this.moveCursor(4);
        var visuals_length = obj.visuals_len;

        for (let i = 0; i < visuals_length; i++) {
            this.writeVISUALTYPE(obj.visuals[i]);
        }
    }

    readSCREEN() {
        var obj = {};
        obj.root = this.readWINDOW();
        obj.default_colormap = this.readCOLORMAP();
        obj.white_pixel = this.readCARD32();
        obj.black_pixel = this.readCARD32();
        obj.current_input_masks = this.readCARD32();
        obj.width_in_pixels = this.readCARD16();
        obj.height_in_pixels = this.readCARD16();
        obj.width_in_millimeters = this.readCARD16();
        obj.height_in_millimeters = this.readCARD16();
        obj.min_installed_maps = this.readCARD16();
        obj.max_installed_maps = this.readCARD16();
        obj.root_visual = this.readVISUALID();
        obj.backing_stores = this.readBYTE();
        obj.save_unders = this.readBOOL();
        obj.root_depth = this.readCARD8();
        obj.allowed_depths_len = this.readCARD8();
        var allowed_depths_length = obj.allowed_depths_len;
        obj.allowed_depths = [];

        for (let i = 0; i < allowed_depths_length; i++) {
            obj.allowed_depths.push(this.readDEPTH());
        }

        return obj;
    }

    writeSCREEN(obj) {
        obj.allowed_depths_len = obj.allowed_depths.length;
        this.writeWINDOW(obj.root);
        this.writeCOLORMAP(obj.default_colormap);
        this.writeCARD32(obj.white_pixel);
        this.writeCARD32(obj.black_pixel);
        this.writeCARD32(obj.current_input_masks);
        this.writeCARD16(obj.width_in_pixels);
        this.writeCARD16(obj.height_in_pixels);
        this.writeCARD16(obj.width_in_millimeters);
        this.writeCARD16(obj.height_in_millimeters);
        this.writeCARD16(obj.min_installed_maps);
        this.writeCARD16(obj.max_installed_maps);
        this.writeVISUALID(obj.root_visual);
        this.writeBYTE(obj.backing_stores);
        this.writeBOOL(obj.save_unders);
        this.writeCARD8(obj.root_depth);
        this.writeCARD8(obj.allowed_depths_len);
        var allowed_depths_length = obj.allowed_depths_len;

        for (let i = 0; i < allowed_depths_length; i++) {
            this.writeDEPTH(obj.allowed_depths[i]);
        }
    }

    readSetupRequest() {
        var obj = {};
        obj.byte_order = this.readCARD8();
        this.moveCursor(1);
        obj.protocol_major_version = this.readCARD16();
        obj.protocol_minor_version = this.readCARD16();
        obj.authorization_protocol_name_len = this.readCARD16();
        obj.authorization_protocol_data_len = this.readCARD16();
        this.moveCursor(2);
        var authorization_protocol_name_length = obj.authorization_protocol_name_len;
        obj.authorization_protocol_name = [];

        for (let i = 0; i < authorization_protocol_name_length; i++) {
            obj.authorization_protocol_name.push(this.readchar());
        }

        var authorization_protocol_data_length = obj.authorization_protocol_data_len;
        obj.authorization_protocol_data = [];

        for (let i = 0; i < authorization_protocol_data_length; i++) {
            obj.authorization_protocol_data.push(this.readchar());
        }

        return obj;
    }

    writeSetupRequest(obj) {
        obj.authorization_protocol_name_len = obj.authorization_protocol_name.length;
        obj.authorization_protocol_data_len = obj.authorization_protocol_data.length;
        this.writeCARD8(obj.byte_order);
        this.moveCursor(1);
        this.writeCARD16(obj.protocol_major_version);
        this.writeCARD16(obj.protocol_minor_version);
        this.writeCARD16(obj.authorization_protocol_name_len);
        this.writeCARD16(obj.authorization_protocol_data_len);
        this.moveCursor(2);
        var authorization_protocol_name_length = obj.authorization_protocol_name_len;

        for (let i = 0; i < authorization_protocol_name_length; i++) {
            this.writechar(obj.authorization_protocol_name[i]);
        }

        var authorization_protocol_data_length = obj.authorization_protocol_data_len;

        for (let i = 0; i < authorization_protocol_data_length; i++) {
            this.writechar(obj.authorization_protocol_data[i]);
        }
    }

    readSetupFailed() {
        var obj = {};
        obj.status = this.readCARD8();
        obj.reason_len = this.readCARD8();
        obj.protocol_major_version = this.readCARD16();
        obj.protocol_minor_version = this.readCARD16();
        obj.length = this.readCARD16();
        var reason_length = obj.reason_len;
        obj.reason = [];

        for (let i = 0; i < reason_length; i++) {
            obj.reason.push(this.readchar());
        }

        return obj;
    }

    writeSetupFailed(obj) {
        obj.reason_len = obj.reason.length;
        this.writeCARD8(obj.status);
        this.writeCARD8(obj.reason_len);
        this.writeCARD16(obj.protocol_major_version);
        this.writeCARD16(obj.protocol_minor_version);
        this.writeCARD16(obj.length);
        var reason_length = obj.reason_len;

        for (let i = 0; i < reason_length; i++) {
            this.writechar(obj.reason[i]);
        }
    }

    readSetupAuthenticate() {
        var obj = {};
        obj.status = this.readCARD8();
        this.moveCursor(5);
        obj.length = this.readCARD16();
        var reason_length = (obj.length * 4);
        obj.reason = [];

        for (let i = 0; i < reason_length; i++) {
            obj.reason.push(this.readchar());
        }

        return obj;
    }

    writeSetupAuthenticate(obj) {
        obj.reason_len = obj.reason.length;
        this.writeCARD8(obj.status);
        this.moveCursor(5);
        this.writeCARD16(obj.length);
        var reason_length = (obj.length * 4);

        for (let i = 0; i < reason_length; i++) {
            this.writechar(obj.reason[i]);
        }
    }

    readSetup() {
        var obj = {};
        obj.status = this.readCARD8();
        this.moveCursor(1);
        obj.protocol_major_version = this.readCARD16();
        obj.protocol_minor_version = this.readCARD16();
        obj.length = this.readCARD16();
        obj.release_number = this.readCARD32();
        obj.resource_id_base = this.readCARD32();
        obj.resource_id_mask = this.readCARD32();
        obj.motion_buffer_size = this.readCARD32();
        obj.vendor_len = this.readCARD16();
        obj.maximum_request_length = this.readCARD16();
        obj.roots_len = this.readCARD8();
        obj.pixmap_formats_len = this.readCARD8();
        obj.image_byte_order = this.readCARD8();
        obj.bitmap_format_bit_order = this.readCARD8();
        obj.bitmap_format_scanline_unit = this.readCARD8();
        obj.bitmap_format_scanline_pad = this.readCARD8();
        obj.min_keycode = this.readKEYCODE();
        obj.max_keycode = this.readKEYCODE();
        this.moveCursor(4);
        var vendor_length = obj.vendor_len;
        obj.vendor = [];

        for (let i = 0; i < vendor_length; i++) {
            obj.vendor.push(this.readchar());
        }

        var pixmap_formats_length = obj.pixmap_formats_len;
        obj.pixmap_formats = [];

        for (let i = 0; i < pixmap_formats_length; i++) {
            obj.pixmap_formats.push(this.readFORMAT());
        }

        var roots_length = obj.roots_len;
        obj.roots = [];

        for (let i = 0; i < roots_length; i++) {
            obj.roots.push(this.readSCREEN());
        }

        return obj;
    }

    writeSetup(obj) {
        obj.vendor_len = obj.vendor.length;
        obj.pixmap_formats_len = obj.pixmap_formats.length;
        obj.roots_len = obj.roots.length;
        this.writeCARD8(obj.status);
        this.moveCursor(1);
        this.writeCARD16(obj.protocol_major_version);
        this.writeCARD16(obj.protocol_minor_version);
        this.writeCARD16(obj.length);
        this.writeCARD32(obj.release_number);
        this.writeCARD32(obj.resource_id_base);
        this.writeCARD32(obj.resource_id_mask);
        this.writeCARD32(obj.motion_buffer_size);
        this.writeCARD16(obj.vendor_len);
        this.writeCARD16(obj.maximum_request_length);
        this.writeCARD8(obj.roots_len);
        this.writeCARD8(obj.pixmap_formats_len);
        this.writeCARD8(obj.image_byte_order);
        this.writeCARD8(obj.bitmap_format_bit_order);
        this.writeCARD8(obj.bitmap_format_scanline_unit);
        this.writeCARD8(obj.bitmap_format_scanline_pad);
        this.writeKEYCODE(obj.min_keycode);
        this.writeKEYCODE(obj.max_keycode);
        this.moveCursor(4);
        var vendor_length = obj.vendor_len;

        for (let i = 0; i < vendor_length; i++) {
            this.writechar(obj.vendor[i]);
        }

        var pixmap_formats_length = obj.pixmap_formats_len;

        for (let i = 0; i < pixmap_formats_length; i++) {
            this.writeFORMAT(obj.pixmap_formats[i]);
        }

        var roots_length = obj.roots_len;

        for (let i = 0; i < roots_length; i++) {
            this.writeSCREEN(obj.roots[i]);
        }
    }

    readTIMECOORD() {
        var obj = {};
        obj.time = this.readTIMESTAMP();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        return obj;
    }

    writeTIMECOORD(obj) {
        this.writeTIMESTAMP(obj.time);
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
    }

    readFONTPROP() {
        var obj = {};
        obj.name = this.readATOM();
        obj.value = this.readCARD32();
        return obj;
    }

    writeFONTPROP(obj) {
        this.writeATOM(obj.name);
        this.writeCARD32(obj.value);
    }

    readCHARINFO() {
        var obj = {};
        obj.left_side_bearing = this.readINT16();
        obj.right_side_bearing = this.readINT16();
        obj.character_width = this.readINT16();
        obj.ascent = this.readINT16();
        obj.descent = this.readINT16();
        obj.attributes = this.readCARD16();
        return obj;
    }

    writeCHARINFO(obj) {
        this.writeINT16(obj.left_side_bearing);
        this.writeINT16(obj.right_side_bearing);
        this.writeINT16(obj.character_width);
        this.writeINT16(obj.ascent);
        this.writeINT16(obj.descent);
        this.writeCARD16(obj.attributes);
    }

    readSTR() {
        var obj = {};
        obj.name_len = this.readCARD8();
        var name_length = obj.name_len;
        obj.name = [];

        for (let i = 0; i < name_length; i++) {
            obj.name.push(this.readchar());
        }

        return obj;
    }

    writeSTR(obj) {
        obj.name_len = obj.name.length;
        this.writeCARD8(obj.name_len);
        var name_length = obj.name_len;

        for (let i = 0; i < name_length; i++) {
            this.writechar(obj.name[i]);
        }
    }

    readSEGMENT() {
        var obj = {};
        obj.x1 = this.readINT16();
        obj.y1 = this.readINT16();
        obj.x2 = this.readINT16();
        obj.y2 = this.readINT16();
        return obj;
    }

    writeSEGMENT(obj) {
        this.writeINT16(obj.x1);
        this.writeINT16(obj.y1);
        this.writeINT16(obj.x2);
        this.writeINT16(obj.y2);
    }

    readCOLORITEM() {
        var obj = {};
        obj.pixel = this.readCARD32();
        obj.red = this.readCARD16();
        obj.green = this.readCARD16();
        obj.blue = this.readCARD16();
        obj.flags = this.readBYTE();
        this.moveCursor(1);
        return obj;
    }

    writeCOLORITEM(obj) {
        this.writeCARD32(obj.pixel);
        this.writeCARD16(obj.red);
        this.writeCARD16(obj.green);
        this.writeCARD16(obj.blue);
        this.writeBYTE(obj.flags);
        this.moveCursor(1);
    }

    readRGB() {
        var obj = {};
        obj.red = this.readCARD16();
        obj.green = this.readCARD16();
        obj.blue = this.readCARD16();
        this.moveCursor(2);
        return obj;
    }

    writeRGB(obj) {
        this.writeCARD16(obj.red);
        this.writeCARD16(obj.green);
        this.writeCARD16(obj.blue);
        this.moveCursor(2);
    }

    readHOST() {
        var obj = {};
        obj.family = this.readCARD8();
        this.moveCursor(1);
        obj.address_len = this.readCARD16();
        var address_length = obj.address_len;
        obj.address = [];

        for (let i = 0; i < address_length; i++) {
            obj.address.push(this.readBYTE());
        }

        return obj;
    }

    writeHOST(obj) {
        obj.address_len = obj.address.length;
        this.writeCARD8(obj.family);
        this.moveCursor(1);
        this.writeCARD16(obj.address_len);
        var address_length = obj.address_len;

        for (let i = 0; i < address_length; i++) {
            this.writeBYTE(obj.address[i]);
        }
    }

    event_readKeyPress() {
        var obj = {};
        obj.detail = this.readKEYCODE();
        obj.time = this.readTIMESTAMP();
        obj.root = this.readWINDOW();
        obj.event = this.readWINDOW();
        obj.child = this.readWINDOW();
        obj.root_x = this.readINT16();
        obj.root_y = this.readINT16();
        obj.event_x = this.readINT16();
        obj.event_y = this.readINT16();
        obj.state = this.readCARD16();
        obj.same_screen = this.readBOOL();
        this.moveCursor(1);
        return obj;
    }

    event_writeKeyPress(obj) {
        this.writeKEYCODE(obj.detail);
        this.writeTIMESTAMP(obj.time);
        this.writeWINDOW(obj.root);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.child);
        this.writeINT16(obj.root_x);
        this.writeINT16(obj.root_y);
        this.writeINT16(obj.event_x);
        this.writeINT16(obj.event_y);
        this.writeCARD16(obj.state);
        this.writeBOOL(obj.same_screen);
        this.moveCursor(1);
    }

    event_readButtonPress() {
        var obj = {};
        obj.detail = this.readBUTTON();
        obj.time = this.readTIMESTAMP();
        obj.root = this.readWINDOW();
        obj.event = this.readWINDOW();
        obj.child = this.readWINDOW();
        obj.root_x = this.readINT16();
        obj.root_y = this.readINT16();
        obj.event_x = this.readINT16();
        obj.event_y = this.readINT16();
        obj.state = this.readCARD16();
        obj.same_screen = this.readBOOL();
        this.moveCursor(1);
        return obj;
    }

    event_writeButtonPress(obj) {
        this.writeBUTTON(obj.detail);
        this.writeTIMESTAMP(obj.time);
        this.writeWINDOW(obj.root);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.child);
        this.writeINT16(obj.root_x);
        this.writeINT16(obj.root_y);
        this.writeINT16(obj.event_x);
        this.writeINT16(obj.event_y);
        this.writeCARD16(obj.state);
        this.writeBOOL(obj.same_screen);
        this.moveCursor(1);
    }

    event_readMotionNotify() {
        var obj = {};
        obj.detail = this.readBYTE();
        obj.time = this.readTIMESTAMP();
        obj.root = this.readWINDOW();
        obj.event = this.readWINDOW();
        obj.child = this.readWINDOW();
        obj.root_x = this.readINT16();
        obj.root_y = this.readINT16();
        obj.event_x = this.readINT16();
        obj.event_y = this.readINT16();
        obj.state = this.readCARD16();
        obj.same_screen = this.readBOOL();
        this.moveCursor(1);
        return obj;
    }

    event_writeMotionNotify(obj) {
        this.writeBYTE(obj.detail);
        this.writeTIMESTAMP(obj.time);
        this.writeWINDOW(obj.root);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.child);
        this.writeINT16(obj.root_x);
        this.writeINT16(obj.root_y);
        this.writeINT16(obj.event_x);
        this.writeINT16(obj.event_y);
        this.writeCARD16(obj.state);
        this.writeBOOL(obj.same_screen);
        this.moveCursor(1);
    }

    event_readEnterNotify() {
        var obj = {};
        obj.detail = this.readBYTE();
        obj.time = this.readTIMESTAMP();
        obj.root = this.readWINDOW();
        obj.event = this.readWINDOW();
        obj.child = this.readWINDOW();
        obj.root_x = this.readINT16();
        obj.root_y = this.readINT16();
        obj.event_x = this.readINT16();
        obj.event_y = this.readINT16();
        obj.state = this.readCARD16();
        obj.mode = this.readBYTE();
        obj.same_screen_focus = this.readBYTE();
        return obj;
    }

    event_writeEnterNotify(obj) {
        this.writeBYTE(obj.detail);
        this.writeTIMESTAMP(obj.time);
        this.writeWINDOW(obj.root);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.child);
        this.writeINT16(obj.root_x);
        this.writeINT16(obj.root_y);
        this.writeINT16(obj.event_x);
        this.writeINT16(obj.event_y);
        this.writeCARD16(obj.state);
        this.writeBYTE(obj.mode);
        this.writeBYTE(obj.same_screen_focus);
    }

    event_readFocusIn() {
        var obj = {};
        obj.detail = this.readBYTE();
        obj.event = this.readWINDOW();
        obj.mode = this.readBYTE();
        this.moveCursor(3);
        return obj;
    }

    event_writeFocusIn(obj) {
        this.writeBYTE(obj.detail);
        this.writeWINDOW(obj.event);
        this.writeBYTE(obj.mode);
        this.moveCursor(3);
    }

    event_readKeymapNotify() {
        var obj = {};
        var keys_length = 31;
        obj.keys = [];

        for (let i = 0; i < keys_length; i++) {
            obj.keys.push(this.readCARD8());
        }

        return obj;
    }

    event_writeKeymapNotify(obj) {
        obj.keys_len = obj.keys.length;
        var keys_length = 31;

        for (let i = 0; i < keys_length; i++) {
            this.writeCARD8(obj.keys[i]);
        }
    }

    event_readExpose() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.x = this.readCARD16();
        obj.y = this.readCARD16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.count = this.readCARD16();
        this.moveCursor(2);
        return obj;
    }

    event_writeExpose(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.window);
        this.writeCARD16(obj.x);
        this.writeCARD16(obj.y);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
        this.writeCARD16(obj.count);
        this.moveCursor(2);
    }

    event_readGraphicsExposure() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.x = this.readCARD16();
        obj.y = this.readCARD16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.minor_opcode = this.readCARD16();
        obj.count = this.readCARD16();
        obj.major_opcode = this.readCARD8();
        this.moveCursor(3);
        return obj;
    }

    event_writeGraphicsExposure(obj) {
        this.moveCursor(1);
        this.writeDRAWABLE(obj.drawable);
        this.writeCARD16(obj.x);
        this.writeCARD16(obj.y);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
        this.writeCARD16(obj.minor_opcode);
        this.writeCARD16(obj.count);
        this.writeCARD8(obj.major_opcode);
        this.moveCursor(3);
    }

    event_readNoExposure() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.minor_opcode = this.readCARD16();
        obj.major_opcode = this.readCARD8();
        this.moveCursor(1);
        return obj;
    }

    event_writeNoExposure(obj) {
        this.moveCursor(1);
        this.writeDRAWABLE(obj.drawable);
        this.writeCARD16(obj.minor_opcode);
        this.writeCARD8(obj.major_opcode);
        this.moveCursor(1);
    }

    event_readVisibilityNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.state = this.readBYTE();
        this.moveCursor(3);
        return obj;
    }

    event_writeVisibilityNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.window);
        this.writeBYTE(obj.state);
        this.moveCursor(3);
    }

    event_readCreateNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.parent = this.readWINDOW();
        obj.window = this.readWINDOW();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.border_width = this.readCARD16();
        obj.override_redirect = this.readBOOL();
        this.moveCursor(1);
        return obj;
    }

    event_writeCreateNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.parent);
        this.writeWINDOW(obj.window);
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
        this.writeCARD16(obj.border_width);
        this.writeBOOL(obj.override_redirect);
        this.moveCursor(1);
    }

    event_readDestroyNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.event = this.readWINDOW();
        obj.window = this.readWINDOW();
        return obj;
    }

    event_writeDestroyNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.window);
    }

    event_readUnmapNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.event = this.readWINDOW();
        obj.window = this.readWINDOW();
        obj.from_configure = this.readBOOL();
        this.moveCursor(3);
        return obj;
    }

    event_writeUnmapNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.window);
        this.writeBOOL(obj.from_configure);
        this.moveCursor(3);
    }

    event_readMapNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.event = this.readWINDOW();
        obj.window = this.readWINDOW();
        obj.override_redirect = this.readBOOL();
        this.moveCursor(3);
        return obj;
    }

    event_writeMapNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.window);
        this.writeBOOL(obj.override_redirect);
        this.moveCursor(3);
    }

    event_readMapRequest() {
        var obj = {};
        this.moveCursor(1);
        obj.parent = this.readWINDOW();
        obj.window = this.readWINDOW();
        return obj;
    }

    event_writeMapRequest(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.parent);
        this.writeWINDOW(obj.window);
    }

    event_readReparentNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.event = this.readWINDOW();
        obj.window = this.readWINDOW();
        obj.parent = this.readWINDOW();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.override_redirect = this.readBOOL();
        this.moveCursor(3);
        return obj;
    }

    event_writeReparentNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.window);
        this.writeWINDOW(obj.parent);
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
        this.writeBOOL(obj.override_redirect);
        this.moveCursor(3);
    }

    event_readConfigureNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.event = this.readWINDOW();
        obj.window = this.readWINDOW();
        obj.above_sibling = this.readWINDOW();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.border_width = this.readCARD16();
        obj.override_redirect = this.readBOOL();
        this.moveCursor(1);
        return obj;
    }

    event_writeConfigureNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.window);
        this.writeWINDOW(obj.above_sibling);
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
        this.writeCARD16(obj.border_width);
        this.writeBOOL(obj.override_redirect);
        this.moveCursor(1);
    }

    event_readConfigureRequest() {
        var obj = {};
        obj.stack_mode = this.readBYTE();
        obj.parent = this.readWINDOW();
        obj.window = this.readWINDOW();
        obj.sibling = this.readWINDOW();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.border_width = this.readCARD16();
        obj.value_mask = this.readCARD16();
        return obj;
    }

    event_writeConfigureRequest(obj) {
        this.writeBYTE(obj.stack_mode);
        this.writeWINDOW(obj.parent);
        this.writeWINDOW(obj.window);
        this.writeWINDOW(obj.sibling);
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
        this.writeCARD16(obj.border_width);
        this.writeCARD16(obj.value_mask);
    }

    event_readGravityNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.event = this.readWINDOW();
        obj.window = this.readWINDOW();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        return obj;
    }

    event_writeGravityNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.window);
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
    }

    event_readResizeRequest() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        return obj;
    }

    event_writeResizeRequest(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.window);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
    }

    event_readCirculateNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.event = this.readWINDOW();
        obj.window = this.readWINDOW();
        this.moveCursor(4);
        obj.place = this.readBYTE();
        this.moveCursor(3);
        return obj;
    }

    event_writeCirculateNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.event);
        this.writeWINDOW(obj.window);
        this.moveCursor(4);
        this.writeBYTE(obj.place);
        this.moveCursor(3);
    }

    event_readPropertyNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.atom = this.readATOM();
        obj.time = this.readTIMESTAMP();
        obj.state = this.readBYTE();
        this.moveCursor(3);
        return obj;
    }

    event_writePropertyNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.window);
        this.writeATOM(obj.atom);
        this.writeTIMESTAMP(obj.time);
        this.writeBYTE(obj.state);
        this.moveCursor(3);
    }

    event_readSelectionClear() {
        var obj = {};
        this.moveCursor(1);
        obj.time = this.readTIMESTAMP();
        obj.owner = this.readWINDOW();
        obj.selection = this.readATOM();
        return obj;
    }

    event_writeSelectionClear(obj) {
        this.moveCursor(1);
        this.writeTIMESTAMP(obj.time);
        this.writeWINDOW(obj.owner);
        this.writeATOM(obj.selection);
    }

    event_readSelectionRequest() {
        var obj = {};
        this.moveCursor(1);
        obj.time = this.readTIMESTAMP();
        obj.owner = this.readWINDOW();
        obj.requestor = this.readWINDOW();
        obj.selection = this.readATOM();
        obj.target = this.readATOM();
        obj.property = this.readATOM();
        return obj;
    }

    event_writeSelectionRequest(obj) {
        this.moveCursor(1);
        this.writeTIMESTAMP(obj.time);
        this.writeWINDOW(obj.owner);
        this.writeWINDOW(obj.requestor);
        this.writeATOM(obj.selection);
        this.writeATOM(obj.target);
        this.writeATOM(obj.property);
    }

    event_readSelectionNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.time = this.readTIMESTAMP();
        obj.requestor = this.readWINDOW();
        obj.selection = this.readATOM();
        obj.target = this.readATOM();
        obj.property = this.readATOM();
        return obj;
    }

    event_writeSelectionNotify(obj) {
        this.moveCursor(1);
        this.writeTIMESTAMP(obj.time);
        this.writeWINDOW(obj.requestor);
        this.writeATOM(obj.selection);
        this.writeATOM(obj.target);
        this.writeATOM(obj.property);
    }

    event_readColormapNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.colormap = this.readCOLORMAP();
        obj.new = this.readBOOL();
        obj.state = this.readBYTE();
        this.moveCursor(2);
        return obj;
    }

    event_writeColormapNotify(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.window);
        this.writeCOLORMAP(obj.colormap);
        this.writeBOOL(obj.new);
        this.writeBYTE(obj.state);
        this.moveCursor(2);
    }

    event_readClientMessage() {
        var obj = {};
        obj.format = this.readCARD8();
        obj.window = this.readWINDOW();
        obj.type = this.readATOM();
        obj.data = this.readClientMessageData();
        return obj;
    }

    event_writeClientMessage(obj) {
        this.writeCARD8(obj.format);
        this.writeWINDOW(obj.window);
        this.writeATOM(obj.type);
        this.writeClientMessageData(obj.data);
    }

    event_readMappingNotify() {
        var obj = {};
        this.moveCursor(1);
        obj.request = this.readBYTE();
        obj.first_keycode = this.readKEYCODE();
        obj.count = this.readCARD8();
        this.moveCursor(1);
        return obj;
    }

    event_writeMappingNotify(obj) {
        this.moveCursor(1);
        this.writeBYTE(obj.request);
        this.writeKEYCODE(obj.first_keycode);
        this.writeCARD8(obj.count);
        this.moveCursor(1);
    }

    event_readKeyRelease() {
        this.event_readKeyPress();
    }

    event_writeKeyRelease() {
        this.event_writeKeyPress();
    }

    event_readButtonRelease() {
        this.event_readButtonPress();
    }

    event_writeButtonRelease() {
        this.event_writeButtonPress();
    }

    event_readLeaveNotify() {
        this.event_readEnterNotify();
    }

    event_writeLeaveNotify() {
        this.event_writeEnterNotify();
    }

    event_readFocusOut() {
        this.event_readFocusIn();
    }

    event_writeFocusOut() {
        this.event_writeFocusIn();
    }

    event_readCirculateRequest() {
        this.event_readCirculateNotify();
    }

    event_writeCirculateRequest() {
        this.event_writeCirculateNotify();
    }

    static event_numbers = new Map([
        [2, "KeyPress"],
        [4, "ButtonPress"],
        [6, "MotionNotify"],
        [7, "EnterNotify"],
        [9, "FocusIn"],
        [11, "KeymapNotify"],
        [12, "Expose"],
        [13, "GraphicsExposure"],
        [14, "NoExposure"],
        [15, "VisibilityNotify"],
        [16, "CreateNotify"],
        [17, "DestroyNotify"],
        [18, "UnmapNotify"],
        [19, "MapNotify"],
        [20, "MapRequest"],
        [21, "ReparentNotify"],
        [22, "ConfigureNotify"],
        [23, "ConfigureRequest"],
        [24, "GravityNotify"],
        [25, "ResizeRequest"],
        [26, "CirculateNotify"],
        [28, "PropertyNotify"],
        [29, "SelectionClear"],
        [30, "SelectionRequest"],
        [31, "SelectionNotify"],
        [32, "ColormapNotify"],
        [33, "ClientMessage"],
        [34, "MappingNotify"],
        [3, "KeyRelease"],
        [5, "ButtonRelease"],
        [8, "LeaveNotify"],
        [10, "FocusOut"],
        [27, "CirculateRequest"]
    ]);

    error_readRequest() {
        var obj = {};
        obj.bad_value = this.readCARD32();
        obj.minor_opcode = this.readCARD16();
        obj.major_opcode = this.readCARD8();
        this.moveCursor(1);
        return obj;
    }

    error_writeRequest(obj) {
        this.writeCARD32(obj.bad_value);
        this.writeCARD16(obj.minor_opcode);
        this.writeCARD8(obj.major_opcode);
        this.moveCursor(1);
    }

    error_readValue() {
        var obj = {};
        obj.bad_value = this.readCARD32();
        obj.minor_opcode = this.readCARD16();
        obj.major_opcode = this.readCARD8();
        this.moveCursor(1);
        return obj;
    }

    error_writeValue(obj) {
        this.writeCARD32(obj.bad_value);
        this.writeCARD16(obj.minor_opcode);
        this.writeCARD8(obj.major_opcode);
        this.moveCursor(1);
    }

    error_readWindow() {
        this.error_readValue();
    }

    error_writeWindow() {
        this.error_writeValue();
    }

    error_readPixmap() {
        this.error_readValue();
    }

    error_writePixmap() {
        this.error_writeValue();
    }

    error_readAtom() {
        this.error_readValue();
    }

    error_writeAtom() {
        this.error_writeValue();
    }

    error_readCursor() {
        this.error_readValue();
    }

    error_writeCursor() {
        this.error_writeValue();
    }

    error_readFont() {
        this.error_readValue();
    }

    error_writeFont() {
        this.error_writeValue();
    }

    error_readMatch() {
        this.error_readRequest();
    }

    error_writeMatch() {
        this.error_writeRequest();
    }

    error_readDrawable() {
        this.error_readValue();
    }

    error_writeDrawable() {
        this.error_writeValue();
    }

    error_readAccess() {
        this.error_readRequest();
    }

    error_writeAccess() {
        this.error_writeRequest();
    }

    error_readAlloc() {
        this.error_readRequest();
    }

    error_writeAlloc() {
        this.error_writeRequest();
    }

    error_readColormap() {
        this.error_readValue();
    }

    error_writeColormap() {
        this.error_writeValue();
    }

    error_readGContext() {
        this.error_readValue();
    }

    error_writeGContext() {
        this.error_writeValue();
    }

    error_readIDChoice() {
        this.error_readValue();
    }

    error_writeIDChoice() {
        this.error_writeValue();
    }

    error_readName() {
        this.error_readRequest();
    }

    error_writeName() {
        this.error_writeRequest();
    }

    error_readLength() {
        this.error_readRequest();
    }

    error_writeLength() {
        this.error_writeRequest();
    }

    error_readImplementation() {
        this.error_readRequest();
    }

    error_writeImplementation() {
        this.error_writeRequest();
    }

    static error_numbers = new Map([
        [1, "Request"],
        [2, "Value"],
        [3, "Window"],
        [4, "Pixmap"],
        [5, "Atom"],
        [6, "Cursor"],
        [7, "Font"],
        [8, "Match"],
        [9, "Drawable"],
        [10, "Access"],
        [11, "Alloc"],
        [12, "Colormap"],
        [13, "GContext"],
        [14, "IDChoice"],
        [15, "Name"],
        [16, "Length"],
        [17, "Implementation"]
    ]);

    request_readCreateWindow() {
        var obj = {};
        obj.depth = this.readCARD8();
        obj.wid = this.readWINDOW();
        obj.parent = this.readWINDOW();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.border_width = this.readCARD16();
        obj.class = this.readCARD16();
        obj.visual = this.readVISUALID();
        return obj;
    }

    request_readChangeWindowAttributes() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readGetWindowAttributes() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    reply_writeGetWindowAttributes(obj) {
        this.writeCARD8(obj.backing_store);
        this.writeVISUALID(obj.visual);
        this.writeCARD16(obj.class);
        this.writeCARD8(obj.bit_gravity);
        this.writeCARD8(obj.win_gravity);
        this.writeCARD32(obj.backing_planes);
        this.writeCARD32(obj.backing_pixel);
        this.writeBOOL(obj.save_under);
        this.writeBOOL(obj.map_is_installed);
        this.writeCARD8(obj.map_state);
        this.writeBOOL(obj.override_redirect);
        this.writeCOLORMAP(obj.colormap);
        this.writeCARD32(obj.all_event_masks);
        this.writeCARD32(obj.your_event_mask);
        this.writeCARD16(obj.do_not_propagate_mask);
        this.moveCursor(2);
    }

    request_readDestroyWindow() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readDestroySubwindows() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readChangeSaveSet() {
        var obj = {};
        obj.mode = this.readBYTE();
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readReparentWindow() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.parent = this.readWINDOW();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        return obj;
    }

    request_readMapWindow() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readMapSubwindows() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readUnmapWindow() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readUnmapSubwindows() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readConfigureWindow() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.value_mask = this.readCARD16();
        this.moveCursor(2);
        return obj;
    }

    request_readCirculateWindow() {
        var obj = {};
        obj.direction = this.readCARD8();
        obj.window = this.readWINDOW();
        return obj;
    }

    request_readGetGeometry() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        return obj;
    }

    reply_writeGetGeometry(obj) {
        this.writeCARD8(obj.depth);
        this.writeWINDOW(obj.root);
        this.writeINT16(obj.x);
        this.writeINT16(obj.y);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
        this.writeCARD16(obj.border_width);
        this.moveCursor(2);
    }

    request_readQueryTree() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    reply_writeQueryTree(obj) {
        obj.children_len = obj.children.length;
        this.moveCursor(1);
        this.writeWINDOW(obj.root);
        this.writeWINDOW(obj.parent);
        this.writeCARD16(obj.children_len);
        this.moveCursor(14);
        var children_length = obj.children_len;

        for (let i = 0; i < children_length; i++) {
            this.writeWINDOW(obj.children[i]);
        }
    }

    request_readInternAtom() {
        var obj = {};
        obj.only_if_exists = this.readBOOL();
        obj.name_len = this.readCARD16();
        this.moveCursor(2);
        obj.name = this.readSTRING8();
        return obj;
    }

    reply_writeInternAtom(obj) {
        this.moveCursor(1);
        this.writeATOM(obj.atom);
    }

    request_readGetAtomName() {
        var obj = {};
        this.moveCursor(1);
        obj.atom = this.readATOM();
        return obj;
    }

    reply_writeGetAtomName(obj) {
        this.moveCursor(1);
        this.writeCARD16(obj.name_len);
        this.moveCursor(22);
        this.writeSTRING8(obj.name);
    }

    request_readChangeProperty() {
        var obj = {};
        obj.mode = this.readCARD8();
        obj.window = this.readWINDOW();
        obj.property = this.readATOM();
        obj.type = this.readATOM();
        obj.format = this.readCARD8();
        this.moveCursor(3);
        obj.data_len = this.readCARD32();
        var data_length = ((obj.data_len * obj.format) / 8);
        obj.data = [];

        for (let i = 0; i < data_length; i++) {
            obj.data.push(this.readvoid());
        }

        return obj;
    }

    request_readDeleteProperty() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.property = this.readATOM();
        return obj;
    }

    request_readGetProperty() {
        var obj = {};
        obj.delete = this.readBOOL();
        obj.window = this.readWINDOW();
        obj.property = this.readATOM();
        obj.type = this.readATOM();
        obj.long_offset = this.readCARD32();
        obj.long_length = this.readCARD32();
        return obj;
    }

    reply_writeGetProperty(obj) {
        obj.value_len = obj.value.length;
        this.writeCARD8(obj.format);
        this.writeATOM(obj.type);
        this.writeCARD32(obj.bytes_after);
        this.writeCARD32(obj.value_len);
        this.moveCursor(12);
        var value_length = (obj.value_len * (obj.format / 8));

        for (let i = 0; i < value_length; i++) {
            this.writevoid(obj.value[i]);
        }
    }

    request_readListProperties() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    reply_writeListProperties(obj) {
        obj.atoms_len = obj.atoms.length;
        this.moveCursor(1);
        this.writeCARD16(obj.atoms_len);
        this.moveCursor(22);
        var atoms_length = obj.atoms_len;

        for (let i = 0; i < atoms_length; i++) {
            this.writeATOM(obj.atoms[i]);
        }
    }

    request_readSetSelectionOwner() {
        var obj = {};
        this.moveCursor(1);
        obj.owner = this.readWINDOW();
        obj.selection = this.readATOM();
        obj.time = this.readTIMESTAMP();
        return obj;
    }

    request_readGetSelectionOwner() {
        var obj = {};
        this.moveCursor(1);
        obj.selection = this.readATOM();
        return obj;
    }

    reply_writeGetSelectionOwner(obj) {
        this.moveCursor(1);
        this.writeWINDOW(obj.owner);
    }

    request_readConvertSelection() {
        var obj = {};
        this.moveCursor(1);
        obj.requestor = this.readWINDOW();
        obj.selection = this.readATOM();
        obj.target = this.readATOM();
        obj.property = this.readATOM();
        obj.time = this.readTIMESTAMP();
        return obj;
    }

    request_readSendEvent() {
        var obj = {};
        obj.propagate = this.readBOOL();
        obj.destination = this.readWINDOW();
        obj.event_mask = this.readCARD32();
        var event_length = 32;
        obj.event = [];

        for (let i = 0; i < event_length; i++) {
            obj.event.push(this.readchar());
        }

        return obj;
    }

    request_readGrabPointer() {
        var obj = {};
        obj.owner_events = this.readBOOL();
        obj.grab_window = this.readWINDOW();
        obj.event_mask = this.readCARD16();
        obj.pointer_mode = this.readBYTE();
        obj.keyboard_mode = this.readBYTE();
        obj.confine_to = this.readWINDOW();
        obj.cursor = this.readCURSOR();
        obj.time = this.readTIMESTAMP();
        return obj;
    }

    reply_writeGrabPointer(obj) {
        this.writeBYTE(obj.status);
    }

    request_readUngrabPointer() {
        var obj = {};
        this.moveCursor(1);
        obj.time = this.readTIMESTAMP();
        return obj;
    }

    request_readGrabButton() {
        var obj = {};
        obj.owner_events = this.readBOOL();
        obj.grab_window = this.readWINDOW();
        obj.event_mask = this.readCARD16();
        obj.pointer_mode = this.readCARD8();
        obj.keyboard_mode = this.readCARD8();
        obj.confine_to = this.readWINDOW();
        obj.cursor = this.readCURSOR();
        obj.button = this.readCARD8();
        this.moveCursor(1);
        obj.modifiers = this.readCARD16();
        return obj;
    }

    request_readUngrabButton() {
        var obj = {};
        obj.button = this.readCARD8();
        obj.grab_window = this.readWINDOW();
        obj.modifiers = this.readCARD16();
        this.moveCursor(2);
        return obj;
    }

    request_readChangeActivePointerGrab() {
        var obj = {};
        this.moveCursor(1);
        obj.cursor = this.readCURSOR();
        obj.time = this.readTIMESTAMP();
        obj.event_mask = this.readCARD16();
        this.moveCursor(2);
        return obj;
    }

    request_readGrabKeyboard() {
        var obj = {};
        obj.owner_events = this.readBOOL();
        obj.grab_window = this.readWINDOW();
        obj.time = this.readTIMESTAMP();
        obj.pointer_mode = this.readBYTE();
        obj.keyboard_mode = this.readBYTE();
        this.moveCursor(2);
        return obj;
    }

    reply_writeGrabKeyboard(obj) {
        this.writeBYTE(obj.status);
    }

    request_readUngrabKeyboard() {
        var obj = {};
        this.moveCursor(1);
        obj.time = this.readTIMESTAMP();
        return obj;
    }

    request_readGrabKey() {
        var obj = {};
        obj.owner_events = this.readBOOL();
        obj.grab_window = this.readWINDOW();
        obj.modifiers = this.readCARD16();
        obj.key = this.readKEYCODE();
        obj.pointer_mode = this.readCARD8();
        obj.keyboard_mode = this.readCARD8();
        this.moveCursor(3);
        return obj;
    }

    request_readUngrabKey() {
        var obj = {};
        obj.key = this.readKEYCODE();
        obj.grab_window = this.readWINDOW();
        obj.modifiers = this.readCARD16();
        this.moveCursor(2);
        return obj;
    }

    request_readAllowEvents() {
        var obj = {};
        obj.mode = this.readCARD8();
        obj.time = this.readTIMESTAMP();
        return obj;
    }

    request_readGrabServer() {
        return {};
    }

    request_readUngrabServer() {
        return {};
    }

    request_readQueryPointer() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    reply_writeQueryPointer(obj) {
        this.writeBOOL(obj.same_screen);
        this.writeWINDOW(obj.root);
        this.writeWINDOW(obj.child);
        this.writeINT16(obj.root_x);
        this.writeINT16(obj.root_y);
        this.writeINT16(obj.win_x);
        this.writeINT16(obj.win_y);
        this.writeCARD16(obj.mask);
        this.moveCursor(2);
    }

    request_readGetMotionEvents() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.start = this.readTIMESTAMP();
        obj.stop = this.readTIMESTAMP();
        return obj;
    }

    reply_writeGetMotionEvents(obj) {
        obj.events_len = obj.events.length;
        this.moveCursor(1);
        this.writeCARD32(obj.events_len);
        this.moveCursor(20);
        var events_length = obj.events_len;

        for (let i = 0; i < events_length; i++) {
            this.writeTIMECOORD(obj.events[i]);
        }
    }

    request_readTranslateCoordinates() {
        var obj = {};
        this.moveCursor(1);
        obj.src_window = this.readWINDOW();
        obj.dst_window = this.readWINDOW();
        obj.src_x = this.readINT16();
        obj.src_y = this.readINT16();
        return obj;
    }

    reply_writeTranslateCoordinates(obj) {
        this.writeBOOL(obj.same_screen);
        this.writeWINDOW(obj.child);
        this.writeINT16(obj.dst_x);
        this.writeINT16(obj.dst_y);
    }

    request_readWarpPointer() {
        var obj = {};
        this.moveCursor(1);
        obj.src_window = this.readWINDOW();
        obj.dst_window = this.readWINDOW();
        obj.src_x = this.readINT16();
        obj.src_y = this.readINT16();
        obj.src_width = this.readCARD16();
        obj.src_height = this.readCARD16();
        obj.dst_x = this.readINT16();
        obj.dst_y = this.readINT16();
        return obj;
    }

    request_readSetInputFocus() {
        var obj = {};
        obj.revert_to = this.readCARD8();
        obj.focus = this.readWINDOW();
        obj.time = this.readTIMESTAMP();
        return obj;
    }

    request_readGetInputFocus() {
        return {};
    }

    reply_writeGetInputFocus(obj) {
        this.writeCARD8(obj.revert_to);
        this.writeWINDOW(obj.focus);
    }

    request_readQueryKeymap() {
        return {};
    }

    reply_writeQueryKeymap(obj) {
        obj.keys_len = obj.keys.length;
        this.moveCursor(1);
        var keys_length = 32;

        for (let i = 0; i < keys_length; i++) {
            this.writeCARD8(obj.keys[i]);
        }
    }

    request_readOpenFont() {
        var obj = {};
        this.moveCursor(1);
        obj.fid = this.readFONT();
        obj.name_len = this.readCARD16();
        this.moveCursor(2);
        var name_length = obj.name_len;
        obj.name = [];

        for (let i = 0; i < name_length; i++) {
            obj.name.push(this.readchar());
        }

        return obj;
    }

    request_readCloseFont() {
        var obj = {};
        this.moveCursor(1);
        obj.font = this.readFONT();
        return obj;
    }

    request_readQueryFont() {
        var obj = {};
        this.moveCursor(1);
        obj.font = this.readFONTABLE();
        return obj;
    }

    reply_writeQueryFont(obj) {
        obj.properties_len = obj.properties.length;
        obj.char_infos_len = obj.char_infos.length;
        this.moveCursor(1);
        this.writeCHARINFO(obj.min_bounds);
        this.moveCursor(4);
        this.writeCHARINFO(obj.max_bounds);
        this.moveCursor(4);
        this.writeCARD16(obj.min_char_or_byte2);
        this.writeCARD16(obj.max_char_or_byte2);
        this.writeCARD16(obj.default_char);
        this.writeCARD16(obj.properties_len);
        this.writeBYTE(obj.draw_direction);
        this.writeCARD8(obj.min_byte1);
        this.writeCARD8(obj.max_byte1);
        this.writeBOOL(obj.all_chars_exist);
        this.writeINT16(obj.font_ascent);
        this.writeINT16(obj.font_descent);
        this.writeCARD32(obj.char_infos_len);
        var properties_length = obj.properties_len;

        for (let i = 0; i < properties_length; i++) {
            this.writeFONTPROP(obj.properties[i]);
        }

        var char_infos_length = obj.char_infos_len;

        for (let i = 0; i < char_infos_length; i++) {
            this.writeCHARINFO(obj.char_infos[i]);
        }
    }

    request_readQueryTextExtents() {
        var obj = {};
        obj.font = this.readFONTABLE();
        var string_length = -1;
        obj.string = [];

        for (let i = 0; i < string_length; i++) {
            obj.string.push(this.readCHAR2B());
        }

        return obj;
    }

    reply_writeQueryTextExtents(obj) {
        this.writeBYTE(obj.draw_direction);
        this.writeINT16(obj.font_ascent);
        this.writeINT16(obj.font_descent);
        this.writeINT16(obj.overall_ascent);
        this.writeINT16(obj.overall_descent);
        this.writeINT32(obj.overall_width);
        this.writeINT32(obj.overall_left);
        this.writeINT32(obj.overall_right);
    }

    request_readListFonts() {
        var obj = {};
        this.moveCursor(1);
        obj.max_names = this.readCARD16();
        obj.pattern_len = this.readCARD16();
        var pattern_length = obj.pattern_len;
        obj.pattern = [];

        for (let i = 0; i < pattern_length; i++) {
            obj.pattern.push(this.readchar());
        }

        return obj;
    }

    reply_writeListFonts(obj) {
        obj.names_len = obj.names.length;
        this.moveCursor(1);
        this.writeCARD16(obj.names_len);
        this.moveCursor(22);
        var names_length = obj.names_len;

        for (let i = 0; i < names_length; i++) {
            this.writeSTR(obj.names[i]);
        }
    }

    request_readListFontsWithInfo() {
        var obj = {};
        this.moveCursor(1);
        obj.max_names = this.readCARD16();
        obj.pattern_len = this.readCARD16();
        var pattern_length = obj.pattern_len;
        obj.pattern = [];

        for (let i = 0; i < pattern_length; i++) {
            obj.pattern.push(this.readchar());
        }

        return obj;
    }

    reply_writeListFontsWithInfo(obj) {
        obj.properties_len = obj.properties.length;
        obj.name_len = obj.name.length;
        this.writeCARD8(obj.name_len);
        this.writeCHARINFO(obj.min_bounds);
        this.moveCursor(4);
        this.writeCHARINFO(obj.max_bounds);
        this.moveCursor(4);
        this.writeCARD16(obj.min_char_or_byte2);
        this.writeCARD16(obj.max_char_or_byte2);
        this.writeCARD16(obj.default_char);
        this.writeCARD16(obj.properties_len);
        this.writeBYTE(obj.draw_direction);
        this.writeCARD8(obj.min_byte1);
        this.writeCARD8(obj.max_byte1);
        this.writeBOOL(obj.all_chars_exist);
        this.writeINT16(obj.font_ascent);
        this.writeINT16(obj.font_descent);
        this.writeCARD32(obj.replies_hint);
        var properties_length = obj.properties_len;

        for (let i = 0; i < properties_length; i++) {
            this.writeFONTPROP(obj.properties[i]);
        }

        var name_length = obj.name_len;

        for (let i = 0; i < name_length; i++) {
            this.writechar(obj.name[i]);
        }
    }

    request_readSetFontPath() {
        var obj = {};
        this.moveCursor(1);
        obj.font_qty = this.readCARD16();
        this.moveCursor(2);
        var font_length = obj.font_qty;
        obj.font = [];

        for (let i = 0; i < font_length; i++) {
            obj.font.push(this.readSTR());
        }

        return obj;
    }

    request_readGetFontPath() {
        return {};
    }

    reply_writeGetFontPath(obj) {
        obj.path_len = obj.path.length;
        this.moveCursor(1);
        this.writeCARD16(obj.path_len);
        this.moveCursor(22);
        var path_length = obj.path_len;

        for (let i = 0; i < path_length; i++) {
            this.writeSTR(obj.path[i]);
        }
    }

    request_readCreatePixmap() {
        var obj = {};
        obj.depth = this.readCARD8();
        obj.pid = this.readPIXMAP();
        obj.drawable = this.readDRAWABLE();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        return obj;
    }

    request_readFreePixmap() {
        var obj = {};
        this.moveCursor(1);
        obj.pixmap = this.readPIXMAP();
        return obj;
    }

    request_readCreateGC() {
        var obj = {};
        this.moveCursor(1);
        obj.cid = this.readGCONTEXT();
        obj.drawable = this.readDRAWABLE();
        return obj;
    }

    request_readChangeGC() {
        var obj = {};
        this.moveCursor(1);
        obj.gc = this.readGCONTEXT();
        return obj;
    }

    request_readCopyGC() {
        var obj = {};
        this.moveCursor(1);
        obj.src_gc = this.readGCONTEXT();
        obj.dst_gc = this.readGCONTEXT();
        obj.value_mask = this.readCARD32();
        return obj;
    }

    request_readSetDashes() {
        var obj = {};
        this.moveCursor(1);
        obj.gc = this.readGCONTEXT();
        obj.dash_offset = this.readCARD16();
        obj.dashes_len = this.readCARD16();
        var dashes_length = obj.dashes_len;
        obj.dashes = [];

        for (let i = 0; i < dashes_length; i++) {
            obj.dashes.push(this.readCARD8());
        }

        return obj;
    }

    request_readSetClipRectangles() {
        var obj = {};
        obj.ordering = this.readBYTE();
        obj.gc = this.readGCONTEXT();
        obj.clip_x_origin = this.readINT16();
        obj.clip_y_origin = this.readINT16();
        var rectangles_length = -1;
        obj.rectangles = [];

        for (let i = 0; i < rectangles_length; i++) {
            obj.rectangles.push(this.readRECTANGLE());
        }

        return obj;
    }

    request_readFreeGC() {
        var obj = {};
        this.moveCursor(1);
        obj.gc = this.readGCONTEXT();
        return obj;
    }

    request_readClearArea() {
        var obj = {};
        obj.exposures = this.readBOOL();
        obj.window = this.readWINDOW();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        return obj;
    }

    request_readCopyArea() {
        var obj = {};
        this.moveCursor(1);
        obj.src_drawable = this.readDRAWABLE();
        obj.dst_drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        obj.src_x = this.readINT16();
        obj.src_y = this.readINT16();
        obj.dst_x = this.readINT16();
        obj.dst_y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        return obj;
    }

    request_readCopyPlane() {
        var obj = {};
        this.moveCursor(1);
        obj.src_drawable = this.readDRAWABLE();
        obj.dst_drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        obj.src_x = this.readINT16();
        obj.src_y = this.readINT16();
        obj.dst_x = this.readINT16();
        obj.dst_y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.bit_plane = this.readCARD32();
        return obj;
    }

    request_readPolyPoint() {
        var obj = {};
        obj.coordinate_mode = this.readBYTE();
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        var points_length = -1;
        obj.points = [];

        for (let i = 0; i < points_length; i++) {
            obj.points.push(this.readPOINT());
        }

        return obj;
    }

    request_readPolyLine() {
        var obj = {};
        obj.coordinate_mode = this.readBYTE();
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        var points_length = -1;
        obj.points = [];

        for (let i = 0; i < points_length; i++) {
            obj.points.push(this.readPOINT());
        }

        return obj;
    }

    request_readPolySegment() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        var segments_length = -1;
        obj.segments = [];

        for (let i = 0; i < segments_length; i++) {
            obj.segments.push(this.readSEGMENT());
        }

        return obj;
    }

    request_readPolyRectangle() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        var rectangles_length = -1;
        obj.rectangles = [];

        for (let i = 0; i < rectangles_length; i++) {
            obj.rectangles.push(this.readRECTANGLE());
        }

        return obj;
    }

    request_readPolyArc() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        var arcs_length = -1;
        obj.arcs = [];

        for (let i = 0; i < arcs_length; i++) {
            obj.arcs.push(this.readARC());
        }

        return obj;
    }

    request_readFillPoly() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        obj.shape = this.readCARD8();
        obj.coordinate_mode = this.readCARD8();
        this.moveCursor(2);
        var points_length = -1;
        obj.points = [];

        for (let i = 0; i < points_length; i++) {
            obj.points.push(this.readPOINT());
        }

        return obj;
    }

    request_readPolyFillRectangle() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        var rectangles_length = -1;
        obj.rectangles = [];

        for (let i = 0; i < rectangles_length; i++) {
            obj.rectangles.push(this.readRECTANGLE());
        }

        return obj;
    }

    request_readPolyFillArc() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        var arcs_length = -1;
        obj.arcs = [];

        for (let i = 0; i < arcs_length; i++) {
            obj.arcs.push(this.readARC());
        }

        return obj;
    }

    request_readPutImage() {
        var obj = {};
        obj.format = this.readCARD8();
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.dst_x = this.readINT16();
        obj.dst_y = this.readINT16();
        obj.left_pad = this.readCARD8();
        obj.depth = this.readCARD8();
        this.moveCursor(2);
        var data_length = -1;
        obj.data = [];

        for (let i = 0; i < data_length; i++) {
            obj.data.push(this.readBYTE());
        }

        return obj;
    }

    request_readGetImage() {
        var obj = {};
        obj.format = this.readCARD8();
        obj.drawable = this.readDRAWABLE();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        obj.plane_mask = this.readCARD32();
        return obj;
    }

    reply_writeGetImage(obj) {
        obj.data_len = obj.data.length;
        this.writeCARD8(obj.depth);
        this.writeVISUALID(obj.visual);
        this.moveCursor(20);
        var data_length = (obj.length * 4);

        for (let i = 0; i < data_length; i++) {
            this.writeBYTE(obj.data[i]);
        }
    }

    request_readPolyText8() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        var items_length = -1;
        obj.items = [];

        for (let i = 0; i < items_length; i++) {
            obj.items.push(this.readBYTE());
        }

        return obj;
    }

    request_readPolyText16() {
        var obj = {};
        this.moveCursor(1);
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        var items_length = -1;
        obj.items = [];

        for (let i = 0; i < items_length; i++) {
            obj.items.push(this.readBYTE());
        }

        return obj;
    }

    request_readImageText8() {
        var obj = {};
        obj.string_len = this.readBYTE();
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        var string_length = obj.string_len;
        obj.string = [];

        for (let i = 0; i < string_length; i++) {
            obj.string.push(this.readchar());
        }

        return obj;
    }

    request_readImageText16() {
        var obj = {};
        obj.string_len = this.readBYTE();
        obj.drawable = this.readDRAWABLE();
        obj.gc = this.readGCONTEXT();
        obj.x = this.readINT16();
        obj.y = this.readINT16();
        var string_length = obj.string_len;
        obj.string = [];

        for (let i = 0; i < string_length; i++) {
            obj.string.push(this.readCHAR2B());
        }

        return obj;
    }

    request_readCreateColormap() {
        var obj = {};
        obj.alloc = this.readBYTE();
        obj.mid = this.readCOLORMAP();
        obj.window = this.readWINDOW();
        obj.visual = this.readVISUALID();
        return obj;
    }

    request_readFreeColormap() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        return obj;
    }

    request_readCopyColormapAndFree() {
        var obj = {};
        this.moveCursor(1);
        obj.mid = this.readCOLORMAP();
        obj.src_cmap = this.readCOLORMAP();
        return obj;
    }

    request_readInstallColormap() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        return obj;
    }

    request_readUninstallColormap() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        return obj;
    }

    request_readListInstalledColormaps() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        return obj;
    }

    reply_writeListInstalledColormaps(obj) {
        obj.cmaps_len = obj.cmaps.length;
        this.moveCursor(1);
        this.writeCARD16(obj.cmaps_len);
        this.moveCursor(22);
        var cmaps_length = obj.cmaps_len;

        for (let i = 0; i < cmaps_length; i++) {
            this.writeCOLORMAP(obj.cmaps[i]);
        }
    }

    request_readAllocColor() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        obj.red = this.readCARD16();
        obj.green = this.readCARD16();
        obj.blue = this.readCARD16();
        this.moveCursor(2);
        return obj;
    }

    reply_writeAllocColor(obj) {
        this.moveCursor(1);
        this.writeCARD16(obj.red);
        this.writeCARD16(obj.green);
        this.writeCARD16(obj.blue);
        this.moveCursor(2);
        this.writeCARD32(obj.pixel);
    }

    request_readAllocNamedColor() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        obj.name_len = this.readCARD16();
        this.moveCursor(2);
        var name_length = obj.name_len;
        obj.name = [];

        for (let i = 0; i < name_length; i++) {
            obj.name.push(this.readchar());
        }

        return obj;
    }

    reply_writeAllocNamedColor(obj) {
        this.moveCursor(1);
        this.writeCARD32(obj.pixel);
        this.writeCARD16(obj.exact_red);
        this.writeCARD16(obj.exact_green);
        this.writeCARD16(obj.exact_blue);
        this.writeCARD16(obj.visual_red);
        this.writeCARD16(obj.visual_green);
        this.writeCARD16(obj.visual_blue);
    }

    request_readAllocColorCells() {
        var obj = {};
        obj.contiguous = this.readBOOL();
        obj.cmap = this.readCOLORMAP();
        obj.colors = this.readCARD16();
        obj.planes = this.readCARD16();
        return obj;
    }

    reply_writeAllocColorCells(obj) {
        obj.pixels_len = obj.pixels.length;
        obj.masks_len = obj.masks.length;
        this.moveCursor(1);
        this.writeCARD16(obj.pixels_len);
        this.writeCARD16(obj.masks_len);
        this.moveCursor(20);
        var pixels_length = obj.pixels_len;

        for (let i = 0; i < pixels_length; i++) {
            this.writeCARD32(obj.pixels[i]);
        }

        var masks_length = obj.masks_len;

        for (let i = 0; i < masks_length; i++) {
            this.writeCARD32(obj.masks[i]);
        }
    }

    request_readAllocColorPlanes() {
        var obj = {};
        obj.contiguous = this.readBOOL();
        obj.cmap = this.readCOLORMAP();
        obj.colors = this.readCARD16();
        obj.reds = this.readCARD16();
        obj.greens = this.readCARD16();
        obj.blues = this.readCARD16();
        return obj;
    }

    reply_writeAllocColorPlanes(obj) {
        obj.pixels_len = obj.pixels.length;
        this.moveCursor(1);
        this.writeCARD16(obj.pixels_len);
        this.moveCursor(2);
        this.writeCARD32(obj.red_mask);
        this.writeCARD32(obj.green_mask);
        this.writeCARD32(obj.blue_mask);
        this.moveCursor(8);
        var pixels_length = obj.pixels_len;

        for (let i = 0; i < pixels_length; i++) {
            this.writeCARD32(obj.pixels[i]);
        }
    }

    request_readFreeColors() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        obj.plane_mask = this.readCARD32();
        var pixels_length = -1;
        obj.pixels = [];

        for (let i = 0; i < pixels_length; i++) {
            obj.pixels.push(this.readCARD32());
        }

        return obj;
    }

    request_readStoreColors() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        var items_length = -1;
        obj.items = [];

        for (let i = 0; i < items_length; i++) {
            obj.items.push(this.readCOLORITEM());
        }

        return obj;
    }

    request_readStoreNamedColor() {
        var obj = {};
        obj.flags = this.readCARD8();
        obj.cmap = this.readCOLORMAP();
        obj.pixel = this.readCARD32();
        obj.name_len = this.readCARD16();
        this.moveCursor(2);
        var name_length = obj.name_len;
        obj.name = [];

        for (let i = 0; i < name_length; i++) {
            obj.name.push(this.readchar());
        }

        return obj;
    }

    request_readQueryColors() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        var pixels_length = -1;
        obj.pixels = [];

        for (let i = 0; i < pixels_length; i++) {
            obj.pixels.push(this.readCARD32());
        }

        return obj;
    }

    reply_writeQueryColors(obj) {
        obj.colors_len = obj.colors.length;
        this.moveCursor(1);
        this.writeCARD16(obj.colors_len);
        this.moveCursor(22);
        var colors_length = obj.colors_len;

        for (let i = 0; i < colors_length; i++) {
            this.writeRGB(obj.colors[i]);
        }
    }

    request_readLookupColor() {
        var obj = {};
        this.moveCursor(1);
        obj.cmap = this.readCOLORMAP();
        obj.name_len = this.readCARD16();
        this.moveCursor(2);
        var name_length = obj.name_len;
        obj.name = [];

        for (let i = 0; i < name_length; i++) {
            obj.name.push(this.readchar());
        }

        return obj;
    }

    reply_writeLookupColor(obj) {
        this.moveCursor(1);
        this.writeCARD16(obj.exact_red);
        this.writeCARD16(obj.exact_green);
        this.writeCARD16(obj.exact_blue);
        this.writeCARD16(obj.visual_red);
        this.writeCARD16(obj.visual_green);
        this.writeCARD16(obj.visual_blue);
    }

    request_readCreateCursor() {
        var obj = {};
        this.moveCursor(1);
        obj.cid = this.readCURSOR();
        obj.source = this.readPIXMAP();
        obj.mask = this.readPIXMAP();
        obj.fore_red = this.readCARD16();
        obj.fore_green = this.readCARD16();
        obj.fore_blue = this.readCARD16();
        obj.back_red = this.readCARD16();
        obj.back_green = this.readCARD16();
        obj.back_blue = this.readCARD16();
        obj.x = this.readCARD16();
        obj.y = this.readCARD16();
        return obj;
    }

    request_readCreateGlyphCursor() {
        var obj = {};
        this.moveCursor(1);
        obj.cid = this.readCURSOR();
        obj.source_font = this.readFONT();
        obj.mask_font = this.readFONT();
        obj.source_char = this.readCARD16();
        obj.mask_char = this.readCARD16();
        obj.fore_red = this.readCARD16();
        obj.fore_green = this.readCARD16();
        obj.fore_blue = this.readCARD16();
        obj.back_red = this.readCARD16();
        obj.back_green = this.readCARD16();
        obj.back_blue = this.readCARD16();
        return obj;
    }

    request_readFreeCursor() {
        var obj = {};
        this.moveCursor(1);
        obj.cursor = this.readCURSOR();
        return obj;
    }

    request_readRecolorCursor() {
        var obj = {};
        this.moveCursor(1);
        obj.cursor = this.readCURSOR();
        obj.fore_red = this.readCARD16();
        obj.fore_green = this.readCARD16();
        obj.fore_blue = this.readCARD16();
        obj.back_red = this.readCARD16();
        obj.back_green = this.readCARD16();
        obj.back_blue = this.readCARD16();
        return obj;
    }

    request_readQueryBestSize() {
        var obj = {};
        obj.class = this.readCARD8();
        obj.drawable = this.readDRAWABLE();
        obj.width = this.readCARD16();
        obj.height = this.readCARD16();
        return obj;
    }

    reply_writeQueryBestSize(obj) {
        this.moveCursor(1);
        this.writeCARD16(obj.width);
        this.writeCARD16(obj.height);
    }

    request_readQueryExtension() {
        var obj = {};
        this.moveCursor(1);
        obj.name_len = this.readCARD16();
        this.moveCursor(2);
        var name_length = obj.name_len;
        obj.name = [];

        for (let i = 0; i < name_length; i++) {
            obj.name.push(this.readchar());
        }

        return obj;
    }

    reply_writeQueryExtension(obj) {
        this.moveCursor(1);
        this.writeBOOL(obj.present);
        this.writeCARD8(obj.major_opcode);
        this.writeCARD8(obj.first_event);
        this.writeCARD8(obj.first_error);
    }

    request_readListExtensions() {
        return {};
    }

    reply_writeListExtensions(obj) {
        obj.names_len = obj.names.length;
        this.writeCARD8(obj.names_len);
        this.moveCursor(24);
        var names_length = obj.names_len;

        for (let i = 0; i < names_length; i++) {
            this.writeSTR(obj.names[i]);
        }
    }

    request_readChangeKeyboardMapping() {
        var obj = {};
        obj.keycode_count = this.readCARD8();
        obj.first_keycode = this.readKEYCODE();
        obj.keysyms_per_keycode = this.readCARD8();
        this.moveCursor(2);
        var keysyms_length = (obj.keycode_count * obj.keysyms_per_keycode);
        obj.keysyms = [];

        for (let i = 0; i < keysyms_length; i++) {
            obj.keysyms.push(this.readKEYSYM());
        }

        return obj;
    }

    request_readGetKeyboardMapping() {
        var obj = {};
        this.moveCursor(1);
        obj.first_keycode = this.readKEYCODE();
        obj.count = this.readCARD8();
        return obj;
    }

    reply_writeGetKeyboardMapping(obj) {
        obj.keysyms_len = obj.keysyms.length;
        this.writeBYTE(obj.keysyms_per_keycode);
        this.moveCursor(24);
        var keysyms_length = obj.length;

        for (let i = 0; i < keysyms_length; i++) {
            this.writeKEYSYM(obj.keysyms[i]);
        }
    }

    request_readChangeKeyboardControl() {
        var obj = {};
        this.moveCursor(1);
        return obj;
    }

    request_readGetKeyboardControl() {
        return {};
    }

    reply_writeGetKeyboardControl(obj) {
        obj.auto_repeats_len = obj.auto_repeats.length;
        this.writeBYTE(obj.global_auto_repeat);
        this.writeCARD32(obj.led_mask);
        this.writeCARD8(obj.key_click_percent);
        this.writeCARD8(obj.bell_percent);
        this.writeCARD16(obj.bell_pitch);
        this.writeCARD16(obj.bell_duration);
        this.moveCursor(2);
        var auto_repeats_length = 32;

        for (let i = 0; i < auto_repeats_length; i++) {
            this.writeCARD8(obj.auto_repeats[i]);
        }
    }

    request_readBell() {
        var obj = {};
        obj.percent = this.readINT8();
        return obj;
    }

    request_readChangePointerControl() {
        var obj = {};
        this.moveCursor(1);
        obj.acceleration_numerator = this.readINT16();
        obj.acceleration_denominator = this.readINT16();
        obj.threshold = this.readINT16();
        obj.do_acceleration = this.readBOOL();
        obj.do_threshold = this.readBOOL();
        return obj;
    }

    request_readGetPointerControl() {
        return {};
    }

    reply_writeGetPointerControl(obj) {
        this.moveCursor(1);
        this.writeCARD16(obj.acceleration_numerator);
        this.writeCARD16(obj.acceleration_denominator);
        this.writeCARD16(obj.threshold);
        this.moveCursor(18);
    }

    request_readSetScreenSaver() {
        var obj = {};
        this.moveCursor(1);
        obj.timeout = this.readINT16();
        obj.interval = this.readINT16();
        obj.prefer_blanking = this.readCARD8();
        obj.allow_exposures = this.readCARD8();
        return obj;
    }

    request_readGetScreenSaver() {
        return {};
    }

    reply_writeGetScreenSaver(obj) {
        this.moveCursor(1);
        this.writeCARD16(obj.timeout);
        this.writeCARD16(obj.interval);
        this.writeBYTE(obj.prefer_blanking);
        this.writeBYTE(obj.allow_exposures);
        this.moveCursor(18);
    }

    request_readChangeHosts() {
        var obj = {};
        obj.mode = this.readCARD8();
        obj.family = this.readCARD8();
        this.moveCursor(1);
        obj.address_len = this.readCARD16();
        var address_length = obj.address_len;
        obj.address = [];

        for (let i = 0; i < address_length; i++) {
            obj.address.push(this.readBYTE());
        }

        return obj;
    }

    request_readListHosts() {
        return {};
    }

    reply_writeListHosts(obj) {
        obj.hosts_len = obj.hosts.length;
        this.writeBYTE(obj.mode);
        this.writeCARD16(obj.hosts_len);
        this.moveCursor(22);
        var hosts_length = obj.hosts_len;

        for (let i = 0; i < hosts_length; i++) {
            this.writeHOST(obj.hosts[i]);
        }
    }

    request_readSetAccessControl() {
        var obj = {};
        obj.mode = this.readCARD8();
        return obj;
    }

    request_readSetCloseDownMode() {
        var obj = {};
        obj.mode = this.readCARD8();
        return obj;
    }

    request_readKillClient() {
        var obj = {};
        this.moveCursor(1);
        obj.resource = this.readCARD32();
        return obj;
    }

    request_readRotateProperties() {
        var obj = {};
        this.moveCursor(1);
        obj.window = this.readWINDOW();
        obj.atoms_len = this.readCARD16();
        obj.delta = this.readINT16();
        var atoms_length = obj.atoms_len;
        obj.atoms = [];

        for (let i = 0; i < atoms_length; i++) {
            obj.atoms.push(this.readATOM());
        }

        return obj;
    }

    request_readForceScreenSaver() {
        var obj = {};
        obj.mode = this.readCARD8();
        return obj;
    }

    request_readSetPointerMapping() {
        var obj = {};
        obj.map_len = this.readCARD8();
        var map_length = obj.map_len;
        obj.map = [];

        for (let i = 0; i < map_length; i++) {
            obj.map.push(this.readCARD8());
        }

        return obj;
    }

    reply_writeSetPointerMapping(obj) {
        this.writeBYTE(obj.status);
    }

    request_readGetPointerMapping() {
        return {};
    }

    reply_writeGetPointerMapping(obj) {
        obj.map_len = obj.map.length;
        this.writeCARD8(obj.map_len);
        this.moveCursor(24);
        var map_length = obj.map_len;

        for (let i = 0; i < map_length; i++) {
            this.writeCARD8(obj.map[i]);
        }
    }

    request_readSetModifierMapping() {
        var obj = {};
        obj.keycodes_per_modifier = this.readCARD8();
        var keycodes_length = (obj.keycodes_per_modifier * 8);
        obj.keycodes = [];

        for (let i = 0; i < keycodes_length; i++) {
            obj.keycodes.push(this.readKEYCODE());
        }

        return obj;
    }

    reply_writeSetModifierMapping(obj) {
        this.writeBYTE(obj.status);
    }

    request_readGetModifierMapping() {
        return {};
    }

    reply_writeGetModifierMapping(obj) {
        obj.keycodes_len = obj.keycodes.length;
        this.writeCARD8(obj.keycodes_per_modifier);
        this.moveCursor(24);
        var keycodes_length = (obj.keycodes_per_modifier * 8);

        for (let i = 0; i < keycodes_length; i++) {
            this.writeKEYCODE(obj.keycodes[i]);
        }
    }

    request_readNoOperation() {
        return {};
    }

    static request_opcodes = new Map([
        [1, "CreateWindow"],
        [2, "ChangeWindowAttributes"],
        [3, "GetWindowAttributes"],
        [4, "DestroyWindow"],
        [5, "DestroySubwindows"],
        [6, "ChangeSaveSet"],
        [7, "ReparentWindow"],
        [8, "MapWindow"],
        [9, "MapSubwindows"],
        [10, "UnmapWindow"],
        [11, "UnmapSubwindows"],
        [12, "ConfigureWindow"],
        [13, "CirculateWindow"],
        [14, "GetGeometry"],
        [15, "QueryTree"],
        [16, "InternAtom"],
        [17, "GetAtomName"],
        [18, "ChangeProperty"],
        [19, "DeleteProperty"],
        [20, "GetProperty"],
        [21, "ListProperties"],
        [22, "SetSelectionOwner"],
        [23, "GetSelectionOwner"],
        [24, "ConvertSelection"],
        [25, "SendEvent"],
        [26, "GrabPointer"],
        [27, "UngrabPointer"],
        [28, "GrabButton"],
        [29, "UngrabButton"],
        [30, "ChangeActivePointerGrab"],
        [31, "GrabKeyboard"],
        [32, "UngrabKeyboard"],
        [33, "GrabKey"],
        [34, "UngrabKey"],
        [35, "AllowEvents"],
        [36, "GrabServer"],
        [37, "UngrabServer"],
        [38, "QueryPointer"],
        [39, "GetMotionEvents"],
        [40, "TranslateCoordinates"],
        [41, "WarpPointer"],
        [42, "SetInputFocus"],
        [43, "GetInputFocus"],
        [44, "QueryKeymap"],
        [45, "OpenFont"],
        [46, "CloseFont"],
        [47, "QueryFont"],
        [48, "QueryTextExtents"],
        [49, "ListFonts"],
        [50, "ListFontsWithInfo"],
        [51, "SetFontPath"],
        [52, "GetFontPath"],
        [53, "CreatePixmap"],
        [54, "FreePixmap"],
        [55, "CreateGC"],
        [56, "ChangeGC"],
        [57, "CopyGC"],
        [58, "SetDashes"],
        [59, "SetClipRectangles"],
        [60, "FreeGC"],
        [61, "ClearArea"],
        [62, "CopyArea"],
        [63, "CopyPlane"],
        [64, "PolyPoint"],
        [65, "PolyLine"],
        [66, "PolySegment"],
        [67, "PolyRectangle"],
        [68, "PolyArc"],
        [69, "FillPoly"],
        [70, "PolyFillRectangle"],
        [71, "PolyFillArc"],
        [72, "PutImage"],
        [73, "GetImage"],
        [74, "PolyText8"],
        [75, "PolyText16"],
        [76, "ImageText8"],
        [77, "ImageText16"],
        [78, "CreateColormap"],
        [79, "FreeColormap"],
        [80, "CopyColormapAndFree"],
        [81, "InstallColormap"],
        [82, "UninstallColormap"],
        [83, "ListInstalledColormaps"],
        [84, "AllocColor"],
        [85, "AllocNamedColor"],
        [86, "AllocColorCells"],
        [87, "AllocColorPlanes"],
        [88, "FreeColors"],
        [89, "StoreColors"],
        [90, "StoreNamedColor"],
        [91, "QueryColors"],
        [92, "LookupColor"],
        [93, "CreateCursor"],
        [94, "CreateGlyphCursor"],
        [95, "FreeCursor"],
        [96, "RecolorCursor"],
        [97, "QueryBestSize"],
        [98, "QueryExtension"],
        [99, "ListExtensions"],
        [100, "ChangeKeyboardMapping"],
        [101, "GetKeyboardMapping"],
        [102, "ChangeKeyboardControl"],
        [103, "GetKeyboardControl"],
        [104, "Bell"],
        [105, "ChangePointerControl"],
        [106, "GetPointerControl"],
        [107, "SetScreenSaver"],
        [108, "GetScreenSaver"],
        [109, "ChangeHosts"],
        [110, "ListHosts"],
        [111, "SetAccessControl"],
        [112, "SetCloseDownMode"],
        [113, "KillClient"],
        [114, "RotateProperties"],
        [115, "ForceScreenSaver"],
        [116, "SetPointerMapping"],
        [117, "GetPointerMapping"],
        [118, "SetModifierMapping"],
        [119, "GetModifierMapping"],
        [127, "NoOperation"]
    ]);
}