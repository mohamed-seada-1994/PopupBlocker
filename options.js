var f,g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var l;a:{var n={A:!0},q={};try{q.__proto__=n;l=q.A;break a}catch(a){}l=!1}h=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=h;
function u(a,b){function c(){}c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.F=function(a,c,m){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}};var aa=Element.prototype.matches||Element.prototype.msMatchesSelector,ba="closest"in Element.prototype?function(a,b){return a.closest(b)}:function(a,b){for(var c=a;c;c=c.parentElement)if(aa.call(a,b))return a};Object.getOwnPropertyDescriptor(window,"frameElement")||Object.getOwnPropertyDescriptor(Window.prototype,"frameElement");function v(a){return"undefined"===typeof a};var ca=window.XMLHttpRequest;function w(a,b,c,d){var e=GM_getValue(x);e=v(e)||0===e.length?[]:e.split(",");var m=e.indexOf(b);if(-1===m&&!1!==c)e.push(b);else if(-1!==m&&!0!==c)e.splice(m,1);else{v(d)||d();return}GM_setValue(x,e.join(","));y();v(d)||d();z(a)}function A(){for(var a=[],b=[],c=new da(a,b),d=GM_listValues(),e=0,m=d.length;e<m;e++){var p=d[e],k=GM_getValue(p),r=c;p===x?0<k.length&&Array.prototype.push.apply(r.b,k.split(",")):"ver"!==p&&0!==(k&1)&&r.a.push(p)}return[a,b]}
function z(a){a=a.w;for(var b=A(),c=0,d=a.length;c<d;c++)a[c](b)}function y(){var a=new ca;a.open("GET",window.location.href,!0);a.setRequestHeader("Pragma","no-cache");a.setRequestHeader("Expires","-1");a.setRequestHeader("Cache-Control","no-cache");a.send()}var x="whitelist";function da(a,b){this.b=a;this.a=b};var B={en:{userscript_name:"AdGuard Popup Blocker",settings_saved:"Settings saved",site_input_ph:"Enter site name",add_site:"Add a site",add:"Add",allowed_empty:"List of exceptions is empty",allowed:"Exceptions",silenced_empty:"List of websites with silenced notifications is empty",silenced:"Silenced",allowed_tooltip:"Popups will be allowed on websites listed here.",silenced_tooltip:"Blocked popups notifications will not be shown on websites listed here.",installFrom:"Install from {$startLink}{$name}{$endLink}",
noinst_step_3:"Step 3: Refresh this page to get to the userscript settings",noinst_ignore_if_ag:"If you have AdGuard for Windows installed, you can ignore this step as the Popup Blocker userscript comes pre-installed.",noinst_rec:"(Recommended)",please_wait:"Please wait, detecting the Popup Blocker",noinst_special_prog:"First of all, to use a userscript you need a special program or extension that can run userscripts.",noinst_subtitle:"AdGuard Popup Blocker userscript is not installed. Please see the instruction below.",
homepage:"Homepage",noinst_step_1:"Step 1: Install a userscript manager",noinst_step_2:"Step 2: Userscript"},fr:{userscript_name:"Bloqueur de fenêtres pop-up de AdGuard",settings_saved:"Paramètres sauvegardés",site_input_ph:"Saisir le nom du site Web",add_site:"Ajouter un site Web",add:"Ajouter",allowed_empty:"La liste des exceptions est vide",silenced_empty:"La liste des sites web aux notifications silencieuses est vide",silenced:"Silence imposé",allowed_tooltip:"Fenêtres pop-up pour les sites web sur la liste vont être autorisés.",
silenced_tooltip:"Les notifications pour les fenêtres pop-up bloquées depuis les sites web listés ci-dessous ne seront pas affichées.",installFrom:"Installer de {$startLink}{$name}{$endLink}",noinst_step_3:"Étape 3: renouvelez la page pour accéder aux paramètres du script utilisateur",noinst_ignore_if_ag:"Si vous avez installé AdGuard pour Windows auparavant, vous pouvez passer cette étape car le script utilisateur Bloqueur de fenêtres pop-up y est déjà pré-installé.",noinst_rec:"(Recommandé)",please_wait:"Veuillez patienter, recherche de bloqueur des fenêtres pop-up en cours",
noinst_special_prog:"À l'essentiel pour vous servied'un script utilisateur vous avez besoin d'un programme spécial ou extension qui fonctionne sur ces types de script.",noinst_subtitle:"Le script utilisateur bloqueur de fenêtres pop-up n'est pas installé. Veuillez consulter le manuel ci-dessous.",homepage:"Page d'accueil",noinst_step_1:"Étape 1: installer un logiciel géstionnaire de scripts utilisateurs",noinst_step_2:"Étape 2: script utilisateur"},de:{userscript_name:"AdGuard Pop-up-Blocker",settings_saved:"Einstellungen gespeichert",
site_input_ph:"Seitenname eingeben",add_site:"Eine Seite hinzufügen",add:"Hinzufügen",allowed_empty:"Liste der Ausnahmen ist leer",allowed:"Ausnahmen",silenced_empty:"Liste der Webseiten ohne Benachrichtigungen ist leer",silenced:"Ausgeschaltet",allowed_tooltip:"Pop–ups sind auf den hier aufgeführten Webseiten erlaubt.",silenced_tooltip:"Benachrichtigungen für blockierte Pop-ups werden auf den hier aufgeführten Webseiten nicht angezeigt.",installFrom:"Von {$startLink}{$name}{$endLink} installieren",
noinst_step_3:"Schritt 3: Aktualisieren Sie diese Seite, um zu den Benutzerskript-Einstellungen zu übergehen.",noinst_ignore_if_ag:"Wenn Sie AdGuard für Windows installiert haben, können Sie diesen Schritt ignorieren, da das Benutzerskript für den Pop-up-Blocker bereits vorinstalliert ist.",noinst_rec:"(Empfohlen)",please_wait:"Bitte warten Sie, der Pop-up-Blocker wird erkannt",noinst_special_prog:"Um ein Benutzerskript verwendende können, benötigen Sie ein spezielles Programm, das Benutzerskripte ausführt.",
noinst_subtitle:"AdGuard Pop-up-Blocker Benutzerskript ist nicht installiert. Bitte beachten Sie die folgende Anleitung.",noinst_step_1:"Schritt 1: Installieren Sie einen Benutzerskript-Manager",noinst_step_2:"Schritt 2: Benutzerskript"},es:{userscript_name:"Bloqueador de popup de AdGuard",settings_saved:"Ajustes guardados",site_input_ph:"Introduzca nombre del sitio",add_site:"Añadir un sitio",add:"Añadir",allowed_empty:"La lista de sitios permitidos está vacía",allowed:"Excepciones",silenced_empty:"La lista de sitios con notificaciones silenciadas está vacía",
silenced:"Silenciado",allowed_tooltip:"Ventanas emergentes estarán permitidas para los dominios enumerados aquí.",silenced_tooltip:"Notificaciones para ventanas emergentes bloqueadas no se mostrarán para los sitios enumerados aquí.",installFrom:"Instalar desde {$startLink}{$name}{$endLink}",noinst_step_3:"Paso 3: Recargue esta página para obtener los ajustes de userscript",noinst_ignore_if_ag:"Si ha instalado AdGuard para Windows, puede ignorar este paso porque el userscript Bloqueador de popup viene preinstalado.",
noinst_rec:"(Recomendado)",please_wait:"Por favor espere, detectando el Bloqueador de popup",noinst_special_prog:"Primero para usar userscript se necesita un programa especial que lo ejecuta.",noinst_subtitle:"Bloqueador de popup de AdGuard no es instalado. Por favor, vea el manual abajo.",homepage:"Página web",noinst_step_1:"Paso 1: Instale el gestor de userscript",noinst_step_2:"Paso 2: Userscript"},ar:{userscript_name:"AdGuard Popup Blocker",settings_saved:"الإعدادات المحفوظة",site_input_ph:"ادخل اسم الموقع",
add_site:"إضافة موقع",add:"إضافة",allowed_empty:"قائمه المواقع المسموح بها فارغه",allowed:"المسموح بها",silenced_empty:"قائمه المواقع الصامتة فارغه",silenced:"صامت",allowed_tooltip:"سيتم السماح بالنوافذ المنبثقة للنطاقات المدرجة هنا",silenced_tooltip:"لن يتم عرض إشعارات النوافذ المنبثقة الممنوعة للنطاقات المدرجة هنا",installFrom:"{$startLink}{$name}{$endLink}التثبيت من",noinst_step_3:"usercriptالخطوة3: قم بتحديث هذه الصفحة للحصول على إعدادات",noinst_ignore_if_ag:"إذا قمت بتثبيت ادجوارد للويندوز فيمكنك تجاهل هذه الخطوة حيث يأتي سكربت مانع النوافذ المنبثقة مثبتًا مسبقًا",
noinst_rec:"(موصى به)",please_wait:"يرجى الانتظار للكشف عن مانع ظهور النوافذ المنبثقة",noinst_special_prog:"أولا وقبل كل شيء، لاستخدام يوزر سكربت تحتاج إلى برنامج خاص يقوم بتشغيل يوزر سكربيت",noinst_subtitle:"لم يتم تثبيت يوزر سكربت ادجوارد مانع النوافذ المنبثقة  يرجى الاطلاع على التعليمات أدناه",homepage:"الصفحه الرئيسيه",noinst_step_1:"الخطوة 1: تثبيت مديريوزر سكربت",noinst_step_2:"الخطوة 2: يوزر سكربت"},it:{userscript_name:"Blocco Pop-Up di AdGuard",settings_saved:"Impostazioni salvate",site_input_ph:"Inserisci il nome del sito",
add_site:"Aggiungi un sito",add:"Aggiungi",allowed_empty:"La lista dei siti consentiti è vuota",allowed:"Consentito",silenced_empty:"La lista dei siti silenziati è vuota",silenced:"Silenziato",allowed_tooltip:"I popup verranno permessi per i domini indicati qui.",silenced_tooltip:"Le notifiche per i popup bloccati non verranno mostrate per i domini indicati qui.",installFrom:"Installa da {$startLink}{$name}{$endLink}",noinst_step_3:"Passo 3: Ricarica questa pagina per ottenere le impostazioni dello script utenti",
noinst_ignore_if_ag:"Se hai installato AdGuard per Windows puoi ignorare questo passaggio poiché lo script utenti del Blocco popup è preinstallato.",noinst_rec:"(Raccomandato)",please_wait:"Attendere per favore, rilevazione del Blocco popup",noinst_special_prog:"Prima di tutto, per usare uno script utenti hai bisogno di uno speciale programma che esegue script utenti.",noinst_subtitle:"Lo script utenti Blocco popup di AdGuard non è installato. Per favore guarda le istruzioni qui sotto.",noinst_step_1:"Passo 1: Installa un manager dello script utenti",
noinst_step_2:"Passo 2: Script utenti"},ru:{userscript_name:"Блокировщик всплывающей рекламы от AdGuard",settings_saved:"Настройки сохранены",site_input_ph:"Введите имя сайта",add_site:"Добавить сайт",add:"Добавить",allowed_empty:"Список исключений пуст",allowed:"Исключения",silenced_empty:"Список сайтов с отключенными уведомлениями пуст",silenced:"Без уведомлений",allowed_tooltip:"Всплывающие окна будут разрешены на сайтах, перечисленных здесь.",silenced_tooltip:"Уведомления о заблокированных всплывающих окнах не будут отображаться на сайтах, перечисленных здесь.",
installFrom:"Установить из {$startLink}{$name}{$endLink}",noinst_step_3:"Шаг 3: обновите эту страницу, чтобы перейти к настройкам пользовательского скрипта",noinst_ignore_if_ag:"Если вы установили AdGuard для Windows, вы можете проигнорировать этот шаг, так как Блокировщик всплывающей рекламы уже установлен.",noinst_rec:"Рекомендуется",please_wait:"Пожалуйста, подождите, попытка обнаружить Блокировщик всплывающей рекламы",noinst_special_prog:"Для использования скрипта вам, прежде всего, необходима специальная программа (или расширение), которая может работать с пользовательскими скриптами.",
noinst_subtitle:"Блокировщик всплывающей рекламы AdGuard не установлен. Пожалуйста, обратитесь к инструкции ниже.",homepage:"Домашняя страница",noinst_step_1:"Шаг 1: установите программу для управления пользовательскими скриптами",noinst_step_2:"Шаг 2: пользовательский скрипт"},"pt-BR":{userscript_name:"AdGuard Bloqueador de Pop-ups",settings_saved:"Configurações salvas",site_input_ph:"Digite o nome do site",add_site:"Adicionar um site",add:"Adicionar",allowed_empty:"Lista de exceções está vazia",
allowed:"Exceções",silenced_empty:"Lista de sites com notificações silenciadas está vazia",silenced:"Silenciado",allowed_tooltip:"Os pop-ups serão permitidos para sites listados aqui.",silenced_tooltip:"As notificações para pop-ups bloqueados não serão mostrados para sites listados aqui.",installFrom:"Instale da {$startLink}{$name}{$endLink}",noinst_step_3:"Etapa 3: Atualize esta página para obter as configurações de script de usuário",noinst_ignore_if_ag:"Se você instalou o AdGuard para Windows, você pode ignorar esta etapa, porque o script de usuário do Bloqueador de Pop-ups já vem pré-instalado.",
noinst_rec:"(Recomendado)",please_wait:"Por favor, aguarde enquanto detectamos o Bloqueador de Pop-ups",noinst_special_prog:"Primeiro de tudo, para usar um script de usuário você precisa de um programa ou uma extensão especial para executá-los.",noinst_subtitle:"O script de usuário do Bloqueador de Pop-ups do AdGuard não está instalado. Por favor, siga as instruções abaixo.",homepage:"Página Inicial",noinst_step_1:"Etapa 1: Instale um gerenciador de script de usuário",noinst_step_2:"Etapa 2: Script de Usuário"},
"zh-TW":{userscript_name:"AdGuard 彈出式視窗封鎖器",settings_saved:"已儲存之設定",site_input_ph:"輸入站名",add_site:"增加網站",add:"增加",allowed_empty:"例外的清單為空",allowed:"例外",silenced_empty:"用靜音通知的網站之清單為空",silenced:"已靜音的",allowed_tooltip:"於此被列出的網站上，彈出式視窗將被允許。",silenced_tooltip:"於此被列出的網站上，已封鎖的彈出式視窗通知將不被顯示。",installFrom:"從 {$startLink}{$name}{$endLink} 安裝",noinst_step_3:"步驟3：重新整理該頁面以開始使用者腳本設定",noinst_ignore_if_ag:"如果您有已安裝的AdGuard for Windows，您可忽略此步驟，因為彈出式視窗封鎖器使用者腳本變為被預安裝。",noinst_rec:"（已建議）",please_wait:"請等待，偵測到彈出式視窗封鎖器",
noinst_special_prog:"首先，為使用一個使用者腳本，您需要可執行腳本的特殊程式或擴充功能。",noinst_subtitle:"AdGuard彈出式視窗封鎖器使用者腳本未被安裝。請參閱下面的說明。",homepage:"首頁",noinst_step_1:"步驟1：安裝使用者腳本管理器",noinst_step_2:"步驟2：使用者腳本"},da:{userscript_name:"AdGuard Popup Blocker",settings_saved:"Indstillingerne er gemt",site_input_ph:"Indtast hjemmesidens navn",add_site:"Tilføj en side",add:"Tilføj",allowed_empty:"Listen over undtagelser er tom",allowed:"Undtagelser",silenced_empty:"Listen over hjemmesider med tavse notifikationer er tom",silenced:"Fredet",
allowed_tooltip:"Popups vil være tilladt på de hjemmesider, som er angivet her.",silenced_tooltip:"Notifikationer for blokerede popups vil ikke blive vist på de hjemmesider som er angivet her.",installFrom:"Installer fra {$startLink}{$name}{$endLink}",noinst_step_3:"Trin 3: Opdater siden for at komme til userscript indstillingerne",noinst_ignore_if_ag:"Hvis du har AdGuard til Windows installeret, kan du ignorere dette trin, da Popup Blocker userscriptet er forudinstalleret.",noinst_rec:"(Anbefalet)",
please_wait:"Vent venligst, detekterer Popup Blocker",noinst_special_prog:"Først og fremmest for at bruge et userscript skal du have et særligt program eller en udvidelse som kan køre userscripts.",noinst_subtitle:"AdGuard Popup Blocker userscript er ikke installeret. Se venligst nedenstående instruktion.",homepage:"Hjemmeside",noinst_step_1:"Trin 1: Installer en userscript manager",noinst_step_2:"Trin 2: Userscript"},tr:{userscript_name:"AdGuard Popup Blocker",settings_saved:"Ayarlar kaydedildi",
site_input_ph:"Site adını gir",add_site:"Bir site ekle",add:"Ekle",allowed_empty:"İzin verilen siteler listesi boş",allowed:"İzin verildi",silenced_empty:"Sessize alınan siteler listesi boş",silenced:"Sessize alınmış",allowed_tooltip:"Burada listelenen siteler için açılır pencerelere izin verilir",silenced_tooltip:"Açılır pencerelerin engellenme uyarısı burada listelenen sitelerde gösterilmez.",installFrom:"{$startLink}{$name}{$endLink} dan yükle",noinst_step_3:"Adım 3: Kullanıcı betikleri ayarlarını almak için bu sayfayı yenile",
noinst_ignore_if_ag:"Eğer Windows için AdGuard yüklediyseniz, Açılır Pencere Engelleyici betiği önceden yüklü olarak geldiği için bu adımı görmezden gelebilirsiniz.",noinst_rec:"(Önerilir)",please_wait:"Lütfen bekleyin, Açılır Pencere Engelleyici tespit ediliyor",noinst_special_prog:"Her şeyden önce, bir kullanıcı betiği kullanmak için kullanıcı betiklerini çalıştıran özel bir programa ihtiyacınız var.",noinst_subtitle:"AdGuard Açılır Pencere Engelleyicisi kullanıcı betiği yüklü değil. Lütfen aşağıdaki yönergeleri inceleyin.",
homepage:"Anasayfa",noinst_step_1:"Adım 1: Bir kullanıcı betiği yöneticisi yükle",noinst_step_2:"Adım 2: Kullanıcı betiği"},ja:{userscript_name:"AdGuard ポップアップブロッカー",settings_saved:"設定保存完了",site_input_ph:"サイト名を入力",add_site:"サイトを追加する",add:"追加",allowed_empty:"許可済みサイトのリストは空です",allowed:"許可済み",silenced_empty:"消音済みサイトのリストは空です",silenced:"消音済み",allowed_tooltip:"ポップアップはここに記載されているドメインにとって許可されます。",silenced_tooltip:"ブロックされたポップアップの通知は、ここにリストアップされているドメインでは表示されません。",installFrom:"{$startLink}{$name}{$endLink}からインストールする",
noinst_step_3:"ステップ3：このページを更新して、ユーザースクリプト設定を取得する",noinst_ignore_if_ag:"AdGuard for Windows をインストールした場合は、ポップアップブロッカーのユーザスクリプトがあらかじめインストールされているので、このステップを無視して結構です。",noinst_rec:"（推奨）",please_wait:"ポップアップブロッカーを検出するまでお待ちください",noinst_special_prog:"まず、ユーザスクリプトを使用するには、ユーザスクリプトを実行する特別なプログラムが必要です。",noinst_subtitle:"AdGuardポップアップブロッカー・ユーザスクリプトがインストールされていません。 下記の指示をご覧ください。",homepage:"ホームページ",noinst_step_1:"ステップ1：ユーザースクリプト・マネージャをインストールする",noinst_step_2:"ステップ２：ユーザスクリプト"},"zh-CN":{userscript_name:"AdGuard 弹窗拦截器",
settings_saved:"设置已保存",site_input_ph:"输入网站名称",add_site:"添加网站",add:"添加",allowed_empty:"允许的网站列表为空",allowed:"允许",silenced_empty:"禁止的网站列表",silenced:"禁止",allowed_tooltip:"此处列出的是允许弹窗的域。",silenced_tooltip:"此处列出的是禁止弹出的域。",installFrom:"安装从 {$startLink}{$name}{$endLink}",noinst_step_3:"步骤3：刷新此页已获取用户脚本设置",noinst_ignore_if_ag:"如您已安装 AdGuard for Windows，则您可忽略此步骤，因为其已预安装弹窗拦截器用户脚本。",noinst_rec:"（推荐）",please_wait:"请稍后，正在检测弹窗拦截器",noinst_special_prog:"首先，要使用用户脚本，您需要特殊的程序的以运行用户脚本。",noinst_subtitle:"AdGuard Popup Blocker 用户脚本未安装。请查看以下指示说明。",
homepage:"主页",noinst_step_1:"步骤 1：安装用户脚本管理器",noinst_step_2:"步骤 2：用户脚本"},pl:{userscript_name:"Bloker wyskakujących okienek przez AdGuard",settings_saved:"Ustawienia zapisane",site_input_ph:"Wprowadź nazwę witryny",add_site:"Dodaj stronę",add:"Dodaj",allowed_empty:"Lista dozwolonych stron jest pusta",allowed:"Dozwolona",silenced_empty:"Lista uciszonych stron jest pusta",silenced:"Uciszona",allowed_tooltip:"Dla wymienionych tutaj stron dozwolone będą wyskakujące okienka.",silenced_tooltip:"Powiadomienia o zablokowanych wyskakujących okienkach nie będą wyświetlane dla stron tutaj wymienionych.",
installFrom:"Zainstaluj z {$startLink}{$name}{$endLink}",noinst_step_3:"Krok 3: Odśwież tę stronę, aby uzyskać ustawienia dotyczące skryptów użytkowników",noinst_ignore_if_ag:"Jeśli zainstalowałeś AdGuard dla systemu Windows, możesz zignorować ten krok, gdy instalator funkcji Bloker wyskakujących okienek zostanie zainstalowany fabrycznie.",noinst_rec:"(Zalecane)",please_wait:"Proszę czekać, wykrywam Bloker wyskakujących okienek",noinst_special_prog:"Przede wszystkim, aby użyć skryptów użytkownika, potrzebujesz specjalnego programu, który uruchamia te skrypty.",
homepage:"Strona domowa"}},ea=Object.keys(B).map(function(a){return a.toLowerCase().replace("_","-")}),C=null;function D(a){return-1!==ea.indexOf(a)?(C=a,!0):!1}if("undefined"===typeof AdguardSettings||!D(AdguardSettings.locale.toLowerCase().replace("_","-"))){var E=navigator.language.toLowerCase().replace("_","-");if(!D(E)){var F=E.indexOf("-");-1!==F&&(E=E.slice(0,F));D(E)||(C="en")}};function G(a,b,c){a=a.a(b);c&&(a=a.replace(/\{\$([^}]+)}/g,function(a,b){return null!=c&&b in c?c[b]:a}));return a};function H(a,b){return function(c){if(!c||c.isTrusted)a.call(b,c),c&&c.preventDefault()}}function I(a){var b=void 0===b?document:b;return b.getElementsByClassName(a)};var J={G:!0};function M(){throw Error("Do not instantiate directly");}M.prototype.i=null;M.prototype.getContent=function(){return this.content};M.prototype.toString=function(){return this.content};function fa(a){if(null!=a)switch(a.i){case 1:return 1;case -1:return-1;case 0:return 0}return null}function N(){M.call(this)}u(N,M);N.prototype.u=J;function O(a){return null!=a&&a.u===J?a:ha(String(String(a)).replace(ia,ja),fa(a))}function P(){M.call(this)}u(P,M);P.prototype.u={}.D;function Q(a){function b(){}b.prototype=a.prototype;return function(a,d){var c=new b;c.content=String(a);void 0!==d&&(c.i=d);return c}}var ha=Q(N);Q(P);
(function(a){function b(){}b.prototype=a.prototype;return function(a,d){if(!String(a))return"";var c=new b;c.content=String(a);void 0!==d&&(c.i=d);return c}})(N);var ka={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function ja(a){return ka[a]}var ia=/[\x00\x22\x26\x27\x3c\x3e]/g;function R(a){this.b=a;this.m=H(this.m,this);this.o=H(this.o,this);this.s=H(this.s,this);this.c=this.c.bind(this);this.f=this.f.bind(this);this.b.w.push(this.c)}f=R.prototype;f.h=function(){document.body.innerHTML='<div class="j"><div class="m"></div></div>';this.a=I("j")[0].firstElementChild;this.a.addEventListener("click",this.m)};
f.g=function(){var a=G(S,"add_site"),b=G(S,"site_input_ph"),c=G(S,"add_site");document.body.insertAdjacentHTML("beforeend",'<div class="j j-k"><div class="m m-b-n"><div class="o"></div><div class="p">'+a+'</div><form action="#"><input class="z" type="text" placeholder="'+b+'"><input class="A" type="submit" value="'+c+'"></form></div></div>');this.l=document.body.lastElementChild;this.j=I("z")[0];a=I("A")[0];I("o")[0].addEventListener("click",this.o);a.addEventListener("click",this.s)};
f.c=function(a){if(null!==a){var b=a[0];a=a[1];var c="",d=G(S,"allowed"),e=G(S,"allowed_tooltip"),m=G(S,"add"),p=G(S,"allowed_empty"),k=G(S,"silenced"),r=G(S,"silenced_tooltip"),K=G(S,"add"),L=G(S,"silenced_empty");c+='<div class="s" data-for="0"><div class="t"><div class="G-H"><div class="q">'+d+'</div><div data-tooltip="'+e+'" class="G"></div></div><div class="w"><button class="w-x">'+m+'</button></div><div class="t-u">'+p+"</div></div>";d=b.length;for(e=0;e<d;e++)c+='<div class="t"><div class="v">'+
O(b[e])+'</div><button class="y"></button></div>';c+='</div><div class="s" data-for="1"><div class="t"><div class="G-H"><div class="q">'+k+'</div><div data-tooltip="'+r+'" class="G"></div></div><div class="w"><button class="w-x">'+K+'</button></div><div class="t-u">'+L+"</div></div>";b=a.length;for(k=0;k<b;k++)c+='<div class="t"><div class="v">'+O(a[k])+'</div><button class="y"></button></div>';this.a.innerHTML=c+"</div>"}};f.o=function(){this.l.classList.remove("j-k-b-l")};
f.s=function(){var a=this.j.value;if(la.test(a))switch(this.B){case 0:w(this.b,a,!0,this.f);break;case 1:var b=this.b,c=this.f;GM_setValue(a,1);y();v(c)||c();z(b)}};f.f=function(){this.l.classList.remove("j-k-b-l");this.j.value=""};
f.m=function(a){var b=a.target;if("id"in b)switch(b.className){case "w-x":this.B=T(b);this.l.classList.add("j-k-b-l");this.j.focus();break;case "y":a=b.previousElementSibling.textContent.trim();0===T(b)?w(this.b,a,!1):(b=this.b,GM_setValue(a,0),y(),v(void 0)||(void 0)(),z(b));break;case "o":window.close()}};function T(a){a=ba(a,ma);return parseInt(a.getAttribute(U))}f.v=function(){this.h();this.g();(0,this.c)(A())};var U="data-for",ma="["+U+"]",la=/^((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}(?::[\d]{0,5})?$/;function V(){return'<div class="p">'+G(S,"userscript_name")+"</div>"}function W(a){var b=a.name;return'<li class="B-x">'+G(S,"installFrom",{startLink:'<a target="_blank" href="'+O(a.link)+'" class="B-F">',name:O(b),endLink:"</a>"})+"</li>"};function X(a){R.apply(this,arguments)}X.prototype=g(R.prototype);X.prototype.constructor=X;if(t)t(X,R);else for(var Y in R)if("prototype"!=Y)if(Object.defineProperties){var Z=Object.getOwnPropertyDescriptor(R,Y);Z&&Object.defineProperty(X,Y,Z)}else X[Y]=R[Y];X.C=R.prototype;
X.prototype.h=function(){R.prototype.h.call(this);document.body.classList.add("g-h-i");var a=V();var b='<div class="q q-b-r">'+G(S,"please_wait")+"</div>";var c='<div class="I"><div class="J"><div class="footer__links-list"><a target="_blank" href="https://adguard.com/" class="K">© AdGuard.com</a><a target="_blank" href="https://github.com/AdguardTeam/PopupBlocker" class="K">'+G(S,"homepage")+"</a></div></div></div>";var d=this.a;d.insertAdjacentHTML("afterbegin",a+b);d.insertAdjacentHTML("afterend",
c)};X.prototype.g=function(){var a=this.a;a.removeChild(a.lastElementChild);R.prototype.g.call(this)};X.prototype.c=function(a){R.prototype.c.call(this,a);a=V();this.a.insertAdjacentHTML("afterbegin",a)};
X.prototype.v=function(){var a=this;this.h();var b=setInterval(function(){"function"==typeof GM_listValues&&(clearInterval(b),clearTimeout(c),a.g(),(0,a.c)(A()))}),c=setTimeout(function(){clearInterval(b);var c=a.a;c.removeChild(c.lastElementChild);var e="",m=G(S,"noinst_subtitle"),p=G(S,"noinst_step_1"),k=G(S,"noinst_special_prog"),r=G(S,"noinst_rec"),K=G(S,"noinst_step_2"),L=G(S,"noinst_ignore_if_ag"),na=G(S,"noinst_step_3");e+='<div class="q q-b-r">'+m+'</div><div class="B"><div class="B-C">'+
p+'</div><div class="B-D">'+k+'</div><div class="B-E"><li class="B-x"><a target="_blank" href="https://adguard.com/adguard-windows/overview.html" class="B-F">AdGuard for Windows</a> '+r+'</li><li class="B-x"><a target="_blank" href="https://www.greasespot.net/" class="B-F">Greasemonkey</a></li><li class="B-x"><a target="_blank" href="https://violentmonkey.github.io/" class="B-F">Violentmonkey</a></li><li class="B-x"><a target="_blank" href="https://tampermonkey.net/" class="B-F">Tampermonkey</a></li></div><div class="B-C">'+
K+'</div><div class="B-D">'+L+'</div><div class="B-E">'+W({name:"GitHub",link:"https://github.com/AdguardTeam/PopupBlocker"})+W({name:"Greasyfork",link:"https://greasyfork.org/scripts/33396-adguard-popup-blocker"})+W({name:"OpenUserJS",link:"https://openuserjs.org/scripts/AdGuard/Adguard_Popup_Blocker"})+'</div><div class="B-C">'+na+"</div></div>";c.insertAdjacentHTML("beforeend",e)},oa)};var oa=500;var S=new function(a){this.a=a}(function(a){var b=B[C][a];b||(b=B.en[a]);return b});(new X(new function(){this.w=[]})).v();
