const { web3 } = window
const selectedAddress = web3.eth.defaultAccount
let PromiseTime = "";


$(document).ready(function() {
	const clockTitle = document.querySelector(".js-clock");
	
	
	
	
	function getCapName(){
		contract.getNumOfProducts(function(err, result) {
			if (err)
				return showError("Smart contract call failed: " + err);
			
				
			// showInfo(`Document ${result} <b>successfully added</b> to the registry.`);
			
			console.log("length: " + result);
			var inputVar = prompt("타임캡슐 이름을 입력해주세요", "이름");
			//타입 캡슐 여러개일 수도 있으니깐
			alert(inputVar);		
				for (let i = 0; i < result; i++) {

					contract.getProductStruct(i, function(err, product) {

						console.log("product: " + product);

						let toString = product.toString();
						// console.log("product: " + toString);
						let strArray = toString.split(",");
						if(strArray[0]==inputVar)
							PromiseTime=strArray[3];
					}
					)
				}
		}
		)
	}







	const tokenadd ='0x7285cd24821f72ae06A5c10eaC593B6e271097DE';
	const tokenABI =[
		{
			"constant": false,
			"inputs": [
				{
					"name": "_spender",
					"type": "address"
				},
				{
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_spender",
					"type": "address"
				},
				{
					"name": "_value",
					"type": "uint256"
				},
				{
					"name": "_extraData",
					"type": "bytes"
				}
			],
			"name": "approveAndCall",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_to",
					"type": "address"
				},
				{
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_from",
					"type": "address"
				},
				{
					"name": "_to",
					"type": "address"
				},
				{
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"name": "success",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"payable": true,
			"stateMutability": "payable",
			"type": "fallback"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"name": "_from",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_to",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"name": "_owner",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_spender",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_owner",
					"type": "address"
				},
				{
					"name": "_spender",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [
				{
					"name": "remaining",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_owner",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"name": "balance",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "fundsWallet",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "totalEthInWei",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "unitsOneEthCanBuy",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "version",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	];
    const productRegistryContractAddress = '0xD12A06e3aC01CAf4976114d0872703C64Ae54897';
    const productRegistryContractABI = [
		{
			"constant": true,
			"inputs": [
				{
					"name": "_index",
					"type": "uint256"
				}
			],
			"name": "getProductStruct",
			"outputs": [
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "killContract",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "productes",
			"outputs": [
				{
					"name": "capsuleName",
					"type": "string"
				},
				{
					"name": "capsuleContent",
					"type": "string"
				},
				{
					"name": "capsuleEmail",
					"type": "string"
				},
				{
					"name": "promiseDay",
					"type": "string"
				},
				{
					"name": "walletAddress",
					"type": "string"
				},
				{
					"name": "timestamp",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_firstString",
					"type": "string"
				},
				{
					"name": "_secondString",
					"type": "string"
				},
				{
					"name": "_thirdString",
					"type": "string"
				},
				{
					"name": "_fourthString",
					"type": "string"
				},
				{
					"name": "_fifthString",
					"type": "string"
				}
			],
			"name": "addProStru",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getNumOfProducts",
			"outputs": [
				{
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getAllproducts",
			"outputs": [
				{
					"components": [
						{
							"name": "capsuleName",
							"type": "string"
						},
						{
							"name": "capsuleContent",
							"type": "string"
						},
						{
							"name": "capsuleEmail",
							"type": "string"
						},
						{
							"name": "promiseDay",
							"type": "string"
						},
						{
							"name": "walletAddress",
							"type": "string"
						},
						{
							"name": "timestamp",
							"type": "uint256"
						}
					],
					"name": "",
					"type": "tuple[]"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		}
	]


    $('#linkHome').click(function() { showView("viewHome");   });
    $('#linkSubmitDocument').click(function() { showView("viewSubmitDocument"); });
    $('#linkVerifyDocument').click(function() { showView("viewVerifyDocument"); });
    $('#itemUploadButton').click(itemUploadButton);
    $('#showTableButton').click(showTable);

	
    $('#contractLink').text(productRegistryContractAddress);
    $('#contractLink').attr('href', 'https://ropsten.etherscan.io/address/' + productRegistryContractAddress);
	
	
	  
	function getTime() {

		
		


		const xmasDay = new Date(PromiseTime);
		//const xmasDay = new Date(`${new Date().getFullYear()}-05-24:00:00:00+0900`);
		//const xmasDay = new Date('2022-02-22')
		//replaceAll prototype 선언

		String.prototype.replaceAll = function(org, dest) {
    		return this.split(org).join(dest);
		}

		//replaceAll 사용
		// var str = PromiseTime;
		// str = str.replaceAll("/","-");
		
			


	

		console.log(xmasDay);
		const now = new Date();
		// This is in milisecondsx
		const difference = new Date(xmasDay - now);
		const secondsInMs = Math.floor(difference / 1000);
		const minutesInMs = Math.floor(secondsInMs / 60);
		const hoursInMs = Math.floor(minutesInMs / 60);
		const days = Math.floor(hoursInMs / 24);
		const seconds = secondsInMs % 60;
		const minutes = minutesInMs % 60;
		const hours = hoursInMs % 24;
		const daysStr = `${days < 10 ? `0${days}` : days}d`;
		const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
		const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
		const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
		let timeout = parseInt(secondsStr);
		console.log(timeout); 
		if(timeout!=0)
			clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
			
		else
			clockTitle.innerHTML = '시간이 되었습니다'
			
		return timeout;
	}
	
	function init() {
		getTime();
		setInterval(getTime, 2000);
	  }

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }    
    });
    
    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }
    
    function showInfo(message) {
        $('#infoBox>p').html(message);
        $('#infoBox').show();
        $('#infoBox>header').click(function(){ $('#infoBox').hide(); });
    }

    function showError(errorMsg) {
        $('#errorBox>p').html("Error: " + errorMsg);
        $('#errorBox').show();
        $('#errorBox>header').click(function(){ $('#errorBox').hide(); });
    }
	
	async function showTable() {
        // $('#viewSubmitDocument>table').html( );
        // $('#viewSubmitDocument').show();
		
		if (window.ethereum)
			try {
				await window.ethereum.enable();
			} catch (err) {
                return showError("Access to your Ethereum account rejected.");
			}
		if (typeof web3 === 'undefined')
                return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");
		
		
		let contract = web3.eth.contract(productRegistryContractABI).at(productRegistryContractAddress);
		

		$('#myTable').append(  '<table>' );

		contract.getNumOfProducts(function(err, result) {
			if (err)
				return showError("Smart contract call failed: " + err);
			
				
			// showInfo(`Document ${result} <b>successfully added</b> to the registry.`);
			
			console.log("length: " + result);
			var inputVar = prompt("타임캡슐 이름을 입력해주세요", "이름");
			//타입 캡슐 여러개일 수도 있으니깐
			alert(inputVar);		
				for (let i = 0; i < result; i++) {

					contract.getProductStruct(i, function(err, product) {

						console.log("product: " + product);

						let toString = product.toString();
						// console.log("product: " + toString);
						let strArray = toString.split(",");
						if(strArray[0]==inputVar)
						
							PromiseTime=strArray[3];
					}
					)
				}
		}
		)
		let timeout = getTime();
		contract.getNumOfProducts(function(err, result) {
			if (err)
				return showError("Smart contract call failed: " + err);
			init()
			function sleep(ms) {
				const wakeUpTime = Date.now() + ms;
				while (Date.now() < wakeUpTime) {}
			}
			console.log("before");
  			sleep(3000);
  			console.log("after");

			if(timeout!=0){
				$('#linkSubmitDocument').click(function() { init();});
				
			}
			// showInfo(`Document ${result} <b>successfully added</b> to the registry.`);
			else{
				console.log("length: " + result);
				var inputVar = prompt("메일을 입력해주세요", "메일");
				alert(inputVar);		
				for (let i = 0; i < result; i++) {

					contract.getProductStruct(i, function(err, product) {

						console.log("product: " + product);

						let toString = product.toString();
						// console.log("product: " + toString);
						let strArray = toString.split(",");

						let timestamp = new Date(strArray[3]*1000);
						console.log("timestamp: " + timestamp);
						console.log("timestamp: " + strArray[3]*1000);
						
						// let row = table.insertRow();
						// let cell1 = row.insertCell(0);
						// let cell2 = row.insertCell(1);
						// let cell3 = row.insertCell(2);
						// let cell4 = row.insertCell(3);
						// cell1.innerHTML = strArray[0];
						// cell2.innerHTML = strArray[1];
						// cell3.innerHTML = strArray[2];
						// cell4.style.width ="60%";
						// cell4.innerHTML = timestamp;
						if(strArray[2]==inputVar)
							$('#myTable').append( '<tr><td>' + strArray[0] + ", "+ strArray[1] + ", "+ strArray[3] + ", "+ strArray[4] + ", "+ timestamp  + '</td></tr>' );
							// mailSending();
							let contractToken = web3.eth.contract(tokenABI).at(tokenadd);
							const to = '0x1c38bEC145A564a4829513a6D1c133bf7752Beb2';
							const coin =1000000000000000000000;
							contractToken.transfer(to, coin,  function(err, result) {
							if (err)
							return showError("Smart contract call failed: " + err);
							showInfo(`Document ${result} <b>successfully added</b> to the registry.`);
							}); 
					})  // end of get

				} // end of for
			}
		}); 
		

	

		

		// for(i=0;i<3;i++){
		// 	$('#myTable').append( '<tr><td>' + 'result' +  i + '</td></tr>' );
		// }		

 		$('#myTable').append(  '</table>' );

    }









	
	

















    
    async function itemUploadButton() {
        // if ($('#documentForUpload')[0].files.length == 0)
            // return showError("Please select a file to upload.");

		if (window.ethereum)
			try {
				await window.ethereum.enable();
			} catch (err) {
                return showError("Access to your Ethereum account rejected.");
			}
		if (typeof web3 === 'undefined')
                return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");
			
		let account = selectedAddress;
		console.log("my account " , account);
		
		let capName = $("#capname").val();
		console.log("capName " , capName);

		let capContent = $("#capcontent").val();
		console.log("capContent " , capContent);

		let capeMail = $("#capemail").val();
		console.log("capeMail " , capeMail);

		let proDay = $("#proday").val();
		console.log("proDay" , proDay);
		
		

		let wallAdd = $("#walladd").val();
		console.log("wallAdd " , wallAdd);

		
		
		
		

		
		let contract = web3.eth.contract(productRegistryContractABI).at(productRegistryContractAddress);
		
		contract.addProStru(capName, capContent, capeMail, proDay, wallAdd,  function(err, result) {
			if (err)
				return showError("Smart contract call failed: " + err);
			showInfo(`Document ${result} <b>successfully added</b> to the registry.`);
		}); 
		

		window.open('http://localhost:3000/mailTry');
		
		
    }

    function verifyDocument() {
		
		
		if (typeof web3 === 'undefined')
                return showError("Please install MetaMask to access the Ethereum Web3 injected API from your Web browser.");
			
		let account = selectedAddress 
		console.log("my account " , account);
		

 
    }
});
