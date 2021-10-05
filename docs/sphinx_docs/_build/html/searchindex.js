Search.setIndex({docnames:["index","modules","zenml","zenml.annotations","zenml.artifact_stores","zenml.artifacts","zenml.cli","zenml.config","zenml.core","zenml.io","zenml.materializers","zenml.metadata","zenml.orchestrators","zenml.orchestrators.airflow","zenml.orchestrators.local","zenml.pipelines","zenml.stacks","zenml.steps","zenml.utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","modules.rst","zenml.rst","zenml.annotations.rst","zenml.artifact_stores.rst","zenml.artifacts.rst","zenml.cli.rst","zenml.config.rst","zenml.core.rst","zenml.io.rst","zenml.materializers.rst","zenml.metadata.rst","zenml.orchestrators.rst","zenml.orchestrators.airflow.rst","zenml.orchestrators.local.rst","zenml.pipelines.rst","zenml.stacks.rst","zenml.steps.rst","zenml.utils.rst"],objects:{"":{zenml:[2,0,0,"-"]},"zenml.annotations":{artifact_annotations:[3,0,0,"-"],base_annotations:[3,0,0,"-"],step_annotations:[3,0,0,"-"]},"zenml.annotations.artifact_annotations":{Input:[3,1,1,""],Output:[3,1,1,""]},"zenml.annotations.artifact_annotations.Input":{VALID_TYPES:[3,2,1,""]},"zenml.annotations.artifact_annotations.Output":{VALID_TYPES:[3,2,1,""]},"zenml.annotations.base_annotations":{BaseAnnotation:[3,1,1,""],BaseAnnotationMeta:[3,1,1,""]},"zenml.annotations.base_annotations.BaseAnnotation":{VALID_TYPES:[3,2,1,""]},"zenml.annotations.step_annotations":{Step:[3,1,1,""]},"zenml.annotations.step_annotations.Step":{VALID_TYPES:[3,2,1,""]},"zenml.artifact_stores":{base_artifact_store:[4,0,0,"-"],gcp_artifact_store:[4,0,0,"-"],local_artifact_store:[4,0,0,"-"]},"zenml.artifact_stores.base_artifact_store":{BaseArtifactStore:[4,1,1,""]},"zenml.artifact_stores.base_artifact_store.BaseArtifactStore":{Config:[4,1,1,""],get_component_name_from_uri:[4,3,1,""],get_serialization_dir:[4,3,1,""],path:[4,2,1,""],resolve_uri_locally:[4,3,1,""]},"zenml.artifact_stores.base_artifact_store.BaseArtifactStore.Config":{env_prefix:[4,2,1,""]},"zenml.artifact_stores.gcp_artifact_store":{GCPArtifactStore:[4,1,1,""]},"zenml.artifact_stores.gcp_artifact_store.GCPArtifactStore":{must_be_gcs_path:[4,3,1,""],path:[4,2,1,""],uuid:[4,2,1,""]},"zenml.artifact_stores.local_artifact_store":{LocalArtifactStore:[4,1,1,""]},"zenml.artifact_stores.local_artifact_store.LocalArtifactStore":{must_be_local_path:[4,3,1,""],path:[4,2,1,""],uuid:[4,2,1,""]},"zenml.artifacts":{base_artifact:[5,0,0,"-"],data_artifact:[5,0,0,"-"],model_artifact:[5,0,0,"-"]},"zenml.artifacts.base_artifact":{BaseArtifact:[5,1,1,""]},"zenml.artifacts.base_artifact.BaseArtifact":{PROPERTIES:[5,2,1,""],TYPE_NAME:[5,2,1,""],materializers:[5,4,1,""]},"zenml.artifacts.data_artifact":{DataArtifact:[5,1,1,""]},"zenml.artifacts.data_artifact.DataArtifact":{PROPERTIES:[5,2,1,""],TYPE_NAME:[5,2,1,""]},"zenml.artifacts.model_artifact":{ModelArtifact:[5,1,1,""]},"zenml.artifacts.model_artifact.ModelArtifact":{TYPE_NAME:[5,2,1,""]},"zenml.cli":{base:[6,0,0,"-"],cli:[6,0,0,"-"],config:[6,0,0,"-"],example:[6,0,0,"-"],pipeline:[6,0,0,"-"],stack:[6,0,0,"-"],step:[6,0,0,"-"],utils:[6,0,0,"-"],version:[6,0,0,"-"]},"zenml.cli.utils":{confirmation:[6,5,1,""],declare:[6,5,1,""],echo_component_list:[6,5,1,""],error:[6,5,1,""],format_date:[6,5,1,""],format_timedelta:[6,5,1,""],notice:[6,5,1,""],parse_unknown_options:[6,5,1,""],pretty_print:[6,5,1,""],question:[6,5,1,""],title:[6,5,1,""],warning:[6,5,1,""]},"zenml.config":{constants:[7,0,0,"-"],global_config:[7,0,0,"-"]},"zenml.config.global_config":{GlobalConfig:[7,1,1,""]},"zenml.config.global_config.GlobalConfig":{analytics_opt_in:[7,2,1,""],get_serialization_dir:[7,3,1,""],get_serialization_file_name:[7,3,1,""],repo_active_stacks:[7,2,1,""],set_stack_for_repo:[7,3,1,""],user_id:[7,2,1,""]},"zenml.constants":{handle_bool_env_var:[2,5,1,""]},"zenml.core":{base_component:[8,0,0,"-"],component_factory:[8,0,0,"-"],constants:[8,0,0,"-"],git_wrapper:[8,0,0,"-"],local_service:[8,0,0,"-"],local_service_test:[8,0,0,"-"],mapping_utils:[8,0,0,"-"],repo:[8,0,0,"-"],repo_test:[8,0,0,"-"],utils:[8,0,0,"-"]},"zenml.core.base_component":{BaseComponent:[8,1,1,""]},"zenml.core.base_component.BaseComponent":{"delete":[8,3,1,""],Config:[8,1,1,""],get_serialization_dir:[8,3,1,""],get_serialization_file_name:[8,3,1,""],get_serialization_full_path:[8,3,1,""],update:[8,3,1,""],uuid:[8,2,1,""]},"zenml.core.base_component.BaseComponent.Config":{env_prefix:[8,2,1,""]},"zenml.core.component_factory":{ComponentFactory:[8,1,1,""]},"zenml.core.component_factory.ComponentFactory":{get_components:[8,3,1,""],get_single_component:[8,3,1,""],register:[8,3,1,""],register_component:[8,3,1,""]},"zenml.core.git_wrapper":{GitWrapper:[8,1,1,""]},"zenml.core.git_wrapper.GitWrapper":{add_gitignore:[8,3,1,""],check_file_committed:[8,3,1,""],check_module_clean:[8,3,1,""],checkout:[8,3,1,""],get_current_sha:[8,3,1,""],is_valid_source:[8,3,1,""],load_source_path_class:[8,3,1,""],reset:[8,3,1,""],resolve_class:[8,3,1,""],resolve_class_source:[8,3,1,""],stash:[8,3,1,""],stash_pop:[8,3,1,""]},"zenml.core.local_service":{LocalService:[8,1,1,""]},"zenml.core.local_service.LocalService":{"delete":[8,3,1,""],artifact_store_map:[8,2,1,""],artifact_stores:[8,4,1,""],delete_artifact_store:[8,3,1,""],delete_metadata_store:[8,3,1,""],delete_orchestrator:[8,3,1,""],delete_stack:[8,3,1,""],get_artifact_store:[8,3,1,""],get_metadata_store:[8,3,1,""],get_orchestrator:[8,3,1,""],get_serialization_dir:[8,3,1,""],get_serialization_file_name:[8,3,1,""],get_stack:[8,3,1,""],metadata_store_map:[8,2,1,""],metadata_stores:[8,4,1,""],orchestrator_map:[8,2,1,""],orchestrators:[8,4,1,""],register_artifact_store:[8,3,1,""],register_metadata_store:[8,3,1,""],register_orchestrator:[8,3,1,""],register_stack:[8,3,1,""],stacks:[8,2,1,""]},"zenml.core.local_service_test":{test_service_crud:[8,5,1,""]},"zenml.core.mapping_utils":{UUIDSourceTuple:[8,1,1,""],get_component_from_key:[8,5,1,""],get_components_from_store:[8,5,1,""],get_key_from_uuid:[8,5,1,""]},"zenml.core.mapping_utils.UUIDSourceTuple":{source:[8,2,1,""],uuid:[8,2,1,""]},"zenml.core.repo":{Repository:[8,1,1,""]},"zenml.core.repo.Repository":{clean:[8,3,1,""],get_active_stack:[8,3,1,""],get_active_stack_key:[8,3,1,""],get_git_wrapper:[8,3,1,""],get_pipeline_by_name:[8,3,1,""],get_pipeline_names:[8,3,1,""],get_pipelines:[8,3,1,""],get_pipelines_by_type:[8,3,1,""],get_service:[8,3,1,""],get_step_by_version:[8,3,1,""],get_step_versions:[8,3,1,""],get_step_versions_by_type:[8,3,1,""],init_repo:[8,3,1,""],set_active_stack:[8,3,1,""]},"zenml.core.utils":{define_json_config_settings_source:[8,5,1,""],generate_customise_sources:[8,5,1,""]},"zenml.enums":{ArtifactStoreTypes:[2,1,1,""],MLMetadataTypes:[2,1,1,""],OrchestratorTypes:[2,1,1,""],PipelineStatusTypes:[2,1,1,""],StackTypes:[2,1,1,""]},"zenml.enums.ArtifactStoreTypes":{base:[2,2,1,""],gcp:[2,2,1,""],local:[2,2,1,""]},"zenml.enums.MLMetadataTypes":{base:[2,2,1,""],mock:[2,2,1,""],mysql:[2,2,1,""],sqlite:[2,2,1,""]},"zenml.enums.OrchestratorTypes":{airflow:[2,2,1,""],base:[2,2,1,""],local:[2,2,1,""]},"zenml.enums.PipelineStatusTypes":{Failed:[2,2,1,""],NotStarted:[2,2,1,""],Running:[2,2,1,""],Succeeded:[2,2,1,""]},"zenml.enums.StackTypes":{base:[2,2,1,""]},"zenml.exceptions":{AlreadyExistsException:[2,6,1,""],DoesNotExistException:[2,6,1,""],EmptyDatasourceException:[2,6,1,""],GitException:[2,6,1,""],InitializationException:[2,6,1,""],PipelineNotSucceededException:[2,6,1,""]},"zenml.logger":{get_console_handler:[2,5,1,""],get_file_handler:[2,5,1,""],get_logger:[2,5,1,""],init_logging:[2,5,1,""],resolve_logging_level:[2,5,1,""],set_root_verbosity:[2,5,1,""]},"zenml.materializers":{base_materializer:[10,0,0,"-"],beam_materializer:[10,0,0,"-"],json_materializer:[10,0,0,"-"],keras_meterializer:[10,0,0,"-"],materializer_factory:[10,0,0,"-"],pandas_materializer:[10,0,0,"-"]},"zenml.materializers.base_materializer":{BaseMaterializer:[10,1,1,""],BaseMaterializerMeta:[10,1,1,""]},"zenml.materializers.base_materializer.BaseMaterializer":{TYPE_NAME:[10,2,1,""]},"zenml.materializers.beam_materializer":{BeamMaterializer:[10,1,1,""]},"zenml.materializers.beam_materializer.BeamMaterializer":{TYPE_NAME:[10,2,1,""],read_text:[10,3,1,""],write_text:[10,3,1,""]},"zenml.materializers.json_materializer":{JsonMaterializer:[10,1,1,""]},"zenml.materializers.json_materializer.JsonMaterializer":{TYPE_NAME:[10,2,1,""],read_file:[10,3,1,""],write_file:[10,3,1,""]},"zenml.materializers.keras_meterializer":{KerasMaterializer:[10,1,1,""]},"zenml.materializers.keras_meterializer.KerasMaterializer":{TYPE_NAME:[10,2,1,""],read_model:[10,3,1,""],write_model:[10,3,1,""]},"zenml.materializers.materializer_factory":{MaterializerFactory:[10,1,1,""]},"zenml.materializers.materializer_factory.MaterializerFactory":{get_types:[10,3,1,""],materializer_types:[10,2,1,""],register_type:[10,3,1,""]},"zenml.materializers.pandas_materializer":{PandasMaterializer:[10,1,1,""]},"zenml.materializers.pandas_materializer.PandasMaterializer":{TYPE_NAME:[10,2,1,""],read_dataframe:[10,3,1,""],write_dataframe:[10,3,1,""]},"zenml.metadata":{base_metadata_store:[11,0,0,"-"],mock_metadata_wrapper:[11,0,0,"-"],mysql_metadata_wrapper:[11,0,0,"-"],sqlite_metadata_wrapper:[11,0,0,"-"]},"zenml.metadata.base_metadata_store":{BaseMetadataStore:[11,1,1,""]},"zenml.metadata.base_metadata_store.BaseMetadataStore":{Config:[11,1,1,""],get_artifacts_by_component:[11,3,1,""],get_components_status:[11,3,1,""],get_pipeline_context:[11,3,1,""],get_pipeline_executions:[11,3,1,""],get_pipeline_status:[11,3,1,""],get_serialization_dir:[11,3,1,""],get_tfx_metadata_config:[11,3,1,""],store:[11,4,1,""]},"zenml.metadata.base_metadata_store.BaseMetadataStore.Config":{env_prefix:[11,2,1,""]},"zenml.metadata.mock_metadata_wrapper":{MockMetadataStore:[11,1,1,""]},"zenml.metadata.mock_metadata_wrapper.MockMetadataStore":{get_tfx_metadata_config:[11,3,1,""]},"zenml.metadata.mysql_metadata_wrapper":{MySQLMetadataStore:[11,1,1,""]},"zenml.metadata.mysql_metadata_wrapper.MySQLMetadataStore":{database:[11,2,1,""],get_tfx_metadata_config:[11,3,1,""],host:[11,2,1,""],password:[11,2,1,""],port:[11,2,1,""],username:[11,2,1,""]},"zenml.metadata.sqlite_metadata_wrapper":{SQLiteMetadataStore:[11,1,1,""]},"zenml.metadata.sqlite_metadata_wrapper.SQLiteMetadataStore":{get_tfx_metadata_config:[11,3,1,""],uri:[11,2,1,""],uri_must_be_local:[11,3,1,""]},"zenml.orchestrators":{airflow:[13,0,0,"-"],base_orchestrator:[12,0,0,"-"],local:[14,0,0,"-"]},"zenml.orchestrators.base_orchestrator":{BaseOrchestrator:[12,1,1,""]},"zenml.orchestrators.base_orchestrator.BaseOrchestrator":{Config:[12,1,1,""],get_serialization_dir:[12,3,1,""],run:[12,3,1,""]},"zenml.orchestrators.base_orchestrator.BaseOrchestrator.Config":{env_prefix:[12,2,1,""]},"zenml.orchestrators.local":{local_orchestrator:[14,0,0,"-"]},"zenml.orchestrators.local.local_orchestrator":{LocalOrchestrator:[14,1,1,""]},"zenml.orchestrators.local.local_orchestrator.LocalOrchestrator":{run:[14,3,1,""]},"zenml.pipelines":{base_pipeline:[15,0,0,"-"],pipeline_decorator:[15,0,0,"-"]},"zenml.pipelines.base_pipeline":{BasePipeline:[15,1,1,""],BasePipelineMeta:[15,1,1,""]},"zenml.pipelines.base_pipeline.BasePipeline":{INPUT_SPEC:[15,2,1,""],STEP_SPEC:[15,2,1,""],connect:[15,3,1,""],get_executable:[15,3,1,""],inputs:[15,4,1,""],run:[15,3,1,""],stack:[15,4,1,""],steps:[15,4,1,""]},"zenml.pipelines.pipeline_decorator":{pipeline:[15,5,1,""]},"zenml.stacks":{base_stack:[16,0,0,"-"],constants:[16,0,0,"-"]},"zenml.stacks.base_stack":{BaseStack:[16,1,1,""]},"zenml.stacks.base_stack.BaseStack":{Config:[16,1,1,""],artifact_store:[16,4,1,""],artifact_store_name:[16,2,1,""],metadata_store:[16,4,1,""],metadata_store_name:[16,2,1,""],orchestrator:[16,4,1,""],orchestrator_name:[16,2,1,""],stack_type:[16,2,1,""]},"zenml.stacks.base_stack.BaseStack.Config":{env_prefix:[16,2,1,""]},"zenml.steps":{base_step:[17,0,0,"-"],step_decorator:[17,0,0,"-"],utils:[17,0,0,"-"]},"zenml.steps.base_step":{BaseStep:[17,1,1,""],BaseStepMeta:[17,1,1,""]},"zenml.steps.base_step.BaseStep":{INPUT_SPEC:[17,2,1,""],OUTPUT_SPEC:[17,2,1,""],PARAM_DEFAULTS:[17,2,1,""],PARAM_SPEC:[17,2,1,""],component:[17,4,1,""],process:[17,3,1,""]},"zenml.steps.step_decorator":{step:[17,5,1,""]},"zenml.steps.utils":{generate_component:[17,5,1,""]},"zenml.utils":{analytics_utils:[18,0,0,"-"],exceptions:[18,0,0,"-"],path_utils:[18,0,0,"-"],source_utils:[18,0,0,"-"],yaml_utils:[18,0,0,"-"]},"zenml.utils.analytics_utils":{get_segment_key:[18,5,1,""],get_system_info:[18,5,1,""],parametrized:[18,5,1,""],track:[18,5,1,""],track_event:[18,5,1,""]},"zenml.utils.exceptions":{ArtifactInterfaceError:[18,6,1,""],PipelineInterfaceError:[18,6,1,""],StepInterfaceError:[18,6,1,""]},"zenml.utils.path_utils":{append_file:[18,5,1,""],copy:[18,5,1,""],copy_dir:[18,5,1,""],create_dir_if_not_exists:[18,5,1,""],create_dir_recursive_if_not_exists:[18,5,1,""],create_file_if_not_exists:[18,5,1,""],create_tarfile:[18,5,1,""],extract_tarfile:[18,5,1,""],file_exists:[18,5,1,""],find_files:[18,5,1,""],get_grandparent:[18,5,1,""],get_parent:[18,5,1,""],get_zenml_config_dir:[18,5,1,""],get_zenml_dir:[18,5,1,""],is_dir:[18,5,1,""],is_gcs_path:[18,5,1,""],is_remote:[18,5,1,""],is_root:[18,5,1,""],is_zenml_dir:[18,5,1,""],list_dir:[18,5,1,""],load_csv_header:[18,5,1,""],move:[18,5,1,""],read_file_contents:[18,5,1,""],resolve_relative_path:[18,5,1,""],rm_dir:[18,5,1,""],rm_file:[18,5,1,""],walk:[18,5,1,""],write_file_contents:[18,5,1,""]},"zenml.utils.source_utils":{create_zenml_pin:[18,5,1,""],get_absolute_path_from_module_source:[18,5,1,""],get_class_source_from_source:[18,5,1,""],get_module_source_from_class:[18,5,1,""],get_module_source_from_file_path:[18,5,1,""],get_module_source_from_source:[18,5,1,""],get_path_from_source:[18,5,1,""],get_pin_from_source:[18,5,1,""],get_relative_path_from_module_source:[18,5,1,""],is_standard_pin:[18,5,1,""],is_standard_source:[18,5,1,""],load_source_path_class:[18,5,1,""],resolve_class:[18,5,1,""],resolve_standard_source:[18,5,1,""]},"zenml.utils.yaml_utils":{is_yaml:[18,5,1,""],read_json:[18,5,1,""],read_yaml:[18,5,1,""],write_json:[18,5,1,""],write_yaml:[18,5,1,""]},zenml:{annotations:[3,0,0,"-"],artifact_stores:[4,0,0,"-"],artifacts:[5,0,0,"-"],cli:[6,0,0,"-"],config:[7,0,0,"-"],constants:[2,0,0,"-"],core:[8,0,0,"-"],enums:[2,0,0,"-"],exceptions:[2,0,0,"-"],io:[9,0,0,"-"],logger:[2,0,0,"-"],materializers:[10,0,0,"-"],metadata:[11,0,0,"-"],orchestrators:[12,0,0,"-"],pipelines:[15,0,0,"-"],stacks:[16,0,0,"-"],steps:[17,0,0,"-"],utils:[18,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","function","Python function"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:property","5":"py:function","6":"py:exception"},terms:{"1":18,"40":8,"abstract":[8,11,12,15,17],"boolean":[2,6,18],"byte":18,"case":[8,16],"class":[2,3,4,5,7,8,10,11,12,14,15,16,17,18],"default":[2,8,16,18],"do":2,"enum":[1,16],"float":3,"function":[2,8,15,17,18],"import":[8,18],"int":[3,11],"new":[8,10],"return":[2,3,4,6,8,11,15,17,18],"static":[4,8],"throw":18,"true":[7,8,10,18],"try":2,"var":2,"while":[3,5],A:[2,3,6,8,10,16,18],As:18,For:8,If:[4,8,18],In:[15,16,17],It:3,NOT:8,OR:8,The:[3,5,6,8,16,17,18],There:2,These:18,__generic_getitem:3,__get_item__:3,__str__:6,_env_fil:16,_env_file_encod:16,_init_via_getitem:3,_secrets_dir:16,abl:[15,17],about:5,abov:16,absolut:18,absolute_path:18,access:2,accord:6,action:2,activ:8,actual:18,ad:3,add:8,add_datasourc:2,add_gitignor:8,adjust:17,after:18,airflow:[2,12],airflow_compon:[2,12],airflow_dag_runn:[2,12],airflow_orchestr:[2,12],all:[2,4,5,8,17,18],allow:8,alreadi:[2,8,18],alreadyexistsexcept:2,also:[16,18],alwai:8,an:[2,4,5,6,8,16,18],analyt:[7,18],analytics_opt_in:7,analytics_util:[1,2],ani:[2,5,6,8,17,18],annot:[1,2],answer:6,append:[8,18],append_fil:18,ar:[2,3,4,5,8,11,12,16,17,18],arg:[6,8,15,17,18],argument:[16,18],artifact:[1,2,3,4,8,10,11,12,16],artifact_annot:[1,2],artifact_stor:[1,2,8,16],artifact_store_map:8,artifact_store_nam:16,artifact_uri:4,artifactinterfaceerror:18,artifactstoretyp:2,artifacttyp:5,associ:[2,8],assum:8,author:18,backend:[11,18],base:[1,2,3,4,5,7,8,10,11,12,14,15,16,17,18],base_annot:[1,2],base_artifact:[1,2,3],base_artifact_stor:[1,2,8,16],base_compon:[1,2,4,6,7,11,12],base_materi:[1,2],base_metadata_stor:[1,2,8,16],base_metadata_wrapper_test:[1,2],base_orchestr:[1,2,8,14,16],base_pipelin:[1,2],base_stack:[1,2,8],base_step:[1,2,3],baseannot:3,baseannotationmeta:3,baseartifact:[3,5],baseartifactstor:[4,8,16],basecompon:[4,6,7,8,11,12],basemateri:10,basematerializermeta:10,basemetadatastor:[8,11,16],basemodel:8,baseorchestr:[8,12,14,16],basepipelin:[11,15],basepipelinemeta:15,baseset:[8,16],basestack:[8,16],basestep:[3,17],basestepmeta:17,basic:8,beam:10,beam_materi:[1,2],beammateri:10,becom:8,been:[2,8],befor:[2,18],being:2,below:3,blob:[3,17],bool:[6,7,8,10,18],branch:8,bring:16,call:[6,8],callabl:[8,17,18],can:[3,5,16,17,18],certain:8,chang:[3,8],check:[3,8,18],check_file_commit:8,check_module_clean:8,checkout:8,citizen:11,class_:[8,18],class_sourc:[8,18],classmethod:[4,10,11,15],classnam:8,clean:8,cli:[1,2],click:6,clickexcept:6,cloud:[4,18],code:[16,18],collect:17,column:18,com:[3,17],come:18,commit:[2,8],complet:2,compon:[3,4,6,8,11,17],component_factori:[1,2],component_list:6,component_nam:11,component_statu:11,componentfactori:8,compress:18,config:[1,2,4,8,11,12,16,18],config_dir:8,config_nam:8,configur:[4,8,11,12,16],confirm:6,connect:15,consid:5,consol:2,constant:1,constructor:8,contain:18,content:1,context:11,convert:2,copi:18,copy_dir:18,core:[1,2,4,6,7,11,12,17,18],creat:[2,3,8,15,17,18],create_dir_if_not_exist:18,create_dir_recursive_if_not_exist:18,create_file_if_not_exist:18,create_tarfil:18,create_zenml_pin:18,creation:[5,15,17],crud:8,csv:18,csv_path:18,current:8,custom:[5,8],customise_sourc:8,d:6,danger:[8,18],data:[2,5,7,10],data_artifact:[1,2],dataartifact:5,databas:11,datasouc:2,datasourc:[2,3],date:6,datetim:6,dct:[10,15,17],dec:18,declar:6,decor:[15,17,18],defin:[3,6,7,8],define_json_config_settings_sourc:8,definit:[2,4,7,8,18],delet:[8,18],delete_artifact_stor:8,delete_metadata_stor:8,delete_orchestr:8,delete_stack:8,descend:16,describ:16,deseri:8,destin:18,destination_dir:18,determin:[16,18],df:10,dict:[6,7,8,11,18],dictionari:10,did:2,differ:[5,8,10],dir:[7,8,18],dir_path:18,directori:[8,18],doc:[8,18],doe:[2,18],doesnotexistexcept:2,done:2,down:18,download:4,dsl:[3,17],dt:6,due:2,dynam:8,e:[8,16,18],each:[5,8],echo:6,echo_component_list:6,either:8,els:[8,18],emptydatasourceexcept:2,ensur:11,entir:8,env:[2,16],env_prefix:[4,8,11,12,16],env_set:[8,16],environ:16,error:[6,18],essenti:8,even:8,event:18,everi:[4,5,8],everyth:8,exampl:[1,2],except:[1,8],exclud:18,exclude_funct:18,execut:11,executor:8,exist:[2,8,18],experiment:[3,17],extend:[3,17],extern:8,extract_tarfil:18,factori:[8,10],fail:2,fals:[2,3,8,18],featur:[5,15,17],fetch:2,few:[3,5],field:16,file:[2,6,8,16,18],file_cont:18,file_dir:8,file_exist:18,file_nam:8,file_path:[8,18],filenam:[10,18],filenotfounderror:18,filesystem:18,filter:8,find:[8,11,18],find_fil:18,first:11,follow:[8,16,18],format:[6,18],format_d:6,format_timedelta:6,found:[3,17,18],fresh:8,from:[2,4,5,6,8,10,16,18],full:[8,18],g:[8,16,18],gc:[4,18],gcp:2,gcp_artifact_stor:[1,2],gcpartifactstor:4,gcs_plugin:[1,2],gener:[3,8,11],generate_compon:17,generate_customise_sourc:8,genericmeta:3,generictyp:3,get:[2,4,7,8,10,11,12,18],get_absolute_path_from_module_sourc:18,get_active_stack:8,get_active_stack_kei:8,get_artifact_stor:8,get_artifacts_by_compon:11,get_class_source_from_sourc:18,get_compon:8,get_component_from_kei:8,get_component_name_from_uri:4,get_components_from_stor:8,get_components_statu:11,get_console_handl:2,get_current_sha:8,get_execut:15,get_file_handl:2,get_git_wrapp:8,get_grandpar:18,get_key_from_uuid:8,get_logg:2,get_metadata_stor:8,get_module_source_from_class:18,get_module_source_from_file_path:18,get_module_source_from_sourc:18,get_orchestr:8,get_par:18,get_path_from_sourc:18,get_pin_from_sourc:18,get_pipelin:8,get_pipeline_by_nam:8,get_pipeline_context:11,get_pipeline_execut:11,get_pipeline_nam:8,get_pipeline_statu:11,get_pipelines_by_typ:8,get_relative_path_from_module_sourc:18,get_segment_kei:18,get_serialization_dir:[4,7,8,11,12],get_serialization_file_nam:[7,8],get_serialization_full_path:8,get_servic:8,get_single_compon:8,get_stack:8,get_step_by_vers:8,get_step_vers:8,get_step_versions_by_typ:8,get_system_info:18,get_tfx_metadata_config:11,get_typ:10,get_zenml_config_dir:18,get_zenml_dir:18,getcwd:18,git:[2,8,18],git_wrapp:[1,2],gitexcept:2,github:[3,17],gitignor:8,gitwrapp:8,given:[5,8,15],global:[6,7,8],global_config:[1,2],globalconfig:7,go:8,googl:[4,18],grandpar:18,gz:18,h:6,ha:[2,8,18],handl:8,handle_bool_env_var:2,handler:2,happen:16,head:8,header:[10,18],heavili:17,helpmanu:8,here:[3,8,17],hex:8,hold:5,home:18,hook:11,host:11,howev:8,http:[3,8,17],i:18,id:7,implement:[3,5,17],improv:3,includ:[5,8],index:0,indic:10,infer:4,info:18,inform:18,inherit:[5,17],init:2,init_log:2,init_repo:8,initi:[2,8,16],initializationexcept:[2,18],inner:[8,15,17],input:[3,6,15,18],input_spec:[15,17],insid:8,inspir:[3,17],instal:7,integr:8,interact:[3,8],intern:[8,18],io:[1,2,8],is_dir:18,is_gcs_path:18,is_remot:18,is_root:18,is_standard_pin:18,is_standard_sourc:18,is_valid_sourc:8,is_yaml:18,is_zenml_dir:18,item:8,iter:18,its:8,itself:8,json:[8,10,18],json_config_settings_sourc:8,json_materi:[1,2],jsonmateri:10,just:8,keep:[8,10],kei:[8,10,18],kera:10,keras_meteri:[1,2],kerasmateri:10,kwarg:[6,8,12,15,17,18],layer:18,len:8,level:2,like:18,list:[3,6,8,18],list_dir:18,load:[8,16,18],load_csv_head:18,load_source_path_class:[8,18],local:[2,4,6,8,11,12,18],local_artifact_stor:[1,2],local_orchestr:[2,12],local_servic:[1,2],local_service_test:[1,2],localartifactstor:4,localorchestr:14,localservic:8,log:2,logger:1,logger_nam:2,logic:[8,17],m:6,machin:8,main:[2,3,8],make:2,manipul:6,map:8,mapping_util:[1,2],master:[3,17],match:18,materi:[1,2,5],materializer_factori:[1,2,5],materializer_typ:10,materializerfactori:[5,10],mean:16,medium:5,merg:3,messag:2,meta:[17,18],metaclass:3,metadata:[1,2,8,16,18],metadata_stor:[8,16],metadata_store_map:8,metadata_store_nam:16,metadata_store_pb2:5,method:[3,6,8,17],might:2,ml:2,ml_metadata:5,mlmd_artifact_typ:5,mlmetadatatyp:2,mock:[2,11],mock_metadata_wrapp:[1,2],mockmetadatastor:11,mod:18,model:[8,10],model_artifact:[1,2],modelartifact:5,modul:[0,1],module_sourc:18,more:3,move:18,multipl:16,must_be_gcs_path:4,must_be_local_path:4,myrepo:18,mysql:[2,11],mysql_metadata_wrapp:[1,2],mysqlmetadatastor:11,name:[2,4,5,8,10,11,15,17,18],need:5,nest:[15,17],none:[2,3,4,5,7,8,10,11,12,14,15,16,17,18],normal:2,note:8,notic:6,notstart:2,now:8,obj:6,object:[2,3,4,6,8,10,11,12,15,16,17,18],object_typ:3,occur:2,one:8,ones:8,onli:[8,18],only_file_nam:18,oper:[8,18],opt:[7,18],option:[2,4,5,6,7,8,15,16,17,18],orchestr:[1,2,8,16],orchestrator_map:8,orchestrator_nam:16,orchestratortyp:2,order:[3,15,16,17],origin:17,os:18,other:[8,17],otherwis:8,out:18,outer:[15,17],output:[3,18],output_dir:18,output_filenam:18,output_spec:17,overrid:4,overwrit:18,packag:[0,1],page:0,panda:10,pandas_materi:[1,2],pandasmateri:10,paradigm:[3,17],param:[3,8],param_default:17,param_spec:17,paramet:[2,4,5,6,8,10,11,15,17,18],parametr:18,parent:18,pars:6,parse_unknown_opt:6,pass:[6,8,16],password:11,path:[4,8,11,12,16,18],path_util:[1,2],pathlib:16,pattern:18,persist:8,pin:[8,18],pipelin:[1,2,5,8,10,11,16,17],pipeline_arg:14,pipeline_decor:[1,2],pipeline_nam:8,pipelineinterfaceerror:18,pipelinenotsucceededexcept:2,pipelinestatustyp:2,place:8,pleas:2,png:18,point:[4,8,18],pop:8,port:11,potenti:18,predic:18,present:2,pretti:6,pretty_print:6,primarili:8,primit:3,print:6,prioriti:[8,16],problem:2,process:17,project:8,prompt:6,properti:[5,8,11,15,16,17],propertytyp:5,propos:17,proto:5,provid:8,py:[3,17,18],pydant:[8,16],python:[8,18],qualifi:18,queri:[8,11],question:6,rais:[2,6,18],read:[8,10,18],read_datafram:10,read_fil:10,read_file_cont:18,read_head:10,read_json:18,read_model:10,read_text:10,read_yaml:18,realiz:10,reason:2,recurs:18,refer:[8,18],regist:[8,10],register_artifact_stor:8,register_compon:8,register_metadata_stor:8,register_orchestr:8,register_stack:8,register_typ:10,registri:8,regular:18,rel:[8,18],relative_path:18,releas:18,relev:[2,8],remot:18,renam:18,repo:[1,2,18],repo_active_stack:7,repo_path:[7,8],repo_test:[1,2],repositori:[8,18],repres:8,represent:18,request:18,requestexcept:18,requir:[2,16,17],reset:8,resolut:2,resolv:[2,4,8,18],resolve_class:[8,18],resolve_class_sourc:8,resolve_logging_level:2,resolve_relative_path:18,resolve_standard_sourc:18,resolve_uri_loc:4,resourc:2,resource_typ:2,respons:[6,8],result:8,rm_dir:18,rm_file:18,root:[2,18],run:[2,5,12,14,15,16],runner:18,s:[6,8],same:[2,3,16,18],sane:8,scope:8,search:0,segment:18,select:16,serial:8,serializ:18,serv:3,servic:8,set:[2,4,8,11,12,16],set_active_stack:8,set_root_verbos:2,set_stack_for_repo:7,sha:[8,18],sha_or_branch:8,shard_name_templ:10,should:4,singl:[3,8],so:8,some:18,someth:8,sourc:[8,18],source_dir:18,source_path:[8,18],source_tar:18,source_util:[1,2],specif:[2,6],specifi:[8,16],sphinx_doc:18,split:5,split_nam:5,sqlite:[2,11],sqlite_metadata_wrapp:[1,2],sqlitemetadatastor:11,stack:[1,2,8,15],stack_kei:[7,8],stack_typ:16,stacktyp:[2,16],standard:18,start:18,stash:8,stash_pop:8,state:8,statu:[2,11],stem:18,step:[1,2,3,8,10,15,18],step_annot:[1,2],step_decor:[1,2],step_spec:15,step_typ:8,stepinterfaceerror:18,still:8,storag:[4,18],store:[2,4,8,11,12,16],store_nam:8,str:[2,3,4,6,7,8,10,11,15,16,17,18],string:[5,6,8,18],structur:[15,17],style:6,subclass:8,submodul:1,subpackag:1,succeed:2,successfulli:2,support:2,sure:2,symbol:18,system:[2,8,18],t:3,tabl:8,take:[4,8,18],tar:18,td:6,team:[3,17],tensorflow:[3,17],test:8,test_service_crud:8,text:[6,8,10,11],tfx:[3,5,11,17],thei:[7,8],therefor:[2,8],thi:[2,4,5,8,16,17,18],thing:[5,8],through:[8,16],throughout:5,time:18,timedelta:6,titl:6,todo:5,togeth:16,top:3,track:[5,8,10,11,18],track_ev:18,trainer:18,trifecta:16,tupl:18,type:[2,3,5,6,8,10,11,15,17,18],type_:10,type_filt:8,type_nam:[5,10],unchang:8,uncompress:18,under:[5,18],union:[8,16,18],uniqu:[5,7,8],unknown:6,untar:18,until:18,updat:8,upon:5,uri:[4,11],uri_must_be_loc:11,us:[2,3,8,10,16,18],usag:8,user:[6,7,18],user_id:7,usernam:11,usual:[6,18],util:[1,2,3],uuid:[4,7,8,11,12,14],uuidsourcetupl:8,v:[4,11],valid:[4,8,11,18],valid_typ:3,valu:[2,16,18],variabl:[2,3,16],variou:8,verbos:2,version:[1,2,8,17,18],via:16,wai:16,walk:18,want:[6,8],warn:6,we:8,well:3,whatev:18,when:[2,6],where:[4,8,11,12,16,18],whether:[7,8,18],which:[3,5,8,10,15,16,17],within:[4,8,10,18],without:[2,8],work:[15,17,18],wrapper:8,write:[5,10,18],write_datafram:10,write_fil:10,write_file_cont:18,write_json:18,write_model:10,write_text:10,write_yaml:18,y:6,yaml:[16,18],yaml_util:[1,2],ye:8,yet:2,yield:18,you:[2,6,16],your:5,zenml_0:18,zenml_:8,zenml_artifact_store_:4,zenml_metadata_store_:11,zenml_orchestrator_:12,zenml_pipelin:[12,14],zenml_stack_:16,zenml_var:16,zip:18},titles:["Welcome to ZenML\u2019s documentation!","zenml","zenml package","zenml.annotations package","zenml.artifact_stores package","zenml.artifacts package","zenml.cli package","zenml.config package","zenml.core package","zenml.io package","zenml.materializers package","zenml.metadata package","zenml.orchestrators package","zenml.orchestrators.airflow package","zenml.orchestrators.local package","zenml.pipelines package","zenml.stacks package","zenml.steps package","zenml.utils package"],titleterms:{"enum":2,airflow:13,airflow_compon:13,airflow_dag_runn:13,airflow_orchestr:13,analytics_util:18,annot:3,artifact:5,artifact_annot:3,artifact_stor:4,base:6,base_annot:3,base_artifact:5,base_artifact_stor:4,base_compon:8,base_materi:10,base_metadata_stor:11,base_metadata_wrapper_test:11,base_orchestr:12,base_pipelin:15,base_stack:16,base_step:17,beam_materi:10,cli:6,component_factori:8,config:[6,7],constant:[2,7,8,16],content:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],core:8,data_artifact:5,document:0,exampl:6,except:[2,18],gcp_artifact_stor:4,gcs_plugin:9,git_wrapp:8,global_config:7,indic:0,io:9,json_materi:10,keras_meteri:10,local:14,local_artifact_stor:4,local_orchestr:14,local_servic:8,local_service_test:8,logger:2,mapping_util:8,materi:10,materializer_factori:10,metadata:11,mock_metadata_wrapp:11,model_artifact:5,modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],mysql_metadata_wrapp:11,orchestr:[12,13,14],packag:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],pandas_materi:10,path_util:18,pipelin:[6,15],pipeline_decor:15,repo:8,repo_test:8,s:0,source_util:18,sqlite_metadata_wrapp:11,stack:[6,16],step:[6,17],step_annot:3,step_decor:17,submodul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],subpackag:[2,12],tabl:0,util:[6,8,17,18],version:6,welcom:0,yaml_util:18,zenml:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]}})