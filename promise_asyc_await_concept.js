function test1(fail=false) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            (fail) ? rej("no task 1") : res("task 1 done");
        }, 2500);
    })
};

function test2(fail=false) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            (fail) ? rej("no task 2") : res("task 2 done");
        }, 1200);
    });
}

function test3(fail=false) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            (fail) ? rej("no task 3") : res("task 3 done");
        }, 300);
    });
}

function test4(fail=false) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            (fail) ? rej("no task 4") : res("task 4 done");
        }, 3200);
    });
}

async function done() {
    try{
        console.log(await test1(true));
    }
    catch(err) {console.error(err)}
    try{
        console.log(await test2());
    }
    catch(err) {console.error(err)}
    try{
        console.log(await test3());
    }
    catch(err) {console.error(err)}
    try{
        console.log(await test4(true));
    }
    catch(err) {console.error(err)}

    console.log("All tasks done!");
}

done();


//test1(() => test2(() => test3(() => test4(() => console.log("finish")))));

//test1().then((val) => {
//    console.log(val);
//    return test2();
//    }).then((val) => {
//        console.log(val);
//        return test3();
//        }).then((val) => {
//            console.log(val);
//            return test4();
//            }).then((val) => {
//                console.log(val);
//                console.log("Done!");}).catch((val) => {console.error(val)});








