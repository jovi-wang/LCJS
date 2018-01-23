const feed1={ records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            { type: 'callLegStart',
                time: '2017-08-24T07:56:46Z',
                recordIndex: '265',
                correlatorIndex: '386',
                callleg:
                    { id: 'df89e836-ed96-4a79-8960-41d9fa8da231',
                        remoteparty: '0386949045@10.83.154.150;user=phone',
                        localaddress: '0284403359@141.168.40.247',
                        displayname: '242Exhibition24.10',
                        remoteaddress: '0386949045@10.83.154.150;user=phone',
                        type: 'sip',
                        direction: 'incoming',
                        groupid: 'b3f99307-39b9-450c-920b-1688fd7c6465',
                        sipcallid: 'b4f42bb31393c041a295190e16bac35b@10.122.134.165' } } } };
const feed2 = { records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            { type: 'callLegUpdate',
                time: '2017-08-24T07:56:54Z',
                recordIndex: '266',
                correlatorIndex: '387',
                callleg:
                    { id: 'df89e836-ed96-4a79-8960-41d9fa8da231',
                        state: 'connected',
                        ivr: '',
                        groupid: 'b3f99307-39b9-450c-920b-1688fd7c6465',
                        sipcallid: 'b4f42bb31393c041a295190e16bac35b@10.122.134.165',
                        displayname: '242Exhibition24.10',
                        remoteaddress: '0386949045@10.83.154.150;user=phone' } } } };
const feed3= { records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            [ { type: 'callStart',
                time: '2017-08-24T07:57:02Z',
                recordIndex: '267',
                correlatorIndex: '388',
                call:
                    { id: 'bb29221e-600e-4285-8dd7-77fafa7ced88',
                        name: 'Michael.Booth.8 Space',
                        calltype: 'coSpace',
                        cospace: 'bcc24b05-f5ff-4d16-80c0-ca3188343c45',
                        callcorrelator: '0376cec8-6d63-4e53-ba6e-cb19afd2ba98' } },
                { type: 'callLegUpdate',
                    time: '2017-08-24T07:57:02Z',
                    recordIndex: '268',
                    correlatorIndex: '389',
                    callleg:
                        { id: 'df89e836-ed96-4a79-8960-41d9fa8da231',
                            state: 'connected',
                            call: 'bb29221e-600e-4285-8dd7-77fafa7ced88',
                            deactivated: 'false',
                            groupid: 'b3f99307-39b9-450c-920b-1688fd7c6465',
                            sipcallid: 'b4f42bb31393c041a295190e16bac35b@10.122.134.165',
                            displayname: '242Exhibition24.10',
                            remoteaddress: '0386949045@10.83.154.150;user=phone' } } ] } };
const feed4={ records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            { type: 'callLegStart',
                time: '2017-08-24T07:57:06Z',
                recordIndex: '269',
                correlatorIndex: '390',
                callleg:
                    { id: '88ad6b86-0148-491d-a500-d753ef4e92cb',
                        remoteparty: '0450795869@10.83.154.150;user=phone',
                        localaddress: '0284403359@141.168.40.247',
                        remoteaddress: '0450795869@10.83.154.150;user=phone',
                        type: 'sip',
                        direction: 'incoming',
                        groupid: '18847d5a-e7c3-45a7-9995-f2b8cab7fd66',
                        sipcallid: '25c72d137be97025338a380bb50cf3a4@10.122.134.165' } } } };
const feed5={ records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            { type: 'callLegUpdate',
                time: '2017-08-24T07:57:08Z',
                recordIndex: '270',
                correlatorIndex: '391',
                callleg:
                    { id: '88ad6b86-0148-491d-a500-d753ef4e92cb',
                        state: 'connected',
                        ivr: '',
                        groupid: '18847d5a-e7c3-45a7-9995-f2b8cab7fd66',
                        sipcallid: '25c72d137be97025338a380bb50cf3a4@10.122.134.165',
                        remoteaddress: '0450795869@10.83.154.150;user=phone' } } } };
const feed6={ records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            { type: 'callLegUpdate',
                time: '2017-08-24T07:57:16Z',
                recordIndex: '271',
                correlatorIndex: '392',
                callleg:
                    { id: '88ad6b86-0148-491d-a500-d753ef4e92cb',
                        state: 'connected',
                        call: 'bb29221e-600e-4285-8dd7-77fafa7ced88',
                        deactivated: 'false',
                        groupid: '18847d5a-e7c3-45a7-9995-f2b8cab7fd66',
                        sipcallid: '25c72d137be97025338a380bb50cf3a4@10.122.134.165',
                        remoteaddress: '0450795869@10.83.154.150;user=phone' } } } };
const feed7={ records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            { type: 'callLegEnd',
                time: '2017-08-24T07:57:24Z',
                recordIndex: '272',
                correlatorIndex: '393',
                callleg:
                    { id: '88ad6b86-0148-491d-a500-d753ef4e92cb',
                        reason: 'remoteTeardown',
                        remoteteardown: 'true',
                        durationseconds: '18',
                        activatedduration: '8',
                        alarm: { type: 'packetLoss', durationPercentage: '9.5' },
                        unencryptedmedia: 'true',
                        rxaudio:
                            { codec: 'g711u',
                                packetstatistics:
                                    { packetlossbursts: { duration: '0.221', density: '0.00' },
                                        packetgap: { duration: '10.609', density: '0.00' } } },
                        txaudio: { codec: 'g711a' },
                        sipcallid: '25c72d137be97025338a380bb50cf3a4@10.122.134.165' } } } };
const feed8={ records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            [ { type: 'callLegEnd',
                time: '2017-08-24T07:57:31Z',
                recordIndex: '273',
                correlatorIndex: '394',
                callleg:
                    { id: 'df89e836-ed96-4a79-8960-41d9fa8da231',
                        reason: 'remoteTeardown',
                        remoteteardown: 'true',
                        durationseconds: '45',
                        activatedduration: '29',
                        mediausagepercentages: { mainvideoviewer: '100.0', mainvideocontributor: '100.0' },
                        alarm: { type: 'packetLoss', durationPercentage: '6.7' },
                        unencryptedmedia: 'true',
                        rxaudio:
                            { codec: 'aac',
                                packetstatistics:
                                    { packetlossbursts: { duration: '0.251', density: '0.00' },
                                        packetgap: { duration: '27.420', density: '0.00' } } },
                        txaudio: { codec: 'aac' },
                        rxvideo:
                            { codec: 'h264',
                                maxsizewidth: '1920',
                                maxsizeheight: '1080',
                                packetstatistics:
                                    { packetlossbursts: { duration: '0.000', density: '0.00' },
                                        packetgap: { duration: '35.081', density: '0.00' } } },
                        txvideo: { codec: 'h264', maxsizewidth: '1920', maxsizeheight: '1080' },
                        sipcallid: 'b4f42bb31393c041a295190e16bac35b@10.122.134.165' } },
                { type: 'callEnd',
                    time: '2017-08-24T07:57:31Z',
                    recordIndex: '274',
                    correlatorIndex: '395',
                    call:
                        { id: 'bb29221e-600e-4285-8dd7-77fafa7ced88',
                            calllegscompleted: '2',
                            calllegsmaxactive: '2',
                            durationseconds: '29' } } ] } };

const callStart = { records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            { type: 'callStart',
                time: '2017-08-24T07:57:02Z',
                recordIndex: '267',
                correlatorIndex: '388',
                call:
                    { id: 'bb29221e-600e-4285-8dd7-77fafa7ced88',
                        name: 'Michael.Booth.8 Space',
                        calltype: 'coSpace',
                        cospace: 'bcc24b05-f5ff-4d16-80c0-ca3188343c45',
                        callcorrelator: '0376cec8-6d63-4e53-ba6e-cb19afd2ba98' } },
    } };
const callEnd = { records:
    { session: '2e1e9541-1352-4c13-81f0-2c74374d5456',
        record:
            { type: 'callEnd',
                time: '2017-08-24T07:57:31Z',
                recordIndex: '274',
                correlatorIndex: '395',
                call:
                    { id: 'bb29221e-600e-4285-8dd7-77fafa7ced88',
                        calllegscompleted: '2',
                        calllegsmaxactive: '2',
                        durationseconds: '29' } }  } };

const eventParser = feed => {
    try {
        let feedArray = [];
        let record = feed.records.record;
        //if record is array, split them and construct a new feedArray
        if (Array.isArray(record)) {
            for(let item of record){
                feedArray.push(item);
            }
        } else {
            //if this is a single record, push into feedArray
            feedArray.push(record);
        }
        return feedArray;
    } catch (err) {
        //if cdr feed is invalid(containing unexpected properties), this could happen
        console.log("error", err);
    }
};
//
// console.log(eventParser(feed1));
// console.log(eventParser(feed2));
// console.log(eventParser(feed3));
// console.log(eventParser(feed4));
// console.log(eventParser(feed5));
// console.log(eventParser(feed6));
// console.log(eventParser(feed7));
const result = eventParser(feed3);
for(let item of result){
   const temp = {};
   temp.event = item.type;
   // console.log(temp);
}

const a = {
        type:'12',
    id:'id1'
};
if(!a){
        console.log(1);
}else{
    console.log(2)
}