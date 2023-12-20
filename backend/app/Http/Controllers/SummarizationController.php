<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Exception\RequestException;
use App\Models\Summary;

class SummarizationController extends Controller
{
    public function summarize(Request $request)
    {
        $inputText = $request->input('text');

        try {
            $model = 'matakuliah/FineTuning-T5-Summarization';

            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post("https://api-inference.huggingface.co/models/$model", [
                'inputs' => [$inputText],
            ]);

            $data = $response->json();
            $modelSummary = $data[0]['generated_text'];

            return response()->json(['summary' => $modelSummary, 'id' => $summary->id]);
        } catch (RequestException $e) {
            \Log::error('Hugging Face API Request Exception: ' . $e->getMessage());

            return response()->json(['error' => 'Error calling Hugging Face API'], 500);
        } catch (\Exception $e) {
            $errorMessage = 'An unexpected error occurred: ' . $e->getMessage();
            \Log::error($errorMessage);

            return response()->json(['error' => $errorMessage], 500);
        }
    }
}
